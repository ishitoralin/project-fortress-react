import React, { Component } from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class AdaptiveHeight extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="http://localhost:3000/p-imgs/Home_page_Banner_Desktop_not_cut_9.jpg" />
          </div>
          <div>
            <img src="http://localhost:3000/p-imgs/NABAIJI_Planche_natation_enfants_PE20.jpg" />
          </div>
          <div>
            <img src="http://localhost:3000/p-imgs/tennis-6038094_1280.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
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
