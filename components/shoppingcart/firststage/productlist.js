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
const fakeDataForCart = {
  products: [
    {
      id: 1,
      photo: 'photo',
      name: '緊身衣',
      detail: 'abavafdasfewweg gewaef gre',
      price: 3000,
      quantity: 2,
    },
    {
      id: 2,
      photo: 'photo',
      name: '布偶裝',
      detail: 'abavafdasfewweg gewaef gre',
      price: 2000,
      quantity: 1,
    },
    {
      id: 3,
      photo: 'photo',
      name: '貓貓裝',
      detail: 'neko neko',
      price: 600,
      quantity: 1,
    },
    {
      id: 4,
      photo: 'photo',
      name: '貓貓裝',
      detail: 'neko neko',
      price: 600,
      quantity: 1,
    },
    {
      id: 5,
      photo: 'photo',
      name: '貓貓裝',
      detail: 'neko neko',
      price: 600,
      quantity: 1,
    },
  ],
};
export default function ProductList(props) {
  const [finalPrice, setFinalPrice] = useState(0);
  const [finalQuantity, setFinalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(fakeDataForCart.products);
  useEffect(() => {
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
    console.log(totalPrice, totalQuantity);
    setFinalPrice(totalPrice);
    setFinalQuantity(totalQuantity);
  }, [cartItems]);
  return fakeDataForCart ? (
    <>
      <div>
        {fakeDataForCart.products.map((v, i) => {
          return (
            <div
              /* 判斷商品有多少樣，奇數套用樣式1，偶數套用樣式2 */
              className={`${
                i % 2 === 0
                  ? styles.ProductListContainer1
                  : styles.ProductListContainer2
              }`}
              key={i}
            >
              {/* 將map後的data塞到對應的欄位 */}
              <div className={`${styles.ProductListComponent}`}>{v.id}</div>
              <div className={`${styles.ProductListComponent}`}>{v.photo}</div>
              <div className={styles.ProductListComponentForDetail}>
                {v.detail}
              </div>
              <div className={`${styles.ProductListComponent}`}>{v.price}</div>
              {/* 新增可調整數量按鈕 */}
              <div className={styles.ProductListComponentForQuantity}>
                <Button
                  sx={{ color: 'black' }}
                  onClick={() => {
                    if (v.quantity > 1) {
                      const updateItems = [...cartItems];
                      updateItems[i].quantity = v.quantity - 1;
                      setCartItems(updateItems);
                    }
                  }}
                >
                  <RemoveIcon></RemoveIcon>
                </Button>
                <input
                  type="number"
                  className={`${styles.inputHideAdjustButton} ${styles.buttonWidth}`}
                  defaultValue={v.quantity}
                  // value={quantity}
                  onChange={(e) => {
                    const updateItems = [...cartItems];
                    // console.log(typeof updateItems);
                    v.quantity = parseInt(e.target.value);
                    updateItems[i].quantity = v.quantity;
                    setFinalQuantity(updateItems);
                  }}
                />
                <Button
                  sx={{ color: 'black' }}
                  onClick={() => {
                    const updateItems = [...cartItems];
                    updateItems[i].quantity = v.quantity + 1;
                    setCartItems(updateItems);
                  }}
                >
                  <AddIcon></AddIcon>
                </Button>
              </div>
              <div className={`${styles.ProductListComponent}`}>
                {v.price * v.quantity}
              </div>
              {/* 刪除按鈕 */}
              <div className={`${styles.ProductListComponent}`}>
                <Button
                  sx={{ color: 'black' }}
                  onClick={() => {
                    setCartItems((prevItems) => {
                      prevItems.filter((item) => item.id !== v.id);
                    });
                  }}
                >
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
            總共{finalQuantity}件
          </div>
          <div className={`${styles.countComponent}`}>{finalPrice}</div>
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
