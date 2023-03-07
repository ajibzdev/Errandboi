import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
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

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import API from "../../api/API";
import AuthContextProvider, { AuthContext } from "../../store/auth-context";
import axios from "axios";
import { UserContext } from "../../store/user-context";

const LoginView: React.FC<ScreenNavigationType> = ({}) => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  // States
  const [email, setEmail] = useState<StringType>(null);
  const emailRef = useRef<DefaultType>();

  const [password, setPassword] = useState<StringType>(null);
  const passwordRef = useRef<DefaultType>();

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
    // handlePasswordError(e, errors, setErrors, setErrorMsgs);
  };

  const loginHandler = async () => {
    setLoading(() => true);

    const reqData = {
      email,
      password,
    };

    try {
      const response = await postToEndpoint(API.login, reqData);

      if (!response) {
        Alert.alert("Error", `Username or password is invalid`, [
          {
            text: "Okay",
            onPress: () => {},
          },
        ]);
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${response.access}`;
        userCtx.setUserType(response.type);

        const u = userCtx.user;

        u.email = email;
        u.token = response.token;

        userCtx.userDetailsChange(u);
        authCtx.authenticate(response.access);
      }
      console.log(response);
    } catch (err: any) {
      console.log(err.message);
    }

    setLoading(() => false);
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();

    // handleEmailErrr(email, errors, setErrors, setErrorMsgs);
    // handlePasswordError(password, errors, setErrors, setErrorMsgs);

    // @ts-ignore
    navigation.navigate("WelcomeScreen");

    // await loginHandler();
  };

  return (
    <View style={[GlobalStyles.root]}>
      <KeyboardAwareScrollView style={[styles.mainContainer]}>
        <View style={[styles.textContainer]}>
          <Text style={[Fonts.sansH1]}>Welcome back!</Text>
          <Text
            style={[
              Fonts.sansNormal,
              styles.textDescription,
              GlobalStyles.marginVerticalMedium,
            ]}
          >
            Enter your details to log into your account or login with face
            authentication
          </Text>
        </View>
        <View style={[styles.formContainer]}>
          <AuthInput
            label="Email"
            ref={emailRef}
            value={email}
            error={errors.email}
            errorMsg={errorMsgs.email}
            onChangeText={(text) => {
              handleEmail(text);
            }}
            placeholder="Required"
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
            placeholder="*******"
            password={true}
          />

          <Text style={[GlobalStyles.marginVerticalSmall, Fonts.sansNormal]}>
            Forgot your Password ?
          </Text>
        </View>
        <View style={[styles.othersContainer, GlobalStyles.deviceViewWidth]}>
          <FullWidthButton
            onPress={handleSubmit}
            label="Login"
            disabled={
              errors.email || errors.password || email == "" || password == ""
            }
            loading={loading}
          />

          <View
            style={[
              styles.orContainer,
              GlobalStyles.flexRow,
              GlobalStyles.justifySpaceBetween,
            ]}
          >
            <View style={styles.line} />
            <Text style={[GlobalStyles.flex1, { textAlign: "center" }]}>
              Or{" "}
            </Text>
            <View style={styles.line} />
          </View>

          <View
            style={[
              GlobalStyles.width100,
              GlobalStyles.paddingHorizontalLarge,
              GlobalStyles.marginVerticalExtraLarge,
            ]}
          >
            <TouchableOpacity
              disabled={email == "" || password == ""}
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.justifySpaceBetween,
                GlobalStyles.paddingHorizontalLarge,
                GlobalStyles.paddingVerticalLarge,
                Shadows.lightShadow,
                styles.bio,
              ]}
            >
              <Text style={[Fonts.sansRegular]}>Continue with Face ID</Text>
              <Bio height={25} width={25} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View
        style={[
          styles.descriptionContainer,
          GlobalStyles.alignCenter,
          GlobalStyles.deviceViewWidth,
        ]}
      >
        <Text style={[Fonts.sansRegular]}>
          New here ?{" "}
          <Text style={[{ color: Colors.primary }, Fonts.sansSemiBold]}>
            Create account
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginView;

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
