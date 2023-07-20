import styles from './loader.module.css';

function Loader() {
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
