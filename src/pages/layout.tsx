import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/cart.context";

export function Layout() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div style={{ display: "flex", gap: "10px", paddingBottom: "10px" }}>
        <Link to="/">Go to home</Link>
        <Link to="/cart">Go to cart</Link>
        {cart.reduce((sum, item) => sum + item.quantity, 0)} items in cart
      </div>
      <Outlet />
    </>
  );
}
