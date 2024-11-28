import React, { createContext, useContext, useState, ReactNode } from "react";
import { Dessert } from "../types/types";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
  };
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Dessert) => void;
  increment: (item: CartItem) => void;
  decrement: (item: CartItem) => void;
  dropFromCart: (name: string) => void;
  newOrder: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Adds a new product to the cart with an initial quantity of 1.
  function addToCart(product: Dessert) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  // Increases the quantity of a product already in the cart.
  function increment(product: CartItem) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decreases the quantity of a product in the cart.
  // If the product's name matches, decrement its quantity. Otherwise, return the item unchanged.
  function decrement(product: CartItem) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // Removes a product from the cart based on its name.
  function dropFromCart(name: string) {
    setCart(cart.filter((item) => item.name !== name));
  }

  // Clears the cart to prepare for a new order.
  function newOrder() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, dropFromCart, newOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a Cartprovider");
  }
  return context;
};
