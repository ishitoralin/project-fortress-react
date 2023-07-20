import React from 'react';
import styles from '@/styles/shoppingcart.module.css';

export default function ItemListTitle() {
  return (
    <>
      {/* 商品列表title */}
      <div className={`${styles.ProductConFirmTitleContainer}`}>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>
          產品序號
        </div>
        <div className={`${styles.ProductConFirmTitleComponent2}`}>
          商品資訊
        </div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>單價</div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>數量</div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>小計</div>
      </div>
    </>
  );
}
