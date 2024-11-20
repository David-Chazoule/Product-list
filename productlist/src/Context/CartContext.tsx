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

  function addToCart(product: Dessert) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function increment(product: CartItem) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrement(product: CartItem) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function dropFromCart(name: string) {
    setCart(cart.filter((item) => item.name !== name));
  }

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
