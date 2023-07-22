import { useState } from 'react';

import { Box, ToggleButtonGroup, Container } from '@mui/material';
import CUISearch from '@/components/customUI/cui-search';

import CoachCard from '@/components/coach/coach-card';
import BrickWallPaper from '@/components/brick-wallpaper';
import UiButton from '@/components/hh/UiButton';

const CoachListPage = () => {
  const [location, setLocation] = useState(['Taipei', 'Taichung']);

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
            <CoachCard key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoachListPage;
