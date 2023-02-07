import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";

type ButtonPrimaryType = {
  label: string;
  style?: any;
  active?: boolean;
  onPress: () => void;
};
const ButtonPrimary = ({
  label,
  active,
  onPress,
  style,
}: ButtonPrimaryType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyles.flexCenter,
        GlobalStyles.buttonPrimary,
        active
          ? GlobalStyles.backgroundColorPrimary
          : GlobalStyles.backgroundColorLightGrey,

        style,
      ]}
    >
      <Text
        style={[
          !active ? GlobalStyles.textColorBlack : GlobalStyles.textColorWhite,
          Fonts.sansSemiBold,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
