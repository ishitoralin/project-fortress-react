import styles from './shoppingcart.module.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
export default function ShoppingCart() {
  const shoppingState = {
    // border: '2px solid rgb(63, 141, 218)',
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleContainer = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid #000000',
  };

  const titleComponent = {
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
  };

  const countContainer = {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };
  return (
    <>
      <div className={`${styles.shoppingState}`}>
        <div style={titleContainer}>
          <div style={titleComponent}>
            <CheckCircleOutlineIcon />
            訂單確認
          </div>
          <EastIcon />
          <div style={titleComponent}>
            <RemoveCircleOutlineIcon />
            買家資訊
          </div>
          <EastIcon />
          <div style={titleComponent}>
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
          <div style={ProductionComponent}></div>
          <div style={ProductionComponent}>NTD </div>
        </div>
      </div>
    </>
  );
}
