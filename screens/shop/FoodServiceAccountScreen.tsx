import { StyleSheet, Text, View, Switch, ScrollView } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Box from "../../components/shared/Box";
import { ScreenNavigationType } from "../../types";
import Padlock from "../../assets/icons/Padlock.svg";
import Card from "../../assets/icons/CardIcon.svg";
import Location from "../../assets/icons/LocationBlackIcon.svg";
import Trash from "../../assets/icons/TrashBlackIcon.svg";
import Exit from "../../assets/icons/ExitIcon.svg";

const FoodServiceAccountScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Refs
  const accountInfoRef = React.useRef<any>();
  const paymentRef = React.useRef<any>();
  const addressRef = React.useRef<any>();
  const deleteRef = React.useRef<any>();
  const exitRef = React.useRef<any>();
  const faceIdRef = React.useRef<any>();

  const [faceIDEnabled, setFaceIDEnabled] = React.useState<boolean>(false);

  return (
    <ScrollView
      style={[GlobalStyles.root, GlobalStyles.paddingHorizontalLarge]}
    >
      <Text style={[Fonts.sansH1]}>Account Settings</Text>

      <Box
        heading="Store Info"
        _onPress={() => {
          navigation.navigate("FoodServiceStoreInfoScreen");
        }}
        icon={<Padlock />}
        ref={accountInfoRef}
        notOpen={true}
      />
      <Box
        heading="Payment & Billing"
        _onPress={() => {
          navigation.navigate("FoodServicePaymentScreen");
        }}
        icon={<Card />}
        ref={paymentRef}
        notOpen={true}
      />
      <Box
        heading="Account Info"
        _onPress={() => {
          navigation.navigate("FoodServiceAccountInfoScreen");
        }}
        icon={<Padlock />}
        ref={accountInfoRef}
        notOpen={true}
      />
      <Box
        heading="Transaction History"
        _onPress={() => {
          navigation.navigate("FoodServiceTransactionScreen");
        }}
        icon={<Card />}
        ref={paymentRef}
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
        heading="Withdraw"
        _onPress={() => {
          navigation.navigate("FoodServiceWithdrawScreen");
        }}
        icon={<Card />}
        ref={paymentRef}
        notOpen={true}
      />
      <Box
        heading="Sign out"
        _onPress={() => {}}
        icon={<Exit />}
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
              onValueChange={(value) => setFaceIDEnabled(value)}
              style={{ marginLeft: "auto" }}
            />
          }
        />
      </View>
    </ScrollView>
  );
};

export default FoodServiceAccountScreen;

const styles = StyleSheet.create({});
