import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors, { Shadows } from "../../constants/Colors";
import GlobalStyles from "../../GlobalStyles";

const BottomShadow = ({
  children,
  bottom,
}: {
  children: React.ReactNode;
  bottom?: number;
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
          bottom: bottom || 0,
          backgroundColor: Colors.white,
        },
        Shadows.lightShadow,
      ]}
    >
      <View style={[GlobalStyles.alignCenter, { paddingTop: 16 }]}>
        <View style={{ marginBottom: 20 }}>{children}</View>
      </View>
    </View>
  );
};

export default BottomShadow;

const styles = StyleSheet.create({});
