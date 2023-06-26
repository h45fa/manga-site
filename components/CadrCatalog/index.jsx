import Image from 'next/image'
import React from 'react'
import hgImg from '../../public/Frame630.png'
import styles from './CadrCatalog.module.scss';

const CardCatalog = () => {
  return (
    <div className={styles.CardCatalog}>
        <Image src={hgImg} width={200} height={304} alt='alt' className={styles.CardCImg}/>
        <div className={styles.CardC_div}>
            <h3 className={styles.CardC_h3}>Выбери меня! </h3>
            <span className={styles.CardC_span}>Маньхуа, 2023</span>
        </div>
    </div>
  )
}

export default CardCatalog