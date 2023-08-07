import React, { useState } from 'react';
import ShoppingState from './shoppingstate';
import Box from '@mui/material/Box';
import BuyerInfo from './buyerinfo';
import ItemListTitle from './itemlisttitle';
import ItemList from './itemlist';
import Payment from './payment';
import CheckButton from './checkbutton';
import Recipt from './recipt';
import styles from '@/styles/shoppingcart.module.css';

import {
  indexBackground,
  indexContainer,
  checkbutton,
  indexContainerFor2ndPageCheckButton,
} from '@/styles/shoppingcart-style/recommandproduct';
import { Toaster } from 'react-hot-toast';
export default function SecondStage() {
  const [button, setButton] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryMethod: '',
  });

  const [delivery, setDelivery] = useState('');
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <BuyerInfo setButton={setButton}></BuyerInfo>
          <ItemListTitle></ItemListTitle>
          <ItemList></ItemList>
          <Payment setDelivery={setDelivery}></Payment>
          {/* <Recipt></Recipt> */}
        </Box>
        <Box sx={indexContainerFor2ndPageCheckButton}>
          <CheckButton button={button} delivery={delivery}></CheckButton>
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
