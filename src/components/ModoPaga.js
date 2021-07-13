import React from "react";
import Switch from "./Switch";

const ModoPaga = () => {
  return (
    <div className="u-card modoPaga">
      <div className="u-botones-modoPaga left">Monthly Billing</div>
      <Switch />
      <div className="u-botones-modoPaga right">
        Yearly Billing <span className="">-25%</span>
      </div>
    </div>
  );
};

export default ModoPaga;
