import Link from "next/link";
import React from "react";
import Image from 'next/image';
//Image
import Search from "../../public/Search.svg";
import bookmark from "../../public/Bookmark.svg";
import Notification from "../../public/Notification.svg";
import Profile from "../../public/Profile.svg";
//Style
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <h1><Link href="/">Kavun<span>Chan</span></Link></h1>
        <ul>
          <li>
            <Link href="/">Каталог</Link>
          </li>
          <li>
            <Link href="/">Новинки</Link>
          </li>
          <li>
            <Link href="/">Популярне</Link>
          </li>
        </ul>
      </div>
      <div className={styles.header_right}>
        <button className={styles.searchButton}>Пошук <Image src={Search} width={24} height={24} alt="alt"/></button>
        <ul>
          <li>
            <Link href="/"><Image src={bookmark} width={24} height={24} alt="bookmark"/></Link>
          </li>
          <li>
            <Link href="/"><Image src={Notification} width={24} height={24} alt="Notification"/></Link>
          </li>
          <li>
            <button><Image src={Profile} width={24} height={24} alt="Profile"/></button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
