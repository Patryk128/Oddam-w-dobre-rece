import React from "react";

const HomeFourStepsLogged = () => {
  return (
    <section className="four-steps-logged">
      <div className="four-steps-logged__image"></div>
      <div className="four-steps-logged__content">
        <div className="four-steps-logged__form">
          <h2 className="four-steps-logged__title">
            Oddaj rzeczy, których już nie chcesz
            <br />
            POTRZEBUJĄCYM
          </h2>
          <div className="decorative-border"></div>
          <div className="four-steps-logged__description">
            Wystarczą 4 proste kroki:
          </div>
          <div className="four-steps-logged__steps">
            <div className="four-steps-logged__step">
              <span>
                1
                <p>
                  Wybierz
                  <br />
                  rzeczy
                </p>
              </span>
            </div>
            <div className="four-steps-logged__step">
              <span>
                2
                <p>
                  Spakuj je
                  <br />w worki
                </p>
              </span>
            </div>
            <div className="four-steps-logged__step">
              <span>
                3
                <p>
                  Wybierz
                  <br />
                  fundację
                </p>
              </span>
            </div>
            <div className="four-steps-logged__step">
              <span>
                4
                <p>
                  Zamów
                  <br />
                  kuriera
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourStepsLogged;
