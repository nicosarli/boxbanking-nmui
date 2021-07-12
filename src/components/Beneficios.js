import React from "react";
import CardBeneficios from "../components/CardBeneficios";
import iconCheck from "../images/icon-check.svg";

const beneficiosCardData = [
  {
    icono: iconCheck,
    parraf: "Unlimited websites",
    id: 1,
  },
  {
    icono: iconCheck,
    parraf: "100% data ownership",
    id: 2,
  },
  {
    icono: iconCheck,
    parraf: "Email reports",
    id: 3,
  },
];

const Beneficios = () => {
  return (
    <>
      <div className="u-card beneficios">
        <ul>
          {beneficiosCardData.map((cardData) => (
            <CardBeneficios
              icono={cardData.icono}
              parraf={cardData.parraf}
              key={cardData.id}
            />
          ))}
        </ul>
        <div className="botonBeneficios">Start my trial</div>
      </div>
    </>
  );
};

export default Beneficios;
