import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { OrderItemType } from "../../types";
import GlobalStyles from "../../GlobalStyles";
import { Shadows } from "../../constants/Colors";
import Arrow from "../../assets/icons/ArrowRightIcon.svg";
import Dot from "../../assets/icons/SmallDotIcon.svg";
import ProfilePicture from "../shared/ProfilePicture";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";

type OrdersItemType = {
  order: OrderItemType;
};
const OrdersItem = ({ order }: OrdersItemType) => {
  return (
    <View
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.justifySpaceBetween,
        GlobalStyles.alignCenter,
        GlobalStyles.marginVerticalLarge,

        Shadows.shadowLight,
        { paddingVertical: 10 },
      ]}
    >
      <ProfilePicture uri={order.image} />
      <View
        style={[
          GlobalStyles.flex1,
          { marginLeft: Sizes.large, alignSelf: "flex-start" },
        ]}
      >
        <Text
          style={[Fonts.sansNormal, { fontFamily: "sans-semiBold" }]}
          numberOfLines={1}
        >
          {order.label}{" "}
        </Text>
        <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
          <Text style={[Fonts.sans14, { fontSize: 12 }]}>₦{order.price}</Text>
          <Dot
            height={2}
            width={2}
            style={[GlobalStyles.marginHorizontalSmall]}
          />
          <Text style={[Fonts.sans14, { fontSize: 12 }]}>{order.date} </Text>
        </View>
      </View>
      <Arrow width={8} height={13} />
    </View>
  );
};

export default OrdersItem;

const styles = StyleSheet.create({});
