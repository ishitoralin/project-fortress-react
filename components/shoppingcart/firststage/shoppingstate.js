import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
export default function ShoppingState() {
  return (
    <div>
      <div className={`${styles.shoppingStateContainer}`}>
        <div
          className={`${styles.shoppingStateComponent} ${styles.ShoppingState996}`}
        >
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            訂單確認
          </Link>
        </div>
        <EastIcon className={styles.ShoppingState600} />
        <div
          className={`${styles.shoppingStateComponent}  ${styles.ShoppingState996} ${styles.ShoppingState600}`}
        >
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            買家資訊
          </Link>
        </div>
        <EastIcon className={styles.ShoppingState600} />
        <div
          className={`${styles.shoppingStateComponent}  ${styles.ShoppingState996} ${styles.ShoppingState600}`}
        >
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            訂單明細
          </Link>
        </div>
      </div>
    </div>
  );
}
