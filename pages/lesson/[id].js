import { Box, Container, Grid, Typography } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

import LessonCardNoImg from '@/components/lesson/lesson-card-no-img';

import Image from 'next/image';
import { useRouter } from 'next/router';
import LessonCard from '@/components/lesson/lesson-card';

const containerStyle = { py: '2rem' };

const bigCardStyle = {
  '--bigCard-height': '400px',
  '--imgBox-ratio': '55%',

  position: 'relative',
  overflow: 'hidden',
  height: 'var(--bigCard-height)',
  bgcolor: 'rgba(255, 255, 255, 0.05)',
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
    boxShadow: 'inset 0 0 15px #fff',
  },
};

const imgBoxStyle = {
  position: 'relative',
  width: '100%',
  height: 'var(--imgBox-ratio)',
};

const bigCardBodyStyle = {
  position: 'absolute',
  width: '96%',
  left: '2%',
  top: '70%',
  padding: 4,
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
  bgcolor: 'rgba(0, 0, 0, 0.45)',
  color: '#eee',
  // backdropFilter: 'blur(5px)',
  animation: '0.75s ease-out 1s slide-up forwards',
  '@keyframes slide-up': {
    '0%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(calc(-90% + 120px))',
    },
  },
};

const cardBodyTitle = {
  position: 'relative',
  margin: '.5rem',
  ':before': {
    position: 'absolute',
    content: '""',
    bottom: '-0.75rem',
    height: '3px',
    bgcolor: '#eee',
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

const row = {
  display: 'block',
};

const CertainLessonPage = () => {
  return (
    <Box
      sx={{
        // minHeight: 'calc(100vh - var(--nav-height) - var(--footer-height))',
        backgroundColor: 'var(--deepgrey)',
        backgroundAttachment: 'fixed',
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(25, 0%, 100%, 0)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'  stroke-width='1.5' stroke='hsla(38, 0%, 30%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-14)' fill='url(%23a)'/></svg>")`,
      }}
    >
      <Container sx={containerStyle}>
        <CUICard sx={bigCardStyle}>
          <Box sx={imgBoxStyle}>
            <Image
              alt="lesson-img"
              src="/lesson-img/abs1.jpg"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <CUICard sx={bigCardBodyStyle}>
            <Typography variant="h4" sx={cardBodyTitle}>
              瑜珈流動與冥想課程
            </Typography>
            <Typography variant="h6" sx={{ padding: 2, textIndent: '2rem' }}>
              這個課程以流動的瑜伽動作和呼吸練習為基礎，融合了力量、靈活性和平衡。透過連貫的動作流，你將提升身體柔軟度、強化肌肉，同時培養身心的平靜和集中力。
            </Typography>
          </CUICard>
        </CUICard>
        <Box sx={{ marginTop: '2rem', py: 4, width: '100%' }}>
          <Grid container sx={{ justifyContent: 'start', gap: '2rem' }}>
            {Array(10)
              .fill({
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
                  <LessonCardNoImg lesson={lesson}></LessonCardNoImg>
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
