import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { isValidElement } from "react";
import GlobalStyles from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../../constants/Fonts";

// icons
import Back from "../../assets/icons/BackIcon.svg";
import { Shadows } from "../../constants/Colors";
type NavTitleType = {
  label: string;
  rightContent?: React.ReactNode;
};

const NavTitle: React.FC<NavTitleType> = ({ label }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        GlobalStyles.deviceViewWidth,
        GlobalStyles.flexRow,
        GlobalStyles.justifySpaceBetween,
        GlobalStyles.paddingHorizontalExtraLarge,
        GlobalStyles.paddingVerticalMedium,
        Shadows.shadowLight,
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
        <Text style={[Fonts.sansRegular, { fontFamily: "sans-black" }]}>
          {label}{" "}
        </Text>
      </View>

      <View style={[GlobalStyles.flex1]} />
    </View>
  );
};

export default NavTitle;

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "rgba(231, 231, 231, 1)",
  },
  displayContainer: { flex: 2, alignItems: "center" },
});
