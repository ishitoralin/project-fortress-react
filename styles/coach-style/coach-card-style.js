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
  left: '-10%',
  transition: '.5s',
};

export const imageBoxStyle = {
  position: 'absolute',
  left: '20%',
  top: '23%',
  transform: 'rotateZ(-10deg)',
  width: '55%',
  height: '55%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  transition: '.5s',
  zIndex: 2,
  ':hover': {
    boxShadow: '0 0 10px 2px rgba(200, 170, 0, 0.95)',
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

export const cardFrontStyle = {
  position: 'absolute',
  right: '7%',
  bottom: '2%',
  paddingBlock: '.5rem',
  paddingInline: '1rem',
  color: 'white',
  width: '76%',
  height: '36%',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
  bgcolor: 'slategrey',
  boxShadow: '0 -6px 3px -3px rgba(0, 0, 0, 0.2)',
  transition: '.5s',
  zIndex: 3,
  button: {
    position: 'absolute',
    right: '5%',
    bottom: '0%',
    transition: '.5s',
    opacity: 0,
  },
};

export const cardInfoStyle = {
  position: 'relative',
  width: '100%',
  height: '80%',
  overflow: 'hidden',
  textIndent: '2rem',
  fontSize: '.9rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 6,
};

export const drawImgAnimation = {
  transform: 'translate3d(-4rem, -8rem, 0) rotateZ(0deg)',
};

export const cardDownAnimation = {
  transition: '.5s .2s',
  top: '3%',
  left: '5%',
};

export const showInfoAnimation = {
  transition: '.5s .5s',
  transform: 'translateY(-10%)',
  height: '42%',
  button: {
    position: 'absolute',
    right: '5%',
    bottom: '0%',
    transition: '.5s 1s',
    opacity: 1,
  },
};
