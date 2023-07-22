import { useState, useEffect } from 'react';

const useDetectBrowser = () => {
  const [browser, setBrowser] = useState();

  useEffect(() => {}, []);

  return browser;
};

export default useDetectBrowser;
