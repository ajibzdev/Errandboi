import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthInput from "../components/shared/AuthInput";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import Sizes from "../constants/Sizes";
import BottomShadow from "../components/shared/BottomShadow";
import FullWidthButton from "../components/shared/FullWidthButton";
import ActionButton from "../components/shared/ActionButton";
import Colors from "../constants/Colors";
import { ScreenNavigationType } from "../types";

const AccountInfoScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  const firstNameRef = React.useRef<any>();
  const lastNameRef = React.useRef<any>();
  const emailRef = React.useRef<any>();
  const mobileRef = React.useRef<any>();

  // States
  const [firstName, setFirstName] = React.useState<string | null>(null);
  const [lastName, setLastName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [mobile, setMobile] = React.useState<string | null>(null);

  // Loading
  const [loading, setLoading] = React.useState<boolean>(false);

  // Submit Handler
  const handleSubmit = async () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Account Info" />

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={[
            GlobalStyles.flex1,
            GlobalStyles.backgroundColorWhite,
            GlobalStyles.paddingHorizontalLarge,
          ]}
        >
          <View style={[{ marginTop: Sizes.large }]} />
          <AuthInput
            label="First Name"
            ref={firstNameRef}
            value={firstName}
            onChangeText={setFirstName}
            placeholder={"John"}
          />
          <AuthInput
            label="Last Name"
            ref={lastNameRef}
            value={lastName}
            onChangeText={setLastName}
            placeholder={"Doe"}
          />
          <AuthInput
            label="Email"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            placeholder={"johndoe@gmail.com"}
          />
          <AuthInput
            label="Mobile Number"
            ref={mobileRef}
            value={mobile}
            onChangeText={setMobile}
            placeholder={"080123456789"}
            // @ts-ignore
            keyboardType={"decimal-pad"}
          />
          <ActionButton
            label={"Change your password"}
            onPress={() => {
              navigation.navigate("SetNewPasswordScreen");
            }}
            active={true}
            style={{ alignSelf: "flex-start" }}
            backgroundColor={Colors.redDB5}
          />
        </View>
      </TouchableWithoutFeedback>

      <BottomShadow>
        <FullWidthButton
          label="Save Changes"
          onPress={handleSubmit}
          disabled={false}
          loading={loading}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default AccountInfoScreen;

const styles = StyleSheet.create({});
