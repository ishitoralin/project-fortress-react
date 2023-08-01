import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/product.module.css';

// Import Swiper styles
import 'swiper/css';

export default function Index() {
  return (
    <>
      {/* <div className={`${styles['mySwipermodil']}`}>
        <div className={`${styles['img-wrappermodil']}`}>
          <img
            alt="1"
            src="http://localhost:3000/p-imgs/Home_page_Banner_Desktop_not_cut_9.jpg"
          />
        </div>
        <div className={`${styles['img-wrappermodil']}`}>
          <img
            alt="2"
            src="http://localhost:3000/p-imgs/NABAIJI_Planche_natation_enfants_PE20.jpg"
          />
        </div>
        <div className={`${styles['img-wrappermodil']}`}>
          <img
            alt="3"
            src="http://localhost:3000/p-imgs/tennis-6038094_1280.jpg "
          />
        </div>
      </div> */}
      <Swiper
        Autoplay={{ delay: 2500, disableOnInteraction: true }}
        className={`${styles['mySwiper']}`}
      >
        <SwiperSlide className={`${styles['img-wrapper']}`}>
          <img
            alt="1"
            src="http://localhost:3000/p-imgs/Home_page_Banner_Desktop_not_cut_9.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles['img-wrapper']}`}>
          <img
            alt="2"
            src="http://localhost:3000/p-imgs/NABAIJI_Planche_natation_enfants_PE20.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={`${styles['img-wrapper']}`}>
          <img
            alt="3"
            src="http://localhost:3000/p-imgs/tennis-6038094_1280.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// const Carouselimg1 = [
//   <img src="http://localhost:3000/p-imgs/Home_page_Banner_Desktop_not_cut_9.jpg" />,
// ];
// const Carouselimg2 = [
//   <img src="http://localhost:3000/p-imgs/NABAIJI_Planche_natation_enfants_PE20.jpg" />,
// ];
// const Carouselimg3 = [
//   <img src="http://localhost:3000/p-imgs/tennis-6038094_1280.jpg" />,
// ];

// export default function CUICarousel(props) {
//   var items = [{ Carouselimg1 }, { Carouselimg2 }, { Carouselimg3 }];

//   return (
//     <Carousel>
//       {items.map((item, i) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//   );
// }

// function Item(props) {
//   return (
//     <Paper>
//       {props.item.Carouselimg1}
//       {props.item.Carouselimg2}
//       {props.item.Carouselimg3}

//       {/* <Button className="CheckButton">
//                 Check it out!
//             </Button> */}
//     </Paper>
//   );
// }
