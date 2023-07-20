import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
export default function ProductListTitle() {
  return (
    <div>
      <div className={`${styles.ProductionTitleContainer}`}>
        <div className={`${styles.ProductionTitleComponent}`}>產品編號</div>
        <div className={`${styles.ProductionTitleComponentInfo}`}>商品資訊</div>
        <div className={`${styles.ProductionTitleComponent}`}>單價</div>
        <div className={`${styles.ProductionTitleComponent}`}>數量</div>
        <div className={`${styles.ProductionTitleComponent}`}>小計</div>
        <div className={`${styles.ProductionTitleComponent}`}>刪除</div>
      </div>
    </div>
  );
}
