import React from "react";

const Step1 = ({ selectedItems, setSelectedItems, handleNextClick }) => {
  const items = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "inne",
  ];

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  return (
    <>
      <h2 className="logged-home-warning-title">Ważne!</h2>
      <p className="logged-home-warning-descriptiom">
        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
        wiedzieć komu najlepiej je przekazać.
      </p>
      <p>Krok 1/4</p>
      <h2 className="to-give-back-title">Zaznacz co chcesz oddać:</h2>
      {items.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          {item}
        </label>
      ))}
      <div className="navigation-buttons">
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
