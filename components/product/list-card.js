import React from 'react';
import CUICard from '../customUI/cui-card';
import styles from '@/styles/product.module.css';
import CUIButton from '../customUI/cui-button';
import { Link, Rating, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth/useAuth';
import { toast } from 'react-hot-toast';

export default function ListCard({ data = [], cid }) {
  console.log(data.length);
  const { auth } = useAuth();
  const router = useRouter();
  return (
    <>
      <div className={`${styles['list-Cardcontainer']}`}>
        {data.map((v, i) => {
          return (
            <CUICard key={v.sid} className={`${styles['smallCard']}`}>
              <div
                className={`${styles['product-img-container']}`}
                onClick={() => {
                  router.push(`/product/category/${cid}/${v.sid}`);
                }}
                onKeyDown={() => {
                  router.push(`/product/category/${cid}/${v.sid}`);
                }}
                role="button"
                tabIndex="0"
              >
                <img
                  src={`http://localhost:3001/imgs/product/${
                    v.picture.split(',')[0]
                  }`}
                />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">{v.name}</Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">${v.price}</Typography>
                </div>
              </div>
              <div>
                <Rating
                  className={`${styles['product-price']}`}
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton
                  className={`${styles['smallCardButton']}`}
                  onClick={() => {
                    const jsonData = JSON.stringify({
                      products_type_sid: parseInt(cid),
                      item_sid: v.sid,
                      quantity: 1,
                    });
                    fetch('http://localhost:3001/SCadd', {
                      method: 'POST',
                      body: jsonData,
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${auth?.accessToken}`,
                      },
                    });
                    toast.success('已加入購物車');
                  }}
                >
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          );
        })}
      </div>
    </>
  );
}
