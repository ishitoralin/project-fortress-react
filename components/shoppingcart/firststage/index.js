import React, { useState } from 'react';
import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';
import Box from '@mui/material/Box';
import getBrickBackground from '@/libs/getBrickBackground';
import CheckButton from '@/components/shoppingcart/firststage/checkbutton';
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
          zIndex: '10',
        }}
      >
        <Box
          sx={{
            margin: '0 150px',
            padding: '0 50px',
            backgroundColor: 'white',
            zIndex: '20',
          }}
        >
          <ShoppingState></ShoppingState>
          <ProductListTitle></ProductListTitle>
          <ProductList></ProductList>
        </Box>
      </Box>
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
          <SpatialProduct></SpatialProduct>
          <RecommendProduct></RecommendProduct>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          zIndex: '30',
          position: 'sticky',
          bottom: '0',
        }}
      >
        <CheckButton></CheckButton>
      </Box>
    </>
  );
}
