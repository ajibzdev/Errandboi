import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import ModalScreen from "../screens/ModalScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AccountSelectionScreen from "../screens/AccountSelectionScreen";
import OtpScreen from "../screens/OtpScreen";
import FaceIdScreen from "../screens/FaceIdScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{ title: "On Boarding" }}
      />

      <Stack.Screen name="login" component={LoginScreen} options={{}} />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />

      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />

      <Stack.Screen
        name="AccountSelectionScreen"
        component={AccountSelectionScreen}
      />

      {/* Face Id screen */}

      <Stack.Screen
        name="FaceIdScreen"
        component={FaceIdScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
