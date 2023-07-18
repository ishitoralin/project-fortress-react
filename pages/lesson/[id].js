import { Box, Container, Grid, Typography } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

import LessonCardNoImg from '@/components/lesson/lesson-card-no-img';

import Image from 'next/image';
import { useRouter } from 'next/router';

const containerStyle = { py: '2rem', height: 'fit-content' };

const bigCardStyle = {
  //   position: 'relative',
  // border: '2px solid red',
  height: '500px',
  width: '100%',
  margin: 'auto',
};

const imgBoxStyle = {
  position: 'relative',
  width: '100%',
  height: '80%',
};

const bigCardBodyStyle = {
  // border: '2px solid gold',
  width: '100%',
  height: '20%',
};

const CertainLessonPage = () => {
  const router = useRouter();

  return (
    <Container sx={containerStyle}>
      <CUICard sx={bigCardStyle}>
        <Box sx={imgBoxStyle}>
          <Image
            alt="lesson-img"
            src="/lesson-img/functional.jpg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={bigCardBodyStyle}>
          <Typography variant="h4">Lesson id: {router.query.id}</Typography>
        </Box>
      </CUICard>
      <Box sx={{ marginTop: '2rem', py: 4, width: '100%' }}>
        <Grid container sx={{ justifyContent: 'start', gap: '2rem' }}>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} lg={5.75} xl={5.75}>
            <LessonCardNoImg sx={{ p: 2, height: '200px' }}>
              <Typography variant="h6">Lesson title</Typography>
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet adipisicing elit. Enim, aut nihil
                repellat delectus animi, at laborum vero, corporis alias iure
                fugiat officia similique deleniti quasi. Id, facere!
              </Typography>
            </LessonCardNoImg>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CertainLessonPage;
