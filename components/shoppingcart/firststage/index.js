import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import Box from '@mui/material/Box';
import {
  indexBackground,
  indexContainer,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function FirstStageComponent() {
//   const linepay = () => {
//     fetch('https://sandbox-api-pay.line.me/v2/payments/request', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
// 'X-LINE-ChannelId':your Channel ID
// 'X-LINE-ChannelSecret':your Channel Secret Key
//       },
//     });
//   };
  return (
    <>
      {/* <dir>
        <button onClick={linepay}>123312321</button>
      </dir> */}
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
