import React, { useState } from "react";
import "./Catalogue.css";
import Product from "./Product";
import { products } from "../../data/Products";
import Checkbox from "./Checkbox";

const Catalogue = (props) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const menuItems = [
    ...new Set(products[props.category].map((item) => item.brand)),
  ];

  const getAllItems = () => {
    return products[props.category].map((item, index) => (
      <Product
        img={item.img}
        imgAlt={item.imgAlt}
        name={item.name}
        price={item.price}
        id={index}
        key={index}
      />
    ));
  };

  const getSelectedItems = () => {
    console.log("Selected brands: " + selectedBrands);
    return products[props.category].map((item, index) => {
      console.log("item: " + item.brand);
      if (selectedBrands.includes(item.brand)) {
        return (
          <Product
            img={item.img}
            imgAlt={item.imgAlt}
            name={item.name}
            price={item.price}
            id={index}
            key={index}
          />
        );
      }
      return null;
    });
  };

  const checkValue = (item) => {
    return selectedBrands.includes(item);
  };

  const handleChange = (item) => {
    selectedBrands.includes(item)
      ? setSelectedBrands(() =>
          selectedBrands.filter((e) => {
            return e !== item;
          })
        )
      : setSelectedBrands((oldBrands) => [...oldBrands, item]);
  };

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <label>
            <span style={{ fontWeight: "bold" }}>Brands</span>
            {menuItems.map((item, index) => (
              <Checkbox
                label={item}
                value={checkValue(item)}
                onChange={() => handleChange(item)}
                key={index}
              />
            ))}
          </label>
        </div>

        <div className="right">
          {selectedBrands.length !== 0 ? getSelectedItems() : getAllItems()}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
