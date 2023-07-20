import React, { useState } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CUIRadioButtons from '@/components/customUI/cui-radiobutton';
export default function Payment() {
  const ContainerFormStyle = {
    width: '100%',
    margin: 'auto',
    padding: '20px',
  };
  const ButtonFormStyle = {
    margin: 'auto',
    width: '100%',
    justifyContent: 'space-between',
  };
  const RadioButtonTitle = '請選擇付款方式';
  const RadioButtonArray = [
    {
      label: 'LinePay',
      value: 'LinePay',
      src: '/shoppingcart/LINE-Pay(v)_W61_n.png',
      Icon: '',
      alt: '無法顯示圖片',
      width: '',
      overFlow: 'hidden',
    },
    {
      label: 'CreditCards',
      value: 'CreditCards',
      src: '/shoppingcart/creditcard.png',
      Icon: null,
      alt: '無法顯示圖片',
      width: '100px',
    },
    {
      label: 'Delivery',
      value: 'Delivery',
      src: '',
      Icon: <LocalShippingIcon sx={{ fontSize: '70px' }}></LocalShippingIcon>,
      alt: '無法顯示圖片',
    },
    {
      label: 'ATM',
      value: 'ATM',
      src: '',
      Icon: <LocalAtmIcon sx={{ fontSize: '70px' }}></LocalAtmIcon>,
      alt: '無法顯示圖片',
    },
    {
      label: 'ApplyPay',
      value: 'ApplyPay',
      src: '/shoppingcart/applepay.png',
      Icon: '',
      alt: '無法顯示圖片',
      width: '100px',
    },
  ];

  return (
    <>
      {/* 付款方式 */}
      <CUIRadioButtons
        ContainerFormStyle={ContainerFormStyle}
        ButtonFormStyle={ButtonFormStyle}
        RadioButtonArray={RadioButtonArray}
        RadioButtonTitle={RadioButtonTitle}
      ></CUIRadioButtons>
      {/* <div className={styles.PaymentMethodContainer}>
        <div className={styles.PaymentMethodTitle}>請選擇付款方式</div>
        <div className={styles.PaymentMethodComponent}>
          <div className={styles.PaymentMethod}>
            <img src="/shoppingcart/LINE-Pay(h)_W98_n.png" alt="" />
          </div>
          <div className={styles.PaymentMethod}>
            <img src="/shoppingcart/creditcard.png" alt="" width={'100px'} />
          </div>
          <div className={styles.PaymentMethod}>
            <LocalShippingIcon sx={{ fontSize: '70px' }}></LocalShippingIcon>
          </div>
          <div className={styles.PaymentMethod}>
            <LocalAtmIcon sx={{ fontSize: '70px' }}></LocalAtmIcon>
          </div>
          <div className={styles.PaymentMethod}>
            <img src="/shoppingcart/applepay.png" alt="" width={'100px'} />
          </div>
        </div>
      </div> */}
    </>
  );
}
