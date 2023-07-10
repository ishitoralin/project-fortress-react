import { Button } from '@mui/material';

const CUIButton = (props) => {
  const buttonStyle = {
    transition: '.5s',
    ':hover': {
      filter: 'brightness(0.85)',
    },
  };

  return (
    <Button
      variant="contained"
      {...props}
      color={props.color || 'main_red'}
      sx={{ ...buttonStyle, ...props.sx }}
    >
      {props.children}
    </Button>
  );
};

export default CUIButton;
