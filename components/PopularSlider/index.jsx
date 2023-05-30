import React, { useRef, useState } from "react";
import styles from "./PopularSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SliderComponent from './../sliderComponent/index';

const PopSlider = () => {
  return (
    <div className={styles.PopSlider}>
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      modules={[Pagination]}
      grabCursor={true}
      className="mySwiper"
    >
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
      <SwiperSlide><SliderComponent/></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default PopSlider