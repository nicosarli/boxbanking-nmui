import Slider from "./Slider";
import Beneficios from "./Beneficios";
import Switch from "./Switch";

const Box = () => {
  return (
    <div className="contenedor">
      <div className="contenido">
        <div className="u-card pageviews">100K PAGEVIEWS</div>
        <Slider />
      </div>
      <div className="u-card modoPaga">
        <div className="u-botones-modoPaga left">Monthly Billing</div>
        <Switch />
        <div className="u-botones-modoPaga right">
          Yearly Billing <span className="">-25%</span>
        </div>
      </div>
      <div className="separador"></div>
      <Beneficios />
    </div>
  );
};

export default Box;
