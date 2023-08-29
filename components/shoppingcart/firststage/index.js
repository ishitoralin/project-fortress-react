import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import {
  indexBackground,
  indexContainer,
} from '@/styles/shoppingcart-style/recommandproduct';
import { useEffect, useState } from 'react';
export default function FirstStageComponent() {
  const [uuid, setUuid] = useState('');
  console.log(uuid);
  useEffect(() => {
    const recipt = uuidv4();
    setUuid(recipt);
  }, []);
  // const linepay = () => {
  //   fetch('https://sandbox-api-pay.line.me/v2/payments/request', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'X-LINE-ChannelId': '2000405039',
  //       'X-LINE-ChannelSecret': '295309accb198de08d1e57de745ae814',
  //     },
  //     body: JSON.stringify({
  //       productName: '健身堡壘商品',
  //       amount: 1,
  //       currency: 'TWD',
  //       confirmUrl: 'http://localhost:3000/shoppingcart',
  //       orderId: uuid,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((results) => {
  //       console.log(results);
  //     })
  //     .catch((error) => {
  //       console.error('Fetch Error:', error);
  //     });
  // };
  return (
    <>
      {/* <dir>
        <button onClick={linepay}>123312321</button>
      </dir>
      <div>
        <form
          name="linepay"
          action="https://localhost:3001/linepaytest/:orderID"
          method="POST"
        >
          <input type="hidden" name="MerchantID" value="MS149952932" />
          <input type="hidden" name="TradeInfo" ref={tradeInfoRef} />
          <input type="hidden" name="TradeSha" ref={tradeShaRef} />
          <input type="hidden" name="Version" value="2.0" />
          <input
            type="hidden"
            name="MerchantOrderNo"
            ref={merchantOrderNoRef}
          />
          <button
            ref={buttonRef}
            type="submit"
            style={{ display: 'none' }}
          ></button>
        </form>
      </div> */}
      <button className={{ fontSize: '54px' }}>&#9776;</button>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <ProductListTitle></ProductListTitle>
        </Box>
        <ProductList></ProductList>
      </Box>
    </>
  );
}
