import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';

export default function MyOrders() {
  return <div>my-order</div>;
}
MyOrders.getLayout = (page) => <MemberLayout>(page)</MemberLayout>;
