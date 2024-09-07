import React from "react";
import { Element } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import Organizations from "./Organizations";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Element name="start">
        <HomeHeader />
      </Element>
      <HomeMain />
      <Element name="about">
        <HomeThreeColumns />
        <HomeFourSteps />
      </Element>
      <Element name="about-us">
        <HomeAboutUs />
      </Element>
      <Element name="organizations">
        <Organizations name="organization" />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
