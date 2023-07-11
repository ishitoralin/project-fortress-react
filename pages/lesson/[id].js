import { Box, Container, Typography } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

import Image from 'next/image';
import { useRouter } from 'next/router';

const containerStyle = { py: '1rem', height: 'fit-content' };

  const bigCardStyle = {
    //   position: 'relative',
    border: '2px solid red',
    height: '1600px',
    width: '90%',
    margin: 'auto',
  };

const imgBoxStyle = {
  position: 'relative',
  width: '100%',
  height: '40%',
};

const bigCardBodyStyle = {
  border: '2px solid gold',
  width: '100%',
  height: '90%',
};

const CertainLessonPage = () => {
  const router = useRouter();

  return (
    <Container sx={containerStyle}>
      <CUICard sx={bigCardStyle}>
        {/* <Box sx={imgBoxStyle}>
          <Image
            alt="lesson-img"
            src="/lesson-img/functional.jpg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={bigCardBodyStyle}>
          <Typography variant="h4">Lesson id: {router.query.id}</Typography>
        </Box> */}
      </CUICard>
    </Container>
  );
};

export default CertainLessonPage;
