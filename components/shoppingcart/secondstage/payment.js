import React, { useState } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Box from '@mui/material/Box';

import CUIRadioButtons from '@/components/customUI/cui-radiobutton';
export default function Payment() {
  const ContainerFormStyle = {
    width: '100%',
    margin: 'auto',
    padding: '20px 0',
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
      label: '信用卡',
      value: 'CreditCards',
      src: '/shoppingcart/creditcard.png',
      Icon: null,
      alt: '無法顯示圖片',
      width: '100px',
    },
    {
      label: '貨到付款',
      value: 'Delivery',
      src: '',
      Icon: <LocalShippingIcon sx={{ fontSize: '70px' }}></LocalShippingIcon>,
      alt: '無法顯示圖片',
    },
    {
      label: 'ATM轉帳',
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
      <Box sx={{ padding: '50px 0' }}>
        <CUIRadioButtons
          ContainerFormStyle={ContainerFormStyle}
          ButtonFormStyle={ButtonFormStyle}
          RadioButtonArray={RadioButtonArray}
          RadioButtonTitle={RadioButtonTitle}
        ></CUIRadioButtons>
      </Box>
    </>
  );
}
