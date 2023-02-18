import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/icons/PlusIcon.svg";
import Minus from "../../assets/icons/MinusIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { DisplayButtonType } from "../../types";

const DisplayFullButton = ({ count }: DisplayButtonType) => {
  return (
    <View style={[GlobalStyles.flexRow, styles.button]}>
      <TouchableOpacity style={[styles.icon, GlobalStyles.flexCenter]}>
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
      <TouchableOpacity style={[styles.icon, GlobalStyles.flexCenter]}>
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
