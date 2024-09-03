import React from "react";
import { Element } from "react-scroll";
import HomeFourStepsLogged from "./HomeFourStepsLogged";
import Contact from "../Home/Contact";
import ToGiveBack from "./ToGiveBack";

const HomeLoggedIn = () => {
  return (
    <div>
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
