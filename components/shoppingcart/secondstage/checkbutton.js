import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
import styles from '@/styles/shoppingcart.module.css';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { useAuth } from '@/context/auth/useAuth';
import { checkbutton } from '@/styles/shoppingcart-style/recommandproduct';
export default function CheckButton(props) {
  // Neweb
  const buttonRef = useRef(null);
  const [tradeInfo, setTradeInfo] = useState('');
  const [tradeSha, setTradeSha] = useState('');
  const [version, setVersion] = useState('');
  const defaultVersion = 'jianshenbaolei1691477184971';
  const defaultTradeSha =
    'B01A6E2D0C436A030E8997B976CC6D2026B785E269DCA424D8935CD5F1F392B8';
  const defaultTradeInfo =
    'b996ed12b9d19741555a6b90c4c55b7c02c9b2a8e7f37d6e3ed1942967f6fdb600999025cc39457e3ba446b7838bfb7fc63ebc860a57b25fab937c6dd4a4a1916ed6fd3f1c5e93e12db47f3ab18287889dc6814a439731402693b06f224059280b8340fd3902e817fad3a367c3286fc8ae693c70b53c829a36d28612d342164a5fc8d2039332ffc176c5254f6db91255a2d85f82fcc7031349d4cbf5f8dfd88a470b8638e16c08dbbe6e92c07cd2fa19ae0975680dc6997fb81434eef60466b874d7ac4e87b37af4a3e988c4d840a2c0f64a89c520ab8b21ef6615b86db5a879b05bdf2ffe87d9efc8e927404447928fc5940dca455ccf41c06a4339f8c6dbad040a85d5df935b58a26d84d6dc653fe01127d28c355330d0b54f3c117c720ffc';

  // Neweb
  const WhiteTheme = createColorTheme('#FFF');
  const RedTheme = createColorTheme('#FF0000');
  const { auth } = useAuth();
  const { name, phone, address, email, paymentMethod } = props.confirmInfo;
  console.log(props.confirmInfo, props.delivery);

  const checkConfirm = async () => {
    await fetch('http://localhost:3001/OLdelivery', {
      method: 'POST',
      body: JSON.stringify({
        ...props.confirmInfo,
        paymentMethod,
        deliveryMethod: parseInt(props.delivery),
      }),
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((r) => r.json)
      .then((result) => console.log(result));
  };
  return (
    <>
      <Box sx={checkbutton}>
        {/* 產品總計欄位 */}
        <div>
          <div className={styles.countContainer}>
            {/* button 以外的元件 */}
            <div className={`${styles.countComponentWithoutButton}`}>
              <div className={`${styles.countComponent}`}>總計：</div>
              <div className={`${styles.countComponentForQuantity}`}>
                {props.finalQuantity}
              </div>
              <div className={`${styles.countComponentForNumber}`}>
                {props.finalPrice}
              </div>
            </div>
            {/* 只包含button的元件 */}
            <div className={`${styles.countButtonComponent}`}>
              <Box sx={checkbutton}>
                <div className={`${styles.checkButtonContainer}`}>
                  <WhiteTheme>
                    <Button
                      className={`${styles.buttonContainer}`}
                      sx={{
                        flexWrap: 'nowrap',
                        marginLeft: '10px',
                        width: '200px',
                        ':hover': {
                          opacity: '.7',
                          bgcolor: 'var(--light-gray2)',
                        },
                        '@media screen and (max-width: 996px)': {
                          width: '0',
                        },
                      }}
                      variant="contained"
                      onClick={props.onClick}
                    >
                      <Link href="/shoppingcart" sx={{ width: '100%' }}>
                        上一步
                      </Link>
                    </Button>
                  </WhiteTheme>
                  <RedTheme>
                    <Button
                      className={`${styles.buttonContainer}`}
                      sx={{
                        marginLeft: '10px',
                        width: '200px',
                        ':hover': {
                          opacity: '.7',
                          bgcolor: 'var(--main-red)',
                        },
                        '@media screen and (max-width: 996px)': {
                          width: '0',
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        checkConfirm();
                      }}
                      disabled={
                        props.delivery === '' ||
                        name === '' ||
                        phone === '' ||
                        address === '' ||
                        email === '' ||
                        paymentMethod === ''
                      }
                    >
                      <Link href="/shoppingcart/thirdstage">送出訂單</Link>
                    </Button>
                  </RedTheme>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Box>

      <div>
        <form
          name="Newebpay"
          action="https://ccore.newebpay.com/MPG/mpg_gateway"
          method="POST"
          class="payment"
        >
          <input type="hidden" name="MerchantID" value="MS17361556" />
          <input type="hidden" name="TradeInfo" value={tradeInfo} />
          <input type="hidden" name="TradeSha" value={tradeSha} />
          <input type="hidden" name="Version" value="2.0" />
          <input type="hidden" name="MerchantOrderNo" value={version} />
          <button
            ref={buttonRef}
            type="submit"
            class="btn btn-secondary custom-btn beside-btn"
            style={{ display: 'none' }}
          >
            213
          </button>
        </form>

        <button
          onClick={() => {
            buttonRef.current.click();
          }}
        >
          123
        </button>
      </div>
    </>
  );
}
