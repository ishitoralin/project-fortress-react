import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
export default function ShoppingState() {
  // 購買狀態物件容器
  const shoppingStateContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '2px solid #000000',
  };
  // 購買狀態物件
  const shoppingStateComponent = {
    width: '33%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  return (
    <div>
      <div style={shoppingStateContainer}>
        <div style={shoppingStateComponent}>
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            訂單確認
          </Link>
        </div>
        <EastIcon />
        <div style={shoppingStateComponent}>
          {/* TODO change href when finish nodejs */}
          <Link href="./shoppingcart">
            <RemoveCircleOutlineIcon />
            買家資訊
          </Link>
        </div>
        <EastIcon />
        <div style={shoppingStateComponent}>
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
