"use client";

import React from "react";
import styles from "./Homepage.module.scss";
import HeaderSlider from "../HeaderSlider";
import HeaderSliderNew from "../HeaderSliderNew";
import HeaderSliderToDay from "../HeaderSliderToDay";

const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <HeaderSlider/>
      <HeaderSliderNew/>
      <HeaderSliderToDay/>
    </div>
  );
};

export default Homepage;
