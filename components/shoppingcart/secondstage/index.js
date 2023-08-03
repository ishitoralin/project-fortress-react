import React from 'react';
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
export default function SecondStage() {
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <BuyerInfo></BuyerInfo>
          <ItemListTitle></ItemListTitle>
          <ItemList></ItemList>
          <Payment></Payment>
          {/* <Recipt></Recipt> */}
        </Box>
        <Box sx={indexContainerFor2ndPageCheckButton}>
          <CheckButton></CheckButton>
        </Box>
      </Box>
    </>
  );
}
