import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SectionType } from "../../types";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import { useNavigation } from "@react-navigation/native";

const SectionHeader = ({
  section,
  data,
}: {
  section: SectionType;
  data: any;
}) => {
  // Navigation
  const navigation = useNavigation();

  // Functions
  const submitHandler = () => {
    // @ts-ignore
    navigation.navigate("ViewMoreScreen", { section, data });
  };

  return (
    <View
      style={[
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,
        styles.container,
      ]}
    >
      <Text style={[GlobalStyles.flex1, Fonts.sansRegular, styles.text]}>
        {section.title}
      </Text>

      <TouchableOpacity onPress={submitHandler}>
        <Text style={[Fonts.sansNormal, GlobalStyles.textColorPrimary]}>
          View more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontFamily: "sans-black",
  },
  color: {},
});
