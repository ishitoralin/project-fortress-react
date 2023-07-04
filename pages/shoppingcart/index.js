import styles from './shoppingcart.module.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ShoppingCart() {
  // 購買狀態範圍
  const shoppingState = {
    // border: '2px solid rgb(63, 141, 218)',
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  // 購買狀態物件容器
  const shoppingStateContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid #000000',
  };
  // 購買狀態物件
  const shoppingStateComponent = {
    width: '490px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  // 購物車產品標題範圍
  const ProductionTitle = {
    // width: '80%',
    height: '100px',
    margin: 'auto',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };
  // 購物車產品標題物件容器
  const ProductionTitleContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #000',
    fontSize: '25px',
  };
  // 購物車產品物件1
  const ProductionTitleComponent = {
    width: '217px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  // 購物車產品物件2(加大範圍)
  const ProductionTitleComponentInfo = {
    width: '434px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // 待結帳產品列表範圍
  const ProductionList = {
    // width: '80%',
    height: '100px',
    margin: 'auto',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  // 待結帳產品列表範圍容器
  const ProductionListContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    fontSize: '25px',
  };

  // 待結帳產品列表物件
  const ProductionListComponent = {
    width: '217px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // 結帳欄
  const count = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const countContainer = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  };

  const checkButton = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonContainer = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '2px solid red',
  };
  return (
    <>
      <div className={`${styles.shoppingState}`}>
        <div style={shoppingStateContainer}>
          <div style={shoppingStateComponent}>
            <CheckCircleOutlineIcon />
            訂單確認
          </div>
          <EastIcon />
          <div style={shoppingStateComponent}>
            <RemoveCircleOutlineIcon />
            買家資訊
          </div>
          <EastIcon />
          <div style={shoppingStateComponent}>
            <RemoveCircleOutlineIcon />
            訂單明細
          </div>
        </div>
      </div>
      <div style={ProductionTitle}>
        <div style={ProductionTitleContainer}>
          <div style={ProductionTitleComponent}>產品編號</div>
          <div style={ProductionTitleComponentInfo}>商品資訊</div>
          <div style={ProductionTitleComponent}>單價</div>
          <div style={ProductionTitleComponent}>數量</div>
          <div style={ProductionTitleComponent}>小計</div>
          <div style={ProductionTitleComponent}>刪除</div>
        </div>
      </div>
      <div style={ProductionList}>
        <div style={ProductionListContainer}>
          <div style={ProductionListComponent}>1</div>
          <div style={ProductionListComponent}>photo</div>
          <div style={ProductionListComponent}>detail</div>
          <div style={ProductionListComponent}>3000</div>
          <div style={ProductionListComponent}>
            <RemoveIcon></RemoveIcon>
            <input type="number" style={{ width: '50px' }} />
            <AddIcon></AddIcon>
          </div>
          <div style={ProductionListComponent}>amount</div>
          <div style={ProductionListComponent}>
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
      <div style={count}>
        <div style={countContainer}>
          <div style={ProductionListComponent}>總計</div>
          <div style={ProductionListComponent}></div>
          <div style={ProductionListComponent}></div>
          <div style={ProductionListComponent}></div>
          <div style={ProductionListComponent}>總共N件</div>
          <div style={ProductionListComponent}>15000</div>
          <div style={ProductionListComponent}>NTD </div>
        </div>
      </div>
      <div style={checkButton}>
        <div style={checkButtonContainer}>
          {/* button樣式尚未處理 */}
          <Button variant="outlined">返回商城</Button>
          <Button variant="outlined">確認購買</Button>
        </div>
      </div>
    </>
  );
}
