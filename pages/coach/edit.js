import { useState } from 'react';
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
import getBrickBackground from '@/libs/getBrickBackground';
import CUICard from '@/components/customUI/cui-card';
import Image from 'next/image';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const iconStyle = {
  bgcolor: 'var(--steel-grey)',
  borderRadius: '5px',
  color: 'white',
  ':hover': {
    bgcolor: 'var(--steel-light-grey)',
  },
};

const CoachEditPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: getBrickBackground({
          brickColor: 'hsl(0, 0%, 20%)',
          rotate: 10,
          scale: 1.75,
        }),
      }}
    >
      <Container sx={{ p: 4 }}>
        <CUICard
          sx={{
            p: 4,
            bgcolor: '#eee',
            display: 'flex',
          }}
        >
          <CUICard
            sx={{
              borderRadius: '5px',
              overflow: 'hidden',
              position: 'relative',
              height: '200px',
              width: '200px',
            }}
          >
            <Image
              alt="coach-img"
              fill
              src="/coach-img/hannah.jpg"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </CUICard>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'space-evenly',
              padding: 2,
              marginLeft: '2rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box>
                {isEdit ? (
                  <TextField
                    placeholder="Hannah"
                    value={'Hannah'}
                    variant="standard"
                    color="steel_grey"
                    inputProps={{
                      style: {
                        padding: 0,
                        fontSize: '1.5rem',
                      },
                    }}
                  />
                ) : (
                  <Typography variant="h5">Hannah</Typography>
                )}
              </Box>
              <Box
                sx={{
                  marginLeft: 'auto',
                }}
              >
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
            <Box sx={{ marginTop: '1rem' }}>
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

export default CoachEditPage;
