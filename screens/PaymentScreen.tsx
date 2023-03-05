import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthInput from "../components/shared/AuthInput";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import Sizes from "../constants/Sizes";
import BottomShadow from "../components/shared/BottomShadow";
import FullWidthButton from "../components/shared/FullWidthButton";
import { ScreenNavigationType } from "../types";
// Svg
import Plus from "../assets/icons/PlusIcon.svg";
import Box from "../components/shared/Box";
import MastercardIcon from "../assets/icons/MasterCardIcon.svg";
import Fonts from "../constants/Fonts";

const PaymentScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // User
  const [cards, setCards] = React.useState([
    {
      cardNumber: 12345678910111,
      cvv: 123,
    },
  ]);

  // Add Card
  const addCardHandler = () => {};
  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Payment" />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[
          GlobalStyles.flex1,
          GlobalStyles.backgroundColorWhite,
          GlobalStyles.paddingHorizontalLarge,
        ]}
      >
        <View style={[{ marginTop: Sizes.large }]} />

        <Box
          heading="Add Card"
          _onPress={addCardHandler}
          notOpen={true}
          icon={<Plus />}
        />

        <View style={{ marginTop: Sizes.extraLarge }} />
        {cards.map((item) => (
          <Box
            key={item.cardNumber}
            heading="Mastercard"
            icon={<MastercardIcon />}
            label={`Ending    ${item.cardNumber.toString().slice(-4)}`}
            rightElement={<View></View>}
            notOpen={true}
          />
        ))}
        <Text style={[Fonts.sansH4]}>
          Swipe left or right to edit and delete respectively
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
