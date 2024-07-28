import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeFourSteps = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.isLoggedIn) {
      setUser(userData);
    }
  }, []);

  const handleGiveAwayClick = () => {
    if (user.isLoggedIn) {
      navigate("/main");
    } else {
      navigate("/login");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="four-steps">
        <div className="four-steps-header">
          <h2 className="four-steps-title">Wystarczą 4 proste kroki</h2>
          <div className="header-border"></div>
        </div>
        <div className="four-steps-content">
          <div className="four-steps-single">
            <div className="four-steps-img four-steps-img-first"></div>
            <div className="four-steps-single-title">Wybierz rzeczy</div>
            <div className="four-steps-descrition">
              ubrania, zabawki, sprzęt i inne
            </div>
          </div>
          <div className="four-steps-single">
            <div className="four-steps-img four-steps-img-second"></div>
            <div className="four-steps-single-title">Spakuj je</div>
            <div className="four-steps-descrition">
              skorzystaj z worków na śmieci
            </div>
          </div>
          <div className="four-steps-single">
            <div className="four-steps-img four-steps-img-third"></div>
            <div className="four-steps-single-title">
              Zdecyduj komu chcesz pomóc
            </div>
            <div className="four-steps-descrition">wybierz zaufane miejsce</div>
          </div>
          <div className="four-steps-single">
            <div className="four-steps-img four-steps-img-fourth"></div>
            <div className="four-steps-single-title">Zamów kuriera</div>
            <div className="four-steps-descrition">
              kurier przyjedzie w dogodnym terminie
            </div>
          </div>
        </div>
        <button className="header-btn" onClick={handleGiveAwayClick}>
          ODDAJ RZECZY
        </button>
      </section>
    </>
  );
};

export default HomeFourSteps;
