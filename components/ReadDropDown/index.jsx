import React, { useState } from "react";
import styles from "./ReadDropDown.module.scss";
const ReadDropDown = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className={isActive ? styles.dropdown : ""}>
      <button
        className={styles.AddToFavorite}
        onClick={() => setIsActive(!isActive)}
      >
        <span className={styles.favContainer}>
          <span className={styles.favText}>
            Додати до закладок{" "}
            <span className={styles.favSvg}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1648 18.6319L6.23346 21.8813C5.75989 22.1274 5.17646 21.9532 4.91538 21.4877V21.4877C4.83985 21.3435 4.7991 21.1836 4.79639 21.0209V6.62271C4.79639 3.87672 6.67282 2.77832 9.37305 2.77832H15.7163C18.3341 2.77832 20.293 3.80349 20.293 6.43965V21.0209C20.293 21.2806 20.1898 21.5298 20.0061 21.7134C19.8224 21.8971 19.5733 22.0003 19.3135 22.0003C19.1479 21.9977 18.985 21.9569 18.8376 21.8813L12.8696 18.6319C12.6497 18.5131 12.3847 18.5131 12.1648 18.6319Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </span>
        </span>
      </button>
      {isActive && (
        <ul className={styles.dropdown_content}>
          <li className={styles.dropdown_item}>Улюблене</li>
          <li className={styles.dropdown_item}>Читаю</li>
          <li className={styles.dropdown_item}>Буду читати</li>
          <li className={styles.dropdown_item}>Кинуто</li>
        </ul>
      )}
    </div>
  );
};

export default ReadDropDown;
