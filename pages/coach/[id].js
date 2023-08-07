import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import { setAuthCache, getAuthHeaders } from '@/hh_global/authCache';
import { useAuth } from '@/context/auth/useAuth';

import {
  coachCardBoxStyle,
  imageBoxStyle,
  cardGridStyle,
  cardBehindStyle,
  cardFrontStyle,
  cardTitleStyle,
  locationStyle,
} from '@/styles/coach-style/coach-info-card-style';

import BrickWallPaper from '@/components/brick-wallpaper';
import LessonCard from '@/components/lesson/lesson-card';

import createBreakPointTheme from '@/libs/CreateBreakPointTheme';
const BreakPointTheme = createBreakPointTheme({
  th: 1000,
});

const fetchData = async (id) => {
  const getCoachUrl = `http://localhost:3001/coach/${id}`;
  const getLessonsUrl = `http://localhost:3001/lesson?coach=${id}`;

  const [coach, lessons] = await Promise.all(
    [getCoachUrl, getLessonsUrl].map(async (url) => {
      const res = await fetch(url, {
        headers: getAuthHeaders(),
      });
      return await res.json();
    })
  );

  return {
    coach,
    lessons,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PORT}/coach`);
  const data = await res.json();

  const paths = data.map((ct) => ({ params: { id: ct.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { coach, lessons } = await fetchData(id);

  return {
    props: {
      coachId: id,
      coach,
      initLessons: lessons,
    },
  };
};

const locationDictionary = {
  taipei: '台北館',
  taichung: '台中館',
  kaohsiung: '高雄館',
};

const CoachPage = ({ coach, coachId, initLessons }) => {
  const [lessons, setLessons] = useState(initLessons);

  const { auth } = useAuth();
  setAuthCache(auth);

  useEffect(() => {
    if (!auth.user?.id) return;
    (async () => {
      const { lessons } = await fetchData(coachId);
      setLessons(lessons);
    })();
  }, [auth]);

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
              height: {
                xs: '75vh',
                sm: 'calc(100vh - var(--nav-height) - var(--footer-height))',
              },
              width: { xs: '350px', sm: '450px', th: '480px' },
            }}
          >
            <Box sx={cardGridStyle}>
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
                  src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/coach/coachs-img/${coach.img}`}
                />
              </Box>
              <Box sx={coachCardBoxStyle}>
                <Box sx={cardBehindStyle}>
                  <Typography sx={cardTitleStyle} variant="h5">
                    {coach.nickname}
                  </Typography>
                </Box>
                <Box sx={cardFrontStyle}>
                  <Typography>{coach.introduction}</Typography>
                  <Typography variant="h5" sx={locationStyle}>
                    {locationDictionary[coach.location]}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { th: '50%' },
              transition: '.5s',
              marginLeft: { xs: '0', th: '-11rem', lg: '-2rem' },
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                width: '80%',
                color: 'white',
                textAlign: 'center',
                marginInline: 'auto',
                marginBottom: 5,
                paddingBottom: 2,
                borderBottom: '2px solid white',
              }}
            >
              指導課程
            </Typography>
            {lessons.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} setLessons={setLessons} />
            ))}
          </Box>
        </Container>
      </Box>
    </BreakPointTheme>
  );
};

export default CoachPage;
