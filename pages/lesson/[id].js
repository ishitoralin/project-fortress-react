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
  locationTitleStyle,
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
  const getCategoryUrl = `http://localhost:3001/lesson/categories?id=${id}`;
  const getLessonsUrl = `http://localhost:3001/lesson?category=${id}`;

  const [category, lessons] = await Promise.all(
    [getCategoryUrl, getLessonsUrl].map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    })
  );

  const lessonsAddCoachImg = lessons.map((lesson) => {
    const [coach] = category.coachs.filter(
      (coach) => coach.sid === lesson.coach_sid
    );
    return {
      ...lesson,
      coach_img: coach.img,
      coach_img_base64: coach.img_base64,
    };
  });

  return {
    props: {
      category,
      lessons: lessonsAddCoachImg,
    },
  };
};

const CertainLessonPage = ({ category, lessons }) => {
  const lessonsGate = [
    {
      location: 'taipei',
      title: '台北館',
      lessons: [],
    },
    {
      location: 'taichung',
      title: '台中館',
      lessons: [],
    },
    {
      location: 'kaohsiung',
      title: '高雄館',
      lessons: [],
    },
  ];

  lessons.forEach((lesson) => {
    lessonsGate.forEach(
      (item) => item.location === lesson.location && item.lessons.push(lesson)
    );
  });

  return (
    <Box>
      <BrickWallPaper />
      <Container sx={containerStyle}>
        <Box sx={cardBoxStyle}>
          <CUICard sx={imgBoxStyle}>
            <Image
              alt="lesson-img"
              src={`/lesson-img/${category.img}`}
              blurDataURL={`/lesson-img/${category.img_base64}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </CUICard>
          <CUICard sx={cardBodyStyle}>
            <Typography variant="h4" sx={cardBodyTitle}>
              {category.name}
            </Typography>
            <Typography variant="subtitle1" sx={cardBodyInfo}>
              {category.description}
            </Typography>
            {lessons[0].tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color={'steel_grey'}
                sx={tagStyle}
              />
            ))}
            <Box sx={coachNameBoxStyle}>
              <Typography variant="h6">指導教練</Typography>
              {category.coachs.map((coach) => (
                <Typography key={coach.sid} variant="h5">
                  {coach.nickname}
                </Typography>
              ))}
            </Box>
          </CUICard>
        </Box>
        <Box sx={lessonsBoxStyle}>
          {lessonsGate.map((item) =>
            item.lessons.length === 0 ? null : (
              <>
                <Typography variant="h5" sx={locationTitleStyle}>
                  {item.title}
                </Typography>
                <Grid container sx={lessonsCardGridStyle}>
                  {item.lessons.map((lesson, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={11}
                      md={9}
                      lg={5.75}
                      xl={5.75}
                    >
                      <LessonCard lesson={lesson} coachcard />
                    </Grid>
                  ))}
                </Grid>
              </>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CertainLessonPage;
