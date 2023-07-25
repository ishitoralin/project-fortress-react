import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import styles from '@/styles/product.module.css';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';

import CUISlider from '@/components/customUI/cui-slider';
import CUICarousel from '@/components/product/cui-carousel';
import PButton from '@/components/product/p-button';
import CUICard from '@/components/product/product-card';

export default function Index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/product/main-page/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  return (
    // <div className={`${styles.container}`}>
    //   container<div>index</div>
    <>
      <CUICarousel></CUICarousel>
      <PButton></PButton>
      <CUICard data={data}></CUICard>
    </>
  );
}
