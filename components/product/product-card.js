import React from 'react';
import CUICard from '../customUI/cui-card';
import styles from '@/styles/product.module.css';
import CUIButton from '../customUI/cui-button';

export default function productCard() {
  return (
    <>
      <div className={`${styles['product-card-section']}`}>
        <div>
          <CUICard className={`${styles['BigCard']}`}>
            <div className={`${styles['Card']}`}>
              <div>炎炎夏日 透心涼感衣上市中</div>
              <CUIButton className={`${styles['CardButtons']}`}>
                了解詳情
              </CUIButton>
            </div>
          </CUICard>
        </div>
        <div className={`${styles['Cardcontainer']}`}>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div></div>
              <div>男士透氣快乾跑步短袖上衣 RUN DRY</div>
              <div></div>
              <div></div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}></CUICard>
            <CUICard className={`${styles['smallCard']}`}></CUICard>
          </div>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}></CUICard>
            <CUICard className={`${styles['smallCard']}`}></CUICard>
            <CUICard className={`${styles['smallCard']}`}></CUICard>
          </div>
        </div>
      </div>
    </>
  );
}
