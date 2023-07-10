import React from 'react';
import dynamic from 'next/dynamic';

const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);
export default function Test() {
  return <SectionMap />;
}
