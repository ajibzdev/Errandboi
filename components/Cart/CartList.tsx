import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CartData } from "../../data/Cart";
import CartItem from "./CartItem";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import GlobalStyles from "../../GlobalStyles";
import { CartContext } from "../../store/cart-context";

const CartList = () => {
  // Contexts
  const cartCtx = React.useContext(CartContext);

  return (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={cartCtx.cart}
      renderItem={({ item }) => <CartItem cart={item} />}
      ListHeaderComponent={() => (
        <Text
          style={[
            Fonts.sansRegular,
            GlobalStyles.paddingHorizontalLarge,
            { fontFamily: "sans-black", marginVertical: Sizes.extraLarge },
          ]}
        >
          Items
        </Text>
      )}
    />
  );
};

export default CartList;

const styles = StyleSheet.create({});
