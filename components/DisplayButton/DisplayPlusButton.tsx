import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/icons/PlusIcon.svg";
import Pencil from "../../assets/icons/PencilIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { DisplayButtonType, ProductType } from "../../types";
import { CartContext } from "../../store/cart-context";
import { useNavigation } from "@react-navigation/native";

const DisplayPlusButton: React.FC<DisplayButtonType> = ({
  count,
  product,
  shopOwner,
}) => {
  const cartCtx = React.useContext(CartContext);
  const navigation = useNavigation();

  const addHandler = () => {
    const productC: ProductType = {
      count: ++count,
      image: product.image,
      label: product.label,
      price: product?.price,
      _id: product._id,
    };
    shopOwner
      ? // @ts-ignore
        navigation.navigate("EditProductScreen", { id: product._id })
      : cartCtx.addToCart(productC);
  };

  return (
    <TouchableOpacity onPress={addHandler}>
      <View style={[GlobalStyles.flexCenter, styles.button]}>
        {shopOwner ? <Pencil /> : <Plus height={16} width={16} />}
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
