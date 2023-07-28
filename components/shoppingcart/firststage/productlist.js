/* 商品列表、總計欄、結帳按鈕，之後用fetch從DB抓資料 */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import createColorTheme from '@/libs/CreateColorTheme';
import Dialog from '@/components/shoppingcart/Dialog';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckButton from '@/components/shoppingcart/firststage/checkbutton';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';
import { checkbutton } from '@/styles/shoppingcart-style/recommandproduct';
import {
  indexContainer,
  AddAndReduceButton,
} from '@/styles/shoppingcart-style/recommandproduct';
import { result } from 'lodash';
import Image from 'next/image';
// const fakeDataForCart = { products: [] };
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
//       detail: 'abavafd asfewweg gewaef gre',
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

export default function ProductList(props) {
  const [finalPrice, setFinalPrice] = useState(0);
  const [finalQuantity, setFinalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [currentIndex, setCurrentIndex] = useState();
  const handleClickOpen = (id, i) => {
    setOpen(true);
    setCurrentID(id);
    setCurrentIndex(i + 1);
  };

  const handleClose = () => {
    setCurrentID();
    setOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:3001/cart/5')
      .then((r) => r.json())
      .then((results) => setCartItems(results.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(cartItems);
  useEffect(() => {
    let totalPrice = 0;
    let totalQuantity = 0;
    if (cartItems) {
      for (let i = 0; i < cartItems.length; i++) {
        let price = parseInt(cartItems[i].price);
        let quantity = parseInt(cartItems[i].quantity);
        totalPrice += price * quantity;
      }

      for (let i = 0; i < cartItems.length; i++) {
        let Quantity = parseInt(cartItems[i].quantity);
        totalQuantity += Quantity;
      }
    }
    console.log(totalPrice, totalQuantity);
    setFinalPrice(totalPrice);
    setFinalQuantity(totalQuantity);
  }, [cartItems]);

  const minus = (cartItems, id) => {
    return cartItems.map((v, i) => {
      if (v.sid === id) return { ...v, quantity: v.quantity - 1 };
      return { ...v };
    });
  };

  const add = (cartItems, id) => {
    return cartItems.map((v, i) => {
      if (v.sid === id) return { ...v, quantity: v.quantity + 1 };
      return { ...v };
    });
  };

  const remove = (cartItems, id) => {
    return cartItems.filter((v) => {
      return v.sid !== id;
    });
  };

  const update = (cartItems, id, value) => {
    return cartItems.map((v, i) => {
      if (v.sid === id) return { ...v, quantity: value };
      return { ...v };
    });
  };

  return cartItems.length > 0 ? (
    <>
      <div className={`${styles.ProductListStyles}`}>
        {cartItems.map((v, i) => {
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
              <div className={`${styles.ProductListComponent2} `}>{i + 1}</div>

              <div className={`${styles.ProductListComponent3}`}>
                <div className={`${styles.ProductListComponentForPhoto} `}>
                  <img
                    style={{ height: '95px', objectFit: 'cover' }}
                    src={`${
                      process.env.NEXT_PUBLIC_BACKEND_PORT
                    }/imgs/product/${v.picture.split(',')[0]}`}
                    alt="商品圖片"
                  />
                </div>
                <div className={`${styles.ProductListComponentForDetail}`}>
                  {v.item_name}
                </div>
              </div>

              <div className={`${styles.ProductListComponent1}`}>{v.price}</div>
              {/* 新增可調整數量按鈕 */}
              <div className={styles.ProductListComponentForQuantity}>
                <Button
                  sx={AddAndReduceButton}
                  onClick={() => {
                    if (v.quantity > 1) {
                      setCartItems(minus(cartItems, v.sid));
                    }
                    if (v.quantity === 1) {
                      handleClickOpen(parseInt(v.sid), i);
                    }
                  }}
                >
                  <RemoveIcon></RemoveIcon>
                </Button>
                <input
                  type="number"
                  className={`${styles.inputHideAdjustButton} ${styles.buttonWidth}`}
                  value={v.quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (isNaN(value)) {
                      return;
                    }
                    setCartItems(update(cartItems, v.sid, value));
                  }}
                />
                {/* TODO Button 寬度設定 */}
                <Button
                  sx={AddAndReduceButton}
                  onClick={() => {
                    setCartItems(add(cartItems, v.sid));
                  }}
                >
                  <AddIcon></AddIcon>
                </Button>
              </div>
              <div className={`${styles.ProductListComponent1}`}>
                {v.price * v.quantity}
              </div>
              {/* 刪除按鈕 */}
              <div className={`${styles.ProductListComponent2} `}>
                <Button
                  sx={{ color: 'black' }}
                  onClick={() => {
                    handleClickOpen(parseInt(v.sid), i);
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
      {open && (
        <Dialog
          currentID={currentID}
          setCurrentID={setCurrentID}
          handleClose={handleClose}
          remove={remove}
          cartItems={cartItems}
          setCartItems={setCartItems}
          open={open}
          currentIndex={currentIndex}
        ></Dialog>
      )}
      <Box sx={indexContainer}>
        <SpatialProduct></SpatialProduct>
      </Box>
      <Box sx={indexContainer}>
        <RecommendProduct></RecommendProduct>
      </Box>
      <Box sx={checkbutton}>
        {/* 產品總計欄位 */}
        <div>
          <div className={styles.countContainer}>
            {/* button 以外的元件 */}
            <div className={`${styles.countComponentWithoutButton}`}>
              <div className={`${styles.countComponent}`}>總計：</div>
              <div className={`${styles.countComponentForQuantity}`}>
                {finalQuantity}
              </div>
              <div className={`${styles.countComponentForNumber}`}>
                {finalPrice}
              </div>
            </div>
            {/* 只包含button的元件 */}
            {/* <div className={`${styles.countButtonContainer}`}> */}
            <div className={`${styles.countButtonComponent}`}>
              <CheckButton></CheckButton>
            </div>
            {/* </div> */}
          </div>
        </div>
      </Box>
    </>
  ) : (
    <Box sx={indexContainer}>
      <div className={styles.noItem}>尚未選取商品</div>
    </Box>
  );
}
