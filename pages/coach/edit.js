import { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import CUICard from '@/components/customUI/cui-card';
import BrickWallPaper from '@/components/brick-wallpaper';

import Image from 'next/image';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Layout from '@/components/layout/layout';
import ProtectedRouteWrapper from '@/components/protected-route';

import {
  mainContainerStyle,
  iconStyle,
  editCardStyle,
  imgBoxStyle,
  editBoxStyle,
  nameBoxStyle,
  iconBoxStyle,
  introBoxStyle,
  introEditModeStyle,
} from '@/styles/coach-style/coach-edit-style';

const CoachEditPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Box>
      <BrickWallPaper scale={1.75} rotate={5} />
      <Container sx={mainContainerStyle}>
        <CUICard sx={editCardStyle}>
          <CUICard sx={imgBoxStyle}>
            <Image
              alt="coach-img"
              fill
              sizes="20vw"
              src="/coach-img/hannah.jpg"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </CUICard>
          <Box sx={editBoxStyle}>
            <Box sx={nameBoxStyle}>
              <Box>
                {isEdit ? (
                  <TextField
                    placeholder="Hannah"
                    value={'Hannah'}
                    variant="standard"
                    color="steel_grey"
                    inputProps={{
                      style: {
                        display: 'block',
                        padding: 0,
                        fontSize: '1.5rem',
                      },
                    }}
                  />
                ) : (
                  <Typography variant="h5">Hannah</Typography>
                )}
              </Box>
              <Box sx={iconBoxStyle}>
                {isEdit ? (
                  <>
                    <IconButton
                      sx={iconStyle}
                      onClick={() => setIsEdit((prev) => !prev)}
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      sx={{ ...iconStyle, marginLeft: '1rem' }}
                      onClick={() => setIsEdit((prev) => !prev)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    sx={iconStyle}
                    onClick={() => setIsEdit((prev) => !prev)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
            <Box sx={introBoxStyle}>
              {isEdit ? (
                <TextField
                  color="steel_grey"
                  sx={{ width: '100%' }}
                  variant="standard"
                  multiline
                  value={
                    '嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！'
                  }
                />
              ) : (
                <Typography>
                  嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！
                </Typography>
              )}
            </Box>
          </Box>
          <Box sx={introEditModeStyle}>
            {isEdit ? (
              <TextField
                color="steel_grey"
                sx={{ width: '100%' }}
                variant="standard"
                multiline
                value={
                  '嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！'
                }
              />
            ) : (
              <Typography>
                嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！
              </Typography>
            )}
          </Box>
        </CUICard>

        <CUICard sx={{ bgcolor: '#eee', marginTop: '2rem', p: 4 }}>
          <Typography
            variant="h5"
            sx={{
              paddingBottom: 2,
              marginBottom: 4,
              borderBottom: '2px solid var(--steel-grey)',
            }}
          >
            我的課表
          </Typography>
          <FullCalendar plugins={[dayGridPlugin]} />
        </CUICard>
      </Container>
    </Box>
  );
};

CoachEditPage.getlayout = (page) => (
  <ProtectedRouteWrapper>
    <Layout>{page}</Layout>
  </ProtectedRouteWrapper>
);

export default CoachEditPage;
