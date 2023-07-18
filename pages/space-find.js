import dynamic from 'next/dynamic';
import React from 'react';
const SpaceFindComponent = dynamic(
  () => import('@/components/space-find-component'),
  {
    ssr: false,
  }
);

export default function SpaceFind() {
  return <SpaceFindComponent />;
}
