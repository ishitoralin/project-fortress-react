import { useState, useEffect } from 'react';
import styles from './my-products.module.css';
import ProductsTable from './products-table';
import MemberPagenation from '../member-pagenation';

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
    return () => {};
  }, []);

  return (
    <div className={`${styles['my-products-container']}`}>
      <ProductsTable data={data} />
      <MemberPagenation data={data} />
    </div>
  );
}
