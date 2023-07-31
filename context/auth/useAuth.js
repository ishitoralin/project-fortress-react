import React, { useState, useContext, createContext, useEffect } from 'react';
import { refreshTokenUrl, loginUrl, logoutUrl, checkAuthUrl } from './config';
import axios from 'axios';
axios.defaults.withCredentials = true;
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { useRouter } from 'next/router';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogin: false,
    user: {},
    accessToken: '',
  });
  const router = useRouter();
  const init = (axios) => {
    // Instantiate the interceptor
    createAuthRefreshInterceptor(axios, refreshAuthLogic, {
      statusCodes: [401, 403],
    });
  };
  const refreshAuthLogic = (failedRequest) => {
    console.log('refreshAuthLogic work');
    return axios
      .get(refreshTokenUrl, { withCredentials: true, skipAuthRefresh: true })
      .then((tokenRefreshResponse) => {
        console.log('tokenRefreshResponse:', tokenRefreshResponse);
        failedRequest.response.config.headers[
          'Authorization'
        ] = `Bearer ${tokenRefreshResponse.data.accessToken}`;
        console.log(tokenRefreshResponse.data.user, 'L31');
        setAuth({
          isLogin: true,
          user: tokenRefreshResponse.data.user,
          accessToken: tokenRefreshResponse.data.accessToken,
        });
        return Promise.resolve();
      })
      .catch((e) => Promise.resolve());
  };

  const logout = async () => {
    setAuth({
      isLogin: false,
      user: {},
      accessToken: '',
    });
    try {
      const res = await axios.get(logoutUrl, {
        withCredentials: true,
      });
      return res.data.message;
    } catch (err) {
      return err.response.data.message;
    }
    //TODO delete cookie and delete JWT in heap here

    // router.push('/');
  };
  const login = async (values) => {
    try {
      const res = await axios.post(loginUrl, JSON.stringify(values), {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAuth({
        isLogin: true,
        user: res.data.user,
        accessToken: res.data.accessToken,
      });
      return res.data.message;
    } catch (err) {
      console.log(err);
      return err.response.status;
    }
  };

  const checkAuth = async () => {
    /* const res = await axios.get(checkAuthUrl, {
      withCredentials: true,
    });

    if (res.data.message === 'authorized') {
      const user = res.data.user;
      setAuth({ isLogin: true, user });
      // setLoading(false);
    } */
    try {
      const data = await axios.get(checkAuthUrl, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${auth?.accessToken}` },
      });
      console.log(data, 'L85');
      // if (data.message) setAuth(true)
    } catch (err) {
      console.log(err, 'L88');
    }
  };

  init(axios);

  useEffect(() => {
    if (auth?.accessToken)
      //TODO remove console
      console.log(`set  axios.defaults.headers.common['Authorization']`);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${auth.accessToken}`;
  }, [auth]);
  useEffect(() => {
    //還沒接
    checkAuth();
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
