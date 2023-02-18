import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Colors, { Shadows } from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import Plus from "../../assets/icons/PlusIcon.svg";
import Minus from "../../assets/icons/MinusIcon.svg";
import Trash from "../../assets/icons/TrashMiniIcon.svg";
import Fonts from "../../constants/Fonts";

const CartFullButton = ({ count }: { count: number }) => {
  return (
    <View
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,
        styles.button,
        Shadows.shadowLight,
      ]}
    >
      <TouchableOpacity style={[styles.icon, GlobalStyles.flexCenter]}>
        {count == 1 ? (
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
        {count}
      </Text>
      <TouchableOpacity style={[styles.icon, GlobalStyles.flexCenter]}>
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
