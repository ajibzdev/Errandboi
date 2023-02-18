import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import Fonts from "../constants/Fonts";
import OrdersIcon from "../assets/icons/NoOrdersIcon.svg";
import Colors from "../constants/Colors";
import OrdersList from "../components/Orders/OrdersList";
import Sizes from "../constants/Sizes";
import { completedOrders, pendingOrders } from "../data/Orders";

const OrdersScreen = () => {
  const ordersLength = 1;
  const pendingOrdersLength = pendingOrders.length;
  const completedOrdersLength = completedOrders.length;

  return (
    <View style={[GlobalStyles.paddingHorizontalLarge]}>
      <Text style={[Fonts.sansH1]}>Orders</Text>
      {ordersLength <= 0 && (
        <View style={[GlobalStyles.flexCenter, GlobalStyles.width100]}>
          <View
            style={[
              GlobalStyles.width100,
              GlobalStyles.alignCenter,
              GlobalStyles.marginVerticalLarge,
            ]}
          >
            <OrdersIcon height={233} width={300} />

            <Text
              style={[
                Fonts.sansRegular,

                { fontFamily: "sans-black", marginTop: 16, marginBottom: 8 },
              ]}
            >
              Start your first order
            </Text>

            <Text style={[{ color: Colors.grey6C6C }, Fonts.sansNormal]}>
              Current and past orders will appear here
            </Text>
          </View>
        </View>
      )}

      {pendingOrdersLength >= 0 && (
        <OrdersList
          data={pendingOrders}
          header={
            <Text
              style={[
                Fonts.sansNormal,
                { fontFamily: "sans-black", marginTop: Sizes.large },
                // GlobalStyles.marginVerticalLarge,
              ]}
            >
              PENDING ({pendingOrdersLength}){" "}
            </Text>
          }
        />
      )}

      {completedOrdersLength >= 0 && (
        <OrdersList
          data={completedOrders}
          header={
            <Text
              style={[
                Fonts.sansNormal,
                { fontFamily: "sans-black", marginTop: Sizes.large },
                // GlobalStyles.marginVerticalLarge,
              ]}
            >
              COMPLETED ({completedOrdersLength}){" "}
            </Text>
          }
        />
      )}
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
