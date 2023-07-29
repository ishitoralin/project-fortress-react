import { useState } from 'react';

import { Box, ToggleButtonGroup, Container } from '@mui/material';

import CoachCard from '@/components/coach/coach-card';
import BrickWallPaper from '@/components/brick-wallpaper';
import UiButton from '@/components/hh/UiButton';

const baseUrl = 'http://localhost:3001/coach';

const getCoachsData = async (locations) => {
  if (!Array.isArray(locations))
    throw new Error('locations must be Array type');
  const querys = `?${Array(locations.length).fill('location[]=%l').join('&')}`;
  const suffix = locations.reduce(
    (query, location) => query.replace('%l', location),
    querys
  );

  const res = await fetch(baseUrl + suffix);
  return await res.json();
};

export const getStaticProps = async () => {
  const allCoachs = await getCoachsData(['taipei', 'taichung', 'kaohsiung']);

  return {
    props: {
      allCoachs,
    },
  };
};

const initLocation = 'taipei';

const CoachListPage = ({ allCoachs }) => {
  const [location, setLocation] = useState([initLocation]);
  const [coachs, setCoachs] = useState(getFilterCoachs([initLocation]));

  function getFilterCoachs(locations) {
    return allCoachs.filter(
      (coach) => locations.indexOf(coach.location) !== -1
    );
  }

  return (
    <Box>
      <BrickWallPaper scale={1.6} rotate={7.5} />
      <Container sx={{ paddingBlock: { xs: '1rem', sm: '3rem' } }}>
        <Box sx={{ textAlign: 'center', marginBlock: 5 }}>
          <ToggleButtonGroup
            value={location}
            aria-label="coachlocation"
            sx={{
              button: {
                transition: '.3s',
              },
              'button:not(:last-child)': {
                marginRight: { xs: '3rem', sm: '5rem' },
              },
            }}
            onChange={(event, value) => {
              if (value.length === 0) return;
              setLocation(value);
              setCoachs(getFilterCoachs(value));
            }}
          >
            <UiButton disableRipple value="taipei" aria-label="taipei">
              台北館
            </UiButton>
            <UiButton disableRipple value="taichung" aria-label="taichung">
              台中館
            </UiButton>
            <UiButton disableRipple value="kaohsiung" aria-label="kaohsiung">
              高雄館
            </UiButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          }}
        >
          {coachs.map((coach, index) => (
            <CoachCard key={index} coachdata={coach} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoachListPage;
