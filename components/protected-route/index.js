'use client';
import { useAuth } from '@/context/auth/useAuth';
import { useRouter } from 'next/router';

export default function ProtectedRouteWrapper({ children }) {
  const router = useRouter();
  const { auth } = useAuth();
  if (typeof window !== 'undefined') {
    if (!auth.isLogin) {
      console.log('worl1');

      router.push('/member/login');
      return null;
    }
    if (auth.isLogin) {
      console.log('worl2');
    }
    return children;
  } else {
    console.log('worl3');

    return null;
  }
}
