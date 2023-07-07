import React from 'react';
import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';

export default function Main() {
  return (
    <>
      <ShoppingState></ShoppingState>
      <ProductListTitle></ProductListTitle>
      <ProductList></ProductList>
      <SpatialProduct></SpatialProduct>
      <RecommendProduct></RecommendProduct>
    </>
  );
}
