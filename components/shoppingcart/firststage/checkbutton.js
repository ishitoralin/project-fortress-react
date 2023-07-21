import React from 'react';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import styles from '@/styles/shoppingcart.module.css';
import Link from 'next/link';

export default function CheckButton(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  return (
    <>
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
