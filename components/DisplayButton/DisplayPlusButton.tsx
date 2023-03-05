import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/icons/PlusIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { DisplayButtonType } from "../../types";
import { CartContext } from "../../store/cart-context";

const DisplayPlusButton: React.FC<DisplayButtonType> = ({ count, product }) => {
  const cartCtx = React.useContext(CartContext);

  const addHandler = () => {
    cartCtx.addToCart({
      count: ++count,
      image: product.image,
      label: product.label,
      // @ts-ignore
      price: product.price,
      _id: product._id,
    });
  };

  return (
    <TouchableOpacity onPress={addHandler}>
      <View style={[GlobalStyles.flexCenter, styles.button]}>
        <Plus height={16} width={16} />
      </View>
    </TouchableOpacity>
  );
};

export default DisplayPlusButton;

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: Colors.greyFFFF,
    padding: Sizes.medium,
  },
});
