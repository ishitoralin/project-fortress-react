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
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '2px solid #000000',
  };
  // 購買狀態物件
  const shoppingStateComponent = {
    width: '33%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  // 購物車產品標題範圍
  const ProductionTitle = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };
  // 購物車產品標題物件容器
  const ProductionTitleContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #000',
    fontSize: '25px',
  };
  // 購物車產品物件1
  const ProductionTitleComponent = {
    width: '14%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  // 購物車產品物件2(加大範圍)
  const ProductionTitleComponentInfo = {
    width: '28%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // 待結帳產品列表範圍
  const ProductionList = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  // 待結帳產品列表範圍容器
  const ProductionListContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
    fontSize: '25px',
  };

  // 待結帳產品列表物件
  const ProductionListComponent = {
    width: '14%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  // 待結帳產品列表物件(數量欄專用)
  const ProductionListComponentForQuantity = {
    width: '14%',
    height: '100%',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '2px solid red',
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
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '25px',
    borderBottom: '1px solid rgba(0,0,0,0.15)',
  };

  const countComponent = {
    width: '14%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const checkButton = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const checkButtonComponent = {
    width: '15%',
    height: '100%',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  };

  const spatialProduct = {
    width: '100%',
    height: '100px',
    padding: '0 200px',
    display: 'flex',
    // flexWarp: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const spatialProductContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    fontSize: '50px',
    fontWeight: '700',
  };

  const recommendProduct = {
    width: '100%',
    // height: '100px',
    padding: '0 200px',
    display: 'flex',
    // flexWarp: 'wrap',
    // overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '2px solid red',
  };
  const recommendProductContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center',
    border: '2px solid red',
  };

  const recommendProductComponent = {
    width: '345px',
    // height: '400px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

      {/* 商品列表start，之後用fetch從DB抓資料 */}
      <div style={ProductionList}>
        <div style={ProductionListContainer}>
          <div style={ProductionListComponent}>1</div>
          <div style={ProductionListComponent}>photo</div>
          <div style={ProductionListComponent}>detail</div>
          <div style={ProductionListComponent}>3000</div>
          <div style={ProductionListComponentForQuantity}>
            <RemoveIcon></RemoveIcon>
            <input
              type="number"
              className={`${styles.inputHideAdjustButton} ${styles.buttonWidth}`}
            />
            <AddIcon></AddIcon>
          </div>
          <div style={ProductionListComponent}>amount</div>
          <div style={ProductionListComponent}>
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
      {/* 商品列表end，之後用fetch從DB抓資料 */}

      <div style={count}>
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
      <div style={checkButton}>
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
      <div style={spatialProduct}>
        <div style={spatialProductContainer}>精選商品</div>
      </div>
      <div style={recommendProduct}>
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
