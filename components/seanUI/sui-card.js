import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const MyCard = styled(Paper)(() => ({
  display: 'inline-block',
  padding: '20px',
  backgroundColor: 'pink',
  borderRadius: '20px',
  width: '100%',
}));

export default function SUICard(props) {
  return (
    <MyCard elevation={4} sx={props.sx} onClick={props.onClick}>
      {props.children}
    </MyCard>
  );
}
