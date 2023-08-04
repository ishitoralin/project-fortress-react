import CUIButton from '../customUI/cui-button';
import CUIDatePicker from '../customUI/cui-date-picker';
import CUISelect from '../customUI/cui-select';
import CancelIcon from '@mui/icons-material/Cancel';
import CUISearch from '../customUI/cui-search';
import { Grid, Paper, Box, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { useDebounceHH } from '../customHook/useDebounce';

// >>> for plot
import ScatterPlot from './scatterPlot';
import { useAuth } from '@/context/auth/useAuth';
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

const PlotPage = ({ bodyParts, exerciseInit, myBGstyle }) => {
  const { auth } = useAuth();
  const dateDefault = { start: null, end: null };
  const maxPlotNumber = 5;
  const plotCheck = useRef();
  const [plotDates, setPlotDates] = useState(dateDefault);
  const [plotBodyPart, setPlotBodyPart] = useState([exerciseInit]); //=== for plot exercise body-part filter
  const [plotKeyword, setPlotKeyword] = useState(''); //=== for plot search keyword
  const [plotExeSelected, setPlotExeSelected] = useState(''); //=== for selected option
  const [plotExeTypes, setPlotExeTypes] = useState([]); //=== exercise select options for plot
  const [plotExeList, setPlotExeList] = useState([]); //=== list of exercise for plot
  const [plotting, setPlotting] = useState(false);
  const [plotData, setPlotData] = useState([]); //=== data for plot

  // >>> plot filter by body part
  useDebounceHH(() => {
    // === for selection and search
    fetch(
      `${process.env.SEAN_API_SERVER}/exe-type/exercise-type/body-part/${plotBodyPart[0].key}/${plotKeyword}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => {
        setPlotExeTypes(
          data.data?.filter(
            (dataObj) =>
              !plotExeList.some((listObj) => listObj.sid === dataObj.sid)
          )
        );
      });
  }, [plotBodyPart, plotKeyword, plotExeList]);
  // <<< plot filter by body part

  useDebounceHH(() => {
    setPlotData([]);
    plotExeList.map(async (item) => {
      await fetch(
        `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record-plot/${plotDates.start}/${plotDates.end}/${item.sid}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          // setPlotData((prev) => [...prev, data.data]);
          setPlotData((prev) =>
            data.data?.length > 0
              ? [...prev, data.data]
              : [
                  ...prev,
                  {
                    typeID: item.sid,
                    name: item.exercise_name,
                    error: 'error',
                  },
                ]
          );
        });
    });
  }, [plotExeList, plotDates]);
  plotCheck.current = plotData.filter((e) => e.error);
  // console.log('check', plotCheck.current);
  // console.log('data:', plotData);

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
  // const handlePlot = () => {
  //   setPlotData([]);
  //   plotExeList.map(async (item) => {
  //     await fetch(
  //       `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record-plot/${plotDates.start}/${plotDates.end}/${item.sid}`
  //     )
  //       .then((r) => r.json())
  //       .then((data) => {
  //         setPlotData((prev) => [...prev, data.data]);
  //       });
  //   });
  // };

  const handleClean = () => {
    setPlotDates(dateDefault);
    setPlotExeList([]);
    // setPlotData([])  //NOTE: need this?
  };
  // ================================================================

  // >>> for chartjs test
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
      <Grid
        container
        justifyContent="center"
        sx={{ width: '100%', height: '780px' }}
      >
        <Grid item lg={3} sm={12} sx={{ px: 2 }}>
          <Section sx={{ ...myBGstyle }}>
            <Box
              sx={{
                top: 0,
                width: '100%',
              }}
            >
              <h1>展示你的訓練記錄</h1>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  // height: '100px',

                  my: 2,
                }}
              >
                {/* TODO:可以用radio選擇畫不同的圖 */}
                <Box sx={{ width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      // flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <CUIDatePicker // maxDate = end-date/ end-date - 1
                      sx={{ width: '45%' }}
                      label={'開始日期'}
                      format={'YYYY-MM-DD'}
                      //   disabled={editing}
                      // defaultValue={today}
                      value={plotDates.start || undefined}
                      maxDate={plotDates.end}
                      onChange={(e) => {
                        setPlotDates((prev) => ({ ...prev, start: e }));
                      }}
                    />
                    <CUIDatePicker // minDate = start-date/ start-date + 1
                      sx={{ width: '45%' }}
                      label={'結束日期'}
                      format={'YYYY-MM-DD'}
                      //   disabled={editing}
                      // defaultValue={today}
                      value={plotDates.end || undefined}
                      minDate={plotDates.start}
                      onChange={(e) => {
                        setPlotDates((prev) => ({ ...prev, end: e }));
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '45%',
                    }}
                  ></Box>
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
                  plotExeTypes?.length > 0
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
              {/* {console.log(plotExeSelected)} */}
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
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 3,
                  }}
                >
                  <CUIButton
                    color={'deepgrey'}
                    sx={{ width: '35%' }}
                    onClick={() => {
                      handleClean();
                    }}
                  >
                    清除
                  </CUIButton>
                  <CUIButton
                    color={'fortress'}
                    sx={{ width: '45%' }}
                    onClick={() => {
                      handleAdd();
                    }}
                    disabled={
                      !plotExeSelected ||
                      plotExeList.length >= maxPlotNumber ||
                      plotExeSelected === '無'
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
              <Box
                sx={{
                  display: 'flex',
                  // flexDirection: 'c',
                  justifyContent: 'space-between',
                  // width: '40%',
                  // mt: 5,
                  // height: '100%',
                  mt: 2,
                }}
              >
                <CUIButton
                  color={'fortress'}
                  sx={{ width: '35%' }}
                  disabled={
                    !plotDates.start ||
                    !plotDates.end ||
                    plotExeList.length === 0
                  }
                >
                  輸出PDF
                </CUIButton>
                {/* TODO: enable when ploted */}
                {/* <CUIButton
                  sx={{ width: '45%' }}
                  disabled={
                    !plotDates.start ||
                    !plotDates.end ||
                    plotExeList.length === 0
                  }
                  onClick={() => handlePlot()}
                >
                  繪製
                </CUIButton> */}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}> </Box>
            </Box>
          </Section>
        </Grid>
        {/* ============================================================= */}

        <Grid item lg={9} sm={12} sx={{ height: '100%' }}>
          {/* FIXME: will glitch */}
          {plotExeList.length > 0 && (
            <Box sx={{ ...myBGstyle, p: 2 }}>
              {plotCheck.current.length > 0 ? (
                <Box sx={{ color: 'var(--main-red)' }}>
                  <h1>{'No data for :'}</h1>
                  {plotCheck.current.map((e) => (
                    <h1 key={e.typeID}>{e.name}</h1>
                  ))}
                </Box>
              ) : (
                plotData.length > 0 && <ScatterPlot plotData={plotData} />
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export { PlotPage };
