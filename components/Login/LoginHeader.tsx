import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Back from "../../assets/icons/BackIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "../shared/ActionButton";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { LoginType } from "../../types";

const LoginHeader: React.FC<LoginType> = ({ state, setState }) => {
  const navigation = useNavigation();

  const DisplayButtons = () => {
    return (
      <View style={[styles.displayButton, GlobalStyles.flexRow]}>
        <ActionButton
          label={"Sign In"}
          onPress={() => {
            setState(() => true);
          }}
          active={state}
        />
        <ActionButton
          label={"Sign Up"}
          onPress={() => {
            setState(() => false);
          }}
          active={!state}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        GlobalStyles.deviceViewWidth,
        GlobalStyles.flexRow,
        GlobalStyles.justifySpaceBetween,
        GlobalStyles.paddingHorizontalExtraLarge,
        GlobalStyles.paddingVerticalMedium,
        styles.navContainer,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={[GlobalStyles.flex1]}
      >
        <View style={GlobalStyles.backButton}>
          <Back height={20} width={20} />
        </View>
      </TouchableOpacity>

      <View style={[styles.displayContainer]}>
        <DisplayButtons />
      </View>

      <View style={[GlobalStyles.flex1]} />
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "rgba(231, 231, 231, 1)",
  },

  displayContainer: { flex: 2 },
  displayButton: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.medium,
  },
});
