import { useState, useEffect } from 'react';

import Image from 'next/image';
import { Button, Box, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import WhiteTheme from '@/context/Theme/white-theme';

import Link from 'next/link';

import {
  bannerStyle,
  arrowStyle,
  carouselStyle,
  lessonInfoBoxStyle,
  lessonTitleStyle,
  lessonDescriptStyle,
  buttonStyle,
} from '@/styles/lesson-style/banner-style';

// const categories = [
//   {
//     img: absImg,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
//   },
//   {
//     img: abs1Img,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
//   },
//   {
//     img: core,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?Lorem ipsum adipisicing elit. Magnam cum  ipsum optio voluptatibus nostrum asperiores?',
//   },
//   {
//     img: functional,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
//   },
//   {
//     img: hiit,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
//   },
//   {
//     img: oxgen1,
//     title: 'Lesson Title here',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum reprehenderit consectetur debitis culpa rem ipsum optio voluptatibus nostrum asperiores?',
//   },
// ];

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
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState([]);
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
    (async () => {
      const res = await fetch('http://localhost:3001/lesson/banners');
      const data = await res.json();
      setCategories(data);
      setOrder([...data.keys()]);
    })();
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
          width: `${100 * categories.length}%`,
          left: `${-100 * leftPosi}%`,
          transition: `${transi ? slideTime : '0'}ms ease-in-out`,
        }}
      >
        {order.length !== 0 &&
          order.map((item, index) => (
            <Box
              key={item}
              sx={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <Box sx={lessonInfoBoxStyle}>
                <Typography variant={'h4'} sx={lessonTitleStyle}>
                  {categories[item]['name']}
                </Typography>
                <Typography variant={'h5'} sx={lessonDescriptStyle}>
                  {categories[item]['description']}
                </Typography>
                <WhiteTheme>
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
                </WhiteTheme>
              </Box>
              <Image
                priority
                width={100}
                height={100}
                sizes="100vw"
                src={`/lesson-img/${categories[item]['img']}`}
                blurDataURL={categories[item]['img_base64']}
                placeholder="blur"
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
