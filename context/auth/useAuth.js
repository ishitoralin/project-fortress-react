import React, { useState, useContext, createContext, useEffect } from 'react';
import { jwtTokenUrl, loginUrl, logoutUrl, checkAuthUrl } from './config';
import axios from 'axios';
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
  const refreshAuthLogic = (failedRequest) =>
    axios
      .get(jwtTokenUrl, { skipAuthRefresh: true })
      .then((tokenRefreshResponse) => {
        console.log('L19');
        // localStorage.setItem('token', tokenRefreshResponse.data.token)
        // failedRequest.response.config.headers['Authorization'] =
        //   'Bearer ' + tokenRefreshResponse.data.token
        failedRequest.response.config.headers['Authorization'] =
          tokenRefreshResponse.data.accessToken;
        console.log(tokenRefreshResponse);
        // setAuth(
        //   {isLogin: true,
        //   user: {},
        //   accessToken: '',
        // })
        return Promise.resolve();
      })
      .catch((e) => {
        // TODO: handle redirect to login page
        // setFetchError(e.message)
        //window.location.reload(false)
      });
  const logout = async () => {
    setAuth({
      isLogin: false,
      user: {},
      accessToken: '',
    });
    try {
      const res = await axios.get(logoutUrl);
      return res.data.message;
    } catch (err) {
      return err.response.data.message;
    }
    //TODO delete cookie and delete JWT in heap here

    // router.push('/');
  };

  const init = (axios) => {
    // Instantiate the interceptor
    createAuthRefreshInterceptor(axios, refreshAuthLogic, {
      statusCodes: [401, 403],
    });
  };
  init(axios);
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
      return err.response.data.message;
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
      console.log('L93');
      const data = await axios.get(checkAuthUrl, { withCredentials: true });
      console.log(data);

      // if (data.message) setAuth(true)
    } catch (err) {
      console.log(err.response);
      console.log('L96');
    }
  };

  useEffect(() => {
    if (auth?.accessToken)
      //TODO remove console
      console.log(
        "set  axios.defaults.headers.common['Authorization'] = auth.accessToken;"
      );
    axios.defaults.headers.common['Authorization'] = auth.accessToken;
  }, [auth?.accessToken]);
  useEffect(() => {
    //還沒接
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login, init }}>
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
