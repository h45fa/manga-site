"use client";
import React from 'react';
import HeaderSliderComponent from "../HeaderSliderComponent";
import "./swiperstyle.css";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const HeaderSlider = () => {
  return (
    <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderComponent />
        </SwiperSlide>
      </Swiper>
  )
}

export default HeaderSlider