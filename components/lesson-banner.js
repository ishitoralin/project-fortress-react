import { useState } from 'react';

import Image from 'next/image';
import { Box } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import absImg from '@/assets/abs.jpg';
import abs1Img from '@/assets/abs1.jpg';
import core from '@/assets/core.jpg';
import functional from '@/assets/functional.jpg';
import hiit from '@/assets/HIIT.jpg';
import oxgen1 from '@/assets/oxgen1.jpg';

const bannerImgs = [absImg, abs1Img, core, functional, hiit, oxgen1, absImg];

const bannerStyle = {
  ':before': {},
  position: 'sticky',
  overflow: 'hidden',
  overflowX: 'auto',
  top: 0,
  height: '70vh',
};

const carouselStyle = {
  display: 'flex',
  position: 'relative',
  width: `${100 * bannerImgs.length}%`,
  height: '100%',
};

const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <Box sx={bannerStyle}>
      <ChevronLeftRoundedIcon
        sx={{ position: 'absolute', color: 'white', zIndex: 1 }}
      />
      <ChevronRightRoundedIcon
        sx={{ position: 'absolute', color: 'white', zIndex: 1 }}
      />
      <Box sx={{ ...carouselStyle, left: `-${currentImg * 100}%` }}>
        {bannerImgs.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="bannerimg"
            style={{
              width: '100%',
              //   order: order[index],
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(60%)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;
