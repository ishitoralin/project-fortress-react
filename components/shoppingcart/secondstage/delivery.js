import React from 'react';
import styles from '@/styles/shoppingcart.module.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Delivery(props) {
  const [value, setValue] = useState('0');
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/OLdeliveryMethod', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((results) => {
        return setDeliveryMethod(results.data);
      });
  }, []);
  return (
    <div className={`${styles.deliveryContainer}`}>
      <div className={`${styles.deliveryTitle}`}>宅配方式</div>
      <div className={`${styles.deliveryContent}`}>
        <Box sx={{ width: '100%' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              const target = newValue;
              setValue(target);
              props.setConfirmInfo((prev) => {
                return { ...prev, paymentMethod: target };
              });
            }}
          >
            {deliveryMethod.map((v, i) => {
              return (
                <BottomNavigationAction
                  key={v.sid}
                  label={v.method}
                  icon={
                    v.sid === 1 ? (
                      <LocalConvenienceStoreIcon sx={{ fontSize: '50px' }} />
                    ) : v.sid === 2 ? (
                      <LocalShippingIcon sx={{ fontSize: '50px' }} />
                    ) : (
                      <DirectionsCarIcon sx={{ fontSize: '50px' }} />
                    )
                  }
                  sx={{
                    padding: '0',
                    margin: '30px',
                  }}
                />
              );
            })}
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
}
