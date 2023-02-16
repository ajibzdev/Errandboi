import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CartIcon from "../../assets/icons/CartIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

const CartButton = () => {
  return (
    <TouchableOpacity>
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.alignCenter,
          GlobalStyles.backgroundColorPrimary,
          styles.container,
        ]}
      >
        <CartIcon />
        <Text
          style={[
            Fonts.sansRegular,
            styles.text,
            GlobalStyles.marginHorizontallMedium,
          ]}
        >
          2
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  text: { color: Colors.white },
});
