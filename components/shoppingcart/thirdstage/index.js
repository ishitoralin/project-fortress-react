import React from 'react';
import Box from '@mui/material/Box';
import styles from '@/styles/shoppingcart.module.css';
import ShoppingState from './shoppingstate';
import OrderNumber from './ordernumber';
import BuyerInfo from './buyerInfo';
import ItemInfo from './iteminfo';
import {
  indexBackground,
  indexContainer,
  indexContainerFor2ndPageCheckButton,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function ThirdStage() {
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <OrderNumber></OrderNumber>
          <BuyerInfo></BuyerInfo>
          <ItemInfo></ItemInfo>
        </Box>
      </Box>
    </>
  );
}
