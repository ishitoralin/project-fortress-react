import getBrickBackground from '@/libs/getBrickBackground';

// index
export const indexBackground = {
  bgcolor: 'var(--deepgrey)',
  backgroundImage: getBrickBackground({
    scale: 2,
    rotate: 7,
    brickColor: 'hsl(100, 0%, 30%)',
    strokeColor: 'hsl(100, 0%, 20%)',
  }),
  backgroundAttachment: 'fixed',
  zIndex: '10',
};

export const indexContainer = {
  margin: '0 150px',
  padding: '0 50px',
  backgroundColor: 'white',
  zIndex: '20',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px',
    margin: '0 75px',
  },
  '@media screen and (max-width: 576px)': {
    fontSize: '16px',
    margin: '0',
  },
};

export const checkbutton = {
  backgroundColor: 'white',
  zIndex: '30',
  position: 'sticky',
  bottom: '0',
};

// first page recommanded products
export const CUICardStyle = {
  maxWidth: '90%',
  minWidth: '90%',
  //   height:'400px',
  marginBottom: '20px',
  transition: '0.3s',
  ':hover': {
    transition: '0.3s',
  },
};

export const CardMediaStyle = {
  height: '200px',
  backgroundColor: 'gray',
  transition: '0.3s',
  ':hover': { height: '240px', transition: '0.3s' },
};

export const CheckButton = {
  ':hover': {
    opacity: '.7',
    bgcolor: 'var(--main-red)',
  },
  '@media screen and (max-width:996)': {
    width: '50px',
    overflow: 'hidden',
  },
};

export const ProductNameAndIcon = {
  m: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const CardActionsStyle = {
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: '16px',
};

export const priceStyle = {
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '3px',
  fontStyle: 'italic',
  borderBottom: '1px solid red',
  transition: '0.5s',
  fontSize: '24px',

  '::before': {
    content: `'$'`,
    display: 'block',
    color: 'black',
  },
  ':hover': {
    cursor: 'pointer',
    fontStyle: '30px',
    transition: '0.5s',
    transform: 'translateX(-3px) translateY(-3px)',
    boxShadow:
      '0 0 5px rgba(0, 0, 0, 0.5),0 0 10px rgba(0, 0, 0, 0.3),0 0 20px rgba(0, 0, 0, 0.2),0 0 30px rgba(1, 1, 0, 0.1)',
  },
  '@media screen and (max-width: 767px)': {
    fontSize: '16px',
  },
};

export const FavorIconStyle = {
  fill: 'red',
  ':hover': { cursor: 'pointer' },
};
