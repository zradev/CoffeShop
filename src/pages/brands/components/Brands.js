import "../Brands.css";
import { brands } from "../../../data/Data";
import Brand from "./Brand";

const Brands = () => {
  return (
    <>
      <div className="brands">
        <div className="content">
          {brands.map((brand, index) => (
            <Brand img={brand.img} key={index} href={brand.href} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
