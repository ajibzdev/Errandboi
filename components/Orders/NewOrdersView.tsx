import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import FoodServiceOrderItem from "./FoodServiceOrderItem";
import { FlatList } from "react-native-gesture-handler";
import { shopOrders } from "../../data/Orders";

const NewOrdersView = () => {
  return (
    <View style={[GlobalStyles.root]}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={shopOrders}
        renderItem={({ item }) => {
          return (
            <FoodServiceOrderItem
              pending={item.pending}
              items={item.items}
              totalPrice={item.totalPrice}
              numberOfItems={item.items.length}
              orderId={item.orderId}
              orderedBy={item.orderedBy}
              openingPickupTime={item.openingPickupTime}
              closingPickupTime={item.closingPickupTime}
            />
          );
        }}
      />
    </View>
  );
};

export default NewOrdersView;

const styles = StyleSheet.create({});
