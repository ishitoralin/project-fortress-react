import { Button } from '@mui/material';

const CUIButton = (props) => {
  const defaultSx = props.color
    ? {}
    : {
        bgcolor: props.btncolor || 'var(--main-red)',
        transition: '.5s',
        ':hover': {
          filter: 'brightness(0.8)',
          bgcolor: props.btncolor || 'var(--main-red)',
        },
      };

  return (
    <Button variant="contained" {...props} sx={{ ...defaultSx, ...props.sx }}>
      {props.children}
    </Button>
  );
};

export default CUIButton;
