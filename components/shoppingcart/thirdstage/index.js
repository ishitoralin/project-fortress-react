import React from 'react';
import Box from '@mui/material/Box';
import styles from '@/styles/shoppingcart.module.css';
import ShoppingState from './shoppingstate';
import BuyerInfo from './buyerInfo';
import CheckButton from './checkbutton';
import {
  indexBackground,
  indexContainer,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function ThirdStage() {
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <BuyerInfo></BuyerInfo>
          <CheckButton></CheckButton>
        </Box>
      </Box>
    </>
  );
}
