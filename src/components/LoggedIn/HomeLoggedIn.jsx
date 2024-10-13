import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import HomeFourStepsLogged from "./HomeFourStepsLogged";
import Contact from "../Home/Contact";
import ToGiveBack from "./ToGiveBack";
import HeaderLogged from "./HeaderLogged";
import { useLocation } from "react-router-dom";

const HomeLoggedIn = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#to-give-back") {
      scroller.scrollTo("to-give-back", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <div>
      <Element>
        <HeaderLogged />
      </Element>
      <Element name="four-steps">
        <HomeFourStepsLogged />
      </Element>
      <Element name="to-give-back">
        <ToGiveBack />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default HomeLoggedIn;
