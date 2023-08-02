import { Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
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
import SeanCalendar from '@/components/recordPage/calendar';
import { PlotPage } from '@/components/recordPage/exePlotPage';
import getCurrentMonthDates from '@/components/seanUI/sui-getCurrentMonth';
// =========================================================================
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// =========================================================================
import BodySvg from '@/components/bodySvg';
// =========================================================================
// import FullCalendarLayout from '@/components/fullcalendar/layout';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import timeGridPlugin from '@fullcalendar/timegrid';
// =========================================================================
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// =========================================================================
import {
  useDebounceHH,
  useDebounce,
} from '@/components/customHook/useDebounce';
import useUpdateEffect from '@/components/customHook/useUpdateEffect';
import ProtectedRouteWrapper from '@/components/protected-route';
import Layout from '@/components/layout/layout';
import { useAuth } from '@/context/auth/useAuth';
import getBrickBackground from '@/libs/getBrickBackground';
// =========================================================================
//>>> pseudo-data
const exerciseDate = ['Jan 20', 'Jan 22', 'Jan 23'];
const plotType = ['臥推', '深蹲', '硬舉', '保加利雅深蹲'];
//<<< pseudo-data

// >>> style
const myBorderWidth = '2px';
const myBorderColor = 'black';
const myBorder = `${myBorderWidth} solid ${myBorderColor}`;
const scheduleItemWdith = ['48%', '18%', '12%', '22%'];

const scheduleTitleStyle = {
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

export default function ExercisePage() {
  const { auth } = useAuth();
  // console.log(auth.accessToken);
  // ============================================================
  // const today = dayjs(new Date()).format('YYYY-MM-DD');
  const exerciseInit = { key: 0, value: '全部', label: '全部' }; //=== exercise type的初始值
  // const router = useRouter();
  const [exeType, setExeType] = useState([]); //=== for exercise-type cards
  const [bodyPart, setBodyPart] = useState([exerciseInit]); //=== for exercise body-part filter
  const bodyParts = useRef([exerciseInit]); //=== for selection options
  const [keyword, setKeyword] = useState(''); //=== for search keyword
  const [exerciseRecord, setExerciseRecord] = useState([]); //=== exercise record for calendar
  const [exerciseStartEnd, setExerciseStartEnd] = useState(
    getCurrentMonthDates()
  ); //=== the start and end date for the calendar
  const [scheduleDate, setScheduleDate] = useState(null); // useState(today);
  const [exerciseScheduleList, setExerciseScheduleList] = useState([]);
  const [editDate, setEditDate] = useState(null);
  // let editing = exerciseRecord.some((item) => item.date === editDate); //=== 判斷現在是否正在編輯月曆中某一天的運動, 當天有行程=ture
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    setEditing(exerciseRecord?.some((item) => item.date === editDate));
  }, [exerciseRecord, editDate]);
  // ===============================================================

  // const [plotDates, setPlotDates] = useState({ start: null, end: null });
  // const [plotBodyPart, setPlotBodyPart] = useState([exerciseInit]); //=== for plot exercise body-part filter
  // const [plotKeyword, setPlotKeyword] = useState(''); //=== for plot search keyword
  // const [plotExeTypes, setPlotExeTypes] = useState([]); //=== exercise select options for plot
  // const [plotExeList, setPlotExeList] = useState([]); //=== list of exercise for plot

  // =============================================================
  // console.log(bodyParts.current);
  // =============================================================

  // >>> add/editing schadule
  const handleAddSchedule = async (list, date) => {
    let dataAdded;
    // console.log(editing);
    if (editing) {
      await fetch(
        `${process.env.SEAN_API_SERVER}/exercise-record/delete-record`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth?.accessToken}`,
          },
          body: JSON.stringify({ date }),
        }
      )
        .then((r) => r.json())
        .then((data) => {
          // console.log('delete');
        });
    }
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!date) {
      // no date means editing
      list.map(async (item) => {
        const data = { ...item, date };
        await fetch(
          `${process.env.SEAN_API_SERVER}/exercise-record/add-record`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${auth?.accessToken}`,
            },
            body: JSON.stringify(data),
          }
        )
          .then((r) => r.json())
          .then((data) => {
            dataAdded += data.result.affectedRows;
            // console.log('added');
          });
      });
      //>>> reset
      setExerciseScheduleList([]);
      setScheduleDate(undefined);
      //<<< reset
      // console.log('added'); // TODO:hot toast
    } else {
      // console.log('no date'); // TODO:hot toast
    }

    setEditing(false); //=== reset editing
    setEditDate(null);
  };
  // <<< add/editing schadule
  // console.log(exerciseScheduleList);
  // >>> initiallize
  useEffect(
    () => {
      // === get bodyparts list
      fetch(`${process.env.SEAN_API_SERVER}/exe-type/body-part`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }) //=== for selection options
        .then((r) => r.json())
        .then((data) => {
          data.data.unshift(exerciseInit);
          bodyParts.current = data.data;
        });
    },
    [],
    2000
  );

  useDebounceHH(() => {
    fetch(
      `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record/${exerciseStartEnd.start}/${exerciseStartEnd.end}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }
    ) //=== for exercise record
      .then((r) => r.json())
      .then((data) => {
        setExerciseRecord(data.data);
      });
  }, [exerciseStartEnd, exerciseScheduleList]);

  // <<< initiallize

  // TODO: apply filter to bodySVG
  // >>> filter by body part
  useDebounceHH(() => {
    // === for selection and search
    fetch(
      `${process.env.SEAN_API_SERVER}/exe-type/exercise-type/body-part/${bodyPart[0].key}/${keyword}`,
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
        setExeType(data.data);
      });
  }, [bodyPart, keyword]);
  // >>> filter by body part

  // >>> filter exercise by body part
  const handleBodypartSelection = (e) => {
    setBodyPart(bodyParts.current.filter((x) => x.value === e.target.value));
  };
  // <<< filter exercise by body part

  // >>> search by keyword
  // TODO: on composition end
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  // <<< search by keyword

  // >>> get the exercise-schedule when selecting date
  useDebounceHH(
    () => {
      setScheduleDate(editDate);
      if (editing) {
        fetch(
          `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record/${editDate}/${editDate}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${auth?.accessToken}`,
            },
          }
        ) //=== for exercise record
          .then((r) => r.json())
          .then((data) => {
            // console.log(data.data);
            setExerciseScheduleList(data.data);
          });
      } else {
        setExerciseScheduleList([]);
      }
    },
    [editing, editDate], //FIXME:editing gave error
    100
  );
  // <<< get the exercise-schedule when selecting date

  return (
    <>
      <Box
        sx={{
          bgcolor: 'var(--deepgrey)',
          backgroundImage: getBrickBackground({
            scale: 2,
            rotate: 7,
            brickColor: 'hsl(100, 0%, 30%)',
            strokeColor: 'hsl(100, 0%, 20%)',
          }),
          backgroundAttachment: 'fixed',
        }}
      >
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
                  // value={keyword}
                  // onCompositionEnd={(e) => console.log('123')}
                  onChange={(e) => {
                    // console.log(e.nativeEvent.composed);
                    // console.log(e);
                    handleSearch(e);
                  }}
                />
              </Section>
              {/* === For exercise card list === */}
              <SUICardList
                type="exercise"
                list={exeType}
                rowRWD={[6, 6, 4, 4, 3]}
                exerciseScheduleList={exerciseScheduleList}
                setExerciseScheduleList={setExerciseScheduleList}
              />
              {/* {console.log(exeType)} */}
            </Grid>
            {/* ============================================================================ */}

            <Grid
              className="calendarSelect"
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
                <SUISchedule
                  // >>> style
                  scheduleTitleStyle={scheduleTitleStyle}
                  scheduleItemWdith={scheduleItemWdith}
                  // <<< style
                  type="exercise"
                  editing={editing}
                  setEditing={setEditing}
                  setEditDate={setEditDate}
                  // >>> 規劃暫存清單
                  scheduleList={exerciseScheduleList}
                  setScheduleList={setExerciseScheduleList}
                  // <<< 規劃暫存清單
                  // >>> 要加入規劃的時間
                  scheduleDate={scheduleDate}
                  setScheduleDate={setScheduleDate}
                  // <<< 要加入規劃的時間
                  handleAddSchedule={handleAddSchedule} //=== fetch DB
                />
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
            {/* <Grid
            item
            lg={3}
            sm={12}
            sx={{
              // outline: '3px solid blue',
              p: 2,
            }}
          >
            <CalendarCardList dates={exerciseDate} />
          </Grid> */}

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
              <SeanCalendar
                list={exerciseRecord}
                updateStartEnd={setExerciseStartEnd}
                setDate={setEditDate}
              />
            </Grid>
          </Grid>
        </div>
        {/* =================================================================== */}
        {/* === page 3 ========================================================= */}
        {/* =================================================================== */}
        <PlotPage
          // plotType={plotType}
          // plotDates={plotDates}
          // setPlotDates={setPlotDates}
          // setPlotExeList={setPlotExeList}
          bodyParts={bodyParts.current}
          exerciseInit={exerciseInit}
        />
      </Box>
    </>
  );
}

// export default ExercisePage;

ExercisePage.getLayout = (page) => (
  <ProtectedRouteWrapper>
    <Layout>{page}</Layout>;
  </ProtectedRouteWrapper>
);
