const ANIMATIME = '1s';

export const cardGridStyle = {
  position: 'relative',
  width: { xs: '80%', lg: '90%' },
  height: { xs: '80%', lg: '90%' },
  ':before': {
    content: '""',
    position: 'absolute',
    width: '75%',
    height: '82%',
    top: '6%',
    transition: ANIMATIME,
    transform: { xs: 'rotate(0)', md: 'rotate(30deg)', lg: 'rotate(0)' },
    left: '15%',
    border: '3px solid white',
  },
};

export const coachCardBoxStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: { md: '15%', lg: '-15%' },
  left: { xs: '-35%', md: '-65%', lg: '-25%' },
  transition: '.5s',
  animation: `${ANIMATIME} move-card forwards`,
  '@keyframes move-card': {
    '100%': {
      transform: 'translate3d(245px, 0, 0)',
    },
  },
};

export const imageBoxStyle = {
  position: 'absolute',
  left: '30%',
  top: { md: '5%', lg: '25%' },
  transform: 'rotateZ(-10deg)',
  width: { xs: '40%', md: '35%', lg: '45%' },
  height: { md: '35%', lg: '45%' },
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  transition: '.5s',
  zIndex: 1,
  animation: `${ANIMATIME} draw-card forwards`,
  '@keyframes draw-card': {
    to: {
      transform: 'translate3d(-8rem, -4rem, 0) rotateZ(0deg)',
    },
  },
};

export const cardBehindStyle = {
  position: 'absolute',
  bottom: '2%',
  right: '5%',
  width: '80%',
  height: '85%',
  padding: { xs: '1rem', md: '1.5rem', lg: '2rem' },
  textAlign: 'right',
  borderRadius: '15px',
  bgcolor: 'slategrey',
};

export const cardTitleStyle = {
  paddingBottom: '.2rem',
  paddingRight: '.7rem',
  color: 'white',
  borderBottom: '2px solid white',
};

export const cardFrontStyle = {
  position: 'absolute',
  right: '7%',
  bottom: '5%',
  paddingInline: { xs: '1rem', md: '1.5rem', lg: '2rem' },
  color: 'white',
  width: '76%',
  height: '30%',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
  bgcolor: 'var(--steel-grey)',
  boxShadow: '0 -6px 3px -3px rgba(0, 0, 0, 0.2)',
  transition: '.5s',
  // zIndex: 2,
  animation: `${ANIMATIME} grow-up forwards`,
  '@keyframes grow-up': {
    '100%': {
      height: '65%',
      boxShadow: 'none',
    },
  },
};
