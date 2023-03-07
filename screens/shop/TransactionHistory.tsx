import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../GlobalStyles";
import NavTitle from "../../components/shared/NavTitle";
import { Heading } from "./FoodServiceOrderDetailsScreen";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";
import Colors from "../../constants/Colors";

const TransactionHistory = () => {
  const [history, setHistory] = React.useState();
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Transaction History" />

      <View style={[GlobalStyles.flex1]}>
        <Heading label={`Balance ${history.balance}`} />
      </View>

      <BottomShadow>
        <FullWidthButton
          label="Withdraw Funds"
          onPress={() => {}}
          backgroundColor={Colors.green71D}
          loading={loading}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
