import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import FoodServiceOrderItem from "./FoodServiceOrderItem";
import { FlatList } from "react-native-gesture-handler";
import { shopOrders } from "../../data/Orders";

const HistoryOrdersView = () => {
  return (
    <View style={[GlobalStyles.root]}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={shopOrders}
        renderItem={({ item }) => {
          return (
            // <FoodServiceOrderItem
            //   isHistory={true}
            //   delivered={item.delivered}
            //   pending={item.pending}
            //   items={item.items}
            //   totalPrice={item.totalPrice}
            //   numberOfItems={item.items.length}
            //   orderId={item.orderId}
            //   orderedBy={item.orderedBy}
            //   openingPickupTime={item.openingPickupTime}
            //   closingPickupTime={item.closingPickupTime}
            // />

            <View />
          );
        }}
      />
    </View>
  );
};

export default HistoryOrdersView;

const styles = StyleSheet.create({});
