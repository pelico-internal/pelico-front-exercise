import React, { createContext, useState } from "react";
import { Product } from "../pages/product";

export type CartItem = {
  id: number;
  price: number;
  quantity: number;
  title: string;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Pick<Product, "id" | "title" | "price">) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Pick<Product, "id" | "title" | "price">) {
    const previousItem = cart.find((p) => p.id === product.id);

    if (previousItem) {
      setCart((prev) =>
        prev.map((previousState) =>
          previousState.id === product.id
            ? {
                ...previousState,
                quantity: previousState.quantity + 1,
              }
            : previousState
        )
      );
    } else {
      setCart((prev) => [
        ...prev,
        {
          id: product.id,
          price: product.price,
          quantity: 1,
          title: product.title,
        },
      ]);
    }
  }

  function removeFromCart(id: number) {
    const previousItem = cart.find((p) => p.id === id);

    if (previousItem?.quantity === 1) {
      setCart((prev) => prev.filter((p) => p.id !== id));
    } else if (previousItem) {
      setCart((prev) =>
        prev.map((previousState) =>
          previousState.id === id
            ? { ...previousState, quantity: previousState.quantity - 1 }
            : previousState
        )
      );
    }
  }

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
