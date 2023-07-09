import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import MemberLayout from '@/components/layout/memberLayout';

export default function VerifyToken() {
  const router = useRouter();
  useEffect(() => {
    if (typeof Window !== 'undefined') {
      console.log(router);
    }
    for (let k in router) {
      console.log('K:', k, 'V:', router[k]);
    }
  }, []);

  return <div>1223</div>;
}
VerifyToken.getLayout = (page) => <MemberLayout> {page}</MemberLayout>;
