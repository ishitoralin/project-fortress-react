import React from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';

export default function MyCourses() {
  return <div>my-course</div>;
}
MyCourses.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
