import React, { useEffect } from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import MyProductsComponent from '@/components/member/my-products';
import axios from 'axios';

export default function MyProducts() {
  useEffect(() => {
    const getMyfavoriteProducts = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-products`
      );
      if (res.data?.data);
      {
        console.log(res.data.data);
      }
    };
    getMyfavoriteProducts();
  }, []);

  return <MyProductsComponent />;
}
MyProducts.getLayout = (page) => (
  <MemberCenterLayout>{page}</MemberCenterLayout>
);
