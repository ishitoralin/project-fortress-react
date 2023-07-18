import { Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
// =========================================================================
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIButton from '@/components/customUI/cui-button';
// =========================================================================
import { SUICardList } from '@/components/seanUI/sui-card';
import {
  SUISchedule,
  SUIScheduleTable,
} from '@/components/seanUI/sui-schedule';
import { SUIInputNumber, SUIDataBox } from '@/components/seanUI/sui-input';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// =========================================================================
import style from './record.module.css';
// =========================================================================
import { useState, useEffect } from 'react';
// =========================================================================

//>>> pseudo-data
const selections = [
  '南瓜子',
  '希臘優格',
  '扁豆',
  '杏仁',
  '杏仁奶',
  '火雞胸肉',
  '燕麥片',
  '牛肉',
  '白飯',
  '脫脂奶',
  '蛋白',
  '蝦',
  '豆漿',
  '起司',
  '雞胸肉',
  '雞蛋',
  '鮪魚',
  '鴨肉',
  '黑豆',
];

const dietList = [
  // exe: Num1=reps, Num2=sets
  // diet: Num1=calories, Num2=protein
  {
    name: '威靈頓牛排佐沙茶醬',
    quantity: 1,
    Num1: 10000,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    Num1: 12000,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    Num1: 12,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    Num1: 12000,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    Num1: 12,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    Num1: 12000,
    Num2: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    Num1: 12,
    Num2: 5,
    date: '2023-07-16',
  },
];

const exerciseCardList = Array(16).fill({
  img: '/react-imgs/record/food/火雞胸肉',
  description: '火雞胸肉',
});

const activity = [
  '身體活動趨於靜態(BMR x 1.2)',
  '輕量活動(BMR x 1.375)',
  '中度活動量(BMR x 1.55)',
  '高度活動量(BMR x 1.72)',
  '非常高度活動量(BMR x 1.9)',
];

const plotType = ['臥推', '深蹲', '硬舉', '保加利雅深蹲'];
//<<< pseudo-data

const myBorderWidth = '2px';
const myBorderColor = 'black';
const myBorder = `${myBorderWidth} solid ${myBorderColor}`;
const NuBorder = `4px solid black`;
const NuBorderRadius = '30px';
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

const NuBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // outline: '3px solid blue',
  width: '100%',
}));

const ExercisePage = () => {
  // ============================================================
  const [foodType, setFoodType] = useState([]);

  useEffect(() => {
    fetch(`${process.env.SEAN_API_SERVER}/record/food-type`)
      .then((r) => r.json())
      .then((data) => {
        setFoodType(data.rows);
      });
  }, []);

  // console.log(foodType);
  return (
    <>
      {/* =================================================================== */}
      {/* === page 1 ========================================================= */}
      {/* =================================================================== */}
      <div
        id="page-2"
        style={{
          marginTop: '50px',
          paddingLeft: '200px',
          paddingRight: '200px',
          height: '800px',
        }}
      >
        {/* <div sx={{ padding: '64px' }}> */}
        <Grid container justifyContent="center">
          <Grid
            item
            lg={4}
            sm={4}
            sx={{
              p: 2,
            }}
          >
            <Section>
              <h1>規劃你的飲食</h1>

              <SUIInputNumber id="age" label="年齡(yrd)" />

              <SUIInputNumber id="weight" label="體重(kg)" />
              <SUIInputNumber id="height" label="身高(cm)" />
              <CUISelect
                sx={{ width: '100%', m: 1 }}
                label="活動型態"
                options={activity}
              />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  m: 1,
                }}
              >
                <CUIButton
                  sx={{
                    width: '45%',
                    marginLeft: '20px',
                    transform: 'scale(1.2)',
                  }}
                >
                  開始計算
                </CUIButton>
              </Box>
            </Section>
            <Section>
              <SUIDataBox title={'BMI:'} result={123} />
            </Section>
          </Grid>
          <Grid
            item
            lg={8}
            sm={8}
            sx={{
              p: 2,
            }}
          >
            <Section className={`${style.description}`}>
              BMR 指人體在靜止休息狀態下，維持新陳代謝所需的熱量。BMR
              會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。
            </Section>
            <Section className={`${style.description}`}>
              TDEE
              是身體一整天下來，包括基礎代謝、活動量、吃東西所消耗的熱量。不同的生活型態需要的熱量也不一樣，當每天攝取的熱量和
              TDEE 相等，便達到「熱量平衡」。
            </Section>
            <Section sx={{ height: '500px', marginTop: 5 }}>
              <h1>飲食建議</h1>
              <NuBox sx={{ border: NuBorder, borderRadius: NuBorderRadius }}>
                <NuBox sx={{ display: 'flex', flexDirection: 'row' }}>
                  <NuBox
                    sx={{
                      width: '50%',
                      borderRight: NuBorder,
                      borderBottom: NuBorder,
                    }}
                  >
                    <NuBox className={`${style.nutritionMainText}`}>
                      全穀雜糧類
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                    <NuBox>
                      <NuBox className={`${style.nutritionSecondaryText}`}>
                        未精緻
                        <span className={`${style.nutritionSecondaryNumber}`}>
                          12
                        </span>
                        份
                      </NuBox>
                      <NuBox className={`${style.nutritionSecondaryText}`}>
                        其他
                        <span className={`${style.nutritionSecondaryNumber}`}>
                          12
                        </span>
                        份
                      </NuBox>
                    </NuBox>
                  </NuBox>

                  <NuBox
                    sx={{
                      width: '50%',
                      height: '100%',
                      borderBottom: NuBorder,
                    }}
                  >
                    <NuBox
                      className={`${style.nutritionMainText}`}
                      sx={{ borderBottom: NuBorder, height: '50%' }}
                    >
                      豆魚蛋肉
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                    <NuBox
                      className={`${style.nutritionMainText}`}
                      sx={{ height: '50%' }}
                    >
                      乳品類
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                  </NuBox>
                </NuBox>
                {/* ================================================ */}
                <NuBox sx={{ display: 'flex', flexDirection: 'row' }}>
                  <NuBox sx={{ width: '50%', borderRight: NuBorder }}>
                    <NuBox className={`${style.nutritionMainText}`}>
                      油脂與堅果種子
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                    <NuBox>
                      <NuBox className={`${style.nutritionSecondaryText}`}>
                        油脂
                        <span className={`${style.nutritionSecondaryNumber}`}>
                          12
                        </span>
                        份
                      </NuBox>
                      <NuBox className={`${style.nutritionSecondaryText}`}>
                        堅果種子
                        <span className={`${style.nutritionSecondaryNumber}`}>
                          12
                        </span>
                        份
                      </NuBox>
                    </NuBox>
                  </NuBox>

                  <NuBox
                    sx={{
                      width: '50%',
                      height: '100%',
                    }}
                  >
                    <NuBox
                      className={`${style.nutritionMainText}`}
                      sx={{ height: '50%', borderBottom: NuBorder }}
                    >
                      蔬菜類
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                    <NuBox
                      className={`${style.nutritionMainText}`}
                      sx={{ height: '50%' }}
                    >
                      水果類
                      <span className={`${style.nutritionMainNumber}`}>12</span>
                      份
                    </NuBox>
                  </NuBox>
                </NuBox>
              </NuBox>
            </Section>
          </Grid>
        </Grid>
      </div>
      {/* =================================================================== */}
      {/* === page 2 ========================================================= */}
      {/* =================================================================== */}
      <div id="page-2" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        {/* <div sx={{ padding: '64px' }}> */}
        <Grid container justifyContent="center">
          {/* ============================================================================ */}
          {/* ============================================================================ */}

          <Grid
            item
            lg={7}
            sm={8}
            sx={{
              p: 2,
            }}
          >
            <Section>
              <h1>規劃你的飲食</h1>
              <CUISearch
                sx={{ width: '40%' }}
                label="搜尋食物類型"
                placeholder="請輸入關鍵字"
              />
              <CUISelect
                sx={{ width: '40%' }}
                label="食物分類"
                options={selections}
              />
            </Section>
            <SUICardList type="food" list={foodType} rowRWD={[6, 6, 3, 3, 2]} />
          </Grid>

          {/* ============================================================================ */}

          <Grid
            item
            lg={5}
            sm={4}
            sx={{
              // outline: '3px solid blue',
              p: 2,
              display: 'flex',
              alignItems: 'center',
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
                    加入規劃
                  </CUIButton>
                </Box>
              </Section>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '60px',
                  borderTop: myBorder,
                  bgcolor: 'var(  --steel-light-grey)',
                  boxShadow: 'rgba(0, 0, 0, 0.3) 0 15px 15px',
                  paddingLeft: 1.5,
                  paddingRight: 4,
                }}
              >
                <Box
                  sx={{
                    ...scheduleTitle,
                    width: scheduleItemWdith[0],
                  }}
                >
                  食物種類
                </Box>
                <Box sx={{ ...scheduleTitle, width: scheduleItemWdith[1] }}>
                  份量
                </Box>
                <Box
                  sx={{
                    ...scheduleTitle,
                    width: scheduleItemWdith[2],
                    textAlign: 'center',
                  }}
                >
                  卡路里 (kcal)
                </Box>
                <Box
                  sx={{
                    ...scheduleTitle,
                    width: scheduleItemWdith[3],
                    borderRight: 'none',
                    textAlign: 'center',
                  }}
                >
                  蛋白質 (g)
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
                <SUISchedule list={dietList} />
              </Section>
            </SUIScheduleTable>
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
        <Box justifyContent="center" sx={{ width: '100%', height: '100%' }}>
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

                events={dietList.map((exercise, index) => {
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
      </div>

      {/* =================================================================== */}
      {/* === page 4 ========================================================= */}
      {/* =================================================================== */}
      <div
        id="page-4"
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
