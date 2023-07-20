import { Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIButton from '@/components/customUI/cui-button';
// =========================================================================
import {
  SUICardList,
  CalendarCard,
  CalendarCardList,
} from '@/components/seanUI/sui-card';
import {
  SUISchedule,
  SUIScheduleTable,
} from '@/components/seanUI/sui-schedule';
// =========================================================================
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// =========================================================================
import BodySvg from '@/components/bodySvg';
// =========================================================================
import FullCalendarLayout from '@/components/fullcalendar/layout';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
// =========================================================================
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// =========================================================================
import {
  useDebounce,
  useDebounceHH,
} from '@/components/customHook/useDebounce';
// =========================================================================
//>>> pseudo-data
const exerciseList = [
  // exe: Num1=reps, Num2=sets
  // diet: Num1=calories, Num2=protein
  {
    name: 'Bench sfvfvPress',
    quantity: 60,
    Num1: 12,
    Num2: 5,
    date: '2023-07-16',
  },
  { name: 'Leg Press', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Squat', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Bench Press', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Leg Press', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Squat', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Bench Press', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Leg Press', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
  { name: 'Squat', quantity: 60, Num1: 12, Num2: 5, date: '2023-07-16' },
];

const exerciseDate = ['Jan 20', 'Jan 22', 'Jan 23'];

const plotType = ['臥推', '深蹲', '硬舉', '保加利雅深蹲'];
//<<< pseudo-data

// >>> style
const myBorderWidth = '2px';
const myBorderColor = 'black';
const myBorder = `${myBorderWidth} solid ${myBorderColor}`;
const scheduleItemWdith = ['58%', '18%', '12%', '12%'];

const scheduleTitle = {
  borderRight: myBorder,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
}));
// <<< style

const ExercisePage = () => {
  // ============================================================
  const exerciseInit = { key: 0, value: '全部', label: '全部' };
  // const router = useRouter();
  const [exeType, setExeType] = useState([]);
  const [bodyPart, setBodyPart] = useState([exerciseInit]);
  const bodyParts = useRef([exerciseInit]); //=== for selection options
  const [keyword, setKeyword] = useState('');

  // >>> initiallize
  useEffect(() => {
    // TODO: debounce
    fetch(`${process.env.SEAN_API_SERVER}/record/body-part`) //=== for selection options
      .then((r) => r.json())
      .then((data) => {
        data.data.unshift(exerciseInit);
        bodyParts.current = data.data;
      });

    fetch(`${process.env.SEAN_API_SERVER}/record/exercise-type`) //=== exercise list
      .then((r) => r.json())
      .then((data) => {
        setExeType(data.rows);
        // console.log(data.row);
      });
  }, []);

  // console.log(bodyParts); //TODO: 第一次render Array(1)???
  // <<< initiallize

  // TODO: apply filter to bodySVG
  // >>> filter by body part
  useDebounceHH(
    () => {
      // === for selection and search
      fetch(
        `${process.env.SEAN_API_SERVER}/record/exercise-type/body-part/${bodyPart[0].key}/${keyword}`
      )
        .then((r) => r.json())
        .then((data) => {
          setExeType(data.data);
        });
    },
    500,
    [bodyPart, keyword]
  );

  // useEffect(() => {
  //   // === for selection and search
  //   fetch(
  //     `${process.env.SEAN_API_SERVER}/record/exercise-type/body-part/${bodyPart[0].key}/${keyword}`
  //   )
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setExeType(data.data);
  //     });
  // }, [bodyPart, keyword]);

  // >>> filter by body part

  const handleBodypartSelection = (e) => {
    setBodyPart(bodyParts.current.filter((x) => x.value === e.target.value));
  };

  // useDebounce(debounceHandleSearch);
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {/* =================================================================== */}
      {/* === page 1 ========================================================= */}
      {/* =================================================================== */}
      <div id="page-1" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
        {/* <div sx={{ padding: '64px' }}> */}
        <Grid container justifyContent="center">
          <Grid
            item
            lg={3}
            sm={3}
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <Box sx={{ width: '72%' }}>
              <BodySvg />
            </Box>
          </Grid>

          {/* ============================================================================ */}

          <Grid
            item
            lg={5}
            sm={5}
            sx={{
              p: 2,
            }}
          >
            <Section>
              <h1>規劃你的訓練</h1>
              <CUISelect
                sx={{ width: '50%' }}
                label="部位分類"
                defaultValue={bodyParts.current[0].value}
                options={bodyParts.current}
                onChange={(e) => {
                  handleBodypartSelection(e);
                }}
              />
              <CUISearch
                sx={{ width: '50%' }}
                label="搜尋運動類型"
                placeholder="請輸入關鍵字"
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </Section>
            <SUICardList
              type="exercise"
              list={exeType}
              rowRWD={[6, 6, 4, 4, 3]}
            />
          </Grid>

          {/* ============================================================================ */}

          <Grid
            item
            lg={4}
            sm={4}
            sx={{
              // outline: '3px solid blue',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SUIScheduleTable sx={{ width: '100%' }}>
              <Section>
                <Box
                  sx={{
                    position: 'sticky',
                    top: 0,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CUIDatePicker sx={{ width: '80%' }} label={'pick a date'} />
                  <CUIButton
                    sx={{
                      width: '35%',
                      marginLeft: '20px',
                      transform: 'scale(1.2)',
                    }}
                  >
                    加入
                  </CUIButton>
                </Box>
              </Section>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '40px',
                  borderTop: myBorder,
                  bgcolor: 'var(  --steel-light-grey)',
                  boxShadow: 'rgba(0, 0, 0, 0.3) 0 15px 15px',
                  paddingLeft: 1.5,
                  paddingRight: 4,
                }}
              >
                <Box sx={{ ...scheduleTitle, width: scheduleItemWdith[0] }}>
                  type
                </Box>
                <Box sx={{ ...scheduleTitle, width: scheduleItemWdith[1] }}>
                  quantity
                </Box>
                <Box sx={{ ...scheduleTitle, width: scheduleItemWdith[2] }}>
                  次數
                </Box>
                <Box
                  sx={{
                    ...scheduleTitle,
                    width: scheduleItemWdith[3],
                    borderRight: 'none',
                  }}
                >
                  組數
                </Box>
              </Box>
              <Section
                sx={{
                  height: '350px',
                  overflow: 'auto',
                  position: 'relative',
                  // margin: '0 0 1px 0', // Negative margin to keep scrollbar inside
                  '&::-webkit-scrollbar': {
                    width: 20,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'var(--fortress)',
                    borderRadius: '5px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    borderRadius: '5px',
                    backgroundColor: 'var(--deepgrey)',
                    transition: '.5s',
                    '&:hover': {
                      filter: 'brightness(0.85)',
                      backgroundColor: 'var(--main-red)',
                    },
                  },
                }}
              >
                <SUISchedule list={exerciseList} width={scheduleItemWdith} />
              </Section>
            </SUIScheduleTable>
          </Grid>
        </Grid>
      </div>
      {/* =================================================================== */}
      {/* === page 2 ========================================================= */}
      {/* =================================================================== */}

      <div
        id="page-2"
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
              height: '100%',
              // outline: '3px solid blue',
              p: 2,
            }}
          >
            <CalendarCardList dates={exerciseDate} />
          </Grid>

          {/* ============================================================= */}

          <Grid
            item
            lg={9}
            sm={12}
            sx={{
              outline: '3px solid blue',
              p: 2,
              height: '700px',
            }}
          >
            {/* <p>1.月曆顯示：每一天的總運動項目/Total Valumn</p>
            <p>
              2.點擊某一天跳出modal，model顯示當天全部的運動，點擊該項運動可以修改重量次數組數，可新增刪除運動
            </p> */}
            <Box sx={{}}>
              <FullCalendarLayout sx={{}}>
                <div className="calendar-container">
                  <FullCalendar
                    plugins={[
                      resourceTimelinePlugin,
                      dayGridPlugin,
                      interactionPlugin,
                      timeGridPlugin,
                    ]}
                    // >>> max event show
                    dayMaxEventRows={true} // for all non-TimeGrid views
                    views={{
                      dayGridMonth: {
                        dayMaxEventRows: 3,
                      },
                    }}
                    // <<< max event show
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: '',
                    }}
                    initialView="dayGridMonth"
                    nowIndicator={true}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    resources={[
                      { id: 'a', title: 'Auditorium A' },
                      { id: 'b', title: 'Auditorium B', eventColor: 'green' },
                      { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
                    ]}
                    // initialEvents={[
                    //   { title: 'event 1', start: new Date(), resourceId: 'a' },
                    // ]}
                    // events={[
                    //   { title: 'Event 1', start: '2023-07-16', resourceId: 'a' },
                    //   { title: 'Event 2', date: '2023-07-17', resourceId: 'b' },
                    // ]}

                    events={exerciseList.map((exercise, index) => {
                      return {
                        title: exercise.name,
                        date: exercise.date,
                        resourceId: 'a',
                      };
                    })}
                  />
                </div>
              </FullCalendarLayout>
            </Box>
          </Grid>
        </Grid>
      </div>

      {/* =================================================================== */}
      {/* === page 3 ========================================================= */}
      {/* =================================================================== */}
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
              outline: '3px solid blue',
              p: 2,
            }}
          >
            <Section>
              <Box
                sx={{
                  top: 0,
                }}
              >
                <CUIDatePicker sx={{ width: '90%' }} label={'start date'} />
                <CUIDatePicker sx={{ width: '90%' }} label={'end date'} />
                {/* <CUIButton
                    sx={{ width: '35%', ml: 'auto', transform: 'scale(1.2)' }}
                  >
                    加入規劃
                  </CUIButton> */}
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                {plotType.map((ele) => {
                  return (
                    <CUIButton
                      key={ele}
                      color={'fortress'}
                      sx={{ width: '100%', mt: 1 }}
                    >
                      {ele}
                    </CUIButton>
                  );
                })}
                <CUIButton color={'deepgrey'} sx={{ width: '100%', mt: 1 }}>
                  更多+
                </CUIButton>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  mt: 2,
                }}
              >
                <CUIButton color={'fortress'} sx={{ width: '50%' }}>
                  輸出PDF
                </CUIButton>
                <CUIButton sx={{ width: '45%' }}>繪製</CUIButton>
              </Box>
            </Section>
          </Grid>

          {/* ============================================================= */}

          <Grid
            item
            lg={9}
            sm={12}
            sx={{
              outline: '3px solid blue',
              p: 2,
            }}
          >
            <p>1.月曆顯示：每一天的總運動項目/Total Valumn</p>
            <p>
              2.點擊某一天跳出modal，model顯示當天全部的運動，點擊該項運動可以修改重量次數組數，可新增刪除運動
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ExercisePage;
