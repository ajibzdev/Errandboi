import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";

const CartCount = ({ count }: { count: number }) => {
  return (
    <View
      style={[
        GlobalStyles.flexCenter,
        GlobalStyles.backgroundColorPrimary,

        styles.container,
      ]}
    >
      <Text
        style={[
          Fonts.sansSemiBold,
          GlobalStyles.textColorWhite,
          { fontSize: 12 },
        ]}
      >
        {count}X
      </Text>
    </View>
  );
};

export default CartCount;

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 32,
    zIndex: 2,
    position: "absolute",
    top: -20,
    left: -12,
  },
});
