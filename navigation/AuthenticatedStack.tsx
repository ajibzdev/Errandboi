import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../types";
import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
