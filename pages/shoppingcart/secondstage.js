import React, { useRef } from 'react';
import SecondStage from '@/components/shoppingcart/secondstage';
export default function ShoppingCart() {
  const buttonRef = useRef(null);
  return (
    <div>
      <SecondStage></SecondStage>
      <form
        name="Newebpay"
        action="https://ccore.newebpay.com/MPG/mpg_gateway"
        method="POST"
        class="payment"
      >
        <input type="hidden" name="MerchantID" value="MS17361556" />
        <input
          type="hidden"
          name="TradeInfo"
          value="b996ed12b9d19741555a6b90c4c55b7c02c9b2a8e7f37d6e3ed1942967f6fdb600999025cc39457e3ba446b7838bfb7fc63ebc860a57b25fab937c6dd4a4a1916ed6fd3f1c5e93e12db47f3ab18287889dc6814a439731402693b06f224059280b8340fd3902e817fad3a367c3286fc8ae693c70b53c829a36d28612d342164a5fc8d2039332ffc176c5254f6db91255a2d85f82fcc7031349d4cbf5f8dfd88a470b8638e16c08dbbe6e92c07cd2fa19ae0975680dc6997fb81434eef60466b874d7ac4e87b37af4a3e988c4d840a2c0f64a89c520ab8b21ef6615b86db5a879b05bdf2ffe87d9efc8e927404447928fc5940dca455ccf41c06a4339f8c6dbad040a85d5df935b58a26d84d6dc653fe01127d28c355330d0b54f3c117c720ffc"
        />
        <input
          type="hidden"
          name="TradeSha"
          value="B01A6E2D0C436A030E8997B976CC6D2026B785E269DCA424D8935CD5F1F392B8"
        />
        <input type="hidden" name="Version" value="2.0" />
        <input
          type="hidden"
          name="MerchantOrderNo"
          value="jianshenbaolei1691477184971"
        />
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
  );
}
