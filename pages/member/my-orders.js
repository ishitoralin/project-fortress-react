import React, { useEffect } from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import MyOrdersComponent from '@/components/member/my-orders';
import axios from 'axios';

export default function MyOrders() {
/*   useEffect(() => {
    const getMyfavoriteProducts = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-courses`
      );
      if (res.data?.data);
      {
        console.log(res.data.data);
      }
    };
    getMyfavoriteProducts();
  }, []); */
  return <MyOrdersComponent />;
}
MyOrders.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
