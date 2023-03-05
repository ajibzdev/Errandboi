import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import GlobalStyles from "../../GlobalStyles";
import AuthInput from "../shared/AuthInput";
import {
  BooleanType,
  DefaultType,
  LoginType,
  ScreenNavigationType,
  StringType,
} from "../../types";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import {
  handleEmailError,
  handlePasswordError,
} from "../../utils/inputHandler";
import FullWidthButton from "../shared/FullWidthButton";
import Colors, { Shadows } from "../../constants/Colors";
import Bio from "../../assets/icons/BiometricsIcon.svg";
import { postToEndpoint } from "../../api/responseHandler";
import API from "../../api/API";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const SignupView: React.FC<LoginType> = ({ state, setState }) => {
  const navigation = useNavigation();
  // Email Field
  const [email, setEmail] = useState<StringType>(null);
  const emailRef = useRef<DefaultType>();

  // Password Field
  const [password, setPassword] = useState<StringType>(null);
  const passwordRef = useRef<DefaultType>();

  // Name Field
  const [firstName, setFirstName] = useState<StringType>(null);
  const firstNameRef = useRef<DefaultType>();
  const [lastName, setLastName] = useState<StringType>(null);
  const lastNameRef = useRef<DefaultType>();

  // Mobile Number
  const [mobile, setMobile] = useState<StringType>(null);
  const mobileRef = useRef<DefaultType>();

  const [loading, setLoading] = useState<BooleanType>(false);

  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMsgs, setErrorMsgs] = React.useState({
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Must confirm password",
  });

  const handleEmail = (e: string) => {
    setEmail(e);
    handleEmailError(e, errors, setErrors, setErrorMsgs);
  };
  const handlePassword = (e: string) => {
    setPassword(e);
    handlePasswordError(e, errors, setErrors, setErrorMsgs);
  };

  const loginHandler = async () => {
    setLoading(() => true);
    const reqData = {
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: mobile,
      password,
    };

    // @ts-ignore
    navigation.navigate("AccountSelectionScreen", { reqData });
    setLoading(() => false);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    // handleEmailErrr(email, errors, setErrors, setErrorMsgs);
    // handlePasswordError(password, errors, setErrors, setErrorMsgs);

    loginHandler();
  };

  return (
    <KeyboardAwareScrollView style={[GlobalStyles.root]} bounces={false}>
      <View style={[styles.mainContainer]}>
        <View style={[styles.textContainer]}>
          <Text style={[Fonts.sansH1]}>Create an account</Text>
          <Text
            style={[
              Fonts.sansNormal,
              styles.textDescription,
              GlobalStyles.marginVerticalMedium,
            ]}
          >
            By clicking on ‘Sign up’ you agree to our terms of service and
            privacy policy
          </Text>
        </View>
        <View style={[styles.formContainer]}>
          <View
            style={[GlobalStyles.flexRow, GlobalStyles.justifySpaceBetween]}
          >
            <AuthInput
              label="First Name"
              ref={emailRef}
              value={firstName}
              onChangeText={(text) => {
                setFirstName(() => text);
              }}
              placeholder="Boluwatife"
              width={"48%"}
            />
            <AuthInput
              label="Last Name"
              ref={lastNameRef}
              value={lastName}
              onChangeText={(text) => {
                setLastName(() => text);
              }}
              placeholder="Ayomide"
              width={"48%"}
            />
          </View>
          <AuthInput
            label="Email"
            ref={emailRef}
            value={email}
            error={errors.email}
            errorMsg={errorMsgs.email}
            onChangeText={(text) => {
              handleEmail(text);
            }}
            placeholder="ayomide@gmail.com"
          />

          <AuthInput
            label="Mobile Number"
            ref={mobileRef}
            value={mobile}
            onChangeText={(text) => {
              setMobile(() => text);
            }}
            // @ts-ignore```````
            keyboardType={"phone-pad"}
            placeholder="+234 804 8456 147"
          />

          <AuthInput
            label="Password"
            ref={passwordRef}
            value={password}
            error={errors.password}
            errorMsg={errorMsgs.password}
            onChangeText={(text) => {
              handlePassword(text);
            }}
            placeholder="* * * * * * * "
            password={true}
          />
        </View>
        <View style={[styles.othersContainer, GlobalStyles.deviceViewWidth]}>
          <FullWidthButton
            onPress={handleSubmit}
            label="Sign Up "
            disabled={
              errors.email ||
              errors.password ||
              email == "" ||
              password == "" ||
              mobile == "" ||
              email == null ||
              password == null
            }
            loading={loading}
          />
        </View>
      </View>
      <View
        style={[
          styles.descriptionContainer,
          GlobalStyles.alignCenter,
          GlobalStyles.deviceViewWidth,
        ]}
      >
        <Text style={[Fonts.sansRegular]}>
          Already have an account ?{" "}
          <Text style={[{ color: Colors.primary }, Fonts.sansSemiBold]}>
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    marginTop: Sizes.extraLarge,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 12,
  },
  textDescription: {
    textAlign: "center",
  },
  formContainer: {
    marginTop: 26,
    paddingHorizontal: 17,
  },
  descriptionContainer: {
    marginTop: Sizes.extraLarge,
    alignSelf: "flex-end",
    flex: 1,
  },
  othersContainer: {
    marginTop: 22,
    alignItems: "center",
  },
  orContainer: {
    width: "100%",
    marginTop: 35,
    paddingHorizontal: 16,
  },
  line: {
    height: 1.5,
    flex: 2,
    // width: ""
    backgroundColor: "rgba(216, 216, 216, 1)",
  },
  bio: {
    backgroundColor: Colors.white,
  },
});
