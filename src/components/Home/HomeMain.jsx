import React from "react";
import { Link } from "react-router-dom";
const HomeMain = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector(".header-header");
  //     if (window.scrollY > 0) {
  //       header.classList.add("scrolled");
  //     } else {
  //       header.classList.remove("scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="header conteiner">
      <main>
        <div className="header-image"></div>
        <div className="header-main">
          <div className="header-content">
            <h2 className="header-title">
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <div className="header-border"></div>
            <div className="header-btns">
              <button className="header-btn">
                <Link to="/login">ODDAJ RZECZY</Link>
              </button>
              <button className="header-btn">
                <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeMain;
