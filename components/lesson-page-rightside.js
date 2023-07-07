import {
  Box,
  ToggleButton,
  Typography,
  ToggleButtonGroup,
} from '@mui/material';
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import CUICard from '@/components/customUI/cui-card';
import WhiteTheme from '@/context/Theme/white-theme';

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

const headerStyle = {
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
};

const RightSide = () => (
  <Box sx={rightSideStyle}>
    <WhiteTheme>
      <Box sx={headerStyle}>
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
);

export default RightSide;
