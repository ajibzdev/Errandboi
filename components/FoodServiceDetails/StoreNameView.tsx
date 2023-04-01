import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import AuthInput from "../shared/AuthInput";
import { StateType } from "../../types";
import FullWidthButton from "../shared/FullWidthButton";
import { capitalizeSentence } from "../../utils/utilityFunctions";

const StoreNameView: React.FC<StateType> = ({
  value,
  setValue,
  refObj,
  setActiveIndex,
}) => {
  return (
    <View
      style={[GlobalStyles.alignCenter, GlobalStyles.paddingHorizontalLarge]}
    >
      <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
        Choose Store Name
      </Text>

      <Text style={[Fonts.sansH4, GlobalStyles.textAlignCenter]}>
        Add the name of your store to your profile, you can change this at any
        time.
      </Text>
      <View style={{ marginTop: Sizes.extraLarge }} />

      <AuthInput
        label="Store Name"
        placeholder="e.g., BGH Restaurant"
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

export default StoreNameView;

const styles = StyleSheet.create({});
