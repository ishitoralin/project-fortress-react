import CUIButton from '../customUI/cui-button';
import CUIDatePicker from '../customUI/cui-date-picker';
import CUISelect from '../customUI/cui-select';
import CancelIcon from '@mui/icons-material/Cancel';
import CUISearch from '../customUI/cui-search';
import { Grid, Paper, Box, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useDebounceHH } from '../customHook/useDebounce';

// >>> for plot
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// <<< for plot

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
}));

const myBorderWidth = '2px';
const myBorderColor = 'black';
const SUIScheduleItem = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  //   height: '1.5rem',
  // backgroundColor: 'lightgreen',
  padding: '5px',
  borderRadius: '30px',
  borderWidth: `${myBorderWidth}`,
  borderColor: `${myBorderColor}`,
  borderStyle: 'solid',
}));

// {
// plotType,
// plotDates, //{ start: null, end: null }
// setPlotDates,
// setPlotExeList,
// bodyParts,
// exerciseList
// plotList,
// plotDatas
// }

const PlotPage = ({ bodyParts, exerciseInit }) => {
  const dateDefault = { start: null, end: null };
  const maxPlotNumber = 5;
  const [plotDates, setPlotDates] = useState(dateDefault);
  const [plotBodyPart, setPlotBodyPart] = useState([exerciseInit]); //=== for plot exercise body-part filter
  const [plotKeyword, setPlotKeyword] = useState(''); //=== for plot search keyword
  const [plotExeSelected, setPlotExeSelected] = useState(''); //=== for selected option
  const [plotExeTypes, setPlotExeTypes] = useState([]); //=== exercise select options for plot
  const [plotExeList, setPlotExeList] = useState([]); //=== list of exercise for plot
  const [plotting, setPlotting] = useState(false);
  const [plotData, setPlotData] = useState([]);

  // >>> plot filter by body part
  useDebounceHH(() => {
    // === for selection and search
    fetch(
      `${process.env.SEAN_API_SERVER}/exe-type/exercise-type/body-part/${plotBodyPart[0].key}/${plotKeyword}`
    )
      .then((r) => r.json())
      .then((data) => {
        setPlotExeTypes(
          data.data.filter(
            (dataObj) =>
              !plotExeList.some((listObj) => listObj.sid === dataObj.sid)
          )
        );
      });
  }, [plotBodyPart, plotKeyword, plotExeList]);
  // <<< plot filter by body part

  // ================================================================
  // >>> filter exercise by body part
  const handleBodypartSelection = (e) => {
    setPlotBodyPart(bodyParts.filter((x) => x.value === e.target.value));
    setPlotExeSelected('');
  };

  const handleExeTypeSelection = (e) => {
    const selectExeType = e.target.value;

    setPlotExeSelected(selectExeType);
  };

  const handleAdd = () => {
    const selectItem = plotExeTypes.filter(
      (e) => e.exercise_name === plotExeSelected
    );
    // console.log(selectItem);
    setPlotExeList((prev) => {
      if (prev.some((obj) => obj.exercise_name === plotExeSelected)) {
        return prev;
      } else {
        return [...prev, selectItem[0]];
      }
    });
    setPlotExeSelected('');
  };

  const handlePlotListDelete = (item) => {
    setPlotExeList((prev) => prev.filter((e) => e.sid !== item.sid));
    setPlotExeSelected('');
  };
  // <<< filter exercise by body part
  // >>> search by keyword
  // TODO: on composition end
  const handleSearch = (e) => {
    setPlotKeyword(e.target.value);
  };
  // <<< search by keyword

  const handlePlot = () => {
    // TODO: unfinished
    setPlotData([]);
    plotExeList.map((item) => {
      fetch(
        `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record-plot/${plotDates.start}/${plotDates.end}/${item.sid}`
      )
        .then((r) => r.json())
        .then((data) => {
          // add volumn
          // data.data = data.data.map((e) => ({
          //   ...e,
          //   volumn: Number(e.quantity * e.reps * e.sets).toFixed(1),
          // }));
          // console.log(volumn);
          setPlotData((prev) => [...prev, data.data]);
        });
    });
  };
  // console.log(plotData);
  const handleClean = () => {
    setPlotDates(dateDefault);
    setPlotExeList([]);
  };
  // ================================================================

  // >>> for chartjs test
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '訓練記錄',
      },
    },
  };
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const plotBorderColor = [
    'rgb(255, 99, 132)',
    'rgb(53, 162, 235)',
    'rgb(53, 162, 235)', //TODO: add new color
    'rgb(53, 162, 235)', //TODO: add new color
    'rgb(53, 162, 235)', //TODO: add new color
  ];
  const plotBackgroundColor = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(53, 162, 235, 0.5)',
    'rgba(53, 162, 235, 0.5)', //TODO: add new color
    'rgba(53, 162, 235, 0.5)', //TODO: add new color
    'rgba(53, 162, 235, 0.5)', //TODO: add new color
  ];

  const generateRandomData = () => {
    return labels.map(() => Math.random() * 2000 - 1000); // Generates random numbers between -1000 and 1000
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: generateRandomData(),
        borderColor: plotBorderColor[0],
        backgroundColor: plotBackgroundColor[0],
      },
      {
        label: 'Dataset 2',
        data: generateRandomData(),
        borderColor: plotBorderColor[1],
        backgroundColor: plotBackgroundColor[1],
      },
    ],
  };
  //   <<< for chartjs test

  return (
    <div
      id="page-3"
      style={{
        paddingLeft: '200px',
        paddingRight: '200px',
        paddingTop: '50px',
      }}
    >
      <Grid container justifyContent="center" sx={{ width: '100%' }}>
        <Grid
          item
          lg={3}
          sm={12}
          sx={{
            // outline: '3px solid blue',
            p: 2,
          }}
        >
          <Section>
            <Box
              sx={{
                top: 0,
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  height: '100px',
                  mb: 2,
                  // outline: '3px solid blue',
                }}
              >
                <Box sx={{ width: '60%', mr: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                    }}
                  >
                    <CUIDatePicker // maxDate = end-date/ end-date - 1
                      sx={{ width: '100%' }}
                      label={'開始日期'}
                      format={'YYYY-MM-DD'}
                      //   disabled={editing}
                      // defaultValue={today}
                      value={plotDates.start || undefined}
                      maxDate={plotDates.end}
                      onChange={(e) => {
                        setPlotDates((prev) => ({ ...prev, start: e }));
                        // console.log(plotDates);
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <CUIDatePicker // minDate = start-date/ start-date + 1
                      sx={{ width: '100%' }}
                      label={'結束日期'}
                      format={'YYYY-MM-DD'}
                      //   disabled={editing}
                      // defaultValue={today}
                      value={plotDates.end || undefined}
                      minDate={plotDates.start}
                      onChange={(e) => {
                        setPlotDates((prev) => ({ ...prev, end: e }));
                        // console.log(plotDates);
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    // width: '40%',
                    // mt: 5,
                    height: '100%',
                    // mt: 2,
                    // outline: '3px solid blue',
                  }}
                >
                  {/* {console.log(plotDates.start, plotDates.end)} */}
                  <CUIButton
                    sx={{ width: '100%' }}
                    disabled={
                      !plotDates.start ||
                      !plotDates.end ||
                      plotExeList.length === 0
                    }
                    onClick={() => handlePlot()}
                  >
                    繪製
                  </CUIButton>
                  {/* TODO: enable when ploted */}
                  <CUIButton color={'fortress'} sx={{ width: '100%' }} disabled>
                    輸出PDF
                  </CUIButton>
                </Box>
              </Box>
              {/* <CUIDatePicker sx={{ width: '90%' }} label={'start date'} />
              <CUIDatePicker sx={{ width: '90%' }} label={'end date'} /> */}
              <CUISelect
                sx={{ width: '100%' }}
                label="部位分類"
                defaultValue={bodyParts[0].value}
                options={bodyParts}
                onChange={(e) => {
                  handleBodypartSelection(e);
                }}
              />
              <CUISearch
                sx={{ width: '100%' }}
                label="搜尋運動類型"
                placeholder="請輸入關鍵字"
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
              <CUISelect
                sx={{ width: '100%' }}
                label={`${plotBodyPart[0].value}運動類型(${
                  plotExeTypes?.length || '0'
                }):`}
                options={
                  plotExeTypes.length > 0
                    ? plotExeTypes.map((e) => ({
                        key: e.sid,
                        value: e.exercise_name,
                      }))
                    : [{ key: 0, value: '無' }]
                }
                value={plotExeSelected}
                onChange={(e) => {
                  handleExeTypeSelection(e);
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                {plotExeList.length >= maxPlotNumber && (
                  <Box
                    sx={{
                      color: 'red',
                      width: '60%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    最大繪圖上限: {maxPlotNumber}
                  </Box>
                )}
                <Box sx={{ width: '40%' }}>
                  <CUIButton
                    color={'fortress'}
                    sx={{ width: '100%', my: 2 }}
                    onClick={() => {
                      handleAdd();
                    }}
                    disabled={
                      !plotExeSelected || plotExeList.length >= maxPlotNumber
                    }
                  >
                    加入
                  </CUIButton>
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: '100%', mt: 3 }}>
              {plotExeList.map((ele, i) => {
                return (
                  <SUIScheduleItem sx={{ width: '100%', my: 1 }} key={ele.sid}>
                    <Box sx={{ width: '88%', textAlign: 'center' }}>
                      {ele.exercise_name}
                    </Box>
                    <Box sx={{ width: '12%' }}>
                      <ButtonBase
                        sx={{
                          p: 0,
                          minWidth: 'auto',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // console.log(ele);
                          handlePlotListDelete(ele);
                        }}
                      >
                        <CancelIcon
                          sx={{ fontSize: 30, color: 'var(--main-red)' }}
                        />
                      </ButtonBase>
                    </Box>
                  </SUIScheduleItem>
                );
              })}
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                {' '}
                <CUIButton
                  color={'deepgrey'}
                  sx={{ width: '50%', mt: 1 }}
                  onClick={() => {
                    handleClean();
                  }}
                >
                  清除
                </CUIButton>
              </Box>
            </Box>
          </Section>
        </Grid>
        {/* ============================================================= */}

        <Grid
          item
          lg={9}
          sm={12}
          sx={{
            // outline: '3px solid blue',
            p: 2,
          }}
        >
          <Line options={options} data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export { PlotPage };
