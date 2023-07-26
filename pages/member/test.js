import CUISearch from '@/components/customUI/cui-search';
import React from 'react';

export default function Test() {
  const searchImg = async () => {
    try {
      const res = await fetch(
        'https://iplay.sa.gov.tw/Upload/photogym/20140611132241_D:/%E7%B8%BD%E5%8B%99%E8%99%95%E8%B3%87%E6%96%99%E5%A4%BE/96%E7%B8%BD%E5%8B%99/%E8%AD%B0%E5%93%A1%E8%A3%9C%E5%8A%A9%E6%AC%BE/%E6%A3%92%E7%90%83%E5%A0%B4%E8%A8%AD%E5%82%99/PIC_0017.JPG'
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          searchImg();
        }}
      >
        45545
      </button>
    </div>
  );
}
