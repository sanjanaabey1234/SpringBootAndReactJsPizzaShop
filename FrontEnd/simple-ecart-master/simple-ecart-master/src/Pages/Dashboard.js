import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../images/slide1.jpg";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide2 from "../images/slide2.png";
import slide11 from "../images/slide11.jpg";
import '../styles/Dashboard.css';

import pizza1 from "../images/pizza1.jpg";
import pizza4 from "../images/pizza4.jpeg";
import pizza3 from "../images/pizza3.jpeg";
import pizza5 from "../images/pizza5.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Home() {
  return (
    <div>
       <Swiper
  
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
  <SwiperSlide><img src={slide1} className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  <SwiperSlide><img src={slide11} className="App-logo" alt="logo" height="500px" width="10px" /></SwiperSlide>
  <SwiperSlide><img src={slide3} className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  <SwiperSlide><img src="" className="App-logo" alt="logo" height="500px" width="1px" /></SwiperSlide>
  <SwiperSlide><img src={slide4} className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  <SwiperSlide><img src=" " className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  <SwiperSlide><img src={slide2} className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  <SwiperSlide><img src=" " className="App-logo" alt="logo" height="500px" width="700px" /></SwiperSlide>
  ...
</Swiper>

<div className="container">
<div className="box">
  <div className="imgBx">
    <img src={pizza1} className="App-logo" alt="logo" height="500px" width="700px" />
  </div>
  <div className="content">
    <div>
      <h2>BEST PIZZA</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
      </p>
    </div>
  </div>
</div>
<div className="box">
  <div className="imgBx">
    <img src={pizza3} className="App-logo" alt="logo" height="500px" width="700px" />
  </div>
  <div className="content">
    <div>
      <h2>BEST RESTURANTS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
      </p>
    </div>
  </div>
</div>
<div className="box">
  <div className="imgBx">
    <img src={pizza4} className="App-logo" alt="logo" height="500px" width="700px" />
  </div>
  <div className="content">
    <div>
      <h2>BEST DELIVERY</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
      </p>
    </div>
  </div>
</div>
<div className="box">
  <div class="imgBx">
    <img src={pizza5} className="App-logo" alt="logo" height="500px" width="700px" />
  </div>
  <div className="content">
    <div>
      <h2>BEST CHEF</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
      </p>
    </div>
  </div>
</div>
</div>

    </div>
  )
}
