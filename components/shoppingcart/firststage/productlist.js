/* 商品列表、總計欄、結帳按鈕，之後用fetch從DB抓資料 */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//Import button
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';

//Import button
const WhiteTheme = createColorTheme('#FFF');
const RedTheme = createColorTheme('#FF0000');

export default function ProductList(props) {
  const [finalPrice, setFinalPrice] = useState(0);
  const [finalQuantity, setFinalQuantity] = useState(0);
  const fakeDataForCart = {
    products: [
      {
        id: 1,
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
  let totalPrice = 0;
  let totalQuantity = 0;
  if (fakeDataForCart) {
    for (let i = 0; i < fakeDataForCart.products.length; i++) {
      let price = parseInt(fakeDataForCart.products[i].price);
      let quantity = parseInt(fakeDataForCart.products[i].quantity);
      totalPrice += price * quantity;
    }

    for (let i = 0; i < fakeDataForCart.products.length; i++) {
      let Quantity = parseInt(fakeDataForCart.products[i].quantity);
      totalQuantity += Quantity;
    }
  }
  useEffect(() => {
    setFinalPrice(finalPrice + totalPrice);
    setFinalQuantity(finalQuantity + totalQuantity);
  }, []);

  return fakeDataForCart ? (
    <>
      <div>
        {fakeDataForCart.products.map((v, i) => {
          return (
            <div
              className={`${
                i % 2 === 0
                  ? styles.ProductListContainer1
                  : styles.ProductListContainer2
              }`}
              key={i}
            >
              <div className={`${styles.ProductListComponent}`}>{v.id}</div>
              <div className={`${styles.ProductListComponent}`}>{v.photo}</div>
              <div className={styles.ProductListComponentForDetail}>
                {v.detail}
              </div>
              <div className={`${styles.ProductListComponent}`}>{v.price}</div>
              <div className={styles.ProductListComponentForQuantity}>
                <Button sx={{ color: 'black' }}>
                  <RemoveIcon></RemoveIcon>
                </Button>
                <input
                  type="number"
                  className={`${styles.inputHideAdjustButton} ${styles.buttonWidth}`}
                  value={v.quantity}
                />
                <Button sx={{ color: 'black' }}>
                  <AddIcon></AddIcon>
                </Button>
              </div>
              <div className={`${styles.ProductListComponent}`}>
                {v.price * v.quantity}
              </div>
              <div className={`${styles.ProductListComponent}`}>
                <Button sx={{ color: 'black' }}>
                  <DeleteOutlineIcon
                    sx={{ fontSize: '26px' }}
                  ></DeleteOutlineIcon>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {/* 產品總計欄位 */}
      <div>
        <div className={styles.countContainer}>
          <div className={`${styles.countComponent}`}>總計</div>
          <div className={`${styles.countComponent}`}></div>
          <div className={`${styles.countComponent}`}></div>
          <div className={`${styles.countComponent}`}></div>
          <div className={`${styles.countComponent}`}>
            總共{totalQuantity}件
          </div>
          <div className={`${styles.countComponent}`}>{totalPrice}</div>
          <div className={`${styles.countComponent}`}>NTD </div>
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
  ) : (
    '尚未購買商品'
  );
}
