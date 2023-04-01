import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/icons/PlusIcon.svg";
import Minus from "../../assets/icons/MinusIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { DisplayButtonType } from "../../types";
import { CartContext } from "../../store/cart-context";

const DisplayFullButton = ({ count, product }: DisplayButtonType) => {
  // Contexts
  const cartCtx = React.useContext(CartContext);

  const addHandler = () => {
    // @ts-ignore
    cartCtx.updateCount(product._id, "increase");
  };

  const deleteHandler = () => {
    // @ts-ignore
    cartCtx.updateCount(product._id, "decrease");
  };

  return (
    <View style={[GlobalStyles.flexRow, styles.button]}>
      <TouchableOpacity
        style={[styles.icon, GlobalStyles.flexCenter]}
        onPress={deleteHandler}
      >
        <Minus height={10} width={16} />
      </TouchableOpacity>

      <Text
        style={[
          Fonts.sansNormal,
          GlobalStyles.flex1,
          GlobalStyles.textAlignCenter,
        ]}
      >
        {count}
      </Text>
      <TouchableOpacity
        style={[styles.icon, GlobalStyles.flexCenter]}
        onPress={addHandler}
      >
        <Plus height={14} width={16} />
      </TouchableOpacity>
    </View>
  );
};

export default DisplayFullButton;

const styles = StyleSheet.create({
  button: {
    width: 118,
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
