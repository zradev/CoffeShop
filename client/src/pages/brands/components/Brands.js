import "../Brands.css";
import { brands } from "../../../data/Data";
import Brand from "./Brand";

const Brands = () => {
  return (
    <>
      <div className="brands">
        <div className="content">
          {brands.map((brand, index) => (
            <Brand img={brand.img} path={"TODO"} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
