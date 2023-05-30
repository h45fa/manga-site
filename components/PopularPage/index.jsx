import React from 'react'
import styles from "./PopularPage.module.scss"
import PopularComponent from '../PopularComponentsPage'

const PopularPage = () => {
  return (
    <div className={styles.PopularPage}>
        <div className={styles.PopularPageHeader}>
            <h2>Популярне</h2>
            <button>За цей місяц</button>
        </div>
        <div className={styles.PopularPageBtns}>
            <button>Усі жанри</button>
            <button>Ісекай</button>
            <button>Фантастика</button>
            <button>Романтика</button>
            <button>Детектив</button>
            <button>Драма</button>
            <button>Фентезі</button>
            <button>Містика</button>
            <button>Пригоди </button>
        </div>
        <div className={styles.PopularPageC}>
            <PopularComponent/>
            <PopularComponent/>
            <PopularComponent/>
            <PopularComponent/>
            <PopularComponent/>
            <PopularComponent/>
        </div>
    </div>
  )
}

export default PopularPage