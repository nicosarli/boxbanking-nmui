import React, { useState } from "react";

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    setSlider(event.target.value);
    console.log(slider);
  };

  return (
    <>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="32"
          value={slider}
          id="myRange"
          className="slider"
          onChange={handleChange}
        />
      </div>
      <div className="monto">
        $<span id="value">{slider}</span>
        <div className="u-card mouth">/ month</div>
      </div>
    </>
  );
};

export default Slider;
