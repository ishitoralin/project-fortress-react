import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';
export default function ForgotPassword() {
  return <div>forgot-password</div>;
}
ForgotPassword.getLayout = (page) => <MemberLayout>{page}</MemberLayout>;
