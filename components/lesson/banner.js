import { useState, useEffect } from 'react';

import Image from 'next/image';
import { Button, Box, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import WhiteTheme from '@/context/Theme/white-theme';

import absImg from '@/public/lesson-img/abs.jpg';
import abs1Img from '@/public/lesson-img/abs1.jpg';
import core from '@/public/lesson-img/core.jpg';
import functional from '@/public/lesson-img/functional.jpg';
import hiit from '@/public/lesson-img/HIIT.jpg';
import oxgen1 from '@/public/lesson-img/oxgen1.jpg';
import Link from 'next/link';

import getBrickBackground from '@/libs/getBrickBackground';

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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?Lorem ipsum adipisicing elit. Magnam cum  ipsum optio voluptatibus nostrum asperiores?',
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
  height: '80vmin',
  minHeight: '300px',
  minWidth: '380px',
  zIndex: 0,
};

const arrowStyle = {
  '--gap': { xs: '.2rem', md: '2rem' },
  position: 'absolute',
  top: 'calc( 47.5% - .5em )',
  color: 'lightgrey',
  fontSize: { xs: '6rem', sm: '10rem' },
  zIndex: 2,
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

const pesudoElementStyle = {
  content: { xs: 'none', md: '""' },
  position: 'absolute',
  backdropFilter: 'blur(10px)',
  width: '40%',
  height: '24%',
  border: '3px solid white',
  transition: '1s',
  pointerEvents: 'none',
  backgroundImage: getBrickBackground({
    scale: 1.5,
    strokeColor: 'hsla(38, 0%, 100%, 1)',
  }),
};

const pesudoHoverStyle = {
  transitionDelay: '.5s',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  backdropFilter: 'blur(0px)',
  opacity: '0.1',
};

const lessonInfoBoxStyle = {
  position: 'absolute',
  inset: { xs: '10% 5%', sm: '15% 10%', md: '20% 15%' },
  padding: { xs: '1% 2%', sm: '2% 3%', md: '3% 5%' },
  border: { xs: 'none', sm: '2px solid white' },
  zIndex: 1,
  ':before': {
    top: '-20%',
    left: '-7.5%',
    ...pesudoElementStyle,
  },
  ':after': {
    top: '90%',
    left: '67%',
    ...pesudoElementStyle,
  },
  ':hover:after, :hover:before': pesudoHoverStyle,
};

const lessonTitleStyle = {
  color: 'white',
  zIndex: 1,
};

const lessonDescriptStyle = {
  color: 'white',
  marginTop: '0.5rem',
  maxHeight: '60%',
  height: 'fit-content',
  overflow: 'hidden',
  paddingInline: '2rem',
  zIndex: 1,
};

const buttonStyle = {
  position: 'absolute',
  left: { xs: '3%', sm: '7%' },
  bottom: { xs: '3%', sm: '7%' },
  boxShadow: 'none',
  borderWidth: '3px',
  borderRadius: '30px',
  paddingInline: '1rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',
  overflow: 'hidden',
  ':hover': {
    borderWidth: '3px',
    color: 'black',
  },
  ':before': {
    content: '""',
    position: 'absolute',
    left: '-100%',
    width: '100%',
    height: '100%',
    bgcolor: 'white',
    transition: '.5s',
    zIndex: '-1',
  },
  ':hover:before': {
    left: 0,
  },
};

const slideTime = 1000;
const intervalTime = 7000;
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
    interval.start(goSlide, intervalTime);
    return () => interval.clear();
  }, []);

  const goLeft = () => {
    if (transi) return;
    interval.clear();
    interval.start(goSlide, intervalTime);
    setTransi(true);
    setLeftPosi((pre) => pre - 1);
  };

  const goRight = () => {
    if (transi) return;
    interval.clear();
    interval.start(goSlide, intervalTime);
    setTransi(true);
    setLeftPosi((pre) => pre + 1);
  };

  const goSlide = () => {
    if (transi) return;
    setTransi(true);
    setLeftPosi((pre) => pre - 1);
  };

  return (
    <WhiteTheme>
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
              <Box sx={lessonInfoBoxStyle}>
                <Typography variant={'h4'} sx={lessonTitleStyle}>
                  {bannerData[item]['title']}
                </Typography>
                <Typography variant={'h5'} sx={lessonDescriptStyle}>
                  {bannerData[item]['description']}
                </Typography>
                <Button
                  endIcon={
                    <TrendingFlatIcon
                      sx={{
                        marginLeft: '.5rem',
                        transform: 'translateY(-1px) scale(1.2)',
                      }}
                    />
                  }
                  variant="outlined"
                  sx={buttonStyle}
                >
                  <Link href="/lesson/5">了解更多</Link>
                </Button>
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
    </WhiteTheme>
  );
};

export default Banner;
