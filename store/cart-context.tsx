import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartType, ProductType, UserType } from "../types";

type CartContextType = {
  cart: ProductType[];
  addToCart: ({}: ProductType) => void;
  deleteFromCart: (_id: string) => void;
  getCart: () => void;
  getProductCount: (_id: string | undefined) => number;
  updateCount: (_id: string, action: "increase" | "decrease") => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: ({}: ProductType) => {},
  deleteFromCart: (_id: string) => {},
  getCart: () => {},
  updateCount: (_id: string, action: "increase" | "decrease") => {},
  getProductCount: (_id: string | undefined) => {},
});

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<ProductType[]>([]);

  const getCart = async () => {
    const cart = await AsyncStorage.getItem("@cart");

    if (cart !== null) {
      setCart((prev) => JSON.parse(cart));
    } else {
      console.log("Cart Is Empty");

      setCart(() => []);
    }
  };

  const addToCart = async (product: ProductType) => {
    setCart((prev) => [...prev, product]);

    await AsyncStorage.setItem("@cart", JSON.stringify(cart));
    await getCart();
  };
  const deleteFromCart = async (_id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== _id));

    await AsyncStorage.setItem("@cart", JSON.stringify(cart));
    await getCart();
  };

  const updateCount = async (_id: string, action: "increase" | "decrease") => {
    const updatableProductIndex = cart.findIndex((item) => item._id == _id);
    if (updatableProductIndex >= 0) {
      const updatableProduct = cart[updatableProductIndex];

      let updatedProduct: ProductType;
      let updatedCart = [...cart];
      console.log(updatedCart);

      if (action == "increase") {
        updatableProduct.count += 1;
        updatedProduct = updatableProduct;
        updatedCart[updatableProductIndex] = updatedProduct;
      }
      if (action == "decrease") {
        if (updatableProduct.count == 1) {
          deleteFromCart(_id);
        } else {
          updatableProduct.count -= 1;
          updatedProduct = updatableProduct;
          updatedCart[updatableProductIndex] = updatedProduct;
        }
      }

      updatedCart[updatableProductIndex] = updatedProduct;
      console.log(updatedCart);

      setCart(() => updatedCart);
      await AsyncStorage.setItem("@cart", JSON.stringify(cart));
      await getCart();
    }
  };

  const getProductCount = (_id: string | undefined) => {
    const updatableProductIndex = cart.findIndex((item) => item._id == _id);

    if (updatableProductIndex >= 0) {
      return cart[updatableProductIndex].count;
    } else {
      return 0;
    }
  };

  const value = {
    cart,
    addToCart,
    deleteFromCart,
    getCart,
    updateCount,
    getProductCount,
  };
  // @ts-ignore
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
