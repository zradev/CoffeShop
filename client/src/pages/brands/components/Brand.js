import { Link } from "react-router-dom";

const Brand = (props) => {
  return (
    <>
      <div className="brand">
        <img src={props.img} alt="" />
        <Link to={props.path}>
          <button>Products</button>
        </Link>
      </div>
    </>
  );
};

export default Brand;
