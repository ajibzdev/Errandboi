import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import Sizes from "../constants/Sizes";
import AuthInput from "../components/shared/AuthInput";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

// Svg
import Dot from "../assets/icons/SmallDotIcon.svg";
import BottomShadow from "../components/shared/BottomShadow";
import FullWidthButton from "../components/shared/FullWidthButton";

const SetNewPasswordScreen = () => {
  // Refs
  const oldPasswordRef = React.useRef<any>();
  const newPasswordRef = React.useRef<any>();
  const confirmPasswordRef = React.useRef<any>();

  // States
  const [oldPassword, setOldPassword] = React.useState<string | null>(null);
  const [newPassword, setNewPassword] = React.useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = React.useState<string | null>(
    null
  );

  // Loading
  const [loading, setLoading] = React.useState<boolean>(false);

  // Submit Handler
  const handleSubmit = async () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Set New Password" />

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
            label="Old Password "
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
            password={true}
          />
          <AuthInput
            label="New Password "
            ref={newPasswordRef}
            value={newPassword}
            onChangeText={setNewPassword}
            password={true}
          />
          <AuthInput
            label="Confirm Password "
            ref={confirmPasswordRef}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            password={true}
          />

          <Text style={[Fonts.sansH4, { color: Colors.grey7D7D }]}>
            We recommend choosing a password that:
          </Text>

          <View style={[GlobalStyles.paddingHorizontallMedium]}>
            <View style={[GlobalStyles.flexRow]}>
              <Dot />

              <Text
                style={[
                  Fonts.sansH4,
                  { color: Colors.grey7D7D, marginLeft: 12 },
                ]}
              >
                Is not used somewhere else
              </Text>
            </View>
            <View style={[GlobalStyles.flexRow]}>
              <Dot />

              <Text
                style={[
                  Fonts.sansH4,
                  { color: Colors.grey7D7D, marginLeft: 12 },
                ]}
              >
                Is 8 characters long or more
              </Text>
            </View>
            <View style={[GlobalStyles.flexRow]}>
              <Dot />

              <Text
                style={[
                  Fonts.sansH4,
                  { color: Colors.grey7D7D, marginLeft: 12 },
                ]}
              >
                Uses upper and lowercase letters
              </Text>
            </View>
            <View style={[GlobalStyles.flexRow]}>
              <Dot />

              <Text
                style={[
                  Fonts.sansH4,
                  { color: Colors.grey7D7D, marginLeft: 12 },
                ]}
              >
                Uses numbers (0-9) and special symbols (!@$*..)
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <BottomShadow>
        <Text
          style={[
            Fonts.sansH4,
            { color: Colors.grey7D7D, marginLeft: 12, marginVertical: 12 },
          ]}
        >
          After you update your password, you will be automatically logged out.
          Log back in with your update password to verify that your password was
          changed.
        </Text>

        <FullWidthButton
          label="Change Password"
          onPress={handleSubmit}
          disabled={
            oldPassword == null ||
            newPassword == null ||
            confirmPassword == null ||
            confirmPassword !== newPassword
          }
          loading={loading}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default SetNewPasswordScreen;

const styles = StyleSheet.create({});
