import React from "react";
import { Hero } from "../../components/Hero";
import herobgPhoto from "../../components/Image/simple-house-01.jpg";
import FullHomeArea from "../../components/FullHomeArea";

export const Home = () => {
  return (
    <div style={{ background: "#ccc" }}>
      <div className="container" style={{ background: "white" }}>
        <Hero
          bgImage={herobgPhoto}
          titile="Simple House"
          description="new restaurant template"
        />
        <FullHomeArea />
      </div>
    </div>
  );
};
