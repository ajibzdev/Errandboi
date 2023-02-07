import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Layout from "../../constants/Layout";
import { BooleanType } from "../../types";
import GlobalStyles from "../../GlobalStyles";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const { width, height } = Layout.window;

type FullWidthButtonType = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  loading?: BooleanType;
};
const FullWidthButton: React.FC<FullWidthButtonType> = ({
  loading,
  label,
  disabled,
  onPress,
}) => {
  return (
    <View
      style={[
        GlobalStyles.deviceViewWidth,
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.deviceViewWidth,
      ]}
    >
      <TouchableOpacity
        style={[
          !loading ? GlobalStyles.backgroundColorPrimary : styles.disabled,
          disabled && styles.disabled,
          GlobalStyles.flexCenter,
          GlobalStyles.paddingVerticalLarge,
          GlobalStyles.marginVerticalSmall,
          styles.btn,
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        {!loading ? (
          <Text
            style={[
              { color: disabled ? Colors.black : Colors.white },
              Fonts.sansRegular,
            ]}
          >
            {label}
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FullWidthButton;

const styles = StyleSheet.create({
  disabled: { backgroundColor: "#ccc" },
  btn: { borderRadius: 999, width: "100%" },
});
