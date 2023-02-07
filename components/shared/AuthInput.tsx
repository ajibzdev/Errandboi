import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { DefaultType } from "../../types";
import Sizes from "../../constants/Sizes";

interface authInputProps {
  label: string;
  error?: any;
  errorMsg?: any;
  password?: boolean;
  value: string | null;
  isTextInputVisible?: boolean;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  required?: any;
  ref: any;
}

const AuthInput: React.FC<authInputProps> = React.forwardRef(
  (
    {
      label,
      error,
      password,
      value,
      onChangeText,
      placeholder,
      errorMsg,
      onSubmitEditing,
      required,
      isTextInputVisible,
      ...props
    }: authInputProps,
    ref
  ) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      // @ts-ignore
      <TouchableWithoutFeedback onPress={() => ref.current.focus()}>
        <View style={{ marginBottom: Sizes.large, flex: 1 }}>
          <Text style={style.label}>
            {label}{" "}
            {required && <Text style={{ color: Colors.primary }}>*</Text>}
          </Text>
          <View
            style={[
              style.inputContainer,
              {
                borderColor: error
                  ? Colors.warning
                  : isFocused
                  ? Colors.primary
                  : Colors.inputGrey,
                alignItems: "center",
              },
              { display: isTextInputVisible ? "none" : "flex" },
            ]}
          >
            <TextInput
              placeholder={placeholder}
              //   @ts-ignore
              value={value}
              onChangeText={onChangeText}
              placeholderTextColor={"#7D7D7D"}
              secureTextEntry={hidePassword}
              onBlur={() => setIsFocused(false)}
              style={{
                color: Colors.black,
                flex: 1,
                marginLeft: 12,
                fontSize: 16,
              }}
              onSubmitEditing={onSubmitEditing}
              //   @ts-ignore
              ref={ref}
              {...props}
            />
            {password && (
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Text style={style.textPassword}> Show </Text>
              </TouchableOpacity>
            )}
          </View>
          {error && (
            <Text style={{ marginTop: 7, color: Colors.warning, fontSize: 12 }}>
              {errorMsg}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const style = StyleSheet.create({
  label: {
    marginVertical: 8,
    fontWeight: "700",
    color: Colors.black,
    fontFamily: "sans-black",
  },
  inputContainer: {
    height: 55,
    flex: 1,
    width: "100%",
    borderRadius: Sizes.medium,
    backgroundColor: Colors.backgroundInput,
    flexDirection: "row",
    paddingHorizontal: 15,

    borderWidth: 1,
    fontFamily: "sans-black",
  },
  textStyle: {
    fontWeight: "600",
    fontSize: Sizes.large,
    lineHeight: 19,
  },
  textPassword: {
    color: Colors.darkGreyText,
    fontFamily: "sans-semiBold",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
  },
});

export default AuthInput;
