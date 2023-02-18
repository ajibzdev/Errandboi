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

type FullSeperatedButtonType = {
  onPress: () => void;
  label: string;
  smallerLabel: string;
  disabled?: boolean;
  loading?: BooleanType;
};

const FullSeperatedButton: React.FC<FullSeperatedButtonType> = ({
  loading,
  label,
  smallerLabel,
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
          GlobalStyles.paddingVerticalLarge,
          GlobalStyles.marginVerticalSmall,
          styles.btn,
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        {!loading ? (
          <View
            style={[
              GlobalStyles.width100,
              GlobalStyles.flexRow,
              GlobalStyles.alignCenter,
              GlobalStyles.justifySpaceBetween,
            ]}
          >
            <Text
              style={[
                { color: disabled ? Colors.black : Colors.white },
                Fonts.sansRegular,
              ]}
            >
              {label}
            </Text>

            <View
              style={[
                {
                  borderRadius: 100,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  backgroundColor: Colors.transparentBlack,
                  alignSelf: "flex-end",
                },
              ]}
            >
              <Text
                style={[
                  { color: disabled ? Colors.black : Colors.white },
                  Fonts.sansRegular,
                ]}
              >
                {smallerLabel}
              </Text>
            </View>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FullSeperatedButton;

const styles = StyleSheet.create({
  disabled: { backgroundColor: "#ccc" },
  btn: { borderRadius: 999, width: "100%", paddingHorizontal: 20 },
});
