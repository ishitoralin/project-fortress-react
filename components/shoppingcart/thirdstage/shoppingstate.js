import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
export default function ShoppingState() {
  return (
    <div>
      <div className={`${styles.shoppingStateContainer}`}>
        <div className={`${styles.shoppingStateComponent}`}>
          <Link href="./shoppingcart">
            <CheckCircleIcon className={styles.ShoppingState414} />
            訂單確認
          </Link>
        </div>
        <EastIcon className={styles.ShoppingState576} />
        <div
          className={`${styles.shoppingStateComponent} ${styles.ShoppingState576}`}
        >
          <Link href="./shoppingcart">
            <CheckCircleIcon />
            買家資訊
          </Link>
        </div>
        <EastIcon className={styles.ShoppingState576} />
        <div
          className={`${styles.shoppingStateComponent} ${styles.ShoppingState576}`}
        >
          <Link href="./shoppingcart">
            <CheckCircleIcon />
            訂單明細
          </Link>
        </div>
      </div>
    </div>
  );
}
