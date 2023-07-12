/* 精選商品字樣 */
import React from 'react';

export default function SpatialProduct() {
  const spatialProductContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    fontSize: '50px',
    fontWeight: '700',
  };
  return (
    <div>
      <div style={spatialProductContainer}>精選商品</div>
    </div>
  );
}
