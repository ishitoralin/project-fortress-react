import React, { useState } from 'react';
import Back from './back';
import Front from './front';
import styles from './body.module.css';
import CUIButton from '../customUI/cui-button';

export default function Body() {
  /*  motion的whileHover對於svg內的支援很差,當hover上去後,改動過的css效果會持續在那.
   */
  const [flipFront, setFlipFront] = useState(true);
  const [part, setPart] = useState(null);
  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
    },
  };
  return (
    <>
      <div className={`${styles.container} `}>
        <div className={`${styles['flipped-container']}`}>
          {/* {flipFront ? (
          <Front
            part={part}
            setPart={setPart}
            motionVariants={motionVariants}
          />
        ) : (
          <Back part={part} setPart={setPart} motionVariants={motionVariants} />
        )} */}
          <Front
            part={part}
            setPart={setPart}
            flipFront={flipFront}
            motionVariants={motionVariants}
          />
          <Back
            part={part}
            setPart={setPart}
            flipFront={flipFront}
            motionVariants={motionVariants}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CUIButton
          onClick={() => {
            setFlipFront((prev) => !prev);
          }}
          color={'fortress'}
          sx={{ m: 1 }}
        >
          翻轉
        </CUIButton>
        <CUIButton
          onClick={() => {
            setPart(null);
          }}
          color={'light_grey'}
          sx={{ m: 1 }}
        >
          重置部位
        </CUIButton>
        <div>{part && `所選部位: ${part}`}</div>
      </div>
    </>
  );
}
