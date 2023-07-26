import { useEffect } from 'react';
import styles from './loader.module.css';
import { useRouter } from 'next/router';

function Loader() {
  const router = useRouter();
  useEffect(() => {
    //TODO 邏邏輯可能要再修正 這邊強制兩秒就跳轉首頁
    const timeID = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => {
      clearTimeout(timeID);
    };
  }, [router]);
  return (
    <div className={`${styles['loader-p']}`}>
      {/* <div className="loader loader--spinningDisc"></div> */}
      {/* <div className="loader loader--audioWave"></div> */}
      {/* <div className="loader loader--snake"></div> */}
      <div
        className={`${styles['loader']} ${styles['loader--glisteningWindow']}`}
      ></div>
      {/* <div className="loader loader--circularSquare"></div> */}
    </div>
  );
}

export default Loader;
