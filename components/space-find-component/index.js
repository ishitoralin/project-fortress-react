import { useEffect, useRef, useState } from 'react';

import { json } from 'd3';
import { geoPath, geoMercator } from 'd3-geo';
import { select } from 'd3-selection';
// import * as topojson from 'topojson-client';
import * as topojson from 'topojson';
import data from '@/assets/taiwangeo.json';
import styles from './space-find-component.module.css';
export default function SpaceFindComponent() {
  const [firstRender, setFirstRender] = useState(false);
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  function renderMap2(center = [123, 24], scale = 5000) {
    // const svg = select(myRef.current);
    // console.log(data);
    // svg.selectAll('.country').data(data.features)
    const { width } = containerRef.current.getBoundingClientRect();
    // console.log(width);
    // console.log(data);
    const countries = topojson.feature(data, data.objects.layer1);
    // console.log(countries);

    // const projection = geoMercator().center().scale(5000);
    const projection = geoMercator().center(center).scale(scale);
    /* const projection = geoMercator()
        .center([123, 24])
        .fitSize([(width * 1.9) / 2, (width * 1.8) / 2], countries); 
        //原始版
        */
    console.log((width * 1.9) / 3);
    // const projection = geoMercator()
    //   .center([124, 24.097239])
    //   .fitSize([width / 3, width / 3], countries);

    // const projection = geoMercator().center([121.5, 25.03]).scale(30000);
    const geoGenerator = geoPath().projection(projection);
    const container = select(containerRef.current); //先選中外層DIV
    const svg = select(svgRef.current); //先選中外層DIV
    svg.selectAll('*').remove();
    svg
      .attr('width', width / 3)
      .attr('height', width / 2.5) //強制定義寬高
      .attr('viewbox', `0 0 ${width / 3} ${width / 2.5}`)
      .append('g')
      .selectAll('path') //強制選中svg的內側()雖然還沒有元件被建立
      .data(countries.features) //綁定資料
      .join('path') //目前還在內層selectALL當中 iterate元素們並加上path
      .attr('class', 'country') //加上class country
      .attr('d', (feature) => {
        // console.log(feature);
        // console.log(geoGenerator(feature));

        return geoGenerator(feature);
      }) //在每個個別的元素上加上自己的d和路徑數據
      .style('fill', 'red') //填滿紅色
      .style('stroke', 'blue') //填滿藍色
      .on('click', function (e) {
        // console.log(e);
        svg.selectAll('path').style('fill', 'red').style('stroke', 'blue');
        select(this)
          .style('fill', 'black')
          .style('stroke', 'white')
          .select(function (d) {
            // console.log(d);
          });
      })
      .on('resize', function (e) {
        // console.log('resize');
      });

    setFirstRender(false);
  }
  useEffect(async () => {
    function renderMap() {
      if (firstRender) {
        // const svg = select(myRef.current);
        // console.log(data);
        // svg.selectAll('.country').data(data.features)
        const { width } = containerRef.current.getBoundingClientRect();
        // console.log(width);
        // console.log(data);
        const countries = topojson.feature(data, data.objects.layer1);
        // console.log(countries);

        const projection = geoMercator().center([123, 24]).scale(5000);
        // const projection = geoMercator()
        //   .center([121.5173399, 25.0475613])
        //   .scale(50000);
        /* const projection = geoMercator()
          .center([123, 24])
          .fitSize([(width * 1.9) / 2, (width * 1.8) / 2], countries); 
          //原始版
          */
        console.log((width * 1.9) / 3);
        // const projection = geoMercator()
        //   .center([124, 24.097239])
        //   .fitSize([width / 3, width / 3], countries);

        // const projection = geoMercator().center([121.5, 25.03]).scale(30000);
        const geoGenerator = geoPath().projection(projection);
        const container = select(containerRef.current); //先選中外層DIV
        const svg = select(svgRef.current); //先選中外層DIV
        svg.selectAll('*').remove();
        svg
          .attr('width', width / 3)
          .attr('height', width / 2.5) //強制定義寬高
          .attr('viewbox', `0 0 ${width / 3} ${width / 2.5}`)
          .append('g')
          .selectAll('path') //強制選中svg的內側()雖然還沒有元件被建立
          .data(countries.features) //綁定資料
          .join('path') //目前還在內層selectALL當中 iterate元素們並加上path
          .attr('class', 'country') //加上class country
          .attr('d', (feature) => {
            // console.log(feature);
            // console.log(geoGenerator(feature));

            return geoGenerator(feature);
          }) //在每個個別的元素上加上自己的d和路徑數據
          .style('fill', 'red') //填滿紅色
          .style('stroke', 'blue') //填滿藍色
          .on('click', function (e) {
            // console.log(e);
            svg.selectAll('path').style('fill', 'red').style('stroke', 'blue');
            select(this)
              .style('fill', 'black')
              .style('stroke', 'white')
              .select(function (d) {
                // console.log(d);
              });
          })
          .on('resize', function (e) {
            // console.log('resize');
          });

        setFirstRender(false);
      }
    }

    renderMap();
    renderMap2();

    window.addEventListener('resize', renderMap);
    return () => {
      window.removeEventListener('resize', renderMap);
    };
  }, []);

  return (
    <>
      <div className={`${styles['canvas-container']}`} ref={containerRef}>
        <svg className={`${styles['svgClass']}`} ref={svgRef}></svg>
      </div>
    </>
  );
}
