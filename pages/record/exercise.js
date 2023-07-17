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

//>>> pseudo-data
const bodypart = [
  '常用清單',
  '三頭',
  '上背',
  '下背',
  '二頭',
  '前臂',
  '小腿',
  '核心',
  '肩膀',
  '胸',
  '腿前側',
  '腿後側',
  '臀部',
];

const exerciseList = [
  {
    workout: 'Bench sfvfvPress',
    weight: 60,
    reps: 12,
    sets: 5,
    date: '2023-07-16',
  },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Bench Press', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Bench Press', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5, date: '2023-07-16' },
];

const exerciseCardList = Array(16).fill({
  img: '/react-imgs/record/exercise/啞鈴二頭彎舉',
  description: '啞鈴二頭彎舉',
});

const exerciseDate = ['Jan 20', 'Jan 22', 'Jan 23'];

const plotType = ['臥推', '深蹲', '硬舉', '保加利雅深蹲'];
//<<< pseudo-data

const myBorderWidth = '2px';
const myBorderColor = 'black';
const myBorder = `${myBorderWidth} solid ${myBorderColor}`;

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

const ExercisePage = () => {
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
            sm={2}
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: '80%' }}>
              <BodySvg />
            </Box>
          </Grid>

          {/* ============================================================================ */}

          <Grid
            item
            lg={5}
            sm={0}
            sx={{
              p: 2,
            }}
          >
            <Section>
              <h1>規劃你的訓練</h1>
              <CUISearch
                sx={{ width: '80%' }}
                label="搜尋運動類型"
                placeholder="請輸入關鍵字"
              />
              <CUISelect
                sx={{ width: '80%' }}
                label="部位分類"
                options={bodypart}
              />{' '}
            </Section>
            <SUICardList list={exerciseCardList} />
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
            }}
          >
            <SUIScheduleTable>
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
                    加入規劃
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
                  px: 1.5,
                }}
              >
                <Box sx={{ ...scheduleTitle, width: '58%' }}>type</Box>
                <Box sx={{ ...scheduleTitle, width: '18%' }}>weight</Box>
                <Box sx={{ ...scheduleTitle, width: '12%' }}>reps</Box>
                <Box
                  sx={{ ...scheduleTitle, width: '12%', borderRight: 'none' }}
                >
                  sets
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
                <SUISchedule list={exerciseList} />
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
              // outline: '3px solid blue',
              p: 2,
            }}
          >
            {/* <p>1.月曆顯示：每一天的總運動項目/Total Valumn</p>
            <p>
              2.點擊某一天跳出modal，model顯示當天全部的運動，點擊該項運動可以修改重量次數組數，可新增刪除運動
            </p> */}

            <FullCalendarLayout>
              <div className="calendar-container">
                <FullCalendar
                  plugins={[
                    resourceTimelinePlugin,
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin,
                  ]}
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
                      title: exercise.workout,
                      date: exercise.date,
                      resourceId: 'a',
                    };
                  })}
                />
              </div>
            </FullCalendarLayout>
          </Grid>
        </Grid>
      </div>

      {/* =================================================================== */}
      {/* === page 3 ========================================================= */}
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
