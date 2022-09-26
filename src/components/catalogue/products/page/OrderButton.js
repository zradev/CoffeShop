import React from "react";
import { useState } from "react";
import { formatCurrency } from "./../../../../utils/formatCurrency";
import { useShoppingCart } from "./../../../../context/ShoppingCartContext";
import { ToastContainer, toast } from "react-toastify";

const OrderButton = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemQuantity } = useShoppingCart();

  const notify = () => {
    toast.success("Product Added!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleIncrement = () => {
    setQuantity((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <>
      <div className="order">
        <div className="quantity">
          <button onClick={handleDecrement}>-</button>
          <div>{quantity}</div>
          <button onClick={handleIncrement}>+</button>
          <p>90-Day Buyer Protection</p>
        </div>
        <div className="buy-btn">
          <button
            onClick={() => {
              addItemQuantity(props.product.id, quantity);
              setQuantity(1);
              notify();
            }}
          >
            Add To Cart - {formatCurrency(props.product.price * quantity)}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default OrderButton;
