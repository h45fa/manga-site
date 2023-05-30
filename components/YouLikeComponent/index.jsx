import Image from 'next/image'
import React from 'react'
import styles from "./YouLikeComponent.module.scss"
import ulikeImg from "./ULikeImg.jpg"
const ULikeComponent = () => {
  return (
    <div className={styles.ULikeComponent}>
        <Image width={150} height={200} src={ulikeImg} alt=""/>
        <div className={styles.ULikeText}>
            <h3 className={styles.UlikeTitle}>Поднятие уровня с мечом</h3>
            <p className={styles.UlikeP}>«Выбери меня!» – мобильная гача, известная невероятной сложностью. Хан Со Джин, один из пяти сильнейших "мастеров" мира, теряет сознание во время прохождения особого подземелья, а...</p>
            <span className={styles.UlikeSpan}>Маньхуа, 2023</span>
        </div>
    </div>
  )
}

export default ULikeComponent