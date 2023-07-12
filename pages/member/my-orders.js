import React from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';

export default function MyOrders() {
  return <div>my-order</div>;
}
MyOrders.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
