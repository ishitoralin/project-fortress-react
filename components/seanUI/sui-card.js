import {
  Paper,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const myBorderWidth = '2px';
const myBorderColor = 'black';

function SUICardList({ list }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        backgroundColor: 'var(--steel-light-grey)',
        // borderRadius: '20px',
        width: '100%',
        height: '500px',
        marginTop: '1.5rem',
        overflow: 'auto',
        position: 'relative',
        // border: `${myBorderWidth} solid ${myBorderColor}`,
        padding: '0.5rem',
        // outline: `${myBorderWidth} solid blue`,
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
      <Grid container>
        {list.map((item, i) => (
          <Grid
            item
            xs={6}
            // sm={4}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center', p: 1 }}
          >
            <MyCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

function MyCard({ item }) {
  return (
    <Card sx={{ width: '100%', borderRadius: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${item.img}.jpg`}
        alt="Image"
      />
      <CardContent>
        {/* <Typography variant="h6" component="div">
          {item.img}
        </Typography> */}
        <Typography color="text.secondary">{item.description}</Typography>
      </CardContent>
    </Card>
  );
}

// function Calendar

function CalendarCard({ date }) {
  return (
    <Card
      sx={{
        // width: '100%',
        border: `${myBorderWidth} solid ${myBorderColor}`,
        borderRadius: '20px',
        height: '15rem',
        p: 0,
        m: 2,
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            bgcolor: 'var(--fortress)',
            p: 1,
            borderBottom: `${myBorderWidth} solid ${myBorderColor}`,
            textAlign: 'center',
          }}
        >
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ p: 0, m: 0 }}>
          This is the content of
          twerfawfawfawfwqal;jijhfnalkjfhnawlkjfhbnawlkjgrbnhe card.
        </Typography>
      </CardContent>
    </Card>
  );
}

function CalendarCardList({ dates }) {
  return (
    <>
      {dates.map((date, i) => {
        return <CalendarCard key={i} date={date} />;
      })}
    </>
  );
}

export { SUICardList, CalendarCardList, CalendarCard };
