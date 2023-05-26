import Image from "next/image";
import React from "react";
import popImg from "./popularImg.png"
import styles from "./PopularComponent.module.scss";
const PopularComponent = () => {
  return (
    <div className={styles.PopularComponent}>
      <Image src={popImg} width={232} height={308} alt="" />
      <div className={styles.popInside}>
        <h3>Выбери меня!</h3>
        <div>
          <button>Ісекай</button>
          <button>Фантастика</button>
          <button>Романтика</button>
          <button>Детектив</button>
          <button>Драма</button>
          <button>Фентезі</button>
        </div>
        <p>
          От студии, создавшей «Поднятие Уровня в одиночку», «Возвращение героя
          уровня катастрофы» и Всеведущий читатель». «Выбери меня!» – мобильная
          гача, известная невероятной сложностью. Хан Со Джин, один из пяти
          сильнейших "мастеров" мира, теряет сознание во время прохождения
          особого подземелья, а просыпается уже в теле 1-звёздочного персонажа
          по имени Хан Ислат под управлением другого игрока.
        </p>
      </div>
    </div>
  );
};

export default PopularComponent;
