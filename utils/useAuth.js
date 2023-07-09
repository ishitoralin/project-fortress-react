import React, { useState, useContext, createContext, useEffect } from 'react';

import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    userId: 0,
  });

  const checkAuth = async () => {
    const res = await axios.get('api/users/check-login', {
      withCredentials: true,
    });

    if (res.data.message === 'authorized') {
      const userId = res.data.user.id;
      setAuth({ isAuth: true, userId });
    }
  };

  useEffect(() => {
    //還沒接
    // checkAuth();
    setAuth({ isAuth: true, userId: 1 });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
