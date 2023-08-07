import { useEffect } from 'react';
import styles from './loader.module.css';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '@/context/auth/useAuth';

function Loader() {
  const router = useRouter();
  const { checkAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    const toastId = toast('跳轉中,請稍等');
    //TODO 邏邏輯可能要再修正 這邊強制兩秒就跳轉首頁
    const timeID = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => {
      clearTimeout(timeID);
      toast.dismiss(toastId);
    };
  }, [router]);
  return (
    <>
      <div className={`${styles['loader-p']}`}>
        {/* <div className="loader loader--spinningDisc"></div> */}
        {/* <div className="loader loader--audioWave"></div> */}
        {/* <div className="loader loader--snake"></div> */}
        <div
          className={`${styles['loader']} ${styles['loader--glisteningWindow']}`}
        ></div>
        {/* <div className="loader loader--circularSquare"></div> */}
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            boxShadow: '0 0 1px #eee',
          },
        }}
      />
    </>
  );
}

export default Loader;
