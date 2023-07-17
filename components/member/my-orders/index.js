import { useState, useEffect } from 'react';
import styles from './my-orders.module.css';
import OrdersTable from './orders-table';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import MemberPagenation from '../member-pagenation';

export default function MyOrders() {
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
    <div className={`${styles['my-courses-container']}`}>
      <OrdersTable data={data} />
      <MemberPagenation data={data} />
    </div>
  );
}
