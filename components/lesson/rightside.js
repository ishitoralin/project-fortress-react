import { useState } from 'react';

import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import LessonCard from './lesson-card';
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
  width: '65%',
  borderRadius: '3px',
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
      ':hover': {
        transition: '.2s',
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
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 3px 5px #555',
  backdropFilter: 'blur(5px)',
  top: '2rem',
  bgcolor: 'rgba(180, 180, 180, .95)',
  borderRadius: '3px',
  zIndex: 2,
};

const RightSide = () => {
  const [location, setLocation] = useState('Taipei');
  const [displayMode, setDisplayMode] = useState('list');

  return (
    <Box sx={rightSideStyle}>
      <WhiteTheme>
        <Box sx={headerStyle}>
          <Box>
            <ToggleButtonGroup
              value={location}
              exclusive
              aria-label="lesson location"
              onChange={(e) => setLocation(e.target.value)}
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
            value={displayMode}
            exclusive
            aria-label="lesson location"
            sx={{ marginLeft: 'auto' }}
            onChange={(event) => setDisplayMode(event.target.value)}
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
        <LessonCard key={index} lesson={lesson} />
      ))}
    </Box>
  );
};

export default RightSide;
