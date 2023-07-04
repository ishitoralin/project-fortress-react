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
  const shoppingState = {
    // border: '2px solid rgb(63, 141, 218)',
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const shoppingStateContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid #000000',
  };

  const shoppingStateComponent = {
    width: '490px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  const ProductionTitle = {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const ProductionContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #000',
    fontSize: '25px',
  };
  const ProductionComponent = {
    width: '217px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const ProductionComponentInfo = {
    width: '434px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const ProductionListContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    fontSize: '25px',
  };

  const count = {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid red',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonContainer = {
    border: '2px solid red',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
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
        <div style={ProductionContainer}>
          <div style={ProductionComponent}>產品編號</div>
          <div style={ProductionComponentInfo}>商品資訊</div>
          <div style={ProductionComponent}>單價</div>
          <div style={ProductionComponent}>數量</div>
          <div style={ProductionComponent}>小計</div>
          <div style={ProductionComponent}>刪除</div>
        </div>
      </div>
      <div style={ProductionTitle}>
        <div style={ProductionListContainer}>
          <div style={ProductionComponent}>1</div>
          <div style={ProductionComponent}>photo</div>
          <div style={ProductionComponent}>detail</div>
          <div style={ProductionComponent}>3000</div>
          <div style={ProductionComponent}>
            <RemoveIcon></RemoveIcon>
            <input type="number" style={{ width: '50px' }} />
            <AddIcon></AddIcon>
          </div>
          <div style={ProductionComponent}>amount</div>
          <div style={ProductionComponent}>
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
      <div style={count}>
        <div style={countContainer}>
          <div style={ProductionComponent}>總計</div>
          <div style={ProductionComponentInfo}></div>
          <div style={ProductionComponent}></div>
          <div style={ProductionComponent}>總共N件</div>
          <div style={ProductionComponent}>15000</div>
          <div style={ProductionComponent}>NTD </div>
        </div>
      </div>
      <div style={checkButton}>
        <div style={checkButtonContainer}>
          <div style={ProductionComponent}>
            <Button variant="outlined">返回商城</Button>
          </div>
          <div style={ProductionComponent}>
            <Button variant="outlined">確認購買</Button>
          </div>
        </div>
      </div>
    </>
  );
}
