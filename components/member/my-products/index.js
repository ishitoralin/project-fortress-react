import { useState, useEffect } from 'react';
import styles from '../member.module.css';
import ProductsTable from './products-table';
import MemberPagenation from '../member-pagenation';

function createData(name, picture, price, sid) {
  return { name, picture, price, sid };
}

const rows = [
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    2
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    3
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    4
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    5
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    6
  ),
];
export default function MyProducts() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  useEffect(() => {
    setData((prev) => {
      return { ...prev, rows };
    });
    return () => {};
  }, []);

  return (
    <div className={`${styles['my-container']}`}>
      {data?.rows.length > 0 ? (
        <>
          <ProductsTable data={data} />
          <MemberPagenation data={data} />
        </>
      ) : (
        '目前沒有收藏商品喔'
      )}
    </div>
  );
}
