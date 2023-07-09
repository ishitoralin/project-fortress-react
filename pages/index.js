import React from 'react';
import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。
const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

export default function Index() {
  return <SectionMap></SectionMap>;
}
