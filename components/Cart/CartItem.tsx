import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import CartCount from "./CartCount";
import Fonts from "../../constants/Fonts";
import CartFullButton from "./CartFullButton";
import Trash from "../../assets/icons/TrashIcon.svg";
import { Shadows } from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

type CartItem = {
  label: string;
  price: string;
  image: string;
  count: number;
};
type CartItemType = {
  cart: CartItem;
};

const CartItem = ({ cart }: CartItemType) => {
  return (
    <View
      style={[
        GlobalStyles.width100,
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,

        GlobalStyles.paddingHorizontalLarge,
        Shadows.shadowLight,
        { marginBottom: 32 },
      ]}
    >
      <View style={[styles.imageContainer]}>
        <Image
          source={require("../../assets/images/FoodImage.png")}
          resizeMode={"cover"}
          style={styles.image}
          //   source={{uri: cart.image}}
        />

        <CartCount count={cart.count} />
      </View>

      <View
        style={[
          GlobalStyles.flex1,
          GlobalStyles.flexRow,
          GlobalStyles.alignCenter,
          GlobalStyles.justifySpaceBetween,
          GlobalStyles.paddingHorizontalExtraLarge,
          { paddingVertical: 7 },
        ]}
      >
        <View>
          <Text
            style={[Fonts.sansNormal, { fontFamily: "sans-black" }]}
            numberOfLines={1}
          >
            {cart.label}
          </Text>

          <Text
            style={[
              Fonts.sans14,
              { fontFamily: "sans-semiBold", marginTop: Sizes.small },
            ]}
          >
            {cart.price}
          </Text>
        </View>
        <CartFullButton count={cart.count} />
      </View>

      <Trash height={18} width={16} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    height: 56,
    width: 56,
  },
});
