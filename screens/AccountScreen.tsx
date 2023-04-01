import {
  StyleSheet,
  Text,
  View,
  Alert,
  // @ts-ignore
  Switch,
  ActivityIndicator,
} from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import Fonts from "../constants/Fonts";
import Box from "../components/shared/Box";
import { ScreenNavigationType } from "../types";
import Padlock from "../assets/icons/Padlock.svg";
import Card from "../assets/icons/CardIcon.svg";
import Location from "../assets/icons/LocationBlackIcon.svg";
import Trash from "../assets/icons/TrashBlackIcon.svg";
import Exit from "../assets/icons/ExitIcon.svg";
import { AuthContext } from "../store/auth-context";

const AccountScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Contexts
  const authCtx = React.useContext(AuthContext);

  // Booleans
  const [loggingOut, setLoggingOut] = React.useState<boolean>(false);

  // Refs
  const accountInfoRef = React.useRef<any>();
  const paymentRef = React.useRef<any>();
  const addressRef = React.useRef<any>();
  const deleteRef = React.useRef<any>();
  const exitRef = React.useRef<any>();
  const faceIdRef = React.useRef<any>();

  const [faceIDEnabled, setFaceIDEnabled] = React.useState<boolean>(false);

  // Funcitons

  const handleSignout = async () => {
    setLoggingOut(() => true);

    await authCtx.logout(authCtx.refresh);

    setLoggingOut(() => false);
  };

  return (
    <View style={[GlobalStyles.root, GlobalStyles.paddingHorizontalLarge]}>
      <Text style={[Fonts.sansH1]}>Account Settings</Text>

      <Box
        heading="Account Info"
        _onPress={() => {
          navigation.navigate("AccountInfoScreen");
        }}
        icon={<Padlock />}
        ref={accountInfoRef}
        notOpen={true}
      />
      <Box
        heading="Payment"
        _onPress={() => {
          navigation.navigate("PaymentScreen");
        }}
        icon={<Card />}
        ref={paymentRef}
        notOpen={true}
      />
      <Box
        heading="Address"
        _onPress={() => {
          navigation.navigate("AddressScreen");
        }}
        icon={<Location />}
        ref={addressRef}
        notOpen={true}
      />
      <Box
        heading="Delete your account"
        _onPress={() => {
          navigation.navigate("DeleteAccountScreen");
        }}
        icon={<Trash />}
        ref={accountInfoRef}
        notOpen={true}
      />
      <Box
        heading="Sign out"
        _onPress={() => {
          Alert.alert("Are you sure you want to signout ?", "", [
            {
              text: "Cancel",
              onPress: () => {},
              style: "default",
            },
            {
              text: "Sign out",
              onPress: () => {
                handleSignout();
              },
              style: "destructive",
            },
          ]);
        }}
        icon={loggingOut ? <ActivityIndicator /> : <Exit />}
        ref={accountInfoRef}
        notOpen={true}
      />

      <View style={[{ marginTop: 30 }]}>
        <Box
          heading="Face ID"
          _onPress={() => {}}
          icon={<View />}
          ref={accountInfoRef}
          notOpen={true}
          rightElement={
            <Switch
              value={faceIDEnabled}
              onValueChange={(value: any) => setFaceIDEnabled(value)}
              style={{ marginLeft: "auto" }}
            />
          }
        />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
