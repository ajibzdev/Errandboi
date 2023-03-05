import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContextProvider from "./auth-context";
import UserContextProvider from "./user-context";
import CartContextProvider from "./cart-context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default Provider;

const styles = StyleSheet.create({});
