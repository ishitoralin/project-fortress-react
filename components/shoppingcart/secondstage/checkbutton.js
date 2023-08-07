import React from 'react';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import styles from '@/styles/shoppingcart.module.css';
import Link from 'next/link';
import {} from '@/components/shoppingcart/firststage/productlist';
import Box from '@mui/material/Box';

import { useAuth } from '@/context/auth/useAuth';
import {
  indexBackground,
  indexContainer,
  checkbutton,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function CheckButton(props) {
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  const { auth } = useAuth();
  const { name, phone, address, email, paymentMethod } = props.confirmInfo;
  const checkConfirm = async () => {
    await fetch('http://localhost:3001/OLdelivery', {
      method: 'POST',
      body: JSON.stringify({
        ...props.confirmInfo,
        paymentMethod: parseInt(props.delivery),
      }),
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((r) => r.json)
      .then((result) => console.log(result));
  };
  console.log(props.confirmInfo);
  return (
    <>
      <Box sx={checkbutton}>
        {/* 產品總計欄位 */}
        <div>
          <div className={styles.countContainer}>
            {/* button 以外的元件 */}
            <div className={`${styles.countComponentWithoutButton}`}>
              <div className={`${styles.countComponent}`}>總計：</div>
              <div className={`${styles.countComponentForQuantity}`}>
                {props.finalQuantity}
              </div>
              <div className={`${styles.countComponentForNumber}`}>
                {props.finalPrice}
              </div>
            </div>
            {/* 只包含button的元件 */}
            {/* <div className={`${styles.countButtonContainer}`}> */}
            <div className={`${styles.countButtonComponent}`}>
              <Box sx={checkbutton}>
                <div>
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
                      onClick={() => {
                        checkConfirm();
                      }}
                      disabled={
                        props.delivery !== ''
                          ? name !== ''
                            ? phone !== ''
                              ? address !== ''
                                ? email !== ''
                                  ? paymentMethod !== ''
                                    ? false
                                    : true
                                  : true
                                : true
                              : true
                            : true
                          : true
                      }
                    >
                      {/* <Link href="/shoppingcart/thirdstage">送出訂單</Link> */}
                    </Button>
                  </RedTheme>
                  {/* </div> */}
                </div>
              </Box>
            </div>
            {/* </div> */}
          </div>
        </div>
      </Box>
    </>
  );
}
