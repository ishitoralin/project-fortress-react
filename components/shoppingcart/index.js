import React from 'react';
import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';
import { Box } from '@mui/material';

export default function Main() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '0 200px',
        }}
      >
        <ShoppingState></ShoppingState>
        <ProductListTitle></ProductListTitle>
        <ProductList></ProductList>
        <SpatialProduct></SpatialProduct>
        <RecommendProduct></RecommendProduct>
      </Box>
    </>
  );
}
