import styles from './shoppingcart.module.css';
//Import Icon
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EastIcon from '@mui/icons-material/East';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//Import Icon

//Import button
import Button from '@mui/material/Button';
import createColorTheme from '@/libs/CreateColorTheme';
//Import button

//import Card
import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
//import Card

const WhiteTheme = createColorTheme('#FFF');
const RedTheme = createColorTheme('#FF0000');
export default function ShoppingCart(props) {
  const fakeDataForCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fakeDataForCart = {
    products: [
      {
        id: '1',
        photo: 'photo',
        name: '緊身衣',
        detail: 'abavafdasfewweg gewaef gre',
        price: '3000',
        quantity: '1',
        amount: '3000',
      },
      {
        id: '2',
        photo: 'photo',
        name: '布偶裝',
        detail: 'abavafdasfewweg gewaef gre',
        price: '2000',
        quantity: '2',
        amount: '4000',
      },
    ],
  };
  // 各區塊範圍(寬滿版，pd200px)
  const sessionContainer = {
    width: '100%',
    padding: '0 200px',
  };

  // 購買狀態物件容器
  const shoppingStateContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '2px solid #000000',
  };
  // 購買狀態物件
  const shoppingStateComponent = {
    width: '33%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  // 購物車產品標題物件容器
  const ProductionTitleContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #000',
    fontSize: '25px',
  };
  // 購物車產品物件1
  const ProductionTitleComponent = {
    width: '14%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  // 購物車產品物件2(詳細資訊欄專用)
  const ProductionTitleComponentInfo = {
    width: '28%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // 待結帳產品列表範圍容器
  const ProductionListContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    fontSize: '25px',
  };

  // 待結帳產品列表物件
  const ProductionListComponent = {
    width: '14%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // 待結帳產品列表物件(數量欄專用)
  const ProductionListComponentForQuantity = {
    width: '14%',
    height: '100px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '2px solid red',
  };

  // 結帳欄容器
  const countContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  };
  //結帳欄物件
  const countComponent = {
    width: '14%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const checkButtonContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonComponent = {
    width: '15%',
    height: '100px',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const spatialProductContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    fontSize: '50px',
    fontWeight: '700',
  };

  const recommendProductTitle = {
    width: '100%',
    height: '100px',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: '28px',
  };
  const recommendProductContainer = {
    width: '100%',
    display: 'flex',
    overflow: 'scroll',
    justifyContent: 'start',
    alignItems: 'center',
  };

  const recommendProductComponent = {
    // width: '345px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <div style={sessionContainer}>
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
      <div style={sessionContainer}>
        <div style={ProductionTitleContainer}>
          <div style={ProductionTitleComponent}>產品編號</div>
          <div style={ProductionTitleComponentInfo}>商品資訊</div>
          <div style={ProductionTitleComponent}>單價</div>
          <div style={ProductionTitleComponent}>數量</div>
          <div style={ProductionTitleComponent}>小計</div>
          <div style={ProductionTitleComponent}>刪除</div>
        </div>
      </div>
      {/* 商品列表start，之後用fetch從DB抓資料 */}
      <div style={sessionContainer}>
        {fakeDataForCart.products.map((v, i) => {
          return (
            <div style={ProductionListContainer} key={i}>
              <div style={ProductionListComponent}>{v.id}</div>
              <div style={ProductionListComponent}>{v.photo}</div>
              <div style={ProductionListComponent}>{v.detail}</div>
              <div style={ProductionListComponent}>{v.price}</div>
              <div style={ProductionListComponentForQuantity}>
                <RemoveIcon></RemoveIcon>
                <input
                  type="number"
                  className={`${styles.inputHideAdjustButton} ${styles.buttonWidth}`}
                  value={v.quantity}
                />
                <AddIcon></AddIcon>
              </div>
              <div style={ProductionListComponent}>{v.price * v.quantity}</div>
              <div style={ProductionListComponent}>
                <DeleteOutlineIcon />
              </div>
            </div>
          );
        })}
      </div>
      {/* 商品列表end，之後用fetch從DB抓資料 */}
      <div style={sessionContainer}>
        <div style={countContainer}>
          <div style={countComponent}>總計</div>
          <div style={countComponent}></div>
          <div style={countComponent}></div>
          <div style={countComponent}></div>
          <div style={countComponent}>總共N件</div>
          <div style={countComponent}>15000</div>
          <div style={countComponent}>NTD </div>
        </div>
      </div>
      <div style={sessionContainer}>
        <div style={checkButtonContainer}>
          <div style={checkButtonComponent}>
            <WhiteTheme>
              <Button
                sx={{
                  width: '100%',
                  ':hover': {
                    opacity: '.7',
                    bgcolor: 'var(--light-gray2)',
                  },
                }}
                variant="contained"
                onClick={props.onClick}
              >
                返回首頁
              </Button>
            </WhiteTheme>
          </div>
          <div style={checkButtonComponent}>
            <RedTheme>
              <Button
                sx={{
                  width: '100%',
                  ':hover': {
                    opacity: '.7',
                    bgcolor: 'var(--main-red)',
                  },
                }}
                // color={props.color}
                variant="contained"
                onClick={props.onClick}
              >
                確認購買
              </Button>
            </RedTheme>
          </div>
        </div>
      </div>
      <div style={sessionContainer}>
        <div style={spatialProductContainer}>精選商品</div>
      </div>
      <div style={sessionContainer}>
        <div style={recommendProductTitle}>本季新品!!!</div>
        <div style={recommendProductContainer}>
          {fakeDataForCards.map((v, i) => {
            return (
              <div style={recommendProductComponent} key={i}>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {v}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
        <div style={recommendProductTitle}>推薦商品!!!</div>
        <div style={recommendProductContainer}>
          {fakeDataForCards.map((v, i) => {
            return (
              <div style={recommendProductComponent} key={i}>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {v}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
        <div style={recommendProductTitle}>熱門商品!!!</div>
        <div style={recommendProductContainer}>
          {fakeDataForCards.map((v, i) => {
            return (
              <div style={recommendProductComponent} key={i}>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {v}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
