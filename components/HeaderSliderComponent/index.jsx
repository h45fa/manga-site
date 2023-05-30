import React from "react";
import styles from "./HeaderSlider.module.scss";
const HeaderSliderComponent = () => {
  return (
    <div className={styles.HeaderSlider}>
      <div>
        <h2>Выбери меня!</h2>
        <p>
          От студии, создавшей «Поднятие Уровня в одиночку», «Возвращение героя
          уровня катастрофы» и Всеведущий читатель». «Выбери меня!» – мобильная
          гача, известная невероятной сложностью. Хан Со Джин, один из пяти
          сильнейших "мастеров" мира, теряет сознание во время прохождения
          особого подземелья, а просыпается уже в теле 1-звёздочного персонажа
          по имени Хан Ислат под управлением другого игрока.
        </p>
        <button>Читати</button>
      </div>
    </div>
  );
};

export default HeaderSliderComponent;
