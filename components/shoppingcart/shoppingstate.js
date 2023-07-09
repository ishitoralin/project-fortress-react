import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';

export default function ShoppingState() {
  // 各區塊範圍(寬滿版，pd200px)
  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };

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
    <div style={sessionContainer}>
      <div style={shoppingStateContainer}>
        <div style={shoppingStateComponent}>
          <CheckCircleOutlineIcon />
          訂單確認
        </div>
        <EastIcon />
        <div style={shoppingStateComponent}>
          <RemoveCircleOutlineIcon />
          買家資訊
        </div>
        <EastIcon />
        <div style={shoppingStateComponent}>
          <RemoveCircleOutlineIcon />
          訂單明細
        </div>
      </div>
    </div>
  );
}
