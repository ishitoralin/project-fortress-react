// import Paper from '@mui/material/Paper';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// >>> Sean's schedule list element
const MySchedule = styled(Paper)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: 'pink',
  borderRadius: '50px',
  width: '100%',
  margin: '2rem',
}));

function SUISchedule(props) {
  return (
    <MySchedule elevation={4} sx={props.sx} onClick={props.onClick}>
      {props.children}
    </MySchedule>
  );
}
// <<< Sean's schedule list element

// >>> Sean's schedule list element
const MyScheduleTable = styled(Grid)(() => ({
  border: '3px black solid',
  borderRadius: '20px',
  //   height: '1000px',
}));

function SUIScheduleTable(props) {
  return (
    <MyScheduleTable elevation={4} sx={props.sx} onClick={props.onClick}>
      {props.children}
    </MyScheduleTable>
  );
}
// <<< Sean's schedule list element

export { SUISchedule, SUIScheduleTable };
