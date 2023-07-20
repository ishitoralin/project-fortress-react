import { useEffect } from 'react';

function useDebounce(doSomething, ms = 500) {
  if (!(doSomething instanceof Function)) throw new Error('not a function');

  useEffect(() => {
    const tid = setTimeout(doSomething, ms);
    return () => clearTimeout(tid);
  }, [doSomething, ms]);
}

// HaoHan styple <3 <3 <3
function useDebounceHH(doSomething, ms = 500, dep) {
  if (!(doSomething instanceof Function)) throw new Error('not a function');

  useEffect(() => {
    const tid = setTimeout(doSomething, ms);
    return () => clearTimeout(tid);
  }, dep);
}

export { useDebounce, useDebounceHH };
