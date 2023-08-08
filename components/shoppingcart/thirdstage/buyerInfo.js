import { useAuth } from '@/context/auth/useAuth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/shoppingcart.module.css';
export default function BuyerInfo() {
  const [buyerInfo, setBuyerInfo] = useState({});
  const [itemList, setItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { auth } = useAuth();
  useEffect(() => {
    const getBuyerInfo = async () => {
      try {
        const res = await axios.get('http://localhost:3001/FObuyerinfo/', {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        });
        console.log(res.data.omdata);
        setBuyerInfo(res.data.omdata);
      } catch (error) {
        console.log('error');
      }
    };
    getBuyerInfo();
    const getItemList = async () => {
      try {
        const res = await axios.get('http://localhost:3001/FOitemlist/', {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        });
        const tolocalestring = res.data.oddata.map((v, i) => {
          return { ...v, price: v.price.toLocaleString() };
        });
        console.log(tolocalestring);
        setItemList(tolocalestring);
        let totalPrice = 0;
        res.data.oddata.map((v, i) => {
          totalPrice += v.quantity * v.price;
        });
        setTotalPrice(totalPrice.toLocaleString());
      } catch (error) {
        console.log('error');
      }
    };
    getItemList();
  }, [auth?.accessToken]);

  const amount = (itemList) => {
    itemList.map((v, i) => {
      return {
        ...v,
        price: (
          v.quantity * parseInt(v.price.replace(/,/g, ''))
        ).toLocaleString(),
      };
    });
  };
  return (
    <>
      <div>購買人資訊</div>
      <div className={styles.buyerInfoContainerFor3rdPage}>
        <div className={styles.buyerInfoTitleFor3rdPage}>收件人資訊</div>
        <div className={styles.buyerInfoLRFor3rdPage}>
          <div className={styles.buyerInfoLeftFor3rdPage}>
            <div>名稱 : {buyerInfo?.name}</div>
            <div>地址 : {buyerInfo?.address}</div>
            <div>電話 : {buyerInfo?.phone}</div>
            <div>信箱 : {buyerInfo?.email}</div>
          </div>
          <div className={styles.buyerInfoRightFor3rdPage}>
            <div>
              付款方式：
              {buyerInfo?.Method}
            </div>
            <div>下單時間：{buyerInfo?.buy_time}</div>
            <div>商品數量：{buyerInfo?.amount}</div>
            <div>商品總價：{totalPrice}</div>
          </div>
        </div>
      </div>

      <div>商品明細</div>
      {itemList.map((v, i) => {
        return (
          <div className={styles.itemListContainer} key={i}>
            <div className={styles.itemListTitle}>
              <div> {v.item_name}</div>
            </div>
            <div className={styles.itemListDetailWithPhoto}>
              {/* image */}
              <div>
                <img
                  style={{ height: '95px', objectFit: 'cover' }}
                  src={
                    v.products_type_sid === 4
                      ? `${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/lesson/confirm/${v.picture}`
                      : `${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/product/${
                          v.picture.split(',')[0]
                        }`
                  }
                  alt="商品圖片"
                />
              </div>
              <div className={styles.itemListDetail}>
                <div>價格 : {v.price}</div>
                <div>數量 : {v.quantity}</div>
                <div>
                  小計 :
                  {(
                    v.quantity * parseInt(v.price.replace(/,/g, ''))
                  ).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
