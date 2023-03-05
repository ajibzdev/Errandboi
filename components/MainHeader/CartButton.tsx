import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CartIcon from "../../assets/icons/CartIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../store/cart-context";

const CartButton = () => {
  const navigation = useNavigation();
  const cartCtx = React.useContext(CartContext);

  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        navigation.navigate("CartScreen");
      }}
    >
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
          {cartCtx.cart.length}
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
