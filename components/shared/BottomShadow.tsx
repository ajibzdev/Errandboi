import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors, { Shadows } from "../../constants/Colors";
import GlobalStyles from "../../GlobalStyles";

const BottomShadow = ({
  children,
  bottom,
  style,
}: {
  children: React.ReactNode;
  bottom?: number;
  style?: any;
}) => {
  return (
    <View
      style={[
        {
          width: "100%",
          paddingVertical: 24,
          alignItems: "center",
          // paddingBottom: 20,
          // top: Sizes.large,
          position: "absolute",
          bottom: bottom || 0,
          backgroundColor: Colors.white,
        },
        Shadows.lightShadow,
        style,
      ]}
    >
      <View style={[GlobalStyles.alignCenter, { paddingTop: 16 }, style]}>
        <View style={{ marginBottom: 20 }}>{children}</View>
      </View>
    </View>
  );
};

export default BottomShadow;

const styles = StyleSheet.create({});
