import React, { useState, useEffect } from "react";
import productsDB from "../../data/products.json";
import Products from "./products/Products";
import Filters from "./filters/Filters";
import "./Catalogue.css";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import { useScrollLock } from "./../../hooks/useScrollLock";

const Catalogue = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 9999999999]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isSingleViewSelected, setIsSingleViewSelected] = useState(false);
  const uniqueBrandList = [...new Set(productsDB.map((item) => item.brand))];
  const uniqueLocationList = [
    ...new Set(productsDB.map((item) => item.location)),
  ];

  useEffect(() => {
    const categoryProducts = () => {
      return productsDB.filter(
        (product) =>
          product.category === props.category &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      );
    };

    if (selectedBrands.length === 0) {
      if (selectedLocation.length === 0) {
        return setProducts(categoryProducts());
      }
      return setProducts(
        categoryProducts().filter((product) =>
          selectedLocation.includes(product.location)
        )
      );
    } else {
      if (selectedLocation.length === 0) {
        return setProducts(
          categoryProducts().filter((product) =>
            selectedBrands.includes(product.brand)
          )
        );
      }
      return setProducts(
        categoryProducts().filter(
          (product) =>
            selectedBrands.includes(product.brand) &&
            selectedLocation.includes(product.location)
        )
      );
    }
  }, [selectedBrands, props.category, priceRange, selectedLocation]);

  const handleBrandSelection = (givenbrand) => {
    setSelectedBrands((brands) => {
      if (selectedBrands.includes(givenbrand)) {
        return brands.filter((brand) => brand !== givenbrand);
      } else {
        return [...brands, givenbrand];
      }
    });
  };

  const handleLocationSelection = (givenLocation) => {
    setSelectedLocation((locations) => {
      if (selectedLocation.includes(givenLocation)) {
        return locations.filter((location) => location !== givenLocation);
      } else {
        return [...locations, givenLocation];
      }
    });
  };

  const onPriceRangeChange = (event) => {
    setPriceRange((range) => {
      if (event.target.value) {
        if (event.target.id === "from") {
          range[0] = +event.target.value;
          return [...range];
        }
        range[1] = +event.target.value;
        return [...range];
      }
      if (event.target.id === "from") {
        range[0] = 0;
        return [...range];
      }
      range[1] = 9999999999;
      return [...range];
    });
  };

  return (
    <>
      <div className="viewController">
        <div className="filterBtn">
          <button
            onClick={() => {
              lockScroll();
              setIsFilterOpen(true);
            }}
            aria-label="filter menu"
          >
            <FaSlidersH /> <span>&nbsp;Filters</span>
          </button>
        </div>
        <div className="results">
          <p>
            Products: &nbsp;
            <span>{products.length}</span>
          </p>
        </div>
        <div className="view-btns">
          <div
            className={isSingleViewSelected ? "btn multi-off" : "btn multi-on"}
            onClick={() => setIsSingleViewSelected(false)}
          ></div>
          <div
            className={
              isSingleViewSelected ? "btn single-on" : "btn single-off"
            }
            onClick={() => setIsSingleViewSelected(() => true)}
          ></div>
        </div>
      </div>
      <div className="catalogue marginX">
        <div className={isFilterOpen ? "filters-open" : "filters"}>
          <div className="filters-head">
            <p>Filters:</p>
            <button
              onClick={() => {
                unlockScroll();
                setIsFilterOpen(false);
              }}
            >
              <FaTimes />
            </button>
          </div>
          <Filters
            uniqueBrandList={uniqueBrandList}
            selectedBrands={selectedBrands}
            handleBrandSelection={handleBrandSelection}
            uniqueLocationList={uniqueLocationList}
            selectedLocation={selectedLocation}
            handleLocationSelection={handleLocationSelection}
            onPriceRangeChange={onPriceRangeChange}
          />
          <div className="filters-bottom">
            <button
              onClick={() => {
                unlockScroll();
                setIsFilterOpen(false);
              }}
            >
              Filter
            </button>
          </div>
        </div>
        <div
          className={isSingleViewSelected ? "products singleView" : "products"}
        >
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default Catalogue;
