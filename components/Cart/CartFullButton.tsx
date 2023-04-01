import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Colors, { Shadows } from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import Plus from "../../assets/icons/PlusIcon.svg";
import Minus from "../../assets/icons/MinusIcon.svg";
import Trash from "../../assets/icons/TrashMiniIcon.svg";
import Fonts from "../../constants/Fonts";
import { ProductType } from "../../types";
import { CartContext } from "../../store/cart-context";

const CartFullButton = ({
  count,
  product,
}: {
  count: number;
  product: ProductType;
}) => {
  // Contexts
  const cartCtx = React.useContext(CartContext);

  // Handlers
  // Update Prouct Count
  const addHandler = () => {
    // @ts-ignore
    cartCtx.updateCount(product._id, "increase");
  };

  // Reduce Product Count
  const deleteHandler = () => {
    // @ts-ignore
    cartCtx.updateCount(product._id, "decrease");
  };

  const deleteFromCartHandler = () => {
    // @ts-ignore
    cartCtx.deleteFromCart(product._id);
  };

  return (
    <View
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,
        styles.button,
        Shadows.shadowLight,
      ]}
    >
      <TouchableOpacity
        style={[styles.icon, GlobalStyles.flexCenter]}
        onPress={() => {
          product.count == 1 ? deleteFromCartHandler() : deleteHandler();
        }}
      >
        {product.count == 1 ? (
          <Trash width={10} height={12} />
        ) : (
          <Minus height={10} width={12} />
        )}
      </TouchableOpacity>

      <Text
        style={[
          Fonts.sansNormal,
          GlobalStyles.flex1,
          GlobalStyles.textAlignCenter,
        ]}
      >
        {product.count}
      </Text>
      <TouchableOpacity
        style={[styles.icon, GlobalStyles.flexCenter]}
        onPress={addHandler}
      >
        <Plus height={12} width={12} />
      </TouchableOpacity>
    </View>
  );
};

export default CartFullButton;

const styles = StyleSheet.create({
  button: {
    width: 88,
    backgroundColor: Colors.greyFFFF,
    paddingHorizontal: Sizes.medium,
    paddingVertical: Sizes.small,
    borderRadius: 555,
  },
  icon: {
    width: 32,
    height: "100%",
    borderRadius: 555,
  },
});
