/* 精選商品字樣 */
import React from 'react';

export default function SpatialProduct() {
  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };
  const spatialProductContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    fontSize: '50px',
    fontWeight: '700',
  };
  return (
    <div style={sessionContainer}>
      <div style={spatialProductContainer}>精選商品</div>
    </div>
  );
}
