"use client";
import React, { useState } from "react";
import styles from "./Dropdown1.module.scss";
const Dropdown1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const opinions = ["Улюблене", "Читаю", "Буду читати", "Кинуто", "Прибрати із закладок"];
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown_btn}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {opinions.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={styles.dropdown_item}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
