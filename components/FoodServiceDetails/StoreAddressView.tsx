import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import AuthInput from "../shared/AuthInput";
import { StateType } from "../../types";
import FullWidthButton from "../shared/FullWidthButton";
import { capitalizeSentence } from "../../utils/utilityFunctions";
const StoreAddressView: React.FC<StateType> = ({
  value,
  setValue,
  setActiveIndex,
  refObj,
}) => {
  return (
    <View
      style={[GlobalStyles.alignCenter, GlobalStyles.paddingHorizontalLarge]}
    >
      <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
        Add Store Address
      </Text>

      <Text
        style={[
          Fonts.sansH3,
          ,
          { fontFamily: "sans-semiBold" },
          GlobalStyles.textAlignCenter,
        ]}
      >
        Add an address to your store so customers can find you easily.
      </Text>
      <View style={{ marginTop: Sizes.extraLarge }} />

      <AuthInput
        label="Store Address"
        placeholder="e.g., Guest house babcock"
        onChangeText={setValue}
        ref={refObj}
        value={capitalizeSentence(value)}
        width={"93%"}
      />

      <FullWidthButton
        label="Next"
        onPress={() => {
          setActiveIndex((prev: any) => ++prev);
        }}
        disabled={value === ""}
      />

      <Text
        style={[
          Fonts.sansH4,
          GlobalStyles.textAlignCenter,
          GlobalStyles.marginVerticalMedium,
        ]}
      >
        By registering as a ‘Store Owner’ you agree to our terms of service and
        privacy policy
      </Text>
    </View>
  );
};

export default StoreAddressView;

const styles = StyleSheet.create({});
