import React from "react";
import { Link } from "react-router-dom";

const HomeFourSteps = () => {
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
        <button className="header-btn">
          <Link to="/login">ODDAJ RZECZY</Link>
        </button>
      </section>
    </>
  );
};

export default HomeFourSteps;
