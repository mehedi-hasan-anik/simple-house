import React from "react";
import { Hero } from "../../components/Hero";
import herobgPhoto from "../../components/Image/simple-house-01.jpg";
import FullHomeArea from "../../components/FullHomeArea";

export const Home = () => {
  return (
    <div className="container">
      <Hero
        bgImage={herobgPhoto}
        titile="Simple House"
        description="new restaurant template"
      />
      <FullHomeArea />
    </div>
  );
};
