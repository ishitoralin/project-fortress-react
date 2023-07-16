import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import Box from '@mui/material/Box';
import LinePay from '@/public/shoppingcart/LINEPay.png';
// import LinePay from '@/public/shoppingcart';
// import { CSVLink } from 'react-csv';
// <CSVLink data={fakeDataForCart.products}>
// <Button>export data</Button>
// </CSVLink>
// const headers = [
//   {
//     label: '產品序號',
//     key: 'id',
//   },
// ];

export default function Info(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
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
      {/* 商品列表title */}
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
      {/* 商品列表body */}
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
      {/* 付款方式 */}
      <div className={styles.PaymentMethodContainer}>
        <div className={styles.PaymentMethodTitle}>請選擇付款方式</div>
        <div className={styles.PaymentMethodComponent}>
          <div className={styles.PaymentMethod}>LinePay</div>
          <div className={styles.PaymentMethod}>信用卡</div>
          <div className={styles.PaymentMethod}>貨到付款</div>
          <div className={styles.PaymentMethod}>ATM轉帳</div>
          <div className={styles.PaymentMethod}>ApplyPay</div>
        </div>
      </div>
      {/* 發票 */}
      <div className={styles.PaymentMethodContainer}>
        <div className={styles.PaymentMethodTitle}>請選擇發票</div>
        <div className={styles.PaymentMethodComponent}>
          <div className={styles.PaymentMethod}>捐贈</div>
          <div className={styles.PaymentMethod}>公司</div>
          <div className={styles.PaymentMethod}>雲端發票</div>
          <div className={styles.PaymentMethod}>隨貨寄送</div>
          <div className={styles.PaymentMethod}></div>
        </div>
      </div>
      {/* 結帳按鈕 */}
      <div>
        <div className={`${styles.checkButtonContainer}`}>
          <div className={`${styles.checkButtonComponent}`}>
            <WhiteTheme>
              <Button
                sx={{
                  width: '100%',
                  ':hover': {
                    opacity: '.7',
                    bgcolor: 'var(--light-gray2)',
                  },
                }}
                variant="contained"
                onClick={props.onClick}
              >
                返回首頁
              </Button>
            </WhiteTheme>
          </div>
          <div className={`${`${styles.checkButtonComponent}`}`}>
            <RedTheme>
              <Button
                sx={{
                  width: '100%',
                  ':hover': {
                    opacity: '.7',
                    bgcolor: 'var(--main-red)',
                  },
                }}
                // color={props.color}
                variant="contained"
                onClick={props.onClick}
              >
                確認購買
              </Button>
            </RedTheme>
          </div>
        </div>
      </div>
    </>
  );
}
