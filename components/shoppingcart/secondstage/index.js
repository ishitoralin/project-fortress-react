import React from 'react';
import ShoppingState from './shoppingstate';
import Box from '@mui/material/Box';
import BuyerInfo from './buyerinfo';
import ItemListTitle from './itemlisttitle';
import ItemList from './itemlist';
import Payment from './payment';
import CheckButton from './checkbutton';
import Recipt from './recipt';
export default function SecondStage() {
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 200px' }}>
        <ShoppingState></ShoppingState>
        <BuyerInfo></BuyerInfo>
        <ItemListTitle></ItemListTitle>
        <ItemList></ItemList>
        <Payment></Payment>
        <Recipt></Recipt>
        <CheckButton></CheckButton>
      </Box>
    </>
  );
}
