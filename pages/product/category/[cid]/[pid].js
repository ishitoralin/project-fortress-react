import React from 'react';
import styles from '@/styles/product.module.css';
import CuiImgsmap from '@/components/product/cui-imgsmap';
import BasicBreadcrumbs from '@/components/product/cui-productBreadcrumbs';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Paper, Rating, Typography, Button, Stack } from '@mui/material';
import CUIButton from '@/components/customUI/cui-button';
export default function Index() {
  return (
    <>
      <div className={`${styles['product-detail-section1']}`}>
        <BasicBreadcrumbs></BasicBreadcrumbs>
        <div className={`${styles['product-detail-container']}`}>
          <CuiImgsmap></CuiImgsmap>
          <div className={`${styles['product-detail-title']}`}>
            <Typography variant="h5">
              男士透氣 Essential Fitness 圓領T恤 - 藍色
            </Typography>
            <div className={`${styles['product-detail-price']}`}>
              <Typography variant="h3">NT$390</Typography>
              <div className={`${styles['product-detail-Rating']}`}>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                <Typography variant="h6">4.8(150)</Typography>
              </div>
            </div>
            <div className={`${styles['color-selcetor']}`}>
              <Typography variant="h6">顏色</Typography>
              <div className={`${styles['colorbox']}`}>
                <Paper className={`${styles['color1']}`} />
                <Paper className={`${styles['color2']}`} />
                <Paper className={`${styles['color3']}`} />
                <Paper className={`${styles['color4']}`} />
              </div>
            </div>
            <div className={`${styles['size-selector']}`}>
              <Typography variant="h6">尺寸</Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  className={`${styles['size-Button']}`}
                  variant="outlined"
                  size="small"
                >
                  S
                </Button>
                <Button
                  className={`${styles['size-Button']}`}
                  variant="outlined"
                  size="small"
                >
                  M
                </Button>
                <Button
                  className={`${styles['size-Button']}`}
                  variant="outlined"
                  size="small"
                >
                  L
                </Button>
              </Stack>
            </div>
            <div className={`${styles['quantity']}`}>
              <Typography variant="h6">數量:</Typography>
              <Button sx={{ color: 'black' }}>
                <RemoveIcon></RemoveIcon>
              </Button>
              <input
                className={`${styles['quantityBox']}`}
                type="number"
                value={1}
              />
              <Button sx={{ color: 'black' }}>
                <AddIcon></AddIcon>
              </Button>
            </div>
            <div className={`${styles['product-detail-button']}`}>
              <CUIButton
                sx={{ width: '249px', height: '36px' }}
                color={'main_white'}
              >
                立即購買
              </CUIButton>
              <CUIButton
                sx={{ width: '249px', height: '36px' }}
                color={'main_red'}
              >
                加入購物車
              </CUIButton>
            </div>
            <div className={`${styles['product-detail-button']}`}>
              <Button sx={{ color: 'black' }}>
                <ShareIcon></ShareIcon>分享
              </Button>
              <Button sx={{ color: 'black' }}>
                <FavoriteBorderIcon></FavoriteBorderIcon>收藏
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
