import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../GlobalStyles";
import Sizes from "../../constants/Sizes";

const SelectAccountRadioButton = ({ isActive }: { isActive: boolean }) => {
  return (
    <View style={[styles.outer, GlobalStyles.flexCenter]}>
      {isActive && <View style={[styles.inner]} />}
    </View>
  );
};

export default SelectAccountRadioButton;

const styles = StyleSheet.create({
  outer: {
    borderWidth: 3,
    borderColor: Colors.black,
    height: 24,
    width: 24,
    borderRadius: 24,
    padding: Sizes.medium,
  },
  inner: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: Colors.black,
  },
});
