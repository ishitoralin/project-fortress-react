import getBrickBackground from '@/libs/getBrickBackground';

export const mainContentStyle = {
  width: '100%',
  backdropFilter: 'blur(50px)',
  color: 'white',
  bgcolor: 'rgba(85, 85, 85, .8)',
  boxShadow: '0 -5px 15px #333',
  backgroundImage: getBrickBackground(),
  backgroundAttachment: 'fixed',
};

export const flexRowSpaceBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: { xs: 'space-evenly', lg: 'space-between' },
};

export const containerStyle = {
  p: '2rem',
};

export const filterStyle = {
  width: '27%',
  maxHeight: 'calc(100vh - var(--nav-height) - 4rem)',
  overflowY: 'auto',
  position: 'sticky',
  top: '1rem',
  bgcolor: '#eee',
  '@media (max-width: 1000px)': {
    position: 'absolute',
    width: '90%',
    height: '100vh',
    top: 0,
    left: '-90%',
  },
};
