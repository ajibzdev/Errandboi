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
import SelectAccountComponent from "../components/AccountSelection/SelectAccountComponent";
import BottomShadow from "../components/shared/BottomShadow";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Layout.window;

const AccountSelectionScreen = () => {
  const navigation = useNavigation();

  const [activeUser, setActiveUser] = useState("1");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // @ts-ignore
    navigation.navigate("OtpScreen");
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.root, GlobalStyles.backgroundColorWhite]}
    >
      <NavTitle label="Account Selection" />
      <View
        style={[
          GlobalStyles.alignCenter,
          GlobalStyles.flex1,
          GlobalStyles.paddingHorizontalLarge,
          styles.mainContainer,
        ]}
      >
        <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
          Select Account Type
        </Text>

        <Text style={[Fonts.sansNormal]}>
          Choose your account type to get started now!
        </Text>

        <View style={[GlobalStyles.marginVerticalExtraLarge]}>
          <SelectAccountComponent
            title="User"
            description="Shop and get goods delivered"
            isActive={activeUser === "1"}
            onPress={() => {
              setActiveUser("1");
            }}
          />
          <SelectAccountComponent
            title="Shopper"
            description="Deliver goods and get paid"
            isActive={activeUser === "2"}
            onPress={() => {
              setActiveUser("2");
            }}
          />
          <SelectAccountComponent
            title="Shop Owner"
            description="Sell food, manage orders and stores"
            isActive={activeUser === "3"}
            onPress={() => {
              setActiveUser("3");
            }}
          />
        </View>
      </View>
      <BottomShadow bottom={-24}>
        <FullWidthButton
          onPress={handleSubmit}
          label={"Proceed"}
          loading={loading}
          disabled={false}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default AccountSelectionScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 14,
  },
});
