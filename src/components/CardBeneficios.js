import React from "react";

const CardBeneficios = ({ icono, parraf }) => {
  console.log(icono);

  return (
    <li>
      <img src={icono} alt="" />
      {parraf}
    </li>
  );
};

export default CardBeneficios;
