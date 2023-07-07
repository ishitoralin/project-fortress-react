import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function VerifyToken() {
  const router = useRouter();
  useEffect(() => {
    if (typeof Window !== 'undefined') {
      console.log(router);
    }
  }, []);

  return <div>{JSON.stringify(router)}</div>;
}
