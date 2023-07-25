import { Grid, Paper, Box, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
}));

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

// const exerciseColumn

function SUISchedule({
  type,
  scheduleList,
  setScheduleList,
  width = ['58%', '18%', '12%', '12%'],
}) {
  const handleDelete = (item) => {
    const updateList = [...scheduleList];
    setScheduleList(
      updateList.filter((ele) => {
        return ele.id !== item.id;
      })
    );
  };

  return (
    <Section
      sx={{
        height: '400px',
        overflow: 'auto',
        position: 'relative',
        '&::-webkit-scrollbar': {
          width: 20,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'var(--fortress)',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '5px',
          backgroundColor: 'var(--deepgrey)',
          transition: '.5s',
          '&:hover': {
            filter: 'brightness(0.85)',
            backgroundColor: 'var(--main-red)',
          },
        },
      }}
    >
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
          {scheduleList.map((scheduleItem, i) => {
            let Num1;
            let Num2;
            if (type === 'exercise') {
              Num1 = scheduleItem.reps;
              Num2 = scheduleItem.sets;
            } else {
              Num1 = scheduleItem.calories;
              Num2 = scheduleItem.protein;
            }

            return (
              <Box
                key={scheduleItem.id}
                component={Box}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  my: 0.5,
                  width: '100%',
                  minWidth: 'auto', // Set min-width to auto
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Add your desired hover effect
                    cursor: 'pointer', // Change cursor to pointer on hover
                    borderRadius: '30px',
                  },
                }}
                onClick={() => {
                  // Add your click event handling logic here
                  console.log('Button clicked!');
                }}
              >
                <Box
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
                    {scheduleItem.name}
                  </SUIScheduleItem>
                  <SUIScheduleItem sx={{ width: width[1] }}>
                    {scheduleItem.quantity}
                  </SUIScheduleItem>
                  <SUIScheduleItem sx={{ width: width[2] }}>
                    {Num1}
                  </SUIScheduleItem>
                  <SUIScheduleItem
                    sx={{
                      width: width[3],
                      borderTopRightRadius: '30px',
                      borderBottomRightRadius: '30px',
                      borderRight: myBorder,
                      display: 'flex',
                      justifyContent: 'end',
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{Num2}</Box>

                    {/* >>> Delete Button >>> */}
                    <ButtonBase
                      sx={{
                        p: 0, // Set padding to 0
                        minWidth: 'auto', // Set min-width to auto
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(scheduleItem);
                      }}
                    >
                      <CancelIcon
                        sx={{ fontSize: 30, color: 'var(--main-red)' }}
                      />
                    </ButtonBase>
                    {/* <<< Delete Button <<< */}
                  </SUIScheduleItem>
                </Box>
              </Box>
            );
          })}
        </Box>
      </div>
    </Section>
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
