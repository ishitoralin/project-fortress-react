import React from 'react';
import styles from '@/styles/product.module.css';
import CuiImgsmap from '@/components/product/cui-imgsmap';
import BasicBreadcrumbs from '@/components/product/cui-productBreadcrumbs';
import { Paper, Rating, Typography } from '@mui/material';
export default function Index() {
  return (
    <>
      <div className={`${styles['product-detail']}`}>
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
          </div>
        </div>
      </div>
    </>
  );
}
