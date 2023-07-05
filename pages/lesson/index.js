import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIFilter from '@/components/customUI/cui-filter';
import CUICard from '@/components/customUI/cui-card';

import absImg from '@/assets/abs.jpg';
import abs1Img from '@/assets/abs1.jpg';
import core from '@/assets/core.jpg';
import functional from '@/assets/functional.jpg';
import hiit from '@/assets/HIIT.jpg';
import oxgen1 from '@/assets/oxgen1.jpg';

const tagsData = ['有氧', '健力', '腿部肌力', '瑜珈'];
const bannerImgs = [absImg, abs1Img, core, functional, hiit, oxgen1];

const bannerStyle = {
  position: 'sticky',
  overflow: 'hidden',
  // overflowX: 'auto',
  top: 0,
  height: '70vh',
};

const carouselStyle = {
  display: 'flex',
  position: 'relative',
  left: '-100%',
  width: '300%',
  height: '100%',
};

const mainContentStyle = {
  width: '100%',
  bgcolor: 'grey',
  position: 'relative',
};

const flexRowSpaceBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const containerStyle = {
  p: '2rem',
};

const rightSideStyle = {
  width: '70%',
  height: '100vh',
  bgcolor: 'pink',
};

const LessionPage = () => {
  return (
    <Box>
      <Box sx={bannerStyle}>
        <Box sx={carouselStyle}>
          {bannerImgs.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="bannerimg"
              style={{
                width: '100vw',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(60%)',
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={mainContentStyle}>
        <Container sx={containerStyle}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', py: 4, mb: '2rem' }}
          >
            尋找您喜愛的課程
          </Typography>
          <Box sx={flexRowSpaceBetween}>
            <CUIFilter
              sx={{ width: '25%', position: 'sticky', top: '2rem' }}
              label="篩選器"
              items={[
                <CUISearch
                  key={1}
                  label="課程關鍵字"
                  placeholder="請輸入關鍵字"
                />,
                <CUISelect key={2} label="課程標籤" options={tagsData} />,
                <CUISlider key={3} label="價格範圍" />,
              ]}
            />
            <Box sx={rightSideStyle}>
              <CUICard sx={{ width: '100%', height: '100px', mb: 2 }}>
                lession 1
              </CUICard>
              <CUICard sx={{ width: '100%', height: '100px', mb: 2 }}>
                lession 2
              </CUICard>
              <CUICard sx={{ width: '100%', height: '100px', mb: 2 }}>
                lession 3
              </CUICard>
              <CUICard sx={{ width: '100%', height: '100px', mb: 2 }}>
                lession 4
              </CUICard>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LessionPage;
