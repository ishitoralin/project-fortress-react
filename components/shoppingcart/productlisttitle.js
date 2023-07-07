import React from 'react';

export default function ProductListTitle() {
  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };
  // 購物車產品標題物件容器
  const ProductionTitleContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #000',
    fontSize: '25px',
  };
  // 購物車產品物件1
  const ProductionTitleComponent = {
    width: '14%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  // 購物車產品物件2(詳細資訊欄專用)
  const ProductionTitleComponentInfo = {
    width: '28%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={sessionContainer}>
      <div style={ProductionTitleContainer}>
        <div style={ProductionTitleComponent}>產品編號</div>
        <div style={ProductionTitleComponentInfo}>商品資訊</div>
        <div style={ProductionTitleComponent}>單價</div>
        <div style={ProductionTitleComponent}>數量</div>
        <div style={ProductionTitleComponent}>小計</div>
        <div style={ProductionTitleComponent}>刪除</div>
      </div>
    </div>
  );
}
