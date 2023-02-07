import { Dimensions, StyleSheet } from "react-native";
import Colors from "./constants/Colors";
import Layout from "./constants/Layout";
import Sizes from "./constants/Sizes";

const { width, height } = Layout.window;

export default StyleSheet.create({
  root: {
    flex: 1,
    position: "relative",
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  buttonPrimary: {
    width: width * 0.45,
    paddingHorizontal: Sizes.large,
    paddingVertical: Sizes.extraLarge,
    borderRadius: Sizes.medium,
  },

  // Texts
  textColorWhite: {
    color: Colors.white,
  },
  textColorBlack: {
    color: Colors.black,
  },
  textAlignCenter: {
    textAlign: "center",
  },

  //  Backgrounds
  backgroundColorPrimary: {
    backgroundColor: Colors.primary,
  },
  backgroundColorWhite: {
    backgroundColor: Colors.white,
  },
  backgroundColorLightGrey: {
    backgroundColor: Colors.lightGrey400,
  },

  //   Margin
  marginHorizontalSmall: {
    marginHorizontal: Sizes.small,
  },
  marginHorizontallMedium: {
    marginHorizontal: Sizes.medium,
  },
  marginHorizontalLarge: {
    marginHorizontal: Sizes.large,
  },
  marginHorizontalExtraLarge: {
    marginHorizontal: Sizes.extraLarge,
  },
  marginVerticalSmall: {
    marginVertical: Sizes.small,
  },
  marginVerticalMedium: {
    marginVertical: Sizes.medium,
  },
  marginVerticalLarge: {
    marginVertical: Sizes.large,
  },
  marginVerticalExtraLarge: {
    marginVertical: Sizes.extraLarge,
  },

  //   Padding
  paddingHorizontalSmall: {
    paddingHorizontal: Sizes.small,
  },
  paddingHorizontallMedium: {
    paddingHorizontal: Sizes.medium,
  },
  paddingHorizontalLarge: {
    paddingHorizontal: Sizes.large,
  },
  paddingHorizontalExtraLarge: {
    paddingHorizontal: Sizes.extraLarge,
  },
  paddingVerticalSmall: {
    paddingVertical: Sizes.small,
  },
  paddingVerticalMedium: {
    paddingVertical: Sizes.medium,
  },
  paddingVerticalLarge: {
    paddingVertical: Sizes.large,
  },
  paddingVerticalExtraLarge: {
    paddingHorizontal: Sizes.extraLarge,
  },

  deviceViewWidth: {
    width: width,
  },
  width100: {
    width: "100%",
  },

  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
