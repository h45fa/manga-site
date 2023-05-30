import React from 'react'
import styles from "./LastUpdate.module.scss"
import PopularComponentHomePage from '../PopularComponentHomePage'
const LastUpdate = () => {
  return (
    <div className={styles.LastUpdate}>
        <div className={styles.LastUpdateHeader}>
            <h3 className={styles.LastUpdateTitle}>Останні оновлення</h3>
            <button>Тільки мої закладки</button>
        </div>
        <div className={styles.LastUpdateMain}>
            <PopularComponentHomePage/>
            <PopularComponentHomePage/>
            <PopularComponentHomePage/>
            <PopularComponentHomePage/>
            <PopularComponentHomePage/>
        </div>
        <button className={styles.LoadNew}>Показати всі оновлення</button>
    </div>
  )
}

export default LastUpdate