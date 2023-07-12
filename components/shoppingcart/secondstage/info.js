import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
export default function Info() {
  const fakeDataForCart = {
    products: [
      {
        id: 8,
        photo: 'photo',
        name: '緊身衣',
        detail: 'abavafdasfewweg gewaef gre',
        price: 3000,
        quantity: 21,
      },
      {
        id: 2,
        photo: 'photo',
        name: '布偶裝',
        detail: 'abavafdasfewweg gewaef gre',
        price: 2000,
        quantity: 35,
      },
      {
        id: 3,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
        quantity: 75,
      },
      {
        id: 4,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
        quantity: 75,
      },
      {
        id: 5,
        photo: 'photo',
        name: '貓貓裝',
        detail: 'neko neko',
        price: 600,
        quantity: 75,
      },
    ],
  };
  return (
    <>
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
      <div className={`${styles.ProductConFirmTitleContainer}`}>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>
          產品序號
        </div>
        <div className={`${styles.ProductConFirmTitleComponent2}`}>
          商品資訊
        </div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>單價</div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>數量</div>
        <div className={`${styles.ProductConFirmTitleComponent1}`}>小計</div>
      </div>

      {fakeDataForCart.products.map((v, i) => {
        return (
          <div className={`${styles.ProductConFirmListContainer}`} key={v.id}>
            <div className={`${styles.ProductConFirmListComponent1}`}>
              {i + 1}
            </div>
            <div className={`${styles.ProductConFirmListComponent2}`}>
              {v.photo}
            </div>
            <div className={`${styles.ProductConFirmListComponent1}`}>
              {v.price}
            </div>
            <div className={`${styles.ProductConFirmListComponent1}`}>
              {v.quantity}
            </div>
            <div className={`${styles.ProductConFirmListComponent1}`}>
              {v.price * v.quantity}
            </div>
          </div>
        );
      })}
    </>
  );
}
