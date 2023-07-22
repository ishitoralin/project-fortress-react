const ANIMATIME = '1s';

export const cardGridStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  ':before': {
    content: '""',
    position: 'absolute',
    width: '78%',
    height: '82%',
    top: '9%',
    left: '11%',
    border: '3px solid white',
  },
};

export const coachCardBoxStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '-10%',
  left: '-34%',
  transition: '.5s',
  animation: `${ANIMATIME} move-card forwards`,
  '@keyframes move-card': {
    '100%': {
      transform: 'translate3d(15rem, 0rem, 0)',
    },
  },
};

export const imageBoxStyle = {
  position: 'absolute',
  left: '15%',
  top: '25%',
  transform: 'rotateZ(-10deg)',
  width: '50%',
  height: '50%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  transition: '.5s',
  zIndex: 2,
  ':hover': {
    boxShadow: '0 0 10px 2px rgba(200, 170, 0, 0.95)',
  },
  animation: `${ANIMATIME} draw-card forwards`,
  '@keyframes draw-card': {
    to: {
      transform: 'translate3d(-8rem, -4rem, 0) rotateZ(0deg)',
    },
  },
};

export const cardBehindStyle = {
  position: 'absolute',
  overflow: 'hidden',
  bottom: '2%',
  right: '5%',
  width: '80%',
  height: '85%',
  padding: '2rem',
  textAlign: 'right',
  borderRadius: '15px',
  bgcolor: 'slategrey',
  zIndex: 1,
};

export const cardTitleStyle = {
  paddingBottom: '.2rem',
  paddingRight: '.7rem',
  color: 'white',
  borderBottom: '2px solid white',
};

const cardButtonStyle = {
  position: 'absolute',
  right: '5%',
  bottom: '0%',
  borderWidth: '3px',
  overflow: 'hidden',
  ':before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '-100%',
    bgcolor: 'white',
    transition: '.5s',
    zIndex: '-1',
  },
  ':hover': {
    borderWidth: '3px',
    color: 'var(--steel-grey)',
    ':before': {
      left: 0,
    },
  },
};

export const cardFrontStyle = {
  position: 'absolute',
  right: '7%',
  bottom: '5%',
  // paddingBlock: '1rem',
  paddingInline: '2rem',
  overflow: 'hidden',
  color: 'white',
  width: '76%',
  height: '30%',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
  bgcolor: 'slategrey',
  boxShadow: '0 -6px 3px -3px rgba(0, 0, 0, 0.2)',
  transition: '.5s',
  zIndex: 3,
  button: {
    ...cardButtonStyle,
    transition: 'opacity .5s',
    opacity: 0,
  },
  animation: `${ANIMATIME} grow-up forwards`,
  '@keyframes grow-up': {
    '100%': {
      height: '65%',
      boxShadow: 'none',
    },
  },
};
