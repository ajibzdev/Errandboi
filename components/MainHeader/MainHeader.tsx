import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ErrandIcon from "../../assets/icons/ErrandIcon.svg";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../GlobalStyles";
import CartButton from "./CartButton";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Layout.window;

const MainHeader = () => {
  return (
    <SafeAreaView
      style={[
        // GlobalStyles.flex1,
        GlobalStyles.width100,
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,
        GlobalStyles.paddingHorizontalLarge,
        styles.container,
      ]}
    >
      <View style={[GlobalStyles.flex1]} />

      <View style={[GlobalStyles.flex1]}>
        <ErrandIcon />
      </View>

      <CartButton />
    </SafeAreaView>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    // height: height * 0.08,
  },
});
