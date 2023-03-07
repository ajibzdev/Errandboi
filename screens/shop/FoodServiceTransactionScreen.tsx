import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../GlobalStyles";
import NavTitle from "../../components/shared/NavTitle";
import { Heading } from "./FoodServiceOrderDetailsScreen";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import { numberWithCommas } from "../../utils/utilityFunctions";
import moment from "moment";
// Svgs
import Dot from "../../assets/icons/SmallDotIcon.svg";
import Cancel from "../../assets/icons/CancelIcon.svg";
import Decline from "../../assets/icons/StatusDeclineIcon.svg";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";
import { StringType } from "../../types";
import FoodServiceWithdrawBottomSheet from "../../components/Withdraw/FoodServiceWithdrawBottomSheet";
import AddAccountDetailsBottomSheet from "../../components/Withdraw/AddAccountDetailsBottomSheet";

type TransactionType = {
  type: "withdrawal" | "deposit";
  amount: number | null;
  date: Date;
};

const Transaction = ({ type, amount, date }: TransactionType) => {
  return (
    <View
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.marginVerticalLarge,
        GlobalStyles.justifySpaceBetween,
      ]}
    >
      <View style={[GlobalStyles.flex1]}>
        <Text style={{ marginBottom: 8 }}>
          {type == "withdrawal" ? (
            <Text style={[Fonts.sansSemiBold, { fontSize: 16 }]}>
              Withdrawal
            </Text>
          ) : (
            <Text style={[Fonts.sansSemiBold, { fontSize: 16 }]}>Order</Text>
          )}
        </Text>
        <View style={[GlobalStyles.flexRow]}>
          <Text style={[Fonts.sans14]}>{moment(date).fromNow()} </Text>
          <Dot style={[GlobalStyles.marginHorizontalSmall]} />
          <Text style={[Fonts.sans14]}>{moment(date).format("HH:MM a")} </Text>
        </View>
      </View>
      <View style={[GlobalStyles.flexCenter]}>
        <Text
          style={[
            Fonts.sansSemiBold,
            {
              fontSize: 16,
              color: type == "withdrawal" ? Colors.redDB5 : Colors.green71D,
            },
          ]}
        >
          {type == "withdrawal" ? "-" : "+"} ₦{numberWithCommas(amount)}
        </Text>
      </View>
    </View>
  );
};

const FoodServiceTransactionScreen = () => {
  // Boolean
  const [loading, setLoading] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);
  const [warning, setWarning] = React.useState<boolean>(false);

  // States
  const [amount, setAmount] = React.useState<StringType>("");
  const [accountName, setAccountName] = React.useState<string>("");
  const [accountNumber, setAccountNumber] = React.useState<string>("");
  const [bankName, setBankName] = React.useState<string>("");

  // Ref
  const amountRef = React.useRef<any>();
  const modalRef = React.useRef<any>();
  const addAccountRef = React.useRef<any>();
  const accountNameRef = React.useRef<any>();
  const accountNumberRef = React.useRef<any>();
  const bankNameRef = React.useRef<any>();

  // History
  const [history, setHistory] = React.useState<any>({
    balance: 100240,
    data: [
      {
        type: "withdrawal",
        amount: 1250,
        date: " Tue Mar 01 2023 00:42:23 GMT+0100 (West Africa Standard Time)",
      },
      {
        type: "deposit",
        amount: 800,
        date: " Tue Mar 01 2023 00:42:23 GMT+0100 (West Africa Standard Time)",
      },
      {
        type: "withdrawal",
        amount: 1250,
        date: " Tue Mar 01 2023 00:42:23 GMT+0100 (West Africa Standard Time)",
      },
    ],
  });

  // Use Effects
  React.useEffect(() => {
    if (warning) {
      setTimeout(() => {
        setWarning(() => false);
      }, 5000);
    }

    return () => {};
  }, [warning]);

  // Submit
  const handleSubmit = async () => {};
  const handleWithdraw = async () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Tranaction History" />
      <ScrollView
        style={[GlobalStyles.flex1, GlobalStyles.paddingHorizontalLarge]}
      >
        <FoodServiceWithdrawBottomSheet
          amount={amount}
          amountRef={amountRef}
          onPress={handleWithdraw}
          setAmount={setAmount}
          ref={modalRef}
          addAccountRef={addAccountRef}
        />
        <AddAccountDetailsBottomSheet
          accountName={accountName}
          accountNameRef={accountNameRef}
          accountNumber={accountNumber}
          accountNumberRef={accountNumberRef}
          bankName={bankName}
          bankNameRef={bankNameRef}
          setAccountNUmber={setAccountNumber}
          setAccountName={setAccountName}
          setBankName={setBankName}
          ref={addAccountRef}
        />
        <Heading
          label={
            <Text style={[Fonts.sansSemiBold, { fontSize: 20 }]}>
              Balance : <Text style={[{ color: Colors.green71D }]}></Text>₦
              {numberWithCommas(history.balance)}{" "}
            </Text>
          }
        />

        {warning && (
          <View style={[GlobalStyles.flexRow]}>
            <Decline />
            <Text
              style={[
                GlobalStyles.flex1,
                GlobalStyles.textAlignCenter,
                GlobalStyles.marginHorizontallMedium,
                Fonts.sansRegular,
                {
                  fontSize: 12,
                  lineHeight: 15,
                  textAlign: "left",
                  color: Colors.redDB5,
                },
              ]}
            >
              Withdrawal attempt failed could not deposit into your bank
              account, please check your account details.
            </Text>
            <Cancel />
          </View>
        )}

        {history.data.map((item: TransactionType, i: number) => {
          return (
            <Transaction
              amount={item.amount}
              date={item.date}
              type={item.type}
            />
          );
        })}
      </ScrollView>
      <BottomShadow>
        <FullWidthButton
          label="Withdraw Funds"
          onPress={() => {
            modalRef.current.open();
          }}
          backgroundColor={Colors.green71D}
          disabled={false}
          loading={sending}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default FoodServiceTransactionScreen;

const styles = StyleSheet.create({});
