export const mainContainerStyle = { p: 4 };

export const iconStyle = {
  bgcolor: 'var(--steel-grey)',
  borderRadius: '5px',
  color: 'white',
  ':hover': {
    bgcolor: 'var(--steel-light-grey)',
  },
  ':disabled': {
    color: '#eee',
    bgcolor: 'lightgrey',
  },
};

export const editCardStyle = {
  position: 'relative',
  p: 4,
  bgcolor: '#eee',
  display: 'flex',
  flexDirection: {
    xs: 'column',
    sm: 'row',
  },
  flexWrap: 'wrap',
};

export const imgBoxStyle = {
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative',
  height: { xs: '150px', sm: '200px' },
  width: { xs: '150px', sm: '200px' },
};

export const editBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-evenly',
  paddingBlock: 2,
  marginLeft: { xs: 0, sm: '2rem' },
};

export const nameBoxStyle = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: {
    xs: 'column-reverse',
    md: 'row',
  },
};

export const iconBoxStyle = {
  marginLeft: 'auto',
  position: {
    xs: 'absolute',
    sm: 'static',
  },
  top: '3rem',
  right: '3rem',
};

export const introBoxStyle = {
  width: '100%',
  marginTop: '1rem',
  display: {
    xs: 'none',
    md: 'block',
  },
};

export const introEditModeStyle = {
  width: '100%',
  display: {
    xs: 'block',
    md: 'none',
  },
  marginTop: '1rem',
};
