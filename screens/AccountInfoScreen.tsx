import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
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
import { getEndpoint, patchToEndpoint } from "../api/responseHandler";
import API from "../api/API";

const AccountInfoScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // States
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [mobile, setMobile] = React.useState<string>("");

  // Refs
  const firstNameRef = React.useRef<any>();
  const lastNameRef = React.useRef<any>();
  const emailRef = React.useRef<any>();
  const mobileRef = React.useRef<any>();
  const detailsRef = React.useRef<any>();

  // Loading
  const [sending, setSending] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  // Functions
  // Get user details
  const getDetails = async () => {
    setLoading(() => true);
    try {
      const res = await getEndpoint(API.getUserDetails);
      detailsRef.current = res;

      setFirstName(() => detailsRef.current.first_name);
      setLastName(() => detailsRef.current.last_name);
      setEmail(() => detailsRef.current.email);
      setMobile(() => detailsRef.current.phone_number);
    } catch (err) {
      throw new Error("AccountInfo: Get details");
    }
    setLoading(() => false);
  };

  // Submit Handler
  const handleSubmit = async () => {
    setSending(() => true);
    try {
      const reqData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: mobile,
        email,
      };
      const res = await patchToEndpoint(API.getUserDetails, reqData);
      if (res) {
        alert("Details changed succesfully");
      }

      setSending(() => false);
    } catch (err) {
      setSending(() => false);
      console.log(err);
      throw new Error("AccountInfo: submit");
    }
  };

  // use Effects
  // Fetch details
  React.useEffect(() => {
    try {
      getDetails();
    } catch (err) {
      console.log(err);
      throw new Error("Error while trying to get User Details False");
    }
  }, []);

  if (loading) {
    return (
      <View style={[GlobalStyles.root, GlobalStyles.flexCenter]}>
        <ActivityIndicator />
      </View>
    );
  }

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
          disabled={
            firstName == "" || lastName == "" || mobile == "" || email == ""
          }
          loading={sending}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default AccountInfoScreen;

const styles = StyleSheet.create({});
