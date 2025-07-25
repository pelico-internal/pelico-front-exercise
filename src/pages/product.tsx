import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/get.product.query";
import { CartContext } from "../context/cart.context";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const { addToCart, cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  if (!id) {
    return <div>Product not found</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const itemInCart = cart.find((item) => item.id === product.id);

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        {itemInCart ? (
          <div>
            {itemInCart.quantity} in cart
            <button onClick={() => removeFromCart(product.id)}>
              {itemInCart.quantity === 1
                ? "remove from cart"
                : "Remove one item"}
            </button>
            <button onClick={() => addToCart(product)}>Add on more</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)}>Add to cart</button>
        )}
      </div>
      <h2>{product.category}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
    </div>
  );
}
