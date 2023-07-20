import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
export default function CheckButton(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  return (
    <>
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
