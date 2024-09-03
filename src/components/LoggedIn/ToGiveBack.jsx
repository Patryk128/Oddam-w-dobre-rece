import React, { useState } from "react";
import Step1 from "./HelpStep1";
import Step2 from "./HelpStep2";
import Step3 from "./HelpStep3";
import Step4 from "./HelpStep4";
import Step5 from "./HelpStep5";
import Step6 from "./HelpStep6";

const ToGiveBack = () => {
  const [step, setStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState(""); // Lepsze jest użycie pustego stringa
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [quantitySelectedOption, setQuantitySelectedOption] = useState(""); // Lepsze jest użycie pustego stringa
  const [localizationSelectedOption, setLocalizationSelectedOption] =
    useState(""); // Lepsze jest użycie pustego stringa
  const [clicked, setClicked] = useState({});
  const [formData, setFormData] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const handleNextClick = () => {
    // Jeśli jesteśmy w kroku 4, zweryfikujmy dane
    if (step === 4) {
      const isValid = validateFormData();
      if (!isValid) return;
    }
    setStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  const handleBackClick = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const validateFormData = () => {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!formData.date || !formData.date.match(dateRegex)) {
      alert("Invalid date format. Use DD-MM-YYYY.");
      return false;
    }
    if (!formData.time || !formData.time.match(timeRegex)) {
      alert("Invalid time format. Use HH:MM.");
      return false;
    }
    return true;
  };

  return (
    <section className="donation-process">
      <div>
        {step === 1 && (
          <Step1
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleNextClick={handleNextClick}
          />
        )}
        {step === 2 && (
          <Step2
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            isOptionsVisible={isOptionsVisible}
            setIsOptionsVisible={setIsOptionsVisible}
            quantitySelectedOption={quantitySelectedOption}
            setQuantitySelectedOption={setQuantitySelectedOption}
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          />
        )}
        {step === 3 && (
          <Step3
            isOptionsVisible={isOptionsVisible}
            setIsOptionsVisible={setIsOptionsVisible}
            localizationSelectedOption={localizationSelectedOption}
            setLocalizationSelectedOption={setLocalizationSelectedOption}
            clicked={clicked}
            setClicked={setClicked}
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          />
        )}
        {step === 4 && (
          <Step4
            handleFormDataChange={handleFormDataChange}
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          />
        )}
        {step === 5 && (
          <Step5
            formData={formData}
            quantitySelectedOption={quantitySelectedOption}
            selectedItems={selectedItems}
            localizationSelectedOption={localizationSelectedOption}
            clicked={clicked}
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          />
        )}
        {step === 6 && <Step6 />}
      </div>
    </section>
  );
};

export default ToGiveBack;
