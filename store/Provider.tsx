import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContextProvider from "./auth-context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Provider;

const styles = StyleSheet.create({});
