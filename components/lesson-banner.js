import { useState, useEffect } from 'react';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import absImg from '@/assets/abs.jpg';
import abs1Img from '@/assets/abs1.jpg';
import core from '@/assets/core.jpg';
import functional from '@/assets/functional.jpg';
import hiit from '@/assets/HIIT.jpg';
import oxgen1 from '@/assets/oxgen1.jpg';

const bannerData = [
  {
    img: absImg,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
  {
    img: abs1Img,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
  {
    img: core,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
  {
    img: functional,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
  {
    img: hiit,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
  {
    img: oxgen1,
    title: 'Lesson Title here',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
  },
];

const bannerStyle = {
  position: 'sticky',
  overflow: 'hidden',
  top: 0,
  height: '80vh',
};

const arrowStyle = {
  '--gap': '2rem',
  position: 'absolute',
  borderRadius: '8px',
  top: 'calc( 47.5% - .5em )',
  color: 'lightgrey',
  fontSize: '125px',
  zIndex: 1,
  transition: '.2s',
  cursor: 'pointer',
  ':hover': {
    color: 'white',
    transform: 'scale(1.25)',
    filter: 'drop-shadow(calc(var(--od) * 7px) 0px 3px grey)',
  },
};

const carouselStyle = {
  display: 'flex',
  position: 'relative',
  width: `${100 * bannerData.length}%`,
  height: '100%',
};

const slideTime = 700;
const interval = {
  id: null,
  setId: function (id) {
    this.id = id;
  },
  start: function (cb, time) {
    interval.setId(setInterval(cb, time));
  },
  clear: function () {
    this.id && clearInterval(this.id);
    this.id = null;
  },
};

const Banner = () => {
  const [order, setOrder] = useState(() => [...bannerData.keys()]);
  const [leftPosi, setLeftPosi] = useState(2);
  const [transi, setTransi] = useState(false);

  useEffect(() => {
    if (leftPosi === 2) return;

    const timeoutId = setTimeout(() => {
      const [...newOrder] = order;
      leftPosi > 2
        ? newOrder.push(newOrder.shift())
        : newOrder.unshift(newOrder.pop());

      setOrder(newOrder);
      setTransi(false);
      setLeftPosi(2);
    }, slideTime);

    return () => clearTimeout(timeoutId);
  }, [leftPosi]);

  useEffect(() => {
    interval.start(goSlide, 5000);
    return () => interval.clear();
  }, []);

  const goLeft = () => {
    if (transi) return;
    interval.clear();
    interval.start(goSlide, 5000);
    setTransi(true);
    setLeftPosi((pre) => pre - 1);
  };

  const goRight = () => {
    if (transi) return;
    interval.clear();
    interval.start(goSlide, 5000);
    setTransi(true);
    setLeftPosi((pre) => pre + 1);
  };

  const goSlide = () => {
    // if (transi) return;
    // setTransi(true);
    // setLeftPosi((pre) => pre - 1);
  };

  return (
    <Box sx={bannerStyle}>
      <ChevronLeftRoundedIcon
        sx={{ ...arrowStyle, '--od': '1', left: 'var(--gap)' }}
        onClick={goLeft}
      />
      <ChevronRightRoundedIcon
        sx={{ ...arrowStyle, '--od': '-1', right: 'var(--gap)' }}
        onClick={goRight}
      />
      <Box
        sx={{
          ...carouselStyle,
          left: `${-100 * leftPosi}%`,
          transition: `${transi ? slideTime : '0'}ms ease-in-out`,
        }}
      >
        {order.map((item, index) => (
          <Box
            key={item}
            sx={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: '25% 20%',
                // border: '2px solid gold',
                zIndex: 1,
                ':before': {
                  content: '""',
                  position: 'absolute',
                  top: '-11%',
                  left: '-7%',
                  // display: 'block',
                  width: '100%',
                  height: '100%',
                  border: '2px solid white',
                },
                ':after': {
                  content: '""',
                  position: 'absolute',
                  top: '-7%',
                  left: '-5%',
                  // display: 'block',
                  width: '100%',
                  height: '100%',
                  border: '2px solid white',
                },
              }}
            >
              <Typography
                variant={'h3'}
                sx={{
                  // position: 'absolute',
                  // top: '50%',
                  color: 'white',
                  // border: '2px solid gold',
                  zIndex: 1,
                }}
              >
                {bannerData[item]['title']}
              </Typography>
              <Typography
                variant={'h5'}
                sx={{
                  // position: 'absolute',
                  // top: '50%',
                  color: 'white',
                  // border: '2px solid gold',
                  padding: '2rem 5rem',
                  zIndex: 1,
                }}
              >
                {bannerData[item]['description']}
              </Typography>
            </Box>
            <Image
              src={bannerData[item]['img']}
              priority
              alt="bannerimg"
              style={{
                width: '100%',
                height: '100%',
                left: `${index * 100}%`,
                objectFit: 'cover',
                objectPosition: '50% 50%',
                filter: 'brightness(40%)',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Banner;
