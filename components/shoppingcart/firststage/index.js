import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import Box from '@mui/material/Box';
import {
  indexBackground,
  indexContainer,
  checkbutton,
} from '@/styles/shoppingcart-style/recommandproduct';
export default function FirstStageComponent() {
  return (
    <>
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <ShoppingState></ShoppingState>
          <ProductListTitle></ProductListTitle>
          <ProductList></ProductList>
        </Box>
      </Box>
    </>
  );
}
