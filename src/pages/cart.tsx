import { useContext } from "react";
import { CartContext } from "../context/cart.context";

export function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.title} {item.quantity} in cart
          <button onClick={() => removeFromCart(item.id)}>
            {item.quantity === 1 ? "remove from cart" : "Remove one item"}
          </button>
          <button onClick={() => addToCart(item)}>Add on more</button>
        </div>
      ))}
    </div>
  );
}
