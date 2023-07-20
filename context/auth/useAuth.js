import React, { useState, useContext, createContext, useEffect } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLogin: false, user: {} });
  const router = useRouter();
  const logout = () => {
    //TODO delete cookie and delete JWT in heap here
    setAuth((prev) => {
      return { ...prev, isLogin: false, user: {} };
    });
    // router.push('/');
  };
  // const checkAuth = async () => {
  //   setLoading(true);
  //   const res = await axios.get('api/users/check-login', {
  //     withCredentials: true,
  //   });

  //   if (res.data.message === 'authorized') {
  //     const user = res.data.user;
  //     setAuth({ isLogin: true, user });
  //     setLoading(false);
  //   }
  // };
  const checkAuth = () => {
    setAuth({ isLogin: true, user: { userId: 1 } });
  };
  // const checkAuth = async () => {
  //   const promise = await new Promise((reslove, reject) => {
  //     setTimeout(() => {
  //       reslove();
  //     }, 10000);
  //   });
  //   setAuth({ isLogin: true, user: { userId: 1 } });
  // };

  useEffect(() => {
    //還沒接
    checkAuth();
  }, []);
  const isLogin = () => auth.isLogin;
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth.isLogin) {
      router.push('/');
    }
  }, [auth.isLogin]);
  return <>{auth.isLogin ? children : <>12121</>}</>;
}
