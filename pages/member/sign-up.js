import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';
export default function SignUp() {
  return <div>sign-up</div>;
}
SignUp.getLayout = (page) => <MemberLayout>{page}</MemberLayout>;
