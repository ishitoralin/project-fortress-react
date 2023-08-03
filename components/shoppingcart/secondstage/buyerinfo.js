import React, { useEffect, useState } from 'react';
import styles from '@/styles/shoppingcart.module.css';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import CUITextField from '@/components/customUI/cui-textfield';
import { name } from 'dayjs/locale/zh-tw';
import { useAuth } from '@/context/auth/useAuth';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export default function BuyerInfo() {
  const { auth } = useAuth();
  const [value, setValue] = React.useState(0);
  // Value 可以抓到選取的宅配方式

  // const [info, setInfo] = useState([
  //   { name: 1, value: '', error: false, helperText: '' },
  // ]);
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
  console.log(deliveryMethod);
  return (
    <>
      {/* 購買人資訊 */}
      <div className={`${styles.InfoArea}`}>
        <div className={`${styles.InfoContainer}`}>
          <div className={`${styles.InfoComponent1}`}>訂購人資訊</div>
          <div className={`${styles.InfoComponent2}`}>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                匯入會員資訊
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                清除欄位資訊
              </Button>
            </div>
          </div>
          {/* <div className={`${styles.InfoComponent1}`}>1</div> */}
          <CUITextField
            name={1}
            className={`${styles.InfoComponent1}`}
            // error={value.length > 0 ? false : true}
            label="請輸入訂購人姓名"
            required
            value={''}
            onChange={(e) => {
              // const newState = [...info];
              // newState.map((v, i) => {
              //   if (e.name === 1) {
              //     return { ...v, value: e.target.values };
              //   }
              //   return { ...v };
              // })
            }}
            onBlur={() => {}}
            helperText={`此為必填欄位`}
          ></CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入訂購人地址"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入連絡電話"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入電子信箱"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
        </div>
        <div className={`${styles.InfoContainer}`}>
          <div className={`${styles.InfoComponent3}`}>
            <div>宅配方式</div>
            <div>
              <Box sx={{ width: '100%' }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    console.log(newValue);
                    const target = newValue;
                    setValue(target);
                  }}
                >
                  {deliveryMethod.map((v, i) => {
                    return (
                      <BottomNavigationAction
                        key={v.sid}
                        label={v.method}
                        icon={
                          v.sid === 1 ? (
                            <LocalConvenienceStoreIcon
                              sx={{ fontSize: '40px' }}
                            />
                          ) : v.sid === 2 ? (
                            <LocalShippingIcon sx={{ fontSize: '40px' }} />
                          ) : (
                            <DirectionsCarIcon sx={{ fontSize: '40px' }} />
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
          <div className={`${styles.InfoComponent2}`}>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                匯入會員資訊
              </Button>
            </div>
            <div>
              <Button
                sx={{
                  padding: '0 6px',
                  fontSize: '24px',
                  border: '1px solid #D9D9D9',
                  color: 'black',
                  fontWeight: '700',
                }}
              >
                清除欄位資訊
              </Button>
            </div>
          </div>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入收件人姓名"
            required
            helperText={`此為必填欄位`}
          ></CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入寄送地址"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入聯絡電話"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={true}
            label="請輸入電子信箱"
            required
            helperText={`此為必填欄位`}
          >
            1
          </CUITextField>
        </div>
      </div>
    </>
  );
}
