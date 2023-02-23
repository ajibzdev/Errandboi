import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import Layout from "../../constants/Layout";
import Box from "../shared/Box";
import Plus from "../../assets/icons/PlusIcon.svg";
import AuthInput from "../shared/AuthInput";
import GlobalStyles from "../../GlobalStyles";

const { height, width } = Layout.window;

type CardType = {
  cardNumber: string;
  setCardNumber: any;
  expDate: string;
  setExpDate: any;
  cvv: string;
  setCvv: any;
  firstName: string;
  setFirstName: any;
  lastName: string;
  setLastName: any;
};

const PaymentView = React.forwardRef(
  (
    {
      cardNumber,
      setCardNumber,
      cvv,
      setCvv,
      expDate,
      setExpDate,
      firstName,
      lastName,
      setFirstName,
      setLastName,
    }: CardType,
    ref
  ) => {
    const cardNumberRef = React.useRef<any>();
    const cvvRef = React.useRef<any>();
    const expDateRef = React.useRef<any>();

    return (
      <View>
        <AuthInput
          label="Card Number"
          ref={cardNumberRef}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <View style={[GlobalStyles.flexRow, GlobalStyles.width100]}>
          <AuthInput
            label="CVV"
            value={cvv}
            onChangeText={setCvv}
            ref={cvvRef}
          />
          <View style={[{ marginLeft: 24 }]}>
            <AuthInput
              label="Expiry Date"
              value={expDate}
              onChangeText={setExpDate}
              ref={expDateRef}
            />
          </View>
        </View>
      </View>
    );
  }
);
const PaymentBottomSheet = React.forwardRef(
  (
    {
      cardNumber,
      setCardNumber,
      cvv,
      setCvv,
      expDate,
      setExpDate,
      firstName,
      setFirstName,
      lastName,
      setLastName,
    }: CardType,
    ref
  ) => {
    const paymentRef = React.useRef<any>();

    return (
      <BottomSheet
        ref={ref}
        heading="Edit Payment Details"
        height={height * 0.6}
      >
        <PaymentView
          ref={ref}
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
        />
      </BottomSheet>
    );
  }
);

export default PaymentBottomSheet;

const styles = StyleSheet.create({});
