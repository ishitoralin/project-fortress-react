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
    <div
      style={{
        display: 'flex',
        backgroundColor: 'pink',
        borderRadius: '20px',
        width: '100%',
        height: '500px',
        marginTop: '1.5rem',
        overflow: 'auto',
        position: 'relative',
        border: `${myBorderWidth} solid ${myBorderColor}`,
        padding: '1rem',
        // outline: `${myBorderWidth} solid blue`,
      }}
    >
      <Grid container>
        {list.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center', p: 1 }}
          >
            <MyCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
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

function CalendarCard() {
  return (
    <Card sx={{ width: '100px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is the content of the card.
        </Typography>
      </CardContent>
    </Card>
  );
}

export { SUICardList };
