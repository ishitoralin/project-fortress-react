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
import BodySvg from '@/components/bodySvg';
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

const activity = [
  { value: 1.2, label: '身體活動趨於靜態(BMR x 1.2)' },
  { value: 1.375, label: '輕量活動(BMR x 1.375)' },
  { value: 1.55, label: '中度活動量(BMR x 1.55)' },
  { value: 1.72, label: '高度活動量(BMR x 1.72)' },
  { value: 1.9, label: '非常高度活動量(BMR x 1.9)' },
];

const plotType = ['臥推', '深蹲', '硬舉', '保加利雅深蹲'];
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

const DietPage = () => {
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const inputDefault = {
    age: { value: null, error: false, text: '' },
    height: { value: null, error: false, text: '' },
    weight: { value: null, error: false, text: '' },
  };
  const pHelperText = '請輸入正數';
  const pIHelperText = '請輸入正整數';
  // regular expression for positive Integer, cant be zero
  const regexPInt = /^[1-9]\d*$/;
  // regular expression for positive number, cant be zero
  const regexP = /^(?!0\d)(?:\d*\.\d+|\d+)$/;
  const [bodyData, setBodyData] = useState(inputDefault); //=== for input
  const [gender, setGender] = useState(''); // State to hold the selected gender

  const handleGenderRadio = (event) => {
    setGender(event.target.value);
  };
  //========
  const foodInit = { key: 0, value: '全部', label: '全部' };
  // const router = useRouter();
  const [foodType, setFoodType] = useState([]);
  const [foodCategory, setFoodCategory] = useState([foodInit]);
  const foodCategorys = useRef([foodInit]); //=== for selection options
  const [multiplier, setMultiplier] = useState(null);

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
              <h1>計算你的基礎代謝率</h1>
              <FormControl component="fieldset">
                <RadioGroup
                  name="gender"
                  value={gender}
                  onChange={handleGenderRadio}
                >
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
              <CUITextField
                id="age"
                label="年齡(yrd)"
                type="number"
                helperText={bodyData.age.text}
                error={bodyData.age.error}
                onChange={(e) => {
                  // >>> if pass exam, setSelectedItem, else setInputExam give error
                  const value = e.target.value;
                  // console.log(bodyData);
                  if (regexPInt.test(value)) {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        age: { value: value, error: false, text: '' },
                      };
                    });
                  } else {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        age: { value: '', error: true, text: pIHelperText },
                      };
                    });
                  }
                  // <<< if pass exam, setSelectedItem, else setInputExam give error
                }}
              />

              <CUITextField
                id="weight"
                label="身高(cm)"
                type="number"
                helperText={bodyData.height.text}
                error={bodyData.height.error}
                onChange={(e) => {
                  const value = e.target.value;
                  if (regexP.test(value)) {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        height: { value: value, error: false, text: '' },
                      };
                    });
                  } else {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        height: {
                          value: '',
                          error: true,
                          text: pHelperText,
                        },
                      };
                    });
                  }
                }}
              />

              <CUITextField
                id="weight"
                label="體重(kg)"
                type="number"
                helperText={bodyData.weight.text}
                error={bodyData.weight.error}
                onChange={(e) => {
                  // >>> if pass exam, setSelectedItem, else setInputExam give error
                  const value = e.target.value;
                  if (regexP.test(value)) {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        weight: { value: value, error: false, text: '' },
                      };
                    });
                  } else {
                    setBodyData((prev) => {
                      return {
                        ...prev,
                        weight: {
                          value: '',
                          error: true,
                          text: pHelperText,
                        },
                      };
                    });
                  }
                  // <<< if pass exam, setSelectedItem, else setInputExam give error
                }}
              />

              <CUISelect
                sx={{ width: '100%', m: 1 }}
                label="活動型態"
                options={activity}
                onChange={(e) => {
                  setMultiplier(e.target.value);
                  // console.log(multiplier);
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  m: 1,
                }}
              >
                {/* {console.log(multiplier)} */}
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
