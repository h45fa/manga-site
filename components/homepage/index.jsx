"use client";

import React from "react";
import HeaderSlider from "../HeaderSlider";
import Header from "@/components/header";
import styles from "./Homepage.module.scss";
import "./swiperstyle.css";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <Header />
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homepage;
