import Link from "next/link";
import React from "react";
import Image from 'next/image';
//styles
import styles from "./Footer.module.scss"
//img
import instagram from "../../public/instagram.svg";
import discord from "../../public/discord.svg";
import telegram from "../../public/telegram.svg";
import tiktok from "../../public/tiktok.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main}>
        <h2>
          <Link href="/">
            Kavun<span>Chan</span>
          </Link>
        </h2>
        <div className={styles.footer_grid_1}>
          <h3>Розділи</h3>
          <ul>
            <li>Каталог</li>
            <li>Популярне</li>
            <li>Новинки</li>
            <li>Пошук</li>
          </ul>
        </div>
        <div className={styles.footer_grid_2}>
          <h3>Інформація</h3>
          <ul>
            <li>Правила сайту</li>
            <li>DMCA</li>
            <li>Copyright</li>
            <li>Повернення коштів</li>
            <li>Правила публікації</li>
          </ul>
        </div>
        <div className={styles.footer_grid_3}>
          <h3>Техпідтримка</h3>
          <span>Задати питання!</span>
        </div>
        <div className={styles.footer_grid_4}>
          <h3>Контакти</h3>
          <ul>
            <li><Image src={instagram} width={35} height={35} alt="instagram"/></li>
            <li><Image src={discord} width={35} height={35} alt="discord"/></li>
            <li><Image src={telegram} width={35} height={35} alt="telegram"/></li>
            <li><Image src={tiktok} width={35} height={35} alt="tiktok"/></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
