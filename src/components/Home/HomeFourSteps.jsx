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
      <section className="steps">
        <div className="steps__header">
          <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
          <div className="decorative-border"></div>
        </div>
        <div className="steps__content">
          <div className="steps__single">
            <div className="steps__img steps__img--first"></div>
            <div className="steps__single-title">Wybierz rzeczy</div>
            <div className="steps__description">
              ubrania, zabawki, sprzęt i inne
            </div>
          </div>
          <div className="steps__single">
            <div className="steps__img steps__img--second"></div>
            <div className="steps__single-title">Spakuj je</div>
            <div className="steps__description">
              skorzystaj z worków na śmieci
            </div>
          </div>
          <div className="steps__single">
            <div className="steps__img steps__img--third"></div>
            <div className="steps__single-title">
              Zdecyduj komu chcesz pomóc
            </div>
            <div className="steps__description">wybierz zaufane miejsce</div>
          </div>
          <div className="steps__single">
            <div className="steps__img steps__img--fourth"></div>
            <div className="steps__single-title">Zamów kuriera</div>
            <div className="steps__description">
              kurier przyjedzie w dogodnym terminie
            </div>
          </div>
        </div>
        <button className="hero__button" onClick={handleGiveAwayClick}>
          ODDAJ
          <br />
          RZECZY
        </button>
      </section>
    </>
  );
};

export default HomeFourSteps;
