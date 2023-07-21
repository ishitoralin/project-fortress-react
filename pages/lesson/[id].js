import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

import Image from 'next/image';
import LessonCard from '@/components/lesson/lesson-card';

import getBrickBackground from '@/libs/getBrickBackground';

const containerStyle = { py: '2rem' };

const cardBoxStyle = {
  '--bigCard-height': '380px',
  '--imgBox-ratio': '80%',
  '--contentCard-width': '90%',
  '--contentCard-radius': 'clamp(5px, .5rem, 15px)',

  position: 'relative',
  overflow: 'hidden',
  height: 'var(--bigCard-height)',
  bgcolor: 'rgba(255, 255, 255, 0)',
  width: '100%',
  margin: 'auto',
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
    // boxShadow: 'inset 0 0 15px #fff',
  },
};

const imgBoxStyle = {
  position: 'absolute',
  opacity: 0,
  overflow: 'hidden',
  borderRadius: 'var(--contentCard-radius)',
  width: 'var(--contentCard-width)',
  height: 'var(--imgBox-ratio)',
  animation: '2s ease-out fade-in forwards',
  '@keyframes fade-in': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

const cardBodyStyle = {
  position: 'absolute',
  width: 'var(--contentCard-width)',
  right: '-100%',
  bottom: '0',
  padding: 4,
  borderRadius: 'var(--contentCard-radius)',
  bgcolor: 'rgba(235, 235, 235, 0.97)',
  animation: '1.5s ease-out 0.5s slide-left forwards',
  '@keyframes slide-left': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-115%)',
    },
  },
};

const cardBodyTitle = {
  position: 'relative',
  ':before': {
    position: 'absolute',
    content: '""',
    bottom: '-0.5rem',
    height: '2px',
    bgcolor: 'var(--steel-grey)',
    animation: '1s ease-in-out 1.75s spread forwards',
  },
  '@keyframes spread': {
    '0%': {
      width: '0%',
      left: '50%',
    },
    '100%': {
      width: '102%',
      left: '-1%',
    },
  },
};

const CertainLessonPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--deepgrey)',
        backgroundAttachment: 'fixed',
        backgroundImage: getBrickBackground(),
      }}
    >
      <Container sx={containerStyle}>
        <Box sx={cardBoxStyle}>
          <CUICard sx={imgBoxStyle}>
            <Image
              alt="lesson-img"
              src="/lesson-img/functional.jpg"
              fill
              style={{ objectFit: 'cover' }}
            />
          </CUICard>
          <CUICard sx={cardBodyStyle}>
            <Typography variant="h4" sx={cardBodyTitle}>
              瑜珈流動與冥想課程
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: 4,
                marginBottom: 2,
                paddingInline: 2,
                textIndent: '2rem',
              }}
            >
              這個課程以流動的瑜伽動作和呼吸練習為基礎，融合了力量、靈活性和平衡。透過連貫的動作流，你將提升身體柔軟度、強化肌肉，同時培養身心的平靜和集中力。
            </Typography>
            {[
              '有氧',
              '心肺',
              '拳擊',
              '格鬥',
              '瑜珈',
              '壺鈴',
              '健力',
              '健美',
              '健體',
              '核心',
            ].map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color={'steel_grey'}
                sx={{
                  marginRight: '.7rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  letterSpacing: '.2rem',
                  fontSize: '.8rem',
                  fontWeight: 'bold',
                  paddingBottom: '.1rem',
                  paddingLeft: '.2rem',
                }}
              />
            ))}
            <Box
              sx={{
                width: 'fit-content',
                marginLeft: 'auto',
                borderBottom: '2px solid var(--steel-grey)',
                'h5, h6': {
                  display: 'inline-block',
                },
                h6: {
                  marginRight: '1rem',
                },
                h5: {
                  marginLeft: '1rem',
                },
              }}
            >
              <Typography variant="h6">指導教練</Typography>
              {['可達鴨', '大蔥鴨'].map((name) => (
                <Typography key={name} variant="h5">
                  {name}
                </Typography>
              ))}
            </Box>
          </CUICard>
        </Box>
        <Box sx={{ marginTop: '2rem', py: 4, width: '100%' }}>
          <Grid container sx={{ justifyContent: 'start', gap: '2rem' }}>
            {Array(10)
              .fill({
                lessonName: '水阻划船入門',
                img: '/coach-img/emily.jpg',
                time: '2024/05/06 14:00',
                description:
                  '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
                coachName: '蔡岱峯',
                price: '600',
                enrolled: 10,
                limit: 20,
                tags: [
                  '有氧',
                  '心肺',
                  '拳擊',
                  '格鬥',
                  '瑜珈',
                  '壺鈴',
                  '健力',
                  '健美',
                  '健體',
                  '核心',
                ],
                location: '台北館',
              })
              .map((lesson, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={5.75}
                  lg={5.75}
                  xl={5.75}
                >
                  <LessonCard lesson={lesson} coachcard />
                  {/* <CUICard sx={{ p: 3, bgcolor: '#eee', height: '200px' }}>
                  <Typography variant="h6">Lesson title</Typography>
                  <Typography variant="subtitle" sx={{ ...row }}>
                    指導教練: 蔡呆岱
                  </Typography>
                  <Typography variant="subtitle" sx={{ ...row }}>
                    課程時間: 2024 / 07 / 27
                  </Typography>
                  <Typography variant="subtitle" sx={{ ...row }}>
                    報名人數: 2 / 10
                  </Typography>
                  <Typography variant="subtitle" sx={{ ...row }}>
                    報名人數: 2 / 10
                  </Typography>
                </CUICard> */}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CertainLessonPage;
