import { useState, useEffect, useRef } from 'react';
import styles from '../member.module.css';
import ProductsTable from './products-table';
import MemberPagenation from '../member-pagenation';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import CUICard from '@/components/customUI/cui-card';
import axios from 'axios';
import CUIFilter from '@/components/customUI/cui-filter';
import CUISlider from '@/components/customUI/cui-slider';
import CUISearch from '@/components/customUI/cui-search';

export default function MyProducts() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  const [queryObject, setQueryObject] = useState({});
  const keywordRef = useRef();
  useEffect(() => {
    setData(() => {
      return {
        redirect: '',
        totalRows: 19,
        perPage: 6,
        totalPages: 4,
        page: 1,
        orderBy: '',
        rows: [
          {
            sid: 5,
            category_sid: 2,
            product_sid: 2,
            name: '【門市限定】ON 黃金比例分離乳清 (巧克力/2.36kg)',
            picture: 'fd00201.jpg',
            price: 3799,
          },
          {
            sid: 2,
            category_sid: 2,
            product_sid: 1,
            name: '【門市限定】ON全乳清蛋白(雙倍濃郁巧克力/2.26kg)',
            picture: 'fd00101.jpg',
            price: 2699,
          },
          {
            sid: 20,
            category_sid: 2,
            product_sid: 7,
            name: 'GNC Pro Performance Bulk 1340 - 草莓和奶油,9 份,支持肌肉能量,恢復和成長',
            picture: 'fd00701.jpg',
            price: 1500,
          },
          {
            sid: 17,
            category_sid: 2,
            product_sid: 6,
            name: 'GNC Pro Performance Weight Gainer - 草莓和奶油,6 份,蛋白質可增加重量',
            picture: 'fd00601.jpg',
            price: 900,
          },
          {
            sid: 18,
            category_sid: 3,
            product_sid: 6,
            name: '啞鈴5kg',
            picture: 'eq_dumbbell_type01_050_01.jpg',
            price: 499,
          },
          {
            sid: 15,
            category_sid: 3,
            product_sid: 5,
            name: '啞鈴3kg',
            picture: 'eq_dumbbell_type01_030_01.jpg',
            price: 449,
          },
        ],
      };
    });
    return () => {};
  }, []);
  /*  useEffect(() => {
  const getMyfavoriteProducts = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-products2`
    );
    if (res.data?.data);
    {
      console.log(res.data.data);
    }
  };
  getMyfavoriteProducts();
}, []);  */
  return (
    <div className={`${styles['my-container']}`}>
      {/* {data?.rows.length > 0 ? 
      (
        <>
          <ProductsTable data={data} />
          <MemberPagenation data={data} />
        </>
      )  */}
      {data?.rows.length > 0 ? (
        <div className={`${styles['my-products-section']}`}>
          <CUIFilter
            sx={{}}
            filterIcon={
              <IconButton onClick={() => {}}>
                <CancelIcon />
              </IconButton>
            }
            color={'steel_grey'}
            label="篩選器"
            onClick={() => {}}
            items={[
              <CUISearch
                key={'search'}
                color={'steel_grey'}
                label="商品名稱"
                inputRef={keywordRef}
              />,
              <CUISlider
                key={123}
                label="價格範圍"
                value={[]}
                min={50}
                max={400}
                onChange={() => {}}
              />,
            ]}
          />
          <CUICard
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {data.rows.map((el, i) => (
              <div key={el.sid} style={{ width: '30%', flexShrink: '0' }}>
                <CUICard>123</CUICard>
              </div>
            ))}
          </CUICard>
        </div>
      ) : (
        <>
          <div className={`${styles['guide-to']}`}>
            <Typography variant="h6">目前沒有收藏商品喔</Typography>
            <Link href={`/product`}>來去逛逛</Link>
          </div>
        </>
      )}
    </div>
  );
}
