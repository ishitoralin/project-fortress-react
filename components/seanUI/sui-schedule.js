import { Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const myBorderWidth = '2px';
const myBorderColor = 'black';
const myBorder = `${myBorderWidth} solid ${myBorderColor}`;

const SUIScheduleItem = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
  // backgroundColor: 'lightgreen',
  padding: '10px',
  borderRadius: '0px',
  borderWidth: `${myBorderWidth} 0 ${myBorderWidth} ${myBorderWidth}`,
  borderColor: `${myBorderColor}`,
  borderStyle: 'solid',
}));

function SUISchedule({ list, width = ['58%', '18%', '12%', '12%'] }) {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 3,
          width: '100%',
        }}
      >
        {list.map((list, i) => {
          return (
            <Box
              key={i}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 0.5,
                width: '100%',
              }}
            >
              <SUIScheduleItem
                sx={{
                  borderTopLeftRadius: '30px',
                  borderBottomLeftRadius: '30px',
                  width: width[0],
                }}
              >
                {list.name}
              </SUIScheduleItem>
              <SUIScheduleItem sx={{ width: '18%' }}>
                {list.quantity}
              </SUIScheduleItem>
              <SUIScheduleItem sx={{ width: '12%' }}>
                {list.Num1}
              </SUIScheduleItem>
              <SUIScheduleItem
                sx={{
                  width: '12%',
                  borderTopRightRadius: '30px',
                  borderBottomRightRadius: '30px',
                  // width: '80px',
                  borderRight: myBorder,
                }}
              >
                {list.Num2}
              </SUIScheduleItem>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

const MyScheduleTable = styled(Grid)(() => ({
  border: myBorder,
  borderRadius: '5px',
  //   height: '1000px',
}));

function SUIScheduleTable(props) {
  return (
    <MyScheduleTable elevation={4} sx={props.sx} onClick={props.onClick}>
      {props.children}
    </MyScheduleTable>
  );
}

export { SUISchedule, SUIScheduleTable };
