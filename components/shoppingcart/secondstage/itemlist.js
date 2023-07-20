import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
export default function ItemList() {
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
      {' '}
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
    </>
  );
}
