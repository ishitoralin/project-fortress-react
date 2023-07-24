import React, { useState, useContext, createContext, useEffect } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogin: false,
    user: {},
    accessToken: '',
  });
  const router = useRouter();
  const logout = () => {
    //TODO delete cookie and delete JWT in heap here
    setAuth((prev) => {
      return { ...prev, isLogin: false, user: {} };
    });
    // router.push('/');
  };
  const login = async (values) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/auth/login`,
        JSON.stringify(values),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setAuth({
        isLogin: true,
        user: res.data.user,
        accessToken: res.data.accessToken,
      });
      return res.data.message;
    } catch (err) {
      return err.response.data.message;
    }
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

  useEffect(() => {
    //還沒接
    // checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// export function ProtectedRoute({ children }) {
//   const { auth } = useAuth();
//   const router = useRouter();
//   useEffect(() => {
//     if (auth.isLogin) {
//       router.push('/');
//     }
//   }, [auth.isLogin]);
//   return <>{auth.isLogin ? children : <></>}</>;
// }
/* 
<button
        onClick={async () => {
          // const email = ;
          // const password = ;
          const values = { email: 'mail62055@test.com', password: 'test1234' };
          console.log({ email: 'mail62055@test.com', password: 'test1234' });
          try {
            const data = await axios.post(
              'http://localhost:3001/api/auth/login',
              JSON.stringify({
                email: 'mail62055@test.com',
                password: 'test1234',
              }),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              }
            );
            console.log(data);
          } catch (err) {
            console.log(err.response.data);
          }
        }}
      >
        test
      </button>
      <button
        onClick={async () => {
          console.log(auth);
          try {
            const data = await axios.get(
              'http://localhost:3001/api/auth/test',

              {
                headers: {
                  Authorization: `Bearer ${auth.auth.accessToken}`,
                },
                withCredentials: true,
              }
            );
            console.log(data);
          } catch (err) {
            console.log(err.response);
          }
        }}
      >
        test2
      </button>
*/
