import { Title } from '@mui/icons-material';
import styles from './shoppingcart.module.css';

export default function ShoppingCart() {
  const shoppingState = {
    border: '2px solid red',
    width: '100%',
    height: '150px',
    display: 'flex',
  };

  return (
    <div style={shoppingState}>
      <div className={styles.words}>訂單確認</div>
      <div>買家資訊</div>
      <div>訂單明細</div>
    </div>
  );
}
