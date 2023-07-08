import { Typography, Stack, Box, Button } from '@mui/material';
import CUICard from './cui-card';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(() => ({
  padding: '1.5rem',
}));

const Filter = ({ noButton = false, ...props }) => {
  return (
    <CUICard
      sx={{
        ...props.sx,
        overflow: 'hidden',
        height: 'fit-content',
      }}
    >
      {typeof props.label === 'string' && (
        <Item sx={{ borderBottom: '3px solid lightgrey', ...props.sxLabel }}>
          <Typography color={props.color} variant="h5">
            {props.label}
          </Typography>
        </Item>
      )}
      <Stack sx={props.sxBody}>
        {Array.isArray(props.items) &&
          props.items.map((item, index) => (
            <Item
              sx={{ borderBottom: '1px solid lightgrey' }}
              key={item.key || index}
            >
              {item}
            </Item>
          ))}
        {!noButton && (
          <Item sx={{ textAlign: 'center' }}>
            <Button
              sx={
                props.color
                  ? { width: '100%' }
                  : {
                      width: '100%',
                      bgcolor: 'var(--main-red)',
                      transition: '.5s',
                      ':hover': {
                        opacity: '.7',
                        bgcolor: 'var(--main-red)',
                      },
                    }
              }
              color={props.color}
              variant="contained"
              onClick={props.onClick}
            >
              篩選
            </Button>
          </Item>
        )}
      </Stack>
    </CUICard>
  );
};

export default Filter;
