import React from 'react';
import styles from '@/styles/product.module.css';
import CUICard from '@/components/customUI/cui-card';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import BasicButtons from '@/components/customUI/test-1';
import CUICarousel from '@/components/customUI/cui-carousel';

export default function Index() {
  return (
    <div className={`${styles.container}`}>
      container<div>index</div>
      <CUICard>
        <BasicButtons>avb</BasicButtons>
      </CUICard>
      <div>
        <CUICarousel className={styles.Carouselimg}></CUICarousel>
      </div>
      <div className={`${styles.aaa}`}>
        <CUISlider />
      </div>
    </div>
  );
}
