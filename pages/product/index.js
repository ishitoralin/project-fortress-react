import React from 'react';
import { Container } from '@mui/material';
import styles from '@/styles/product.module.css';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';

import CUISlider from '@/components/customUI/cui-slider';
import CUICarousel from '@/components/product/cui-carousel';
import PButton from '@/components/product/p-button';
import CUICard from '@/components/product/product-card';

export default function Index() {
  return (
    // <div className={`${styles.container}`}>
    //   container<div>index</div>
    <>
      <CUICarousel></CUICarousel>
      <PButton></PButton>
      <CUICard></CUICard>
    </>
  );
}
