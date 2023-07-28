import React from 'react';
import styles from '@/styles/product.module.css';

export default function CuiImgsmap({ productData }) {
  return (
    <>
      {productData.sid && (
        <div className={`${styles['flexrow']}`}>
          <img
            className={`${styles['productimgs']}`}
            src={`http://localhost:3001/imgs/product/${
              productData.picture.split(',')[0]
            }`}
          />
        </div>
      )}
    </>
  );
}
