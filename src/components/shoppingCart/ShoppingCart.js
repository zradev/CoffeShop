import { CartItem } from "./CartItem";
import products from "../../data/products.json";
import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { FaTimes } from "react-icons/fa";
import { useScrollLock } from "./../../hooks/useScrollLock";
import "./ShoppingCart.css";

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  const { unlockScroll } = useScrollLock();
  return (
    <>
      <div className={isOpen ? "shopping-cart" : "blocked"}>
        <div className="cart-head">
          <p>Cart:</p>
          <button
            onClick={() => {
              closeCart();
              unlockScroll();
            }}
          >
            <FaTimes />
          </button>
        </div>
        <div className="cart-body">
          <div className="container">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="cart-bottom">
          <div className="ms-auto fw-bold fs-5">
            <p>
              Total:{" "}
              <span>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = products.find(
                      (item) => item.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
            </p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
