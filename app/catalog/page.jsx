"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./Catalog.module.scss";
import React from "react";
import MultiDropdown from "@/components/CategorySelect";
import DropdownSelectButton from "@/components/DropdownSelectButton";
import CardCatalog from "@/components/CadrCatalog";
const Catalog = () => {
  return (
    <>
      <Header />
      <div className={styles.UseleStyle}>
        <div className={styles.Catalog}>
          <div className={styles.Filters}>
            <div className={styles.FFilter}>
              <h3>Фільтри</h3>
              <button>Очистити</button>
            </div>
            <div className={styles.TFilter}>
              <MultiDropdown />
              <MultiDropdown />
            </div>
            <div className={styles.SFilter}>
              <h3>Оцінка</h3>
              <div className={styles.Ocinka}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
              </div>
              <div className={styles.SFilter_Filters}>
                <MultiDropdown />
                <MultiDropdown />
                <MultiDropdown />
              </div>
            </div>
            <div className={styles.LFilter}>
              <h3>Вилучити</h3>
                <MultiDropdown />
                <MultiDropdown />
                <MultiDropdown />
            </div>
          </div>
          <div className={styles.Cards}>
            <div className={styles.CHeader}>
              <h3>Каталог</h3>
              <DropdownSelectButton/>
            </div>
            <div className={styles.CMain}>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
              <CardCatalog/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
