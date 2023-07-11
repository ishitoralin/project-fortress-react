import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';

export default function MyProducts() {
  return <div>my-product</div>;
}
MyProducts.getLayout = (page) => <MemberLayout>(page)</MemberLayout>;
