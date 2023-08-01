import CUIFilter from '@/components/customUI/cui-filter';
import CUISearch from '@/components/customUI/cui-search';
import CUISlider from '@/components/customUI/cui-slider';
import BasicBreadcrumbs from '@/components/product/cui-productBreadcrumbs';
import ListCard from '@/components/product/list-card';
import List from '@/components/product/list-cardcopy';
import { Height, WidthFull } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/product.module.css';
import { useRouter } from 'next/router';

export default function Index() {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.cid) {
      fetch(`http://localhost:3001/api/product/no-page/${router.query.cid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          setData(data.data);
        });
    }
  }, [router.query]);
  return (
    <>
      <div className={`${styles['list']}`}>
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
        <div className={`${styles['list-Card']}`}>
          <BasicBreadcrumbs></BasicBreadcrumbs>
          <ListCard data={data} cid={router.query.cid}></ListCard>
          <List data={data} cid={router.query.cid}></List>
        </div>
      </div>
    </>
  );
}
