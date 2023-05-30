import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ULikeSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ULikeComponent from "./../YouLikeComponent/index";

const ULikeSlider = () => {
  return (
    <div className={styles.ULikeSlider}>
      <h2 className={styles.ULikeTitle}>Вам сподобається</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <ULikeComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ULikeSlider;
