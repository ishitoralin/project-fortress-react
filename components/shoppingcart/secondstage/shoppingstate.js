import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import styles from '@/styles/shoppingcart.module.css';
export default function ShoppingState() {
  return (
    <div>
      <div className={`${styles.shoppingStateContainer}`}>
        <div
          className={`${styles.shoppingStateComponent} ${styles.ShoppingState576}`}
        >
          <CheckCircleIcon className={styles.ShoppingState414} />
          訂單確認
        </div>
        <EastIcon className={styles.ShoppingState576} />
        <div className={`${styles.shoppingStateComponent} `}>
          <CheckCircleIcon />
          買家資訊
        </div>
        <EastIcon className={styles.ShoppingState576} />
        <div
          className={`${styles.shoppingStateComponent} ${styles.ShoppingState576}`}
        >
          <RemoveCircleOutlineIcon />
          訂單明細
        </div>
      </div>
    </div>
  );
}
