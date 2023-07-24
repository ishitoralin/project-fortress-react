/* 精選商品欄位 */
import React, { useEffect, useState } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import createColorTheme from '@/libs/CreateColorTheme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Import button
const WhiteTheme = createColorTheme('#FFF');
const RedTheme = createColorTheme('#FF0000');
import CUICard from '@/components/customUI/cui-card';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import {
  CUICardStyle,
  CardMediaStyle,
  CheckButton,
  ProductNameAndIcon,
  CardActionsStyle,
  priceStyle,
  FavorIconStyle,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function RecommendProduct(props) {
  const [recommandProduct, setRecommandProduct] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [recommandLesson, setRecommandLesson] = useState([]);
  // const [favorTarget, setFavorTarget] = useState(-1);

  const fakeDataForCart1 = {
    products: [
      {
        id: 19,
        photo: 'photo',
        name: '緊身衣',
        detail: 'abavafdasfewweg gewaef gre',
        price: 3000,
      },
      {
        id: 24,
        photo: 'photo',
        name: '布偶裝',
        detail: 'abavafdasfewweg gewaef gre',
        price: 2000,
      },
      {
        id: 3,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 4,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 5,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 6,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 323,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 25,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
    ],
  };
  const fakeDataForCart2 = {
    products: [
      {
        id: 19,
        photo: 'photo',
        name: '緊身衣',
        detail: 'abavafdasfewweg gewaef gre',
        price: 3000,
      },
      {
        id: 24,
        photo: 'photo',
        name: '布偶裝',
        detail: 'abavafdasfewweg gewaef gre',
        price: 2000,
      },
      {
        id: 3,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 4,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 5,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 6,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 323,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 25,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
    ],
  };
  const fakeDataForCart3 = {
    products: [
      {
        id: 19,
        photo: 'photo',
        name: '緊身衣',
        detail: 'abavafdasfewweg gewaef gre',
        price: 3000,
      },
      {
        id: 24,
        photo: 'photo',
        name: '布偶裝',
        detail: 'abavafdasfewweg gewaef gre',
        price: 2000,
      },
      {
        id: 3,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 4,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 5,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 6,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 323,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
      {
        id: 25,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
      },
    ],
  };
  useEffect(() => {
    // TODO fetch data then push into newData
    const newData = fakeDataForCart1.products.map((v, i) => {
      return { ...v, isFavor: false };
    });
    return setRecommandProduct(newData);
  }, []);
  useEffect(() => {
    // TODO fetch data
    return setPopularProducts(fakeDataForCart2.products);
  }, []);
  useEffect(() => {
    // TODO fetch data
    return setRecommandLesson(fakeDataForCart3.products);
  }, []);

  const changeFavorState = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) {
        return { ...v, isFavor: !v.isFavor };
      } else {
        return { ...v };
      }
    });
  };

  const spaceBetween = 0;
  const slidesPerView = 3;

  return (
    <>
      <div>
        <div className={`${styles.recommendProductTitle}`}>本季新品!!!</div>
        <div className={`${styles.recommendProductContainer}`}>
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {recommandProduct.map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`${styles.recommendProductComponent}`}
                    key={i}
                  >
                    <CUICard sx={CUICardStyle}>
                      <CardMedia
                        sx={CardMediaStyle}
                        image="/SCphoto/capoo${i}.png"
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Box sx={ProductNameAndIcon}>
                            <Box>{v.name}</Box>
                            <Box
                              sx={FavorIconStyle}
                              onClick={() => {
                                setRecommandProduct(
                                  changeFavorState(recommandProduct, v.id)
                                );
                                console.log();
                              }}
                            >
                              {v.isFavor ? (
                                <FavoriteIcon
                                  sx={FavorIconStyle}
                                ></FavoriteIcon>
                              ) : (
                                <FavoriteBorderIcon
                                  sx={FavorIconStyle}
                                ></FavoriteBorderIcon>
                              )}
                            </Box>
                          </Box>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                          }}
                        >
                          {v.detail}
                        </Typography>
                      </CardContent>
                      <CardActions sx={CardActionsStyle}>
                        <Box sx={priceStyle}>{v.price}</Box>
                        <WhiteTheme>
                          <Button
                            size="small"
                            sx={CheckButton}
                            variant="contained"
                            onClick={props.onClick}
                          >
                            查看商品詳情
                          </Button>
                        </WhiteTheme>
                      </CardActions>
                    </CUICard>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={`${styles.recommendProductTitle}`}>推薦商品!!!</div>
        <div className={`${styles.recommendProductContainer}`}>
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {popularProducts.map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`${styles.recommendProductComponent}`}
                    key={i}
                  >
                    <CUICard sx={CUICardStyle}>
                      <CardMedia
                        sx={CardMediaStyle}
                        image="/SCphoto/capoo${i}.png"
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Box sx={ProductNameAndIcon}>
                            <Box>{v.name}</Box>
                            <Box
                              sx={FavorIconStyle}
                              onClick={() => {
                                setPopularProducts(
                                  changeFavorState(popularProducts, v.id)
                                );
                                console.log();
                              }}
                            >
                              {v.isFavor ? (
                                <FavoriteIcon
                                  sx={FavorIconStyle}
                                ></FavoriteIcon>
                              ) : (
                                <FavoriteBorderIcon
                                  sx={FavorIconStyle}
                                ></FavoriteBorderIcon>
                              )}
                            </Box>
                          </Box>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                          }}
                        >
                          {v.detail}
                        </Typography>
                      </CardContent>
                      <CardActions sx={CardActionsStyle}>
                        <Box sx={priceStyle}>{v.price}</Box>
                        <WhiteTheme>
                          <Button
                            size="small"
                            sx={CheckButton}
                            // color={props.color}
                            variant="contained"
                            onClick={props.onClick}
                          >
                            查看商品詳情
                          </Button>
                        </WhiteTheme>
                      </CardActions>
                    </CUICard>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={`${styles.recommendProductTitle}`}>熱門商品!!!</div>
        <div className={`${styles.recommendProductContainer}`}>
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {recommandLesson.map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={`${styles.recommendProductComponent}`}
                    key={i}
                  >
                    <CUICard sx={CUICardStyle}>
                      <CardMedia
                        sx={CardMediaStyle}
                        // image={`/SCphoto/capoo${i}.png`}
                        image="/SCphoto/capoo${i}.png"
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Box sx={ProductNameAndIcon}>
                            <Box>{v.name}</Box>
                            <Box
                              sx={FavorIconStyle}
                              onClick={() => {
                                setRecommandLesson(
                                  changeFavorState(recommandLesson, v.id)
                                );
                                console.log();
                              }}
                            >
                              {v.isFavor ? (
                                <FavoriteIcon
                                  sx={FavorIconStyle}
                                ></FavoriteIcon>
                              ) : (
                                <FavoriteBorderIcon
                                  sx={FavorIconStyle}
                                ></FavoriteBorderIcon>
                              )}
                            </Box>
                          </Box>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {v.detail}
                        </Typography>
                      </CardContent>
                      <CardActions sx={CardActionsStyle}>
                        <Box sx={priceStyle}>{v.price}</Box>
                        <WhiteTheme>
                          <Button
                            size="small"
                            sx={CheckButton}
                            // color={props.color}
                            variant="contained"
                            onClick={props.onClick}
                          >
                            查看商品詳情
                          </Button>
                        </WhiteTheme>
                      </CardActions>
                    </CUICard>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
