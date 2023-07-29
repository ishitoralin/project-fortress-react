import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import {
  coachCardBoxStyle,
  imageBoxStyle,
  cardGridStyle,
  cardBehindStyle,
  cardFrontStyle,
  cardTitleStyle,
} from '@/styles/coach-style/coach-info-card-style';

import BrickWallPaper from '@/components/brick-wallpaper';
import LessonCard from '@/components/lesson/lesson-card';

import createBreakPointTheme from '@/libs/CreateBreakPointTheme';
const BreakPointTheme = createBreakPointTheme({
  th: 1000,
});

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/coach');
  const data = await res.json();

  const paths = data.map((ct) => ({ params: { id: ct.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const getCoachUrl = `http://localhost:3001/coach/${id}`;
  const getLessonsUrl = `http://localhost:3001/lesson?coach=${id}`;

  const [coach, lessons] = await Promise.all(
    [getCoachUrl, getLessonsUrl].map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    })
  );

  return {
    props: {
      coach,
      lessons,
    },
  };
};

const CoachPage = ({ coach, lessons }) => {
  return (
    <BreakPointTheme>
      <Box sx={{ py: 4 }}>
        <BrickWallPaper
          brickstyle={{
            scale: 2,
            rotate: 7,
            brickColor: 'hsl(100, 0%, 25%)',
            strokeColor: 'hsl(100, 0%, 15%)',
          }}
        />
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: {
              xs: 'column',
              th: 'row',
            },
          }}
        >
          <Box
            sx={{
              padding: 2,
              position: { xs: 'relative', th: 'sticky' },
              top: '4rem',
              height: 'calc(100vh - var(--nav-height) - var(--footer-height))',
              width: { xs: '380px', sm: '450px', th: '480px' },
            }}
          >
            <Box sx={imageBoxStyle}>
              <Image
                fill
                alt="coach-img"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
                placeholder="blur"
                blurDataURL={`${coach.img_base64}`}
                src={`/coach-img/${coach.img}`}
              ></Image>
            </Box>
            <Box sx={cardGridStyle}>
              <Box sx={coachCardBoxStyle}>
                <Box sx={cardBehindStyle}>
                  <Typography sx={cardTitleStyle} variant="h5">
                    {coach.nickname}
                  </Typography>
                </Box>
                <Typography sx={cardFrontStyle}>
                  {coach.introduction}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: '0', th: '-10rem', lg: '.5rem' },
              flexGrow: 1,
            }}
          >
            {lessons.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} />
            ))}
          </Box>
        </Container>
      </Box>
    </BreakPointTheme>
  );
};

export default CoachPage;
