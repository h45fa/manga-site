"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./Catalog.module.scss";
import React, { useState } from "react";
import CategorySelect from "@/components/CategorySelect";
import MultiDropdown from "@/components/CategorySelect";
const Catalog = () => {
  
  // const options = [
  //   { value: "Апокаліпсис", label: "Апокаліпсис" },
  //   { value: "Ваншот", label: "Ваншот" },
  //   { value: "Вестерн", label: "Вестерн" },
  //   { value: "Героїчне фентезі", label: "Героїчне фентезі" },
  //   { value: "Готика", label: "Готика" },
  //   { value: "Деменція", label: "Деменція" },
  //   { value: "Детектив", label: "Детектив" },
  //   { value: "Джьосей", label: "Джьосей" },
  //   { value: "Доджінші", label: "Доджінші" },
  //   { value: "Драма", label: "Драма" },
  //   { value: "Екшн", label: "Екшн" },
  //   { value: "Еротика", label: "Еротика" },
  //   { value: "Еччі", label: "Еччі" },
  //   { value: "Жахи", label: "Жахи" },
  //   { value: "Ісекай", label: "Ісекай" },
  //   { value: "Історія", label: "Історія" },
  //   { value: "Йонкама", label: "Йонкама" },
  //   { value: "Комедія", label: "Комедія" },
  //   { value: "Магія", label: "Магія" },
  //   { value: "Махо-шьоджьо", label: "Махо-шьоджьо" },
  //   { value: "Махо-шьонен", label: "Махо-шьонен" },
  //   { value: "Меха", label: "Меха" },
  //   { value: "Містика", label: "Містика" },
  //   { value: "Наукова фантастика", label: "Наукова фантастика" },
  //   { value: "Омегаверс", label: "Омегаверс" },
  //   { value: "Пародія", label: "Пародія" },
  //   { value: "Повсякденність", label: "Повсякденність" },
  //   { value: "Постапокаліпсис", label: "Постапокаліпсис" },
  //   { value: "Пригоди", label: "Пригоди" },
  //   { value: "Психологія", label: "Психологія" },
  //   { value: "Романтика", label: "Романтика" },
  //   { value: "Сейнен", label: "Сейнен" },
  //   { value: "Спокон", label: "Спокон" },
  //   { value: "Трагедія", label: "Трагедія" },
  //   { value: "Триллер", label: "Триллер" },
  //   { value: "Фантастика", label: "Фантастика" },
  //   { value: "Фентезі", label: "Фентезі" },
  //   { value: "Філософія", label: "Філософія" },
  //   { value: "Шьоджьо", label: "Шьоджьо" },
  //   { value: "Шьоджьо-ай", label: "Шьоджьо-ай" },
  //   { value: "Юрі", label: "Юрі" },
  //   { value: "Яой", label: "Яой" },
  // ];

  return (
    <>
      <Header />
      <div className={styles.UseleStyle}>
        <MultiDropdown/>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
