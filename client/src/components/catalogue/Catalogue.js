import React, { useState, useEffect } from "react";
import "./Catalogue.css";
import { products } from "../../data/Products";
import Checkbox from "./Checkbox";
import { FaSlidersH } from "react-icons/fa";
import Product from "./products/Product";

const Catalogue = (props) => {
  const [items, setItems] = useState(products[props.category]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isSingleViewSelected, setIsSingleViewSelected] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    updateProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands]);

  const menuItems = [
    ...new Set(products[props.category].map((item) => item.brand)),
  ];

  const getSelectedProductsLength = () => {
    return products[props.category].reduce(
      (prevValue, currValue) =>
        prevValue + (selectedBrands.includes(currValue.brand) ? 1 : 0),
      0
    );
  };

  const handleChange = (item) => {
    selectedBrands.includes(item)
      ? setSelectedBrands(() =>
          selectedBrands.filter((e) => {
            return e !== item;
          })
        )
      : setSelectedBrands((oldBrands) => [...oldBrands, item]);
    console.log("HERE");
  };

  const updateProducts = () => {
    if (
      selectedBrands.length === 0 ||
      selectedBrands.length === menuItems.length
    ) {
      setItems(() => products[props.category]);
    } else {
      setItems(() => getSelectedProducts());
    }
  };

  const getSelectedProducts = () => {
    const arr = [];
    products[props.category].map((product) => {
      if (selectedBrands.includes(product.brand)) {
        arr.push(product);
      }
      return null;
    });
    return arr;
  };

  const getPriceRange = () => {
    const min = Math.min(...items.map((o) => o.price));
    const max = Math.max(...items.map((o) => o.price));

    return { min, max };
  };

  return (
    <>
      {console.log(getPriceRange())}
      <div className="viewController">
        <div className="filters">
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            aria-label="filter menu"
          >
            <FaSlidersH /> <span>&nbsp;Filters</span>
          </button>
        </div>
        <div className="results">
          <p>
            Products: &nbsp;
            <span>
              {selectedBrands.length !== 0
                ? getSelectedProductsLength()
                : products[props.category].length}
            </span>
          </p>
        </div>
        <div className="wrapper">
          <div
            className={isSingleViewSelected ? "btn multi-off" : "btn multi-on"}
            onClick={() => setIsSingleViewSelected(false)}
          ></div>
          <div
            className={
              isSingleViewSelected ? "btn single-on" : "btn single-off"
            }
            onClick={() => setIsSingleViewSelected(true)}
          ></div>
        </div>
      </div>
      <div className="wrapper">
        <div className="left">
          <label>
            <span style={{ fontWeight: "bold" }}>Brands</span>
            {menuItems.map((item, index) => (
              <Checkbox
                label={item}
                value={selectedBrands.includes(item)}
                onChange={() => handleChange(item)}
                key={index}
              />
            ))}
          </label>
        </div>
        <div className={isSingleViewSelected ? "right singleView" : "right"}>
          {items.map((product, index) => (
            <Product
              img={product.img}
              imgAlt={product.imgAlt}
              name={product.name}
              price={product.price}
              id={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
