import { useState } from 'react';

import { Box, IconButton, ToggleButtonGroup } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import LessonCard from './lesson-card';
import UiButton from './UiButton';

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
  '@media (max-width: 1000px)': {
    width: '100%',
  },
  borderRadius: '3px',
};

const headerStyle = {
  position: 'sticky',
  top: '1rem',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 3px 5px #555',
  backdropFilter: 'blur(5px)',
  bgcolor: 'rgba(180, 180, 180, .95)',
  borderRadius: '3px',
  zIndex: 2,
};

const filterIconStyle = {
  visibility: 'hidden',
  position: 'absolute',
  top: '120%',
  left: '.5rem',
  bgcolor: 'var(--steel-grey)',
  color: 'white',
  borderRadius: '50%',
  transition: 'transform .2s',
  ':hover': {
    transform: 'scale(1.2)',
    bgcolor: 'var(--steel-grey)',
  },
  '@media (max-width: 1000px)': {
    visibility: 'visible',
  },
};

const RightSide = ({ showFilter }) => {
  const [location, setLocation] = useState('Taipei');
  const [displayMode, setDisplayMode] = useState('list');

  return (
    <Box sx={rightSideStyle}>
      <Box sx={headerStyle}>
        <Box>
          <ToggleButtonGroup
            value={location}
            exclusive
            aria-label="lessonlocation"
            onChange={(event, value) => value !== null && setLocation(value)}
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
          aria-label="displayMode"
          sx={{ marginLeft: 'auto' }}
          onChange={(event, value) => value !== null && setDisplayMode(value)}
        >
          <UiButton
            value="list"
            aria-label="list"
            sx={{ paddingInline: '.7rem' }}
          >
            <FormatListBulletedOutlinedIcon size="small" />
          </UiButton>
          <UiButton
            value="calendar"
            aria-label="calendar"
            sx={{ paddingInline: '.7rem', marginRight: 0 }}
          >
            <CalendarMonthIcon />
          </UiButton>
        </ToggleButtonGroup>
        <IconButton size="large" sx={filterIconStyle} onClick={showFilter}>
          <FilterAltIcon />
        </IconButton>
      </Box>
      {displayMode === 'list' ? (
        [
          ...lessonData,
          ...lessonData,
          ...lessonData,
          ...lessonData,
          ...lessonData,
          ...lessonData,
          ...lessonData,
          ...lessonData,
        ].map((lesson, index) => <LessonCard key={index} lesson={lesson} />)
      ) : (
        <>
          <Box
            sx={{
              position: 'sticky',
              top: '7rem',
              bgcolor: '#333',
              borderRadius: '5px',
              padding: '2%',
            }}
          >
            <FullCalendar
              aspectRatio={1.7}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              dayMaxEventRows={2}
              // dateAlignment
              eventColor="var(--steel-grey)"
              // eventShortHeight={}
              events={[
                {
                  id: 1,
                  title: 'asean',
                  start: '2023-07-12 14:00:00',
                  end: '2023-07-12 16:00:00',
                },
                {
                  id: 2,
                  title: 'seanseanseanseanseansean',
                  start: '2023-07-12',
                  url: '/',
                },
                {
                  id: 3,
                  title: 'tsean',
                  start: '2023-07-12',
                },
              ]}
              // headerToolbar={false}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default RightSide;
