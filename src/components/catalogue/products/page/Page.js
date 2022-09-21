import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../../data/Products";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useScrollLock } from "./../../../../hooks/useScrollLock";
import Redirect from "./../../../../pages/redirect/components/Redirect";
import "./Page.css";

const ProductPage = (props) => {
  const { id } = useParams();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openImgIndex, setOpenImgIndex] = useState(activeImgIndex);
  const [quantity, setQuantity] = useState(1);

  const product = products[props.category][id] || "";
  const images = [product.img, product.imgAlt] || "";

  const { lockScroll, unlockScroll } = useScrollLock();

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
      {product ? (
        <>
          <div className="product-name">
            <h1>{product.name}</h1>
          </div>
          <div className="product-page">
            <div className="gallery">
              <div className="zoom">
                <img
                  src={images[activeImgIndex]}
                  alt="active"
                  onClick={() => handleOnClick()}
                />
              </div>
              <div className="options">
                {images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    onClick={() => setActiveImgIndex(() => index)}
                    className={activeImgIndex === index ? "active" : ""}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="description">
              <h2>
                ${product.price} <span>Tax included</span>
              </h2>
              <h3>Brand: {product.brand}</h3>
              <p>{product.description}</p>
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
