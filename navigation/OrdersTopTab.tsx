import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewOrdersView from "../components/Orders/NewOrdersView";
import HistoryOrdersView from "../components/Orders/HistoryOrdersView";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

const Tab = createMaterialTopTabNavigator();

const OrdersTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },

        tabBarLabelStyle: { ...Fonts.sansSemiBold, fontSize: 16 },
        tabBarStyle: { backgroundColor: "transparent" },
      }}
    >
      <Tab.Screen
        name="NewOrders"
        component={NewOrdersView}
        options={{ tabBarLabel: "New Orders" }}
      />
      
      <Tab.Screen
        name="History"
        options={{ tabBarLabel: "History" }}
        component={HistoryOrdersView}
      />
    </Tab.Navigator>
  );
};

export default OrdersTopTab;

const styles = StyleSheet.create({});
