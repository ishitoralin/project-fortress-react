const mainWhite = '#eee';

export const cardStyle = {
  margin: 'auto',
  width: '100%',
  height: '230px',
  marginBottom: '1.5rem',
  bgcolor: mainWhite,
  display: 'flex',
  overflow: 'hidden',
  transition: '.2s',
  ':hover': {
    button: {
      opacity: 1,
    },
    '.lesson_card_img': {
      filter: 'brightness(0.45) !important',
    },
  },
};

export const cardImgStyle = {
  position: 'relative',
  width: '30%',
  height: '100%',
  overflow: 'hidden',
  boxShadow: '1px 0 7px #555',
  transform: 'scale(1.5) translateY(-5%) rotateZ(15deg)',
};

export const cardBodyStyle = {
  width: '62%',
  padding: '1rem',
  marginLeft: 'auto',
};

export const imgBox = {
  position: 'relative',
  width: '100%',
  height: '90%',
  transform: 'rotateZ(-15deg) translate(10%, 10%)',
};

export const imgButtonStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 2,
  transform: 'translate(-60%, -40%)',
  fontSize: '.7rem',
  fontWeight: 'bold',
  borderWidth: '2px',
  opacity: 0,
  transition: '.5s',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '0%',
    height: '100%',
    bgcolor: mainWhite,
    zIndex: '-1',
    transition: '.5s',
  },
  ':hover': {
    color: '#333',
    borderWidth: '2px',
    ':before': {
      left: 0,
      width: '100%',
    },
  },
};

export const imgStyle = {
  width: '100%',
  height: '100%',
  filter: 'brightness(90%)',
  objectFit: 'cover',
  transition: '.5s',
};

export const cardTitleStyle = {
  display: 'inline-block',
  width: '90%',
  textAlign: 'center',
  fontWeight: 'bold',
};

export const favoriteIconStyle = {
  width: '10%',
  verticalAlign: 'text-bottom',
  color: 'var(--main-red)',
  cursor: 'pointer',
};

export const cardInfoBoxStyle = {
  padding: '.25rem 5% 0rem 1rem',
};

export const cardInfoRowStyle = {
  display: 'flex',
  borderBottom: '2px solid #dfdfdf',
};

export const cardInfoTitleStyle = {
  width: 'fit-content',
  fontWeight: 'bold',
};

export const cardInfoStyle = {
  flexGrow: 1,
  textAlign: 'center',
  fontWeight: 'bold',
};

export const tagBoxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  height: '2.1rem',
  overflow: 'hidden',
  paddingTop: '.5rem',
};

export const tagStyle = {
  height: '1.5rem',
  fontSize: '.8rem',
  bgcolor: 'var(--steel-light-grey)',
  marginRight: '.2rem',
  marginBottom: '1rem',
};

export const iconStyle = {
  verticalAlign: 'middle',
  color: 'grey',
  marginRight: '.3rem',
};

export const priceRegiBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '.25rem 5% 0rem 0rem',
};

export const priceIconStyle = {
  verticalAlign: 'text-top',
  color: '#555',
  transform: 'skew(-10deg)',
  marginRight: '.2rem',
};

export const priceTextStyle = {
  position: 'relative',
  fontWeight: 'bold',
  fontStyle: 'oblique',
  ':before': {
    content: '""',
    position: 'absolute',
    left: '-17.5%',
    bottom: 0,
    width: '130%',
    borderBottom: '3px solid var(--main-red)',
  },
};

export const regisBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  cursor: 'pointer',
  ':hover': {
    '.regisText': {
      fontSize: '1.3rem',
      filter: 'drop-shadow(0 7px 7px grey)',
    },
  },
  '.regisText': {
    fontWeight: 'bold',
    fontStyle: 'oblique',
    transition: '.3s',
  },
};

export const forwardSymbolBoxStyle = {
  width: '45px',
  height: '45px',
  transform: 'rotate(-90deg)',
};