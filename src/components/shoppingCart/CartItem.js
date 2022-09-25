import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import products from "./../../data/products.json";

export function CartItem({ id, quantity }) {
  const { removeFromCart, closeCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cart-item">
      <img src={item.images} alt="" />
      <div className="me-auto">
        <Link
          to={`/${item.category}/${item.name}-${item.id}`}
          onClick={closeCart}
        >
          <p>
            {item.name}{" "}
            {quantity > 1 && (
              <span style={{ fontSize: ".65rem" }}>x{quantity}</span>
            )}
          </p>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </Link>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <button onClick={() => removeFromCart(item.id)}>&times;</button>
    </div>
  );
}
