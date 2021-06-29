import React from "react";
import FullAboutArea from "../../components/FullAboutArea";
import { Hero } from "../../components/Hero";
import herobgPhoto from "../../components/Image/simple-house-01.jpg";

export const About = () => {
  return (
    <div style={{ background: "#CCCCCC" }}>
      <div className="container">
        <Hero
          bgImage={herobgPhoto}
          titile="Simple House"
          description="new restaurant template"
        />
        <FullAboutArea />
      </div>
    </div>
  );
};
