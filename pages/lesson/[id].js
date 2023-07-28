import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

import Image from 'next/image';
import LessonCard from '@/components/lesson/lesson-card';
import BrickWallPaper from '@/components/brick-wallpaper';

import {
  containerStyle,
  cardBoxStyle,
  imgBoxStyle,
  cardBodyStyle,
  cardBodyTitle,
  cardBodyInfo,
  tagStyle,
  coachNameBoxStyle,
  lessonsBoxStyle,
  lessonsCardGridStyle,
} from '@/styles/lesson-style/lesson-id-style';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/lesson/categories');
  const data = await res.json();

  const paths = data.map((ct) => ({ params: { id: ct.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3001/lesson?category=${id}`);
  const data = await res.json();

  return {
    props: {
      lessons: data,
    },
  };
};

const CertainLessonPage = ({ lessons }) => {
  return (
    <Box>
      {/* {console.log(lessons)} */}
      <BrickWallPaper />
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
            <Typography variant="subtitle1" sx={cardBodyInfo}>
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
                sx={tagStyle}
              />
            ))}
            <Box sx={coachNameBoxStyle}>
              <Typography variant="h6">指導教練</Typography>
              {['可達鴨', '大蔥鴨'].map((name) => (
                <Typography key={name} variant="h5">
                  {name}
                </Typography>
              ))}
            </Box>
          </CUICard>
        </Box>
        <Box sx={lessonsBoxStyle}>
          <Grid container sx={lessonsCardGridStyle}>
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
                  sm={11}
                  md={8}
                  lg={5.75}
                  xl={5.75}
                >
                  {/* <LessonCard lesson={lesson} coachcard /> */}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CertainLessonPage;
