import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Datos from './datos'
export default function App() {
  return (
    <>
    <div class="carousel">

    <div className="carousel_text">
    <h2> Trips that our users prefer</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
    
    </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper" >

        {Datos.map(evento =>

        <SwiperSlide>
        <div>
          <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
          <div className="carousel_detail">   
          <h3>{evento.name}</h3>
          <p>{evento.ciudad}</p>
        </div></div>
       
     
        </SwiperSlide>
        
          )}
      
      </Swiper>
     
      </div>
    </>
  );
}
