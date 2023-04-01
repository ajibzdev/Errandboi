import {
  StyleSheet,
  Text,
  View,
  // @ts-ignore
  Keyboard,
  // @ts-ignore
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
import {
  getEndpoint,
  postToEndpoint,
  postWithForm,
} from "../../api/responseHandler";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import API from "../../api/API";
import AuthContextProvider, { AuthContext } from "../../store/auth-context";
import axios from "axios";
import { UserContext } from "../../store/user-context";
import ImagePicker from "../shared/ImagePicker";
import { createFormData } from "../../utils/handleImages";

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

  // Face
  const [face, setFace] = React.useState<any>(null);

  // Controller
  const controller: any = React.useMemo(() => {
    new AbortController();
  }, []);

  // Functions

  const handleEmail = (e: string) => {
    setEmail(e);
    handleEmailError(e, errors, setErrors, setErrorMsgs);
  };
  const handlePassword = (e: string) => {
    setPassword(e);
    // handlePasswordError(e, errors, setErrors, setErrorMsgs);
  };

  const handleFaceId = () => {
    // @ts-ignore
    navigation.navigate("FaceIdScreen");
  };

  const loginHandler = async () => {
    setLoading(() => true);

    try {
      axios.defaults.headers.common.Authorization = ``;

      const reqData = {
        email,
        password,
      };

      const response = await postToEndpoint(API.login, reqData);

      if (!response) {
        Alert.alert("Error", `Email or password is invalid`, [
          {
            text: "Okay",
            onPress: () => {},
          },
        ]);
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${response.access}`;
        console.log(response);
        userCtx.setUserType(response.type);

        const u = userCtx.user;

        u.email = email;
        u.id = "";

        userCtx.userDetailsChange(u);

        // Check if user has submitted details
        if (userCtx.user.userType == "FoodProvider") {
          const detail = await getEndpoint(API.foodService);
          console.log(detail);

          if (detail?.name) {
            const u = userCtx.user;
            u.id = detail?.id;
            u.hasVisited = true;

            userCtx.userDetailsChange(u);
          }
        }

        authCtx.authenticate(response.access, response.refresh);
      }
    } catch (err: any) {
      setLoading(() => false);
      console.log(err.message);
    }

    setLoading(() => false);
  };

  const handleSubmitWithFace = async () => {
    try {
      if (face) {
        try {
          setLoading(() => true);
          const payload = createFormData(
            face,
            { email: userCtx.user.email },
            "face"
          );

          const res = await postWithForm(
            API.faceLogin,
            payload,
            controller?.signal
          );
          console.log(res);
          console.log(controller?.signal);
          setLoading(() => false);
        } catch (err) {
          setLoading(() => false);
          console.log(err);
        }
      }
    } catch (err: any) {
      console.log(err.response);

      throw new Error("Something went wrong");
    }
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();

    // handleEmailErrr(email, errors, setErrors, setErrorMsgs);
    // handlePasswordError(password, errors, setErrors, setErrorMsgs);

    // @ts-ignore
    // navigation.navigate("WelcomeScreen");

    await loginHandler();
  };

  // Use Effects

  React.useEffect(() => {
    const checkOnline = () => {
      console.log("Connected");
    };

    return () => {
      console.log("disconnected");
      controller?.abort();
      setLoading(() => false);
    };
  }, [controller]);
  React.useEffect(() => {
    handleSubmitWithFace();
  }, [face]);

  return (
    <View style={[GlobalStyles.root]}>
      {/* @ts-ignore */}
      <KeyboardAwareScrollView style={[styles.mainContainer]} bounces={false}>
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
              errors.email ||
              errors.password ||
              email == "" ||
              password == "" ||
              loading == true
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
            <ImagePicker setPickedImage={setFace} pickedImage={face}>
              <View
                // disabled={email == "" || password == ""}
                style={[
                  GlobalStyles.flexRow,
                  GlobalStyles.justifySpaceBetween,
                  GlobalStyles.paddingHorizontalLarge,
                  GlobalStyles.paddingVerticalLarge,
                  Shadows.lightShadow,
                  styles.bio,
                ]}
                // onPress={handleFaceId}
              >
                <Text style={[Fonts.sansRegular]}>Continue with Face ID</Text>
                <Bio height={25} width={25} />
              </View>
            </ImagePicker>
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
