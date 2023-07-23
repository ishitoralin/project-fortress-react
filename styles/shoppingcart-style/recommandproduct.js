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
  borderBottom: '1px solid #DFDFDF',
  transition: '0.5s',

  ':hover': {
    cursor: 'pointer',
    fontStyle: '30px',
    transition: '0.5s',
    transform: 'translateX(-3px) translateY(-3px)',
    boxShadow: '1px 1px 0 rgba(1, 1, 0, 0.1)',
  },
};

export const FavorIconStyle = {
  fill: 'red',
  ':hover': { cursor: 'pointer' },
};
