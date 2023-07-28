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

const ExercisePage = () => {
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
    setEditing(exerciseRecord.some((item) => item.date === editDate));
  }, [exerciseRecord, editDate]);
  // console.log(editing, editDate);
  // console.log(scheduleDate);
  // console.log(editing);
  // =============================================================
  const handleAddSchedule = (list, date) => {
    // console.log('test');
    // console.log(editing, editDate);
    let dataAdded;
    if (editing) {
      // TODO:邏輯要想好
      // console.log('editing');
      fetch(`${process.env.SEAN_API_SERVER}/exercise-record/delete-record`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
    }
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!date) {
      list.map((item) => {
        const data = { ...item, date };
        fetch(`${process.env.SEAN_API_SERVER}/exercise-record/add-record`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((r) => r.json())
          .then((data) => {
            dataAdded += data.result.affectedRows;
          });
      });
      setExerciseScheduleList([]);
      setScheduleDate(undefined);
      window.alert('added');
    } else {
      console.log('no date');
    }

    setEditing(false); //=== reset editing
  };

  // >>> initiallize
  useEffect(() => {
    // TODO: debounce
    fetch(`${process.env.SEAN_API_SERVER}/exe-type/body-part`) //=== for selection options
      .then((r) => r.json())
      .then((data) => {
        data.data.unshift(exerciseInit);
        bodyParts.current = data.data;
      });
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record/${exerciseStartEnd.start}/${exerciseStartEnd.end}`
    ) //=== for exercise record
      .then((r) => r.json())
      .then((data) => {
        setExerciseRecord(data.data);
      });
  }, [exerciseStartEnd]);

  // <<< initiallize

  // TODO: apply filter to bodySVG
  // >>> filter by body part
  useDebounceHH(() => {
    // === for selection and search
    fetch(
      `${process.env.SEAN_API_SERVER}/exe-type/exercise-type/body-part/${bodyPart[0].key}/${keyword}`
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
      editing && setScheduleDate(editDate);
      if (editing) {
        fetch(
          `${process.env.SEAN_API_SERVER}/exercise-record/exercise-record/${editDate}/${editDate}`
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
    [editing, editDate],
    100
  );
  // <<< get the exercise-schedule when selecting date

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
                // value={keyword}
                // onCompositionEnd={(e) => console.log('123')}
                onChange={(e) => {
                  console.log(e.nativeEvent.composed);
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
              {/* TODO: 把按鈕跟datepicker夾到SUISchedule */}

              <SUISchedule
                // >>> style
                scheduleTitleStyle={scheduleTitleStyle}
                scheduleItemWdith={scheduleItemWdith}
                // <<< style
                type="exercise"
                editing={editing}
                setEditing={setEditing}
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
            {/*TODO 2.點擊某一天跳出modal，model顯示當天全部的運動，點擊該項運動可以修改重量次數組數，可新增刪除運動 */}
            {/* TODO: 用"edigitng"變數來判斷是否要編輯某一天的運動 */}
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
