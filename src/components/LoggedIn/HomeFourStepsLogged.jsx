import React from "react";

const HomeFourStepsLogged = () => {
  return (
    <section className="logged-four-steps">
      <div className="logged-four-steps-img"></div>
      <div className="logged-four-steps-content">
        <div className="logged-four-steps-form">
          <h2 className="logged-four-steps-title">
            Oddaj rzeczy, których już nie chcesz
            <br />
            POTRZEBUJĄCYM
          </h2>
          <div className="header-border"></div>
          <div className="logged-four-steps-description">
            Wystarczą 4 proste kroki:
          </div>
          <div className="logged-four-steps-steps">
            <div className="logged-four-steps-step">
              <span>
                1{" "}
                <p>
                  Wybierz
                  <br />
                  rzeczy
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                2{" "}
                <p>
                  Spakuj je
                  <br />w worki
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                3{" "}
                <p>
                  Wybierz
                  <br />
                  fundację
                </p>
              </span>
            </div>
            <div className="logged-four-steps-step">
              <span>
                4{" "}
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
