/* 精選商品欄位 */
import React from 'react';
import styles from '@/styles/shoppingcart.module.css';import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import createColorTheme from '@/libs/CreateColorTheme';
//Import button
const WhiteTheme = createColorTheme('#FFF');
const RedTheme = createColorTheme('#FF0000');
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';


export default function RecommendProduct(props) {
  const fakeDataForCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className={`${styles.recommendProductTitle}`}>本季新品!!!</div>
      <div className={`${styles.recommendProductContainer}`}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div className={`${styles.recommendProductComponent}`} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: '140px' }}
                  // image={`/SCphoto/capoo${i}.png`}
                  image="/SCphoto/capoo${i}.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Box
                      sx={{
                        m: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>產品名稱{v}</Box>
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    產品敘述 Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: '16px',
                  }}
                >
                  Price
                  <WhiteTheme>
                    <Button
                      size="small"
                      sx={{
                        // width: '10%',
                        ':hover': {
                          opacity: '.7',
                          bgcolor: 'var(--main-red)',
                        },
                      }}
                      // color={props.color}
                      variant="contained"
                      onClick={props.onClick}
                    >
                      加入購物車
                    </Button>
                  </WhiteTheme>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>

      <div className={`${styles.recommendProductTitle}`}>推薦商品!!!</div>
      <div className={`${styles.recommendProductContainer}`}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div className={`${styles.recommendProductComponent}`} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: '140px' }}
                  // image={`/SCphoto/capoo${i}.png`}
                  image="/SCphoto/capoo${i}.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Box
                      sx={{
                        m: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>產品名稱{v}</Box>
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    產品敘述 Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Button size="small">Price</Button>
                  <WhiteTheme>
                    <Button
                      size="small"
                      sx={{
                        // width: '10%',
                        ':hover': {
                          opacity: '.7',
                          bgcolor: 'var(--main-red)',
                        },
                      }}
                      // color={props.color}
                      variant="contained"
                      onClick={props.onClick}
                    >
                      加入購物車
                    </Button>
                  </WhiteTheme>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      <div className={`${styles.recommendProductTitle}`}>熱門商品!!!</div>
      <div className={`${styles.recommendProductContainer}`}>
        {fakeDataForCards.map((v, i) => {
          return (
            <div className={`${styles.recommendProductComponent}`} key={i}>
              <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardMedia
                  sx={{ height: '140px' }}
                  // image={`/SCphoto/capoo${i}.png`}
                  image="/SCphoto/capoo${i}.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Box
                      sx={{
                        m: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>產品名稱{v}</Box>
                      <FavoriteBorderIcon></FavoriteBorderIcon>
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    產品敘述 Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Button size="small">Price</Button>
                  <WhiteTheme>
                    <Button
                      size="small"
                      sx={{
                        // width: '10%',
                        ':hover': {
                          opacity: '.7',
                          bgcolor: 'var(--main-red)',
                        },
                      }}
                      // color={props.color}
                      variant="contained"
                      onClick={props.onClick}
                    >
                      加入購物車
                    </Button>
                  </WhiteTheme>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
