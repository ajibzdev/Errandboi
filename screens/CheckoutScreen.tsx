import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import GlobalStyles from "../GlobalStyles";
import Fonts from "../constants/Fonts";
// SVG
import MastercardIcon from "../assets/icons/MasterCardIcon.svg";
import Arrow from "../assets/icons/ArrowRightIcon.svg";
import Call from "../assets/icons/PhoneIcon.svg";
import Schedule from "../assets/icons/ScheduleIcon.svg";
import Card from "../assets/icons/CardIcon.svg";
import Location from "../assets/icons/LocationBlackIcon.svg";
import NavTitle from "../components/shared/NavTitle";
import LocationBottomSheet from "../components/Checkout/LocationBottomSheet";
import PhoneBottomSheet from "../components/Checkout/PhoneBottomSheet";
import Box from "../components/shared/Box";
import BottomSheet from "../components/shared/BottomSheet";
import Layout from "../constants/Layout";
import PaymentBottomSheet from "../components/Checkout/PaymentBottomSheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomShadow from "../components/shared/BottomShadow";
import FullSeperatedButton from "../components/shared/FullSeperatedButton";
import { ScreenNavigationType } from "../types";

const { height, width } = Layout.window;

const CheckoutScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  // STATE
  // location
  const [location, setLocation] = React.useState<string>("");
  const [dropOffInstructions, setDropOffInstructions] =
    React.useState<string>("");

  // Phone
  const [phone, setPhone] = React.useState<string>("");

  // Card
  const [cardNumber, setCardNumber] = React.useState<string>("");
  const [expDate, setExpDate] = React.useState<string>("");
  const [cvv, setCvv] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  const [cards, setCards] = useState([
    {
      cardNumber: 12345678910111,
      cvv: 123,
    },
  ]);

  // REF
  const locationRef = React.useRef<any>();
  const paymentRef = React.useRef<any>();
  const numberRef = React.useRef<any>();
  const cardRef = React.useRef<any>();

  const handleSubmit = async () => {
    navigation.navigate("SubmitOrderScreen", { location, dropOffInstructions });
  };

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Checkout" />

      <LocationBottomSheet
        ref={locationRef}
        dropOffInstructions={dropOffInstructions}
        location={location}
        setDropOffInstructions={setDropOffInstructions}
        setLocation={setLocation}
      />

      <PhoneBottomSheet ref={numberRef} phone={phone} setPhone={setPhone} />
      <PaymentBottomSheet
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cvv={cvv}
        setCvv={setCvv}
        expDate={expDate}
        setExpDate={setExpDate}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        ref={cardRef}
      />

      <BottomSheet
        ref={paymentRef}
        heading="Add Payment Method"
        height={height * 0.4}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            cardRef.current.open();
          }}
        >
          <View
            style={[
              {
                paddingBottom: 24,
                borderBottomWidth: 0.6,
                borderBottomColor: Colors.grey7D7D,
              },
              GlobalStyles.flexRow,
              GlobalStyles.marginVerticalExtraLarge,
              GlobalStyles.width100,
            ]}
          >
            <View style={[GlobalStyles.flex1, GlobalStyles.flexRow]}>
              <View>{<Card />}</View>
              <View style={[{ marginLeft: 10 }]}>
                <Text style={[Fonts.sansH3]} numberOfLines={1}>
                  {"Add Card"}
                </Text>
              </View>
            </View>

            <Arrow height={9} width={14} />
          </View>
        </TouchableWithoutFeedback>
      </BottomSheet>

      <View style={[{}, GlobalStyles.paddingHorizontalLarge]}>
        <Box
          heading="Delivery Time"
          icon={<Schedule height={20} width={20} />}
          rightElement={
            <Text style={[Fonts.sansH4, { color: Colors.grey6C6C }]}></Text>
          }
          notOpen={true}
        />

        <Box
          heading={location || "Location"}
          label={dropOffInstructions || "Drop Off instructions"}
          icon={<Location color={Colors.black} height={20} width={20} />}
          ref={locationRef}
        />
        <Box
          heading={phone || "Enter Phone Number"}
          ref={numberRef}
          icon={<Call height={20} width={20} />}
        />

        <View style={{ marginTop: 38 }} />

        <View style={[GlobalStyles.width100, GlobalStyles.flexRow]}>
          <Text
            style={[
              Fonts.sansH3,
              GlobalStyles.flex1,
              { fontFamily: "sans-semiBold", alignSelf: "flex-start" },
            ]}
          >
            Payment
          </Text>

          {cards.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                cardRef.current.open();
              }}
            >
              <Text style={[GlobalStyles.textColorPrimary, Fonts.sans14]}>
                Change
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Box
          heading="Add Payment Method"
          ref={paymentRef}
          icon={<Card height={20} width={20} />}
        />

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
      </View>

      <BottomShadow bottom={-20}>
        <FullSeperatedButton
          label="Place Order"
          smallerLabel="₦2,100"
          onPress={handleSubmit}
          disabled={false}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
