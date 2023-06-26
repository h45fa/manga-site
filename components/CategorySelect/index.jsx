import React, { useState } from "react";
import "./index.css";
import arrow from "@/public/Arrow.svg"
import Image from "next/image";
const options = ['Апокаліпсис', 'Ваншот', 'Вестерн', 'Героїчне фентезі', 'Готика', 'Деменція', 'Детектив', 'Джьосей', 'Доджінші', 'Драма', 'Екшн', 'Еротика', 'Еччі', 'Жахи', 'Ісекай', 'Історія', 'Йонкама', 'Комедія', 'Магія', 'Махо-шьоджьо', 'Махо-шьонен', 'Меха', 'Містика', 'Наукова фантастика', 'Омегаверс', 'Пародія', 'Повсякденність', 'Постапокаліпсис', 'Пригоди', 'Психологія', 'Романтика', 'Сейнен', 'Спокон', 'Трагедія', 'Триллер', 'Фантастика', 'Фентезі', 'Філософія', 'Шьоджьо', 'Шьоджьо-ай', 'Юрі', 'Яой'];

function MultiDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__selected" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.map((option) => (
              <span key={option}>{option}, </span>
            ))
          : <div className="dropdown__unsel"><span>Жанри</span><span><Image width={24} height={24} src={arrow} alt="arrow"/></span></div>}
      </div>
      {isOpen && (
        <div className="dropdown__menu">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown__option ${
                selectedOptions.includes(option) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiDropdown;
