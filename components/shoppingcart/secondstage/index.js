import React, { useState, useEffect } from 'react';
import ShoppingState from './shoppingstate';
import Box from '@mui/material/Box';
import BuyerInfo from './buyerinfo';
import ItemListTitle from './itemlisttitle';
import ItemList from './itemlist';
import Payment from './payment';
import CheckButton from './checkbutton';
import Recipt from './recipt';
import styles from '@/styles/shoppingcart.module.css';
import { useAuth } from '@/context/auth/useAuth';

import {
  indexBackground,
  indexContainer,
  checkbutton,
  indexContainerFor2ndPageCheckButton,
} from '@/styles/shoppingcart-style/recommandproduct';
import { Toaster } from 'react-hot-toast';
export default function SecondStage() {
  const { auth } = useAuth();
  const [itemList, setItemList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [finalQuantity, setFinalQuantity] = useState(0);

  const [button, setButton] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryMethod: '',
  });

  const [delivery, setDelivery] = useState('');

  // 從DB抓取產品列表
  useEffect(() => {
    fetch('http://localhost:3001/OLbuyerData', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    })
      .then((r) => r.json())
      .then((results) => {
        setItemList(results.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    let totalQuantity = 0;
    if (itemList) {
      for (let i = 0; i < itemList.length; i++) {
        let price = parseInt(itemList[i].price);
        let quantity = parseInt(itemList[i].quantity);
        totalPrice += price * quantity;
      }

      for (let i = 0; i < itemList.length; i++) {
        let Quantity = parseInt(itemList[i].quantity);
        totalQuantity += Quantity;
      }
    }
    // console.log(totalPrice, totalQuantity);
    setFinalPrice(totalPrice);
    setFinalQuantity(totalQuantity);
  }, [itemList]);
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <BuyerInfo setButton={setButton}></BuyerInfo>
          <ItemListTitle></ItemListTitle>
          <ItemList itemList={itemList}></ItemList>
          <Payment setDelivery={setDelivery}></Payment>
          {/* <Recipt></Recipt> */}
        </Box>
        <Box sx={indexContainerFor2ndPageCheckButton}>
          <CheckButton
            button={button}
            delivery={delivery}
            itemList={itemList}
            finalPrice={finalPrice}
            finalQuantity={finalQuantity}
          ></CheckButton>
        </Box>
      </Box>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            boxShadow: '0 0 1px #eee',
          },
        }}
      />
    </>
  );
}
