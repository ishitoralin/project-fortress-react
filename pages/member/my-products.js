import React from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';

export default function MyProducts() {
  return <div>my-product</div>;
}
MyProducts.getLayout = (page) => (
  <MemberCenterLayout>{page}</MemberCenterLayout>
);
