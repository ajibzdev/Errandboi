import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import AuthInput from "../shared/AuthInput";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";

type AddAccountType = {
  accountName: string;
  setAccountName: any;
  accountNumber: any;
  setAccountNUmber: any;
  isEditing?: boolean;
  setBankName: any;
  bankName: string;
  bankNameRef: any;
  accountNameRef: any;
  accountNumberRef: any;
};

const AddAccountDetailsBottomSheet = React.forwardRef(
  (
    {
      accountName,
      accountNumber,
      bankName,
      setAccountNUmber,
      setAccountName,
      setBankName,
      accountNameRef,
      accountNumberRef,
      bankNameRef,
      isEditing,
    }: AddAccountType,
    ref
  ) => {
    return (
      <BottomSheet
        ref={ref}
        heading={isEditing ? "Edit Account Details" : "Add Account Details"}
      >
        <View style={[GlobalStyles.alignCenter]}>
          <AuthInput
            label="Bank Name"
            onChangeText={setBankName}
            ref={bankNameRef}
            value={bankName}
          />
          <AuthInput
            label="Account Number"
            onChangeText={setAccountNUmber}
            ref={accountNumberRef}
            value={accountNumber}
            keyboardType={"decimal-pad"}
          />
          <AuthInput
            label="Account Name"
            onChangeText={setAccountNUmber}
            ref={accountNumberRef}
            value={accountName}
          />
          <Text
            style={[
              GlobalStyles.textAlignCenter,

              Fonts.sansRegular,
              {
                fontSize: 12,
                lineHeight: 15,
                textAlign: "left",
                marginTop: 16,
              },
            ]}
          >
            Ensure your account details are accurate below before you click on
            ‘Withdraw’ below.
          </Text>
        </View>
      </BottomSheet>
    );
  }
);

export default AddAccountDetailsBottomSheet;

const styles = StyleSheet.create({});
