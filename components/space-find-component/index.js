import { useEffect, useRef, useState } from 'react';
import { mainContentStyle } from '@/styles/lesson-style/lesson-index';
import { pointer } from 'd3';
import { geoPath, geoMercator } from 'd3-geo';
import { select } from 'd3-selection';
import { AnimatePresence, motion } from 'framer-motion';
// import * as topojson from 'topojson-client';
import * as topojson from 'topojson';
import data from '@/assets/taiwangeo.json';
import styles from './space-find-component.module.css';
import GymTypeSelect from './gym-type-select';
import axios from 'axios';
import { Box, Paper } from '@mui/material';
export default function SpaceFindComponent() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [area, setArea] = useState(null);
  const [gymData, setGymData] = useState([]);
  const [gymType, setgymType] = useState('棒球場');
  const searchGymData = async () => {
    setGymData(() => {
      return [];
    });

    try {
      console.time('start');
      let city;
      if (area?.properties?.COUNTYNAME) {
        city = area.properties.COUNTYNAME.replace('台', '臺');
      }
      const res = await axios.get(
        `https://iplay.sa.gov.tw/api/GymSearchAllList?$format=application/json;odata.metadata=none&City=${city}&GymType=${gymType}`
      );
      setGymData((prev) => res.data);
      console.timeEnd('start');
    } catch (error) {
      console.log(error);
    }
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    hide: { opacity: 0 },
  };
  const renderMap = () => {
    let countyname = area?.properties?.COUNTYNAME || '';
    // const svg = select(myRef.current);
    // console.log(data);
    // svg.selectAll('.country').data(data.features)
    const { width, height } = containerRef.current.getBoundingClientRect();
    // console.log(width);
    // console.log(data);
    const countries = topojson.feature(data, data.objects.layer1);
    // console.log(countries);

    // const projection = geoMercator().center([123, 24]).scale(5000);
    // const projection = geoMercator()
    //   .center([121.5173399, 25.0475613])
    //   .scale(50000);

    const projection = geoMercator()
      .center([123, 24])
      .fitSize([(width * 1.6) / 2, (width * 1.5) / 2], countries);
    //原始版

    // const projection = geoMercator()
    //   .center([124, 24.097239])
    //   .fitSize([width / 3, width / 3], countries);

    // const projection = geoMercator().center([121.5, 25.03]).scale(30000);
    const geoGenerator = geoPath().projection(projection);
    //const container = select(containerRef.current); 先選中外層DIV

    const svg = select(svgRef.current); //先選中svg
    svg.on('click', function (e, d) {
      setArea(null);
      setGymData([]);
      countyname = '';
      select(this)
        .select('g')
        .selectAll('path')
        .transition()
        .attr('transform', 'translate(0 , 0)')
        .style('fill', 'black')
        .style('stroke', 'white');
    });
    svg
      .attr('width', (width * 1.6) / 2)
      .attr('height', (width * 1.5) / 2) //強制定義寬高
      .attr('viewbox', `0 0 ${(width * 1.6) / 2} ${(width * 1.5) / 2}`)
      .append('g')
      .selectAll('path') //強制選中svg的內側()雖然還沒有元件被建立
      .data(countries.features) //綁定資料
      .join('path') //目前還在內層selectALL當中 iterate元素們並加上path
      .attr('class', 'country') //加上class country
      .attr('d', (feature) => {
        return geoGenerator(feature);
      }) //在每個個別的元素上加上自己的d和路徑數據
      .style('fill', 'black') //填滿黑色
      .style('stroke', 'white') //填滿白色
      .style('cursor', 'pointer') //游標提示
      .on('click', function (e, d) {
        e.stopPropagation();
        console.log(d.properties.COUNTYNAME, area?.properties?.COUNTYNAME);
        if (d.properties.COUNTYNAME !== countyname) {
          //TODO換成真的找資料

          searchGymData();
          //TODO END
          setArea({ ...d });
          countyname = d.properties.COUNTYNAME;
          svg.selectAll('path').style('fill', 'black').style('stroke', 'white');
          select(this).style('fill', 'red').style('stroke', 'red');
          svg
            .transition()
            .selectAll('path')
            .attr(
              'transform',
              `translate(-${(pointer(e)[0] * 3) / 2 + pointer(e)[0]} , -${
                (pointer(e)[1] * 3) / 2
              }) scale(3)`
            );
        } else {
          setArea(null);
          setGymData([]);
          countyname = '';
          svg.selectAll('path').style('fill', 'black').style('stroke', 'white');
          svg
            .select('g')
            .selectAll('path')
            .transition()
            .attr('transform', 'translate(0 , 0)');
        }
      });
  };
  const cleanMap = () => {
    const svg = select(svgRef.current);
    svg.selectAll('*').remove();
  };
  useEffect(() => {
    renderMap();
    // searchGymData();

    window.addEventListener('resize', cleanMap);
    window.addEventListener('resize', renderMap);
    return () => {
      cleanMap();
      window.removeEventListener('resize', cleanMap);
      window.removeEventListener('resize', renderMap);
    };
  }, []);
  useEffect(() => {
    cleanMap();
    renderMap();
  }, [gymType]);
  useEffect(() => {
    console.log(area?.properties?.COUNTYNAME);
  });
  return (
    <Box {...mainContentStyle}>
      <div style={{ position: 'absolute', zIndex: 10, pointerEvents: 'none' }}>
        <div>
          {'area:' + JSON.stringify(area?.properties?.COUNTYNAME) + '\n'}
        </div>
        <div>
          {'area:' + area?.properties?.COUNTYNAME?.replace('台', '臺') + '\n'}
        </div>
        <div>{'gymType:' + JSON.stringify(gymType)}</div>
        <pre>
          {'gymData長度:' +
            gymData.length +
            '\n' +
            'gymData:' +
            JSON.stringify(gymData, null, 4) +
            '\n'}
        </pre>
      </div>
      <div className={`${styles['section-container']}`}>
        <div className={`${styles['content-container']}`}>
          <GymTypeSelect value={gymType} setgymType={setgymType} />
          <div className={`${styles['map-container']}`} ref={containerRef}>
            <svg className={`${styles['map-svg']}`} ref={svgRef}></svg>
          </div>
          {gymData.length > 0 ? (
            <motion.div
              className={`${styles['info']}`}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hide"
            >
              {gymData.map((el) => {
                const { GymID, Name, OperationTel, Address, Photo1, LatLng } =
                  el;
                return (
                  <Paper
                    component={motion.div}
                    className={`${styles['info-card']}`}
                    key={GymID}
                    variants={item}
                  >
                    <Box className={`${styles['img-wrapper']}`}>
                      <img src={Photo1} alt="場館圖片" />
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                      名稱:
                      <Box>{Name}</Box>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                      電話:<Box>{OperationTel}</Box>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                      地址:<Box>{Address}</Box>
                    </Box>
                  </Paper>
                );
              })}
            </motion.div>
          ) : undefined}
        </div>
      </div>
    </Box>
  );
}
