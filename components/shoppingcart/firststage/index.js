import React, { useState } from 'react';
import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';
import Box from '@mui/material/Box';
import getBrickBackground from '@/libs/getBrickBackground';
import SCmodal from '../SCmodal';
export default function FirstStageComponent() {

  return (
    <>
      <Box
        sx={{
          bgcolor: 'var(--deepgrey)',
          backgroundImage: getBrickBackground({
            scale: 2,
            rotate: 7,
            brickColor: 'hsl(100, 0%, 30%)',
            strokeColor: 'hsl(100, 0%, 20%)',
          }),
          backgroundAttachment: 'fixed',
        }}
      >
        <Box
          sx={{
            margin: '0 150px',
            padding: '0 50px',
            backgroundColor: 'white',
          }}
        >
          <ShoppingState></ShoppingState>
          <ProductListTitle></ProductListTitle>
          <ProductList></ProductList>
          <SpatialProduct></SpatialProduct>
          <RecommendProduct></RecommendProduct>
        </Box>
      </Box>
    </>
  );
}
