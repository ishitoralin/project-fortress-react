/* 商品列表、總計欄、結帳按鈕，之後用fetch從DB抓資料 */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './shoppingcart.module.css';
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

  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };
  const ProductListContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    fontSize: '25px',
  };

  // 待結帳產品列表物件
  const ProductListComponent = {
    width: '14%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const ProductListComponentForDetail = {
    width: '14%',
    height: '100px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  };
  // 待結帳產品列表物件(數量欄專用)
  const ProductListComponentForQuantity = {
    width: '14%',
    height: '100px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '2px solid red',
  };

  // 結帳欄容器
  const countContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  };
  //結帳欄物件
  const countComponent = {
    width: '14%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const checkButtonContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonComponent = {
    width: '15%',
    height: '100px',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  return fakeDataForCart ? (
    <>
      <div style={sessionContainer}>
        {fakeDataForCart.products.map((v, i) => {
          return (
            <div style={ProductListContainer} key={i}>
              <div style={ProductListComponent}>{v.id}</div>
              <div style={ProductListComponent}>{v.photo}</div>
              <div style={ProductListComponentForDetail}>{v.detail}</div>
              <div style={ProductListComponent}>{v.price}</div>
              <div style={ProductListComponentForQuantity}>
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
              <div style={ProductListComponent}>{v.price * v.quantity}</div>
              <div style={ProductListComponent}>
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
      <div style={sessionContainer}>
        <div style={countContainer}>
          <div style={countComponent}>總計</div>
          <div style={countComponent}></div>
          <div style={countComponent}></div>
          <div style={countComponent}></div>
          <div style={countComponent}>總共{totalQuantity}件</div>
          <div style={countComponent}>{totalPrice}</div>
          <div style={countComponent}>NTD </div>
        </div>
      </div>
      {/* 結帳按鈕 */}
      <div style={sessionContainer}>
        <div style={checkButtonContainer}>
          <div style={checkButtonComponent}>
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
          <div style={checkButtonComponent}>
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
