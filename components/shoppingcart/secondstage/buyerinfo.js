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
import { Toaster, toast } from 'react-hot-toast';
export default function BuyerInfo(props) {
  const { auth } = useAuth();
  const [value, setValue] = useState('0');
  // Value 可以抓到選取的宅配方式
  const [deliveryMethod, setDeliveryMethod] = useState([]);

  const [name, setName] = useState('');
  const [checkName, setCheckName] = useState(false);

  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);

  const [phone, setPhone] = useState('');
  const [checkPhone, setCheckPhone] = useState(false);

  const [address, setAddress] = useState('');
  const [checkAddress, setCheckAddress] = useState(false);

  const toastImportInfo = () => {
    toast.success('已匯入會員資訊');
  };
  const toastClearInfo = () => {
    toast.error('已清除會員資訊');
  };
  useEffect(() => {
    fetch('http://localhost:3001/OLdeliveryMethod', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((results) => {
        return setDeliveryMethod(results.data);
      });
  }, []);

  const importData = () => {
    fetch('http://localhost:3001/OLautofillinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    })
      .then((r) => r.json())
      .then((results) => {
        const data = results.data[0];
        setName(data.name);
        setPhone(data.mobile);
        setAddress(data.address);
        setEmail(data.email);
        setCheckName(false);
        setCheckPhone(false);
        setCheckAddress(false);
        setCheckEmail(false);
        props.setConfirmInfo({
          name: data.name,
          address: data.address,
          phone: data.mobile,
          email: data.email,
        });
      });
  };

  const clearInfo = () => {
    const data = '';
    setName(data);
    setPhone(data);
    setAddress(data);
    setEmail(data);
    setCheckName(true);
    setCheckPhone(true);
    setCheckAddress(true);
    setCheckEmail(true);
    props.setConfirmInfo({
      name: '',
      address: '',
      phone: '',
      email: '',
    });
  };
  
  return (
    <>
      <div className={`${styles.InfoArea}`}>
        <div className={`${styles.InfoContainer}`}>
          <div className={`${styles.InfoComponent3}`}>
            <div>收件人資訊</div>
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
                onClick={() => {
                  importData();
                  toastImportInfo();
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
                onClick={() => {
                  clearInfo();
                  toastClearInfo();
                }}
              >
                清除欄位資訊
              </Button>
            </div>
          </div>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={checkName}
            label="請輸入收件人姓名"
            required
            helperText={`此為必填欄位`}
            value={name}
            onChange={(e) => {
              const imputValue = e.target.value;
              setName(imputValue);
              props.setConfirmInfo((prev) => {
                return { ...prev, name: imputValue };
              });
            }}
            onBlur={(e) => {
              const imputValue = e.target.value;
              const valid = e.target.value.length;
              valid ? setCheckName(false) : setCheckName(true);
              props.setConfirmInfo((prev) => {
                return { ...prev, name: imputValue };
              });
            }}
          ></CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={checkAddress}
            label="請輸入寄送地址"
            required
            helperText={`此為必填欄位`}
            value={address}
            onChange={(e) => {
              const imputValue = e.target.value;
              setAddress(imputValue);
              props.setConfirmInfo((prev) => {
                console.log(prev);
                return { ...prev, address: imputValue };
              });
            }}
            onBlur={(e) => {
              const imputValue = e.target.value;
              const valid = e.target.value.length;
              valid ? setCheckAddress(false) : setCheckAddress(true);
              props.setConfirmInfo((prev) => {
                console.log(prev);
                return { ...prev, address: imputValue };
              });
            }}
          ></CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={checkPhone}
            label="請輸入聯絡電話"
            required
            helperText={`此為必填欄位`}
            value={phone}
            onChange={(e) => {
              const imputValue = e.target.value;
              setPhone(imputValue);
              props.setConfirmInfo((prev) => {
                return { ...prev, phone: imputValue };
              });
            }}
            onBlur={(e) => {
              const imputValue = e.target.value;
              const valid = e.target.value.length;
              valid ? setCheckPhone(false) : setCheckPhone(true);
              props.setConfirmInfo((prev) => {
                return { ...prev, phone: imputValue };
              });
            }}
          ></CUITextField>
          <CUITextField
            className={`${styles.InfoComponent1}`}
            error={checkEmail}
            label="請輸入電子信箱"
            required
            helperText={`此為必填欄位`}
            value={email}
            onChange={(e) => {
              const imputValue = e.target.value;
              setEmail(imputValue);
              props.setConfirmInfo((prev) => {
                return { ...prev, email: imputValue };
              });
            }}
            onBlur={(e) => {
              const imputValue = e.target.value;
              const valid = e.target.value.length;
              valid ? setCheckEmail(false) : setCheckEmail(true);
              props.setConfirmInfo((prev) => {
                return { ...prev, email: imputValue };
              });
            }}
          ></CUITextField>
        </div>
      </div>
      <div className={`${styles.InfoComponent3}`}>
        <div>宅配方式</div>
        <div>
          <Box sx={{ width: '100%' }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                const target = newValue;
                setValue(target);
                props.setConfirmInfo((prev) => {
                  return { ...prev, deliveryMethod: target };
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
                        <LocalConvenienceStoreIcon sx={{ fontSize: '40px' }} />
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
    </>
  );
}
