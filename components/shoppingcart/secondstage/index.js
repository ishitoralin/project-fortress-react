import React from 'react';
import ShoppingState from './shoppingstate';
import Box from '@mui/material/Box';
import Info from './info';

export default function SecondStage() {
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 200px' }}>
        <ShoppingState></ShoppingState>
        <Info></Info>
      </Box>
    </>
  );
}
