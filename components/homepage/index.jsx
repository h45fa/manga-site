"use client";

import React from "react";
import styles from "./Homepage.module.scss";
import HeaderSlider from "../HeaderSlider";
import HeaderSliderNew from "../HeaderSliderNew";
import HeaderSliderToDay from "../HeaderSliderToDay";
import LastUpdate from "../LastUpdate";
import ULikeSlider from "../ULikeSlider";

const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <HeaderSlider/>
      <HeaderSliderNew/>
      <HeaderSliderToDay/>
      <LastUpdate/>
      <ULikeSlider/>
    </div>
  );
};

export default Homepage;
