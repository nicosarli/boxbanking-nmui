import React from "react";
import bgPatternCircles from "../images/pattern-circles.svg";

const hero = () => {
  return (
    <div className="hero">
      <div className="fondoTittle">
        <img src={bgPatternCircles} alt="" />
      </div>
      <div className="contenido">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No&nbsp;credit card required.</p>
      </div>
    </div>
  );
};

export default hero;
