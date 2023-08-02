import React from 'react';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import styles from '@/styles/shoppingcart.module.css';
import Link from 'next/link';
import {} from '@/components/shoppingcart/firststage/productlist';
import { useAuth } from '@/context/auth/useAuth';

export default function CheckButton(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  console.log(props.cartItems);
  const { auth } = useAuth();
  const checkConfirm = () => {
    console.log(123);
    fetch('http://localhost:3001/SCconfirm', {
      method: 'POST',
      body: {},
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    })
      .then((r) => r.json)
      .then((result) => console.log(result));
  };
  return (
    <>
      {/* 結帳按鈕 */}
      <div className={`${styles.checkButtonContainer}`}>
        <WhiteTheme>
          <Button
            className={`${styles.buttonContainer}`}
            sx={{
              flexWrap: 'nowrap',
              marginLeft: '10px',
              width: '200px',
              ':hover': {
                opacity: '.7',
                bgcolor: 'var(--light-gray2)',
              },
              '@media screen and (max-width: 996px)': {
                width: '0',
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
        <RedTheme>
          <Button
            className={`${styles.buttonContainer}`}
            sx={{
              marginLeft: '10px',
              width: '200px',
              ':hover': {
                opacity: '.7',
                bgcolor: 'var(--main-red)',
              },
              '@media screen and (max-width: 996px)': {
                width: '0',
              },
            }}
            variant="contained"
            onClick={checkConfirm}
            disabled={!props.cartItems ? false : true}
          >
            <Link href="/shoppingcart/secondstage">送出訂單</Link>
          </Button>
        </RedTheme>
      </div>
    </>
  );
}
