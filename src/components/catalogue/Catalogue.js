import React, { useState, useEffect } from "react";
import { useScrollLock } from "./../../hooks/useScrollLock";
import { FaTimes } from "react-icons/fa";
import { products as productsDB } from "../../data/Products";
import { FaSlidersH } from "react-icons/fa";
import Checkbox from "./Checkbox";
import PriceRange from "./priceRange/PriceRange";
import ProductsList from "./products/ProductsList";
import NoResults from "./products/NoResults";
import "./Catalogue.css";

const Catalogue = (props) => {
  const [products, setProducts] = useState(productsDB[props.category]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isSingleViewSelected, setIsSingleViewSelected] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 9999999999999999]);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    updateProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands, priceRange]);

  const uniqueBrandList = [
    ...new Set(productsDB[props.category].map((item) => item.brand)),
  ];

  const handleChange = (brand) => {
    selectedBrands.includes(brand)
      ? setSelectedBrands(() =>
          selectedBrands.filter((e) => {
            return e !== brand;
          })
        )
      : setSelectedBrands((oldBrands) => [...oldBrands, brand]);
  };

  const updateProducts = (arr) => {
    if (arr) {
      setProducts(() => arr);
    } else {
      setProducts(() => getSelectedProducts());
    }
  };

  const isProductPriceVerified = (product) => {
    if (product.price >= priceRange[0] && product.price <= priceRange[1]) {
      return true;
    }
    return false;
  };

  const getSelectedProducts = () => {
    if (
      selectedBrands.length === 0 ||
      selectedBrands.length === uniqueBrandList.length
    ) {
      return productsDB[props.category].filter((product) =>
        isProductPriceVerified(product)
      );
    } else {
      const arr = [];
      productsDB[props.category].map((product) => {
        if (
          selectedBrands.includes(product.brand) &&
          isProductPriceVerified(product)
        ) {
          arr.push(product);
        }
        return null;
      });
      return arr;
    }
  };

  const onPriceRangeChange = (e) => {
    if (e.target.value) {
      const arr = [];
      if (e.target.id === "from") {
        getSelectedProducts().map((product) => {
          if (product.price >= e.target.value) {
            arr.push(product);
          }
          return null;
        });
        setPriceRange((oldArr) => {
          const newArr = [...oldArr];
          newArr[0] = e.target.value;
          return newArr;
        });
      } else {
        getSelectedProducts().map((product) => {
          if (product.price <= e.target.value) {
            arr.push(product);
          }
          return null;
        });
        setPriceRange((oldArr) => {
          const newArr = [...oldArr];
          newArr[1] = e.target.value;
          return newArr;
        });
      }
      updateProducts(arr);
    } else {
      if (e.target.id === "from") {
        setPriceRange((oldArr) => {
          const newArr = [...oldArr];
          newArr[0] = 0;
          return newArr;
        });
      } else {
        setPriceRange((oldArr) => {
          const newArr = [...oldArr];
          newArr[1] = 9999999999999999;
          return newArr;
        });
      }
      updateProducts();
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className={isFilterVisible ? "left " : "left flex"}>
          <div className="filter-top">
            <p>Filters</p>
            <button
              onClick={() => {
                unlockScroll();
                setIsFilterVisible(!isFilterVisible);
              }}
            >
              <FaTimes />
            </button>
          </div>
          <div className="filter-mid">
            <label>
              <span style={{ fontWeight: "bold" }}>Brands</span>
              {uniqueBrandList.map((brand, index) => (
                <Checkbox
                  label={brand}
                  value={selectedBrands.includes(brand)}
                  onChange={() => handleChange(brand)}
                  key={index}
                />
              ))}
            </label>
            <label className="price">
              <span style={{ fontWeight: "bold" }}>Price Range</span>
              <PriceRange filter={onPriceRangeChange} />
            </label>
          </div>
          <div className="filter-bot">
            <button
              onClick={() => {
                unlockScroll();
                setIsFilterVisible(!isFilterVisible);
              }}
            >
              Filter
            </button>
          </div>
        </div>
        <div className="right">
          <div className="viewController">
            <div className="filters">
              <button
                onClick={() => {
                  lockScroll();
                  setIsFilterVisible(!isFilterVisible);
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
                className={
                  isSingleViewSelected ? "btn multi-off" : "btn multi-on"
                }
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
          <div
            className={
              isSingleViewSelected ? "products singleView" : "products"
            }
          >
            {products.length > 0 ? (
              <ProductsList items={products} itemsLength={products.length} />
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
