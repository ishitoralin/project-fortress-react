import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
export default function ProductListTitle() {
  return (
    <div>
      <div className={`${styles.ProductionTitleContainer}`}>
        <div
          className={`${styles.ProductionTitleComponent} ${styles.productListTitle996}`}
        >
          序號
        </div>
        <div className={`${styles.ProductionTitleComponentInfo} ${styles.productListTitleWords996}`}>商品資訊</div>
        <div
          className={`${styles.ProductionTitleComponent} ${styles.productListTitleWords996}`}
        >
          單價
        </div>
        <div
          className={`${styles.ProductionTitleComponent} ${styles.productListTitleWords996}`}
        >
          數量
        </div>
        <div
          className={`${styles.ProductionTitleComponent} ${styles.productListTitleWords996}  ${styles.productListTitleWords576}`}
        >
          小計
        </div>
        <div
          className={`${styles.ProductionTitleComponent} ${styles.productListTitle996}`}
        >
          刪除
        </div>
      </div>
    </div>
  );
}
