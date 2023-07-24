import ShoppingState from './shoppingstate';
import ProductListTitle from './productlisttitle';
import ProductList from './productlist';
import SpatialProduct from './spatialproduct';
import RecommendProduct from './recommendproduct';
import Box from '@mui/material/Box';
import CheckButton from '@/components/shoppingcart/firststage/checkbutton';
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
      <Box sx={indexBackground}>
        <Box sx={indexContainer}>
          <SpatialProduct></SpatialProduct>
          <RecommendProduct></RecommendProduct>
        </Box>
      </Box>
      <Box sx={checkbutton}>
        <CheckButton></CheckButton>
      </Box>
    </>
  );
}
