import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useScrollLock } from "./../../../../hooks/useScrollLock";
import products from "../../../../data/products.json";
import Redirect from "./../../../../pages/redirect/components/Redirect";
import Gallery from "./Gallery";
import "./Page.css";

const ProductPage = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openImgIndex, setOpenImgIndex] = useState(activeImgIndex);
  const [quantity, setQuantity] = useState(1);
  const { lockScroll, unlockScroll } = useScrollLock();

  const path = window.location.pathname.split("/");

  const product =
    products.find(
      (product) =>
        product.id === +path[2].split("-")[1] &&
        product.name === path[2].split("-")[0] &&
        product.category === path[1]
    ) || {};
  const images = product.images;

  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
    setOpenImgIndex(() => activeImgIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleOnClick = () => {
    setIsOpen(() => !isOpen);
  };

  const handleIncrement = () => {
    setQuantity((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const getNextImgIndex = () => {
    if (openImgIndex === images.length - 1) {
      return 0;
    }
    return openImgIndex + 1;
  };

  const getPrevImgIndex = () => {
    if (openImgIndex === 0) {
      return images.length - 1;
    }
    return openImgIndex - 1;
  };

  return (
    <>
      {console.log(window.location.pathname)}
      {Object.keys(product).length > 0 ? (
        <>
          <div className="product-name">
            <h1 style={{ textTransform: "capitalize" }}>{product.name}</h1>
          </div>
          <div className="product-page">
            <Gallery
              images={images}
              onClick={handleOnClick}
              activeImgIndex={activeImgIndex}
              setActiveImgIndex={setActiveImgIndex}
            />
            <div className="description">
              <h2>
                ${product.price} <span>Tax included</span>
              </h2>
              <h3>Brand: {product.brand}</h3>
              <p>{product.description}</p>
              <h5>
                Location:{" "}
                <span style={{ textTransform: "uppercase" }}>
                  {product.location}
                </span>
              </h5>
              <div className="order">
                <div className="quantity">
                  <button onClick={handleDecrement}>-</button>
                  <div>{quantity}</div>
                  <button onClick={handleIncrement}>+</button>
                  <p>90-Day Buyer Protection</p>
                </div>
                <div className="buy-btn">
                  <button>Buy Now - ${product.price * quantity}</button>
                </div>
              </div>
            </div>

            <div
              className={isOpen ? "overlay" : "overlay blocked"}
              onClick={() => setIsOpen(() => false)}
            >
              <div className="modal">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenImgIndex(() => getPrevImgIndex());
                  }}
                >
                  <FaArrowAltCircleLeft />
                </button>
                <img
                  src={images[openImgIndex]}
                  alt="open"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenImgIndex(() => getNextImgIndex());
                  }}
                >
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Redirect />
      )}
    </>
  );
};

export default ProductPage;
