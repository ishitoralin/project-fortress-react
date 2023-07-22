import { useState } from 'react';

import { Box, ToggleButtonGroup, Container, Typography } from '@mui/material';
import CUISearch from '@/components/customUI/cui-search';

import BrickWallPaper from '@/components/brick-background';
import UiButton from '@/components/lesson/UiButton';
import Image from 'next/image';

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

import CUIButton from '@/components/customUI/cui-button';
import Link from 'next/link';

import useCheckCSS from '@/hooks/useCheckCSS';

const CoachListPage = () => {
  const [location, setLocation] = useState(['Taipei', 'Taichung']);
  const [show, setShow] = useState(() => [...Array(10)].fill(false));

  const cardRatioStyle = useCheckCSS('aspect-ratio', 1)
    ? { aspectRatio: '9 / 12' }
    : { height: '500px' };

  return (
    <Box>
      <BrickWallPaper scale={1.6} rotate={7.5} />
      <Container sx={{ paddingBlock: { xs: '1rem', sm: '3rem' } }}>
        <Box>
          <Box
            sx={{
              bgcolor: '#eee',
              padding: 2,
              borderRadius: '5px',
            }}
          >
            <CUISearch
              placeholder="輸入教練名稱"
              color={'steel_grey'}
              label={'搜尋教練'}
            />
          </Box>
          <Box sx={{ textAlign: 'center', marginBlock: 5 }}>
            <ToggleButtonGroup
              value={location}
              exclusive
              aria-label="coach-location"
              sx={{
                button: {
                  transition: '.3s',
                },
                'button:not(:last-child)': {
                  marginRight: { xs: '3rem', sm: '5rem' },
                },
              }}
              onChange={(event, value) =>
                setLocation(([...preValue]) => {
                  const indexOfValue = preValue.indexOf(value);
                  if (indexOfValue === -1) return [...preValue, value];
                  if (preValue.length === 1) return preValue;

                  preValue.splice(indexOfValue, 1);
                  return preValue;
                })
              }
            >
              <UiButton disableRipple value="Taipei" aria-label="Taipei">
                台北館
              </UiButton>
              <UiButton disableRipple value="Taichung" aria-label="Taichung">
                台中館
              </UiButton>
              <UiButton disableRipple value="Kaohsiung" aria-label="Kaohsiung">
                高雄館
              </UiButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          }}
        >
          {[...Array(10)].map((value, index) => (
            <Box
              key={index}
              sx={{
                paddingInline: { xs: 0, sm: 2 },
                paddingBlock: 2,
                ...cardRatioStyle,
              }}
            >
              <Box sx={cardGridStyle}>
                <Box
                  sx={
                    show[index]
                      ? { ...imageBoxStyle, ...drawImgAnimation }
                      : imageBoxStyle
                  }
                  onClick={() => {
                    setShow((prev) => {
                      const newState = [...prev];
                      newState[index] = !newState[index];
                      return newState;
                    });
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
                    show[index]
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
                      show[index]
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
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoachListPage;
