import React from "react";
import iconCheck from "../images/icon-check.svg";

const Beneficios = () => {
  return (
    <>
      <div className="u-card beneficios">
        <ul>
          <li>
            <img src={iconCheck} alt="" />
            Unlimited websites
          </li>
          <li>
            <img src={iconCheck} alt="" />
            100% data ownership
          </li>
          <li>
            <img src={iconCheck} alt="" />
            Email reports
          </li>
        </ul>
        <div className="botonBeneficios">Start my trial</div>
      </div>
    </>
  );
};

export default Beneficios;
