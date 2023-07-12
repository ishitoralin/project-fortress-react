import React from 'react';

export default function Info() {
  const InfoContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const InfoComponent = {
    width: '750px',
    height: '680px',
    padding: '20px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '2px solid red',
  };
  return (
    <>
      <div style={InfoContainer}>
        <div style={InfoComponent}>
          <div>訂購人資訊</div>
          <div>匯入會員資訊</div>
          <div>清除資訊</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div style={InfoComponent}>dilivery</div>
      </div>
    </>
  );
}
