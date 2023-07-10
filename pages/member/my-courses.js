import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';

export default function MyCourses() {
  return <div>my-course</div>;
}
MyCourses.getLayout = (page) => <MemberLayout>(page)</MemberLayout>;
