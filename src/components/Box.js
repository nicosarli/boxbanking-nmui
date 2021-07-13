import Slider from "./Slider";
import Beneficios from "./Beneficios";
import ModoPaga from "./ModoPaga";
import Separador from "./Separador";

const Box = () => {
  return (
    <div className="contenedor">
      <div className="contenido">
        <div className="u-card pageviews">100K PAGEVIEWS</div>
        <Slider />
      </div>
      <ModoPaga />
      <Separador />
      <Beneficios />
    </div>
  );
};

export default Box;
