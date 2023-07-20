import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import {
  coachCardBoxStyle,
  imageBoxStyle,
  cardGridStyle,
  cardBehindStyle,
  cardFrontStyle,
  cardInfoStyle,
  cardTitleStyle,
} from '@/styles/coach-style/coach-info-card-style';

import getBrickBackground from '@/libs/getBrickBackground';
import LessonCard from '@/components/lesson/lesson-card';
import CUICard from '@/components/customUI/cui-card';

const CoachPage = () => {
  return (
    <Box
      sx={{
        py: 4,
        position: 'relative',
        width: '100%',
        // height: '100%',
        ':before': {
          //   content: '""',
          position: 'absolute',
          width: '80%',
          height: '82%',
          top: '9%',
          left: '10%',
          border: '3px solid white',
        },
        backgroundImage: getBrickBackground({
          rotate: -5,
          brickColor: 'hsl(0, 0%, 20%)',
        }),
        backgroundAttachment: 'fixed',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* <CUICard sx={{ bgcolor: 'rgba(220, 220, 220, 0.95)', height: '90vh' }}> */}
        <Box
          sx={{
            padding: 2,
            display: 'inline-block',
            verticalAlign: 'top',
            // width: 0,
            position: 'sticky',
            top: '1rem',
            // border: '2px solid grey',
            aspectRatio: '9 / 12',
            height: 'calc(100vh - var(--nav-height) - var(--footer-height))',
          }}
        >
          <Box sx={imageBoxStyle}>
            <Image
              fill
              alt="coach-img"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
              src={'/coach-img/emily.jpg'}
            ></Image>
          </Box>
          <Box sx={cardGridStyle}>
            <Box sx={coachCardBoxStyle}>
              <Box sx={cardBehindStyle}>
                <Typography sx={cardTitleStyle} variant="h5">
                  Jessica
                </Typography>
              </Box>
              <Typography sx={cardFrontStyle}>
                嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            // width: '60%',
            flexGrow: 1,
            zIndex: 5,
            // height: '200vh',
            // marginLeft: '10%',
            // border: '2px solid tan',
            // display: 'inline-block',
          }}
        >
          {[...Array(10)].map((value, index) => (
            <LessonCard
              key={index}
              lesson={{
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
              }}
            />
          ))}
        </Box>
        {/* </CUICard> */}
      </Container>
    </Box>
  );
};

export default CoachPage;
