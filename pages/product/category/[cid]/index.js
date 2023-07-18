import CUIFilter from '@/components/customUI/cui-filter';
import CUISearch from '@/components/customUI/cui-search';
import CUISlider from '@/components/customUI/cui-slider';
import BasicBreadcrumbs from '@/components/product/cui-productBreadcrumbs';
import { Height, WidthFull } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

export default function Index() {
  return (
    <>
      <CUIFilter
        sx={{ width: '300px', Height: '400px' }}
        label="商品篩選"
        items={[
          <CUISearch
            key={1}
            color={'steel_grey'}
            label="商品關鍵字"
            placeholder="請輸入關鍵字"
          />,
          <CUISlider
            key={[1, 2]}
            label="價格區間"
            max={2000}
            min={200}
            value={[200, 250]}
            distance={1}
          />,
        ]}
      />
      <BasicBreadcrumbs></BasicBreadcrumbs>
    </>
  );
}
