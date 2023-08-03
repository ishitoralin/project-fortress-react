import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import { useAuth } from '@/context/auth/useAuth';
import { useEffect, useState } from 'react';
export default function ItemList() {
  const { auth } = useAuth();
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/OLbuyerData', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    })
      .then((r) => r.json())
      .then((results) => {
        console.log(results);
        setItemList(results.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* 商品列表body */}
      {itemList.map((v, i) => {
        return (
          <div className={`${styles.ProductConFirmListContainer}`} key={v.id}>
            <div className={`${styles.ProductConFirmListComponent1}`}>
              <img
                style={{ height: '95px', objectFit: 'cover' }}
                src={
                  v.products_type_sid === 4
                    ? `${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/lesson/confirm/${v.picture}`
                    : `${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/product/${
                        v.picture.split(',')[0]
                      }`
                }
                alt="商品圖片"
              />
            </div>
            <div className={`${styles.ProductConFirmListComponent2}`}>
              {v.item_name}
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
