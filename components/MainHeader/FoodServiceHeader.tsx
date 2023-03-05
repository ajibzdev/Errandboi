import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ErrandIcon from "../../assets/icons/ErrandIcon.svg";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../GlobalStyles";
import CartButton from "./CartButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../../store/cart-context";
import ProfilePicture from "../shared/ProfilePicture";

const { height, width } = Layout.window;

const FoodServiceHeader = () => {
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
      <View style={[GlobalStyles.flex1]}>
        <ProfilePicture uri="" height={32} width={32} />
      </View>

      <View style={[GlobalStyles.flex1, GlobalStyles.alignCenter]}>
        <ErrandIcon />
      </View>

      {/* <CartButton /> */}
      <View style={[GlobalStyles.flex1]} />
    </SafeAreaView>
  );
};

export default FoodServiceHeader;

const styles = StyleSheet.create({
  container: {
    // height: height * 0.08,
  },
});
