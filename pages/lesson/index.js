import {
  Box,
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import Image from 'next/image';
import Banner from '@/components/lesson-banner';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIFilter from '@/components/customUI/cui-filter';
import CUICard from '@/components/customUI/cui-card';
import WhiteTheme from '@/context/Theme/white-theme';

const tagsData = ['有氧', '健力', '腿部肌力', '瑜珈'];
const lessonData = [
  {
    lessonName: '水阻划船入門',
    img: '/lesson-img/abs.jpg',
    time: '2024/05/06 14:00',
    description:
      '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
    coachName: '蔡岱峯',
    price: '600',
    enrolled: 10,
    limit: 20,
    tags: ['有氧', '核心鍛鍊', '腿部肌力'],
    location: '台北館',
  },
  {
    lessonName: '水阻划船入門',
    img: '/lesson-img/abs1.jpg',
    time: '2024/05/06 14:00',
    description:
      '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
    coachName: '蔡岱峯',
    price: '600',
    enrolled: 10,
    limit: 20,
    tags: ['有氧', '核心鍛鍊', '腿部肌力'],
    location: '台北館',
  },
  {
    lessonName: '水阻划船入門',
    img: '/lesson-img/core.jpg',
    time: '2024/05/06 14:00',
    description:
      '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
    coachName: '蔡岱峯',
    price: '600',
    enrolled: 10,
    limit: 20,
    tags: ['有氧', '核心鍛鍊', '腿部肌力'],
    location: '台北館',
  },
  {
    lessonName: '水阻划船入門',
    img: '/lesson-img/functional.jpg',
    time: '2024/05/06 14:00',
    description:
      '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
    coachName: '蔡岱峯',
    price: '600',
    enrolled: 10,
    limit: 20,
    tags: ['有氧', '核心鍛鍊', '腿部肌力'],
    location: '台北館',
  },
];

const mainContentStyle = {
  width: '100%',
  backdropFilter: 'blur(50px)',
  color: 'white',
  bgcolor: 'rgba(85, 85, 85, .8)',
  boxShadow: '0 -5px 15px #333',
  position: 'relative',
};

const flexRowSpaceBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const containerStyle = {
  p: '2rem',
};

const rightSideStyle = {
  width: '70%',
  bgcolor: 'var(--deepgrey)',
  borderRadius: '3px',
  padding: '2rem',
};

const UiButton = (props) => (
  <ToggleButton
    size="large"
    {...props}
    sx={{
      bgcolor: '#eee',
      color: 'var(--main-black)',
      borderTopLeftRadius: '3px !important',
      borderTopRightRadius: '3px !important',
      borderBottomRightRadius: '3px !important',
      borderBottomLeftRadius: '3px !important',
      paddingBlock: '.5rem',
      paddingInline: '1.5rem',
      fontWeight: 'bold',
      marginRight: '1rem',
      transition: '.2s',
      ':hover': {
        bgcolor: '#bbb',
      },
      '&.Mui-selected': {
        bgcolor: 'var(--main-red)',
        color: 'white',
      },
      '&.Mui-selected:hover': {
        bgcolor: 'var(--main-red)',
        filter: 'brightness(90%)',
      },

      ...props.sx,
    }}
  >
    {props.children}
  </ToggleButton>
);

const LessionPage = () => {
  return (
    <Box>
      <Banner />
      <Box sx={mainContentStyle}>
        <Container sx={containerStyle}>
          <Typography
            id="findYourLesson"
            variant="h4"
            sx={{ textAlign: 'center', py: 4, mb: '2rem' }}
          >
            尋找您喜愛的課程
          </Typography>
          <Box sx={flexRowSpaceBetween}>
            <CUIFilter
              sx={{
                width: '25%',
                position: 'sticky',
                top: '2rem',
                bgcolor: '#eee',
              }}
              label="篩選器"
              items={[
                <CUISearch
                  key={1}
                  label="課程關鍵字"
                  placeholder="請輸入關鍵字"
                />,
                <CUISelect key={2} label="課程標籤" options={tagsData} />,
                <CUISlider key={3} label="價格範圍" />,
              ]}
            />
            <Box sx={rightSideStyle}>
              <WhiteTheme>
                <Box
                  sx={{
                    position: 'sticky',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '5rem',
                    paddingTop: '2rem',
                    boxShadow: '0 5px 0 5px var(--deepgrey), 0 12px 5px #333',
                    transform: 'translateY(-2rem)',
                    top: '2rem',
                    bgcolor: 'var(--deepgrey)',
                    zIndex: 2,
                  }}
                >
                  <Box>
                    <ToggleButtonGroup
                      value={'Taipei'}
                      exclusive
                      aria-label="lesson location"
                    >
                      <UiButton value="Taipei" aria-label="Taipei">
                        台北
                      </UiButton>
                      <UiButton value="Taichung" aria-label="Taichung">
                        台中
                      </UiButton>
                      <UiButton value="Kaohsiung" aria-label="Kaohsiung">
                        高雄
                      </UiButton>
                    </ToggleButtonGroup>
                  </Box>
                  <ToggleButtonGroup
                    value={'list'}
                    exclusive
                    aria-label="lesson location"
                    sx={{ marginLeft: 'auto' }}
                  >
                    <UiButton value="list" sx={{ paddingInline: '.7rem' }}>
                      <FormatListBulletedOutlinedIcon size="small" />
                    </UiButton>
                    <UiButton
                      value="calendar"
                      sx={{ paddingInline: '.7rem', marginRight: 0 }}
                    >
                      <CalendarMonthIcon />
                    </UiButton>
                  </ToggleButtonGroup>
                  {/* <UiButton>
                      <label
                        htmlFor="location-Taipei"
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        台北
                      </label>
                    </UiButton>
                    <input
                      type="radio"
                      name="location"
                      id="location-Taipei"
                      value="location-Taipei"
                      // hidden
                    />
                    <UiButton>
                      <label htmlFor="location-Taichung">台中</label>
                    </UiButton>
                    <input
                      type="radio"
                      name="location"
                      id="location-Taichung"
                      // hidden
                    />
                    <UiButton>
                      <label htmlFor="location-Kaohsiung">高雄</label>
                    </UiButton>
                    <input
                      type="radio"
                      name="location"
                      id="location-Kaohsiung"
                      // hidden
                    /> */}
                </Box>
              </WhiteTheme>
              {[
                ...lessonData,
                ...lessonData,
                ...lessonData,
                ...lessonData,
                ...lessonData,
                ...lessonData,
                ...lessonData,
                ...lessonData,
              ].map((lesson, index) => (
                <CUICard
                  key={index}
                  sx={{
                    width: '100%',
                    height: '200px',
                    marginBottom: '1.5rem',
                    bgcolor: '#eee',
                    display: 'flex',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '30%',
                      height: '100%',
                      left: '-10%',
                      overflow: 'hidden',
                      transform: 'scale(1.75) rotateZ(15deg)',
                      boxShadow: '1px 0 3px #555',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '125%',
                        height: '100%',
                        transform: 'rotateZ(-15deg)',
                      }}
                    >
                      <Image
                        alt="lessonImg"
                        src={lesson.img}
                        fill
                        style={{
                          width: '100%',
                          height: '100%',
                          filter: 'brightness(90%)',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: '65%',
                      padding: '1rem',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ textAlign: 'center', fontWeight: 'bold' }}
                    >
                      {lesson.lessonName}
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          verticalAlign: 'text-top',
                          color: 'var(--main-red)',
                        }}
                      />
                      {/* <FavoriteOutlinedIcon
                        sx={{
                          verticalAlign: 'text-top',
                          color: 'var(--main-red)',
                        }}
                      /> */}
                    </Typography>
                  </Box>
                </CUICard>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LessionPage;
