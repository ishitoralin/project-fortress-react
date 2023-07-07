import React from 'react';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';

export default function Main() {
  return (
    <>
      <ProductListTitle></ProductListTitle>
      <ProductList></ProductList>
      <SpatialProduct></SpatialProduct>
      <RecommendProduct></RecommendProduct>
    </>
  );
}
