import React from 'react';
import CUICard from '../customUI/cui-card';
import styles from '@/styles/product.module.css';
import CUIButton from '../customUI/cui-button';
import { Rating, Typography } from '@mui/material';

export default function productCard() {
  return (
    <>
      <div className={`${styles['product-card-section']}`}>
        <div className={`${styles['BigCard']}`}>
          <CUICard className={`${styles['BigCard2']}`}>
            <div className={`${styles['Card']}`}>
              <img
                className={`${styles['img-bigCard']}`}
                src="http://localhost:3000/p-imgs/KALENJI_RUN_JF500_1_W_SHOES_GREY_PINK_2.webp"
              />

              <div className={`${styles['BigCardText']}`}>
                炎炎夏日 透心涼感衣上市中
              </div>
              <CUIButton className={`${styles['CardButtons']}`}>
                了解詳情
              </CUIButton>
            </div>
          </CUICard>
        </div>
        <div className={`${styles['Cardcontainer']}`}>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
        </div>
      </div>
      <div className={`${styles['product-card-section2']}`}>
        <div className={`${styles['BigCard']}`}>
          <CUICard className={`${styles['BigCard2']}`}>
            <div className={`${styles['Card']}`}>
              <img
                className={`${styles['img-bigCard']}`}
                src="http://localhost:3000/p-imgs/KALENJI_RUN_JF500_1_W_SHOES_GREY_PINK_2.webp"
              />

              <div className={`${styles['BigCardText']}`}>
                炎炎夏日 透心涼感衣上市中
              </div>
              <CUIButton className={`${styles['CardButtons']}`}>
                了解詳情
              </CUIButton>
            </div>
          </CUICard>
        </div>
        <div className={`${styles['Cardcontainer']}`}>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
        </div>
      </div>
      <div className={`${styles['product-card-section']}`}>
        <div className={`${styles['BigCard']}`}>
          <CUICard className={`${styles['BigCard2']}`}>
            <div className={`${styles['Card']}`}>
              <img
                className={`${styles['img-bigCard']}`}
                src="http://localhost:3000/p-imgs/KALENJI_RUN_JF500_1_W_SHOES_GREY_PINK_2.webp"
              />

              <div className={`${styles['BigCardText']}`}>
                炎炎夏日 透心涼感衣上市中
              </div>
              <CUIButton className={`${styles['CardButtons']}`}>
                了解詳情
              </CUIButton>
            </div>
          </CUICard>
        </div>
        <div className={`${styles['Cardcontainer']}`}>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
          <div className={`${styles['Cardcontainer2']}`}>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
            <CUICard className={`${styles['smallCard']}`}>
              <div className={`${styles['product-img-container']}`}>
                <img src="http://localhost:3000/p-imgs/st0010102.jpg" />
              </div>
              <div className={`${styles['product-content-container']}`}>
                <div className={`${styles['product-title']}`}>
                  <Typography variant="h6">
                    男士透氣快乾跑步短袖上衣 RUN DRY
                  </Typography>
                </div>
                <div className={`${styles['product-price']}`}>
                  <Typography variant="h6">450</Typography>
                </div>
              </div>
              <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <div className={`${styles['CardButtonContainer']}`}>
                <CUIButton className={`${styles['smallCardButton']}`}>
                  加入購物車
                </CUIButton>
              </div>
            </CUICard>
          </div>
        </div>
      </div>
    </>
  );
}
