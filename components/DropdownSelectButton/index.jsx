import React, { useState } from "react";
import "./index.css";
import arrodrop from "@/public/ArrowDown2.svg";
import Image from "next/image";
const DropdownSelectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Selected option", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="DropdownSelectButton">
      <button className="DropdownSelectButton-button" onClick={toggleDropdown}>
        {selectedOption || (
          <div className="DropdownSelectButton-selectediv">
            <span className="DropdownSelectButton-spans">Select an option</span>
            <span>
              <Image width={24} height={24} src={arrodrop} alt="arrow" />
            </span>
          </div>
        )}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelectButton;
