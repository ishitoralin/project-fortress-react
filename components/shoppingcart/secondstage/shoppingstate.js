import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
import styles from '@/styles/shoppingcart.module.css';
export default function ShoppingState() {
  return (
    <div>
      <div className={`${styles.shoppingStateContainer}`}>
        <div className={`${styles.shoppingStateComponent}`}>
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <CheckCircleIcon />
            訂單確認
          </Link>
        </div>
        <EastIcon />
        <div className={`${styles.shoppingStateComponent}`}>
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            買家資訊
          </Link>
        </div>
        <EastIcon />
        <div className={`${styles.shoppingStateComponent}`}>
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
