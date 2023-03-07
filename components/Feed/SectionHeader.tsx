import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SectionType } from "../../types";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";

const SectionHeader = ({
  section,
  onPress,
}: {
  section: SectionType;
  onPress: () => void;
}) => {
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

      <TouchableOpacity onPress={onPress}>
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
