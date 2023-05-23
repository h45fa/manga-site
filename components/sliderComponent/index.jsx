import Image from 'next/image'
import React from 'react'
import exampleImg from "../../public/SliderComponentExample.jpg"
//styles
import styles from "./SliderComponent.module.scss"

const SliderComponent = () => {
  return (
    <div className={styles.SliderComponent}>
        <Image src={exampleImg} width={224} height={353} alt='Slider Example Img'/>
        <h3>Выбери меня!</h3>
        <span>Маньхуа, 2023</span>
    </div>
  )
}

export default SliderComponent