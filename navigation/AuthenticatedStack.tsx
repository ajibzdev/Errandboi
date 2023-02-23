import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../types";
import HomeTabs from "./HomeTabs";
import LocationScreen from "../screens/LocationScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import SubmitOrderScreen from "../screens/SubmitOrderScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      {/* Cart */}
      <Stack.Screen name="CartScreen" component={CartScreen} />
      {/* Checkout */}
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />

      {/* Submit Order */}
      <Stack.Screen name="SubmitOrderScreen" component={SubmitOrderScreen} />

      {/* Checkout */}
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
