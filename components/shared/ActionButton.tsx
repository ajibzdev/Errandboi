import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

type ActionButtonType = {
  label: string | JSX.Element;
  onPress: any;
  active?: any;
  backgroundColor?: string;
  disabled?: any;
  style?: any;
};

const ActionButton = ({
  label,
  onPress,
  active,
  backgroundColor,
  style,
  disabled,
}: ActionButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
        onPress();
      }}
      disabled={disabled}
    >
      <View
        style={[
          styles.btn,
          { backgroundColor: active ? Colors.primary : Colors.white },
          backgroundColor && { backgroundColor: backgroundColor },
          disabled && { backgroundColor: Colors.disabled },
          style,
        ]}
      >
        <Text
          style={[
            Fonts.sansSemiBold,
            { fontSize: 14, color: active ? Colors.white : Colors.black },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  btn: {
    marginRight: 12,
    height: 40,
    minWidth: 97,
    paddingHorizontal: 23,
    paddingVertical: 7,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
});
