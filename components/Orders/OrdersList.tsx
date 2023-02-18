import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import OrdersItem from "./OrdersItem";
import { pendingOrders } from "../../data/Orders";

type OrderListType = {
  data: any;
  header: React.ReactElement;
};
const OrdersList = ({ header, data }: OrderListType) => {
  return (
    <FlatList
      ListHeaderComponent={header}
      data={data}
      renderItem={({ item }) => <OrdersItem order={item} />}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OrdersList;

const styles = StyleSheet.create({});
