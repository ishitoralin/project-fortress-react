import React from 'react';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import styles from '@/styles/shoppingcart.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {} from '@/components/shoppingcart/firststage/productlist';
export default function CheckButton(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  // const fakeDataForCart = {
  //   products: [
  //     {
  //       id: 19,
  //       photo: 'photo',
  //       name: '緊身衣',
  //       detail: 'abavafd asfewweg gewaef gre',
  //       price: 3000,
  //       quantity: 2,
  //     },
  //     {
  //       id: 2,
  //       photo: 'photo',
  //       name: '布偶裝',
  //       detail: 'abavafdasfewweg gewaef gre',
  //       price: 2000,
  //       quantity: 1,
  //     },
  //     {
  //       id: 3,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //     {
  //       id: 4,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //     {
  //       id: 5,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //     {
  //       id: 6,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //     {
  //       id: 323,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //     {
  //       id: 25,
  //       photo: 'photo',
  //       name: '貓貓裝',
  //       detail: 'neko neko',
  //       price: 600,
  //       quantity: 1,
  //     },
  //   ],
  // };

  // const [finalPrice, setFinalPrice] = useState(0);
  // const [finalQuantity, setFinalQuantity] = useState(0);
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   //fetch()
  //   setCartItems(fakeDataForCart.products);
  // }, []);
  // useEffect(() => {
  //   let totalPrice = 0;
  //   let totalQuantity = 0;
  //   if (cartItems) {
  //     for (let i = 0; i < cartItems.length; i++) {
  //       let price = parseInt(cartItems[i].price);
  //       let quantity = parseInt(cartItems[i].quantity);
  //       totalPrice += price * quantity;
  //     }

  //     for (let i = 0; i < cartItems.length; i++) {
  //       let Quantity = parseInt(cartItems[i].quantity);
  //       totalQuantity += Quantity;
  //     }
  //   }
  //   console.log(totalPrice, totalQuantity);
  //   setFinalPrice(totalPrice);
  //   setFinalQuantity(totalQuantity);
  // }, [cartItems]);

  return (
    <>
      {/* 產品總計欄位
      <div>
        <div className={styles.countContainer}>
          <div className={`${styles.countComponent}`}>總計</div>
          <div className={`${styles.countBlankComponent}`}></div>
          <div className={`${styles.countComponentForQuantity}`}>
            {finalQuantity}
          </div>
          <div className={`${styles.countComponentForNumber}`}>
            {finalPrice}
          </div>
          <div className={`${styles.countComponent}`}>NTD </div>
        </div>
      </div> */}
      {/* 結帳按鈕 */}
      <div className={`${styles.checkButtonContainer}`}>
        <div className={`${styles.checkButtonComponent}`}>
          <WhiteTheme>
            <Button
              sx={{
                width: '200px',
                ':hover': {
                  opacity: '.7',
                  bgcolor: 'var(--light-gray2)',
                },
              }}
              variant="contained"
              onClick={props.onClick}
            >
              <Link href="/" sx={{ width: '100%' }}>
                返回首頁
              </Link>
            </Button>
          </WhiteTheme>
        </div>
        <div className={`${`${styles.checkButtonComponent}`}`}>
          <RedTheme>
            <Button
              sx={{
                width: '300px',
                ':hover': {
                  opacity: '.7',
                  bgcolor: 'var(--main-red)',
                },
              }}
              // color={props.color}
              variant="contained"
              onClick={props.onClick}
            >
              <Link href="/shoppingcart/secondstage">送出訂單</Link>
            </Button>
          </RedTheme>
        </div>
      </div>
    </>
  );
}
