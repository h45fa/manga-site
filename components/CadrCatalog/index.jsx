import Image from 'next/image'
import React from 'react'
import hgImg from '../../public/Frame630.png'
import styles from './CadrCatalog.module.scss';

const CardCatalog = () => {
  return (
    <div className={styles.CardCatalog}>
        <Image src={hgImg} width={200} height={304} alt='alt'/>
        <div>
            <h3>Выбери меня! </h3>
            <span>Маньхуа, 2023</span>
        </div>
    </div>
  )
}

export default CardCatalog