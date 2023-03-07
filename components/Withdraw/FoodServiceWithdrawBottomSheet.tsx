import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import GlobalStyles from "../../GlobalStyles";
import AuthInput from "../shared/AuthInput";
import { setInputWithComma } from "../../utils/utilityFunctions";
import Fonts from "../../constants/Fonts";
import FullWidthButton from "../shared/FullWidthButton";
import { StringType } from "../../types";
import Colors from "../../constants/Colors";
import { UserContext } from "../../store/user-context";

type WithdrawType = {
  amount: StringType;
  setAmount: any;
  onPress: () => void;
  amountRef: any;
  addAccountRef: any;
  refObj?: any;
};

const WithdrawView = ({
  amount,
  amountRef,
  setAmount,
  onPress,
  addAccountRef,
  refObj,
}: WithdrawType) => {
  // Context
  const userCtx = React.useContext(UserContext);
  const account = userCtx.user.account[0];
  let dummyAccount = {
    bankName: "Guarantee Trust Bank ",
    accountName: "Ajiboye Bolwatife Ayomide",
    accountNumber: "0224590932",
  };

  return (
    <View style={[GlobalStyles.alignCenter]}>
      <TouchableOpacity
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.width100,
          GlobalStyles.paddingHorizontalLarge,
          GlobalStyles.paddingVerticalLarge,
          styles.account,
        ]}
        onPress={() => {
          refObj.current.close();
          addAccountRef.current.open();
        }}
      >
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansSemiBold, { fontSize: 16 }]}>
            {dummyAccount.bankName}{" "}
          </Text>
          <Text style={[Fonts.sans14]}>{dummyAccount.accountName} </Text>
        </View>
        <Text style={[Fonts.sansH4]}>{dummyAccount.accountNumber}</Text>
      </TouchableOpacity>
      <AuthInput
        label="Amount"
        onChangeText={(text) => {
          setInputWithComma(text, setAmount);
        }}
        ref={amountRef}
        value={amount}
        keyboardType={"decimal-pad"}
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

      <FullWidthButton onPress={onPress} label="Withdraw" disabled={false} />
    </View>
  );
};

const FoodServiceWithdrawBottomSheet = React.forwardRef(
  (
    { amount, amountRef, setAmount, addAccountRef, onPress }: WithdrawType,
    ref: any
  ) => {
    return (
      <BottomSheet heading="Withdraw Funds" ref={ref} height={400}>
        <WithdrawView
          amount={amount}
          amountRef={amountRef}
          onPress={onPress}
          setAmount={setAmount}
          addAccountRef={addAccountRef}
          refObj={ref}
        />
      </BottomSheet>
    );
    1;
  }
);

export default FoodServiceWithdrawBottomSheet;

const styles = StyleSheet.create({
  account: {
    borderWidth: 1,
    borderColor: Colors.greyD5D4,
  },
});
