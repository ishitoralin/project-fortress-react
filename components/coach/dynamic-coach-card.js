import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import CUIButton from '@/components/customUI/cui-button';

import Image from 'next/image';
import Link from 'next/link';

import {
  coachCardBoxStyle,
  imageBoxStyle,
  cardGridStyle,
  cardBehindStyle,
  cardFrontStyle,
  cardInfoStyle,
  cardTitleStyle,
  drawImgAnimation,
  cardDownAnimation,
  showInfoAnimation,
} from '@/styles/coach-style/coach-card-style';

const CoachCard = ({ coachdata }) => {
  const [show, setShow] = useState(false);

  return (
    <Box
      sx={{
        paddingInline: { xs: 0, sm: 2 },
        paddingBlock: 2,
      }}
    >
      <Box sx={cardGridStyle}>
        <Box
          sx={show ? { ...imageBoxStyle, ...drawImgAnimation } : imageBoxStyle}
          onClick={() => setShow((prev) => !prev)}
        >
          <Image
            fill
            alt="coach-img"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            src={`/coach-img/${coachdata.img}`}
            placeholder="blur"
            blurDataURL={coachdata.img_base64}
          />
        </Box>
        <Box
          sx={
            show
              ? { ...coachCardBoxStyle, ...cardDownAnimation }
              : coachCardBoxStyle
          }
        >
          <Box sx={cardBehindStyle}>
            <Typography sx={cardTitleStyle} variant="h5">
              {coachdata.nickname}
            </Typography>
          </Box>
          <Box
            sx={
              show
                ? { ...cardFrontStyle, ...showInfoAnimation }
                : cardFrontStyle
            }
          >
            <Typography sx={cardInfoStyle}>{coachdata.introduction}</Typography>
            <CUIButton variant="outlined" color={'main_white'}>
              <Link href={`coach/${coachdata.sid}`}>詳細資料</Link>
            </CUIButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoachCard;
