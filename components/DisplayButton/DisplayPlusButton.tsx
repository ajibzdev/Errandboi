import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/icons/PlusIcon.svg";
import GlobalStyles from "../../GlobalStyles";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

const DisplayPlusButton = () => {
  return (
    <TouchableOpacity>
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
