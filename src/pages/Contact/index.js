import React from "react";
import FullContactArea from "../../components/FullContactArea";
import herobgPhoto from "../../components/Image/simple-house-01.jpg";
import { Hero } from "../../components/Hero";

export const Contact = () => {
  return (
    <div style={{ background: "#ccc" }}>
      <div className="full-contact-area container">
        <Hero
          bgImage={herobgPhoto}
          title="Simple House"
          description="new restaurant template"
        />
      </div>
      <FullContactArea />
    </div>
  );
};
