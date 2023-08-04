import { useState, useEffect } from 'react';
import styles from '../member.module.css';
import OrdersTable from './orders-table';
import MemberPagenation from '../member-pagenation';
import axios from 'axios';

function createData(sid, buy_time, pay_time, method_sid, payment) {
  return {
    sid,
    buy_time,
    pay_time,
    method_sid,
    payment,
    detail: [
      {
        prduct_type_sid: 1,
        item_sid: 1,
        product_name: 'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
        picture: '/p-imgs/st0010102.jpg',
        price: 300,
        quantity: 5,
        amount: 1500,
      },
      {
        prduct_type_sid: 2,
        item_sid: 2,
        product_name: 'Triban Essential 吸濕排',
        picture: '/p-imgs/st0010102.jpg',
        price: 300,
        quantity: 10,
        amount: 3000,
      },
    ],
  };
}
const rows = [
  createData(
    '971c3fdb-9fd2-4fb3-a9f4-eec13b228384',
    '2020-12-31 11:08:04',
    '2020-12-31 12:08:04',
    'linepay',
    500,
    3.99
  ),
];
export default function MyOrders() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  /*   useEffect(() => {
    setData((prev) => {
      return { ...prev, rows };
    });
    return () => {};
  }, []); */
  useEffect(() => {
    const getMyfavoriteProducts = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/my-orders`
      );
      if (res.data?.output?.rows);
      {
        setData((prev) => {
          return { ...prev, rows: res.data.output.rows };
        });
      }
    };
    getMyfavoriteProducts();
  }, []);
  return (
    <div className={`${styles['my-container']}`}>
      <OrdersTable data={data} />
      <MemberPagenation data={data} />
    </div>
  );
}
