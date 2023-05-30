import Image from "next/image";
import React from "react";
import popImg from "../../public/PopularImg.png";
import styles from "./PopularComponent.module.scss";
const PopularComponentHomePage = () => {
  return (
    <div className={styles.PopularComponent}>
      <div className={styles.popularImg}>
        <Image src={popImg} width={250} height={360} alt="alt" />
      </div>
      <div className={styles.popularMain}>
        <div className={styles.popularCategory}>
          <h3>Маньхва</h3>
          <span>10.06.2022 | 14:25</span>
        </div>
        <div className={styles.popularName}>
          <h3>Голодные игры</h3>
          <span>Hungrу Games</span>
        </div>
        <ul className={styles.popularUl}>
          <li>
            Том 1<span>Розділ 876</span>
            <span>Великая герцогиня Севера оказалась бывшей злодейкой</span>
          </li>
          <li>
            Том 1<span>Розділ 876</span>
            <span>Великая герцогиня Севера оказалась бывшей злодейкой</span>
          </li>
          <li>
            Том 1<span>Розділ 876</span>
            <span>Великая герцогиня Севера оказалась бывшей злодейкой</span>
          </li>
        </ul>
        <button className={styles.loadMore}>+Ще 5 розділів</button>
      </div>
    </div>
  );
};

export default PopularComponentHomePage;
