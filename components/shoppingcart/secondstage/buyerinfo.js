import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';

export default function BuyerInfo() {
  return (
    <>
      {/* 購買人資訊 */}
      <div className={`${styles.InfoArea}`}>
        <div className={`${styles.InfoContainer}`}>
          <div className={`${styles.InfoComponent1}`}>訂購人資訊</div>
          <div className={`${styles.InfoComponent2}`}>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                匯入會員資訊
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                清除欄位資訊
              </Button>
            </div>
          </div>
          <div className={`${styles.InfoComponent1}`}>1</div>
          <div className={`${styles.InfoComponent1}`}>2</div>
          <div className={`${styles.InfoComponent1}`}>3</div>
          <div className={`${styles.InfoComponent1}`}>4</div>
        </div>
        <div className={`${styles.InfoContainer}`}>
          <div className={`${styles.InfoComponent2}`}>
            <div>宅配方式</div>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                選擇宅配方式
              </Button>
            </div>
          </div>
          <div className={`${styles.InfoComponent2}`}>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                匯入會員資訊
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                清除欄位資訊
              </Button>
            </div>
          </div>
          <div className={`${styles.InfoComponent1}`}>1</div>
          <div className={`${styles.InfoComponent1}`}>2</div>
          <div className={`${styles.InfoComponent1}`}>3</div>
          <div className={`${styles.InfoComponent1}`}>4</div>
        </div>
      </div>
    </>
  );
}
