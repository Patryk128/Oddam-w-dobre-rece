import React from "react";
import { Element } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import Organizations from "../Organizations";

const Home = () => {
  return (
    <div>
      <Element name="start">
        <HomeHeader />
      </Element>
      <Element name="about">
        <HomeThreeColumns />
        <HomeFourSteps />
      </Element>
      <Element name="about-us">
        <HomeAboutUs />
      </Element>
      <Element name="about-us">
        <Organizations name="organization" />
      </Element>
    </div>
  );
};

export default Home;
