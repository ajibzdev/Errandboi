import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import { BooleanType, DefaultType, LoginType } from "../../types";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

const LoginFooter: React.FC<LoginType> = ({ state, setState }) => {
  return (
    <View style={[GlobalStyles.root]}>
      {state ? <LoginView /> : <SignupView state={state} setState={setState} />}
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({});
