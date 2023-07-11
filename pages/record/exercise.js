import { Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import {
  SUICardList,
  CalendarCard,
  CalendarCardList,
} from '@/components/seanUI/sui-card';
import {
  SUISchedule,
  SUIScheduleTable,
} from '@/components/seanUI/sui-schedule';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BodySvg from '@/components/bodySvg';

//>>> pseudo-data
const bodypart = [
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
  { workout: 'Bench sfvfvPress', weight: 60, reps: 12, sets: 5 },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5 },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5 },
  { workout: 'Bench Press', weight: 60, reps: 12, sets: 5 },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5 },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5 },
  { workout: 'Bench Press', weight: 60, reps: 12, sets: 5 },
  { workout: 'Leg Press', weight: 60, reps: 12, sets: 5 },
  { workout: 'Squat', weight: 60, reps: 12, sets: 5 },
];

const exerciseCardList = Array(16).fill({
  img: '/react-imgs/record/exercise/啞鈴二頭彎舉',
  description: '啞鈴二頭彎舉',
});

const exerciseDate = ['Jan 20', 'Jan 22', 'Jan 23'];
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
      <div id="page-1" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
        {/* <div sx={{ padding: '64px' }}> */}
        <Grid container justifyContent="center">
          <Grid
            item
            lg={2}
            sm={2}
            sx={{
              p: 2,
            }}
          >
            <BodySvg />
          </Grid>

          {/* ============================================================================ */}

          <Grid
            item
            lg={6}
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
          <Grid
            item
            lg={4}
            sm={4}
            sx={{
              // outline: '3px solid blue',
              p: 2,
            }}
          >
            {/* ============================================================================ */}
            <SUIScheduleTable>
              <Section>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ position: 'sticky', top: 0 }}>
                    <DatePicker sx={{ width: '100%' }} />
                  </Box>
                </LocalizationProvider>
              </Section>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '40px',
                  borderTop: myBorder,
                  bgcolor: 'lightgreen',
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
                sx={{ height: '250px', overflow: 'auto', position: 'relative' }}
              >
                <SUISchedule list={exerciseList} />
              </Section>
            </SUIScheduleTable>
          </Grid>
        </Grid>
      </div>
      <div id="page-2" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
        <Grid container justifyContent="center">
          <Grid
            item
            lg={2}
            sm={12}
            sx={{
              outline: '3px solid blue',
              p: 2,
            }}
          >
            <CalendarCardList dates={exerciseDate} />
          </Grid>
          <Grid
            item
            lg={10}
            sm={12}
            sx={{
              outline: '3px solid blue',
              p: 2,
            }}
          ></Grid>
        </Grid>
      </div>
    </>
  );
};

export default ExercisePage;
