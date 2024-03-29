import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { useScrollLock } from "./../../../hooks/useScrollLock";

const NavItems = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleClickAway = () => {
    setIsNavVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="nav-items">
        <ul className={isNavVisible ? "small" : "small blocked"}>
          <button
            className={isNavVisible ? null : "blocked"}
            onClick={() => {
              setIsNavVisible(false);
              unlockScroll();
            }}
          >
            <FaTimes />
          </button>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setIsNavVisible(false)}>
                {list.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-btns">
          <button
            className="cart-btn"
            onClick={() => {
              openCart();
              lockScroll();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div className="cart-quantity"> {cartQuantity}</div>
          </button>
          <div className="toggle">
            <button
              onClick={() => {
                setIsNavVisible(!isNavVisible);
                lockScroll();
              }}
              aria-label="menu"
            >
              {isNavVisible ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default NavItems;
