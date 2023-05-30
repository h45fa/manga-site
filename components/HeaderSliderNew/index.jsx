import React from 'react'
import PopSlider from '../PopularSlider'
import styles from "./HeaderSliderNew.module.scss"
const HeaderSliderNew = () => {
  return (
    <div className={styles.HeaderSliderToDay}>
        <div>
            <h3 className={styles.HSTDTITLE}>Новеньке</h3>
            <div className={styles.btns}>
                <button>Романтика</button>
                <button>Ісекай</button>
                <button>Фантастика</button>
                <button>Комедія</button>
            </div>
            <button className={styles.dropdownBTN}>Популярне</button>
        </div>
        <PopSlider/>
    </div>
  )
}

export default HeaderSliderNew