import React from 'react'
import PopSlider from '../PopularSlider'
import styles from "./HeaderSliderToDay.module.scss"

const HeaderSliderToDay = () => {
  return (
    <div className={styles.HeaderSliderToDay}>
        <h3 className={styles.HeaderSTitle}>Популярніше за сьогодні</h3>
        <PopSlider/>
    </div>
  )
}

export default HeaderSliderToDay