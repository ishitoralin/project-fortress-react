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

const CoachCard = () => {
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
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <Image
            fill
            alt="coach-img"
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
            src={'/coach-img/emily.jpg'}
          ></Image>
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
              Jessica
            </Typography>
          </Box>
          <Box
            sx={
              show
                ? { ...cardFrontStyle, ...showInfoAnimation }
                : cardFrontStyle
            }
          >
            <Typography sx={cardInfoStyle}>
              嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！
            </Typography>
            <CUIButton variant="outlined" color={'main_white'}>
              <Link href="coach/5">詳細資料</Link>
            </CUIButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoachCard;
