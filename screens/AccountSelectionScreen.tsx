import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "../assets/icons/OtpIcon.svg";
import Fonts from "../constants/Fonts";
import {
  CodeField,
  useBlurOnFulfill,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import FullWidthButton from "../components/shared/FullWidthButton";

const { height, width } = Layout.window;

const AccountSelectionScreen = () => {
  const cellCount = 5;

  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView
      style={[GlobalStyles.root, GlobalStyles.backgroundColorWhite]}
    >
      <NavTitle label="OTP Verification" />
      <KeyboardAwareScrollView style={[GlobalStyles.flex1]}>
        <View style={[GlobalStyles.alignCenter, { marginTop: 43 }]}>
          <Icon height={305} width={297} />
          <View style={[GlobalStyles.alignCenter, { marginTop: 33 }]}>
            <Text style={[Fonts.sansNormal, GlobalStyles.marginVerticalMedium]}>
              {`  We have sent a verification code to`}
            </Text>
            <Text style={[Fonts.sansNormal, { fontFamily: "sans-black" }]}>
              bukunmi@gmail.com{" "}
            </Text>
          </View>

          <View style={[GlobalStyles.marginVerticalLarge]}>
            <CodeField
              ref={ref}
              {...props}
              autoFocus
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={cellCount}
              rootStyle={{ marginTop: 30 }}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }: any) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          {/* Texts */}

          <Text
            style={[
              Fonts.sansNormal,
              { color: Colors.grey7D7D, marginBottom: Sizes.small },
            ]}
          >
            Didn’t receive OTP code?
          </Text>

          <TouchableOpacity onPress={() => {}}>
            <Text style={[Fonts.sansNormal, { color: Colors.primary }]}>
              Resend Code
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: 40 }}>
            <FullWidthButton label="Verify & Proceed" onPress={() => {}} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AccountSelectionScreen;

const styles = StyleSheet.create({
  cell: {
    width: width * 0.12,
    height: height * 0.04679803,
    lineHeight: 38,
    fontSize: Sizes.extraLarge,
    borderWidth: height * 0.001,
    borderRadius: height * 0.004,
    marginHorizontal: 10,
    color: "#032F2D",
    borderColor: Colors.darkGreyText,
    textAlign: "center",
  },
  focusCell: {
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
});
