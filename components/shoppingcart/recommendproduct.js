/* 精選商品欄位 */
import React from 'react';
import Button from '@mui/material/Button';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
export default function RecommendProduct() {
  const fakeDataForCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };
  const recommendProductTitle = {
    width: '100%',
    height: '100px',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: '28px',
  };
  const recommendProductContainer = {
    width: '100%',
    display: 'flex',
    overflow: 'scroll',
    justifyContent: 'start',
    alignItems: 'center',
  };
  const recommendProductComponent = {
    // width: '345px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={sessionContainer}>
      <div style={recommendProductTitle}>本季新品!!!</div>
      <div style={recommendProductContainer}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div style={recommendProductComponent} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {v}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      <div style={recommendProductTitle}>推薦商品!!!</div>
      <div style={recommendProductContainer}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div style={recommendProductComponent} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {v}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      <div style={recommendProductTitle}>熱門商品!!!</div>
      <div style={recommendProductContainer}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div style={recommendProductComponent} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {v}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
