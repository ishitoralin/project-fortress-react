import { Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';

// =========================================================================
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIButton from '@/components/customUI/cui-button';
import CUITextField from '@/components/customUI/cui-textfield';
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
import FullCalendarLayout from '@/components/fullcalendar/layout';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
// =========================================================================
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// =========================================================================
import style from './record.module.css';
// =========================================================================
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// =========================================================================
import DietFisrtPage from '@/components/recordPage/dietFirstPage';

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
    calories: 10000,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    calories: 12000,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    calories: 12,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    calories: 12000,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    calories: 12,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '青醬滷肉飯',
    quantity: 20,
    calories: 12000,
    protein: 5,
    date: '2023-07-16',
  },
  {
    name: '快炒白土司佐芝麻',
    quantity: 60,
    calories: 12,
    protein: 5,
    date: '2023-07-16',
  },
];

//<<< pseudo-data

//>>> style
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

//<<< style
const activity = [
  { value: 1.2, label: '身體活動趨於靜態(BMR x 1.2)' },
  { value: 1.375, label: '輕量活動(BMR x 1.375)' },
  { value: 1.55, label: '中度活動量(BMR x 1.55)' },
  { value: 1.72, label: '高度活動量(BMR x 1.72)' },
  { value: 1.9, label: '非常高度活動量(BMR x 1.9)' },
];
const TDEEcalculate = (gender, bodyData, multiplier) => {
  // ref: https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation
  // console.log(gender, bodyData, multiplier);
  let TDEE;

  if (gender === 'female') {
    TDEE =
      10 * bodyData.weight.value +
      6.25 * bodyData.height.value -
      5 * bodyData.age.value -
      161;
  } else {
    TDEE =
      10 * bodyData.weight.value +
      6.25 * bodyData.height.value -
      5 * bodyData.age.value +
      5;
  }

  TDEE *= multiplier;
  return Math.round(TDEE);
  //   Females: (10*weight [kg]) + (6.25*height [cm]) – (5*age [years]) – 161
  // Males: (10*weight [kg]) + (6.25*height [cm]) – (5*age [years]) + 5
  // Multiply by scale factor for activity level:
  // Sedentary *1.2
  // Lightly active *1.375
  // Moderately active *1.55
  // Active *1.725
  // Very active *1.9
};

const BMIcalculate = (bodyData) => {
  return Number(
    (bodyData.weight.value / (bodyData.height.value / 100) ** 2).toFixed(1)
  );
};

const DietPage = () => {
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const foodInit = { key: 0, value: '全部', label: '全部' };
  // const router = useRouter();
  const [foodType, setFoodType] = useState([]);
  const [foodCategory, setFoodCategory] = useState([foodInit]);
  const foodCategorys = useRef([foodInit]); //=== for selection options

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // >>> initiallize
  useEffect(() => {
    // TODO: debounce
    fetch(`${process.env.SEAN_API_SERVER}/food-type/food-category`)
      .then((r) => r.json())
      .then((data) => {
        data.data.unshift(foodInit);
        foodCategorys.current = data.data;
      });

    fetch(`${process.env.SEAN_API_SERVER}/food-type/food-type`)
      .then((r) => r.json())
      .then((data) => {
        setFoodType(data.rows);
      });
  }, []);
  // <<< initiallize
  //TODO: search keyword

  //>>> filter by food category
  useEffect(() => {
    fetch(
      `${process.env.SEAN_API_SERVER}/food-type/food-type/food-category/${foodCategory[0].key}`
    )
      .then((r) => r.json())
      .then((data) => {
        setFoodType(data.data);
      });
  }, [foodCategory]);
  //<<< filter by food category
  const handleFoodCategorySelection = (e) => {
    // router.push(`?food-category=` + e.target.value);
    setFoodCategory(
      foodCategorys.current.filter((x) => x.value === e.target.value)
    );
  };
  return (
    <>
      {/* =================================================================== */}
      {/* === page 1 ========================================================= */}
      {/* =================================================================== */}
      <DietFisrtPage />
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
              <CUISelect
                sx={{ width: '40%' }}
                label="食物分類"
                // TODO: default value, on click
                defaultValue={foodCategorys.current[0].value}
                options={foodCategorys.current}
                onChange={(e) => {
                  handleFoodCategorySelection(e);
                }}
              />
              <CUISearch
                sx={{ width: '40%' }}
                label="搜尋食物類型"
                placeholder="請輸入關鍵字"
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
          ></Grid>
        </Grid>
      </div>
      {/* =================================================================== */}
      {/* === page 3 ========================================================= */}
      {/* =================================================================== */}

      {/* =================================================================== */}
      {/* === page 4 ========================================================= */}
      {/* =================================================================== */}
    </>
  );
};

export default DietPage;
