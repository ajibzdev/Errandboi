import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Colors, { Shadows } from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import {
  capitalizeSentence,
  numberWithCommas,
} from "../../utils/utilityFunctions";
import moment from "moment";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ActionButton from "../shared/ActionButton";
// Svgs
import Green from "../../assets/icons/StatusGreenIcon.svg";
import Canceled from "../../assets/icons/StatusDeclineIcon.svg";
import { useNavigation } from "@react-navigation/native";

type FoodServiceOrderItemType = {
  orderId: string;
  orderedBy: string;
  numberOfItems: number;
  totalPrice: number;
  openingPickupTime: Date;
  closingPickupTime: Date;
  items: string[];
  pending: boolean;
  isHistory?: boolean;
  delivered?: boolean;
};

const FoodServiceOrderItem: React.FC<FoodServiceOrderItemType> = ({
  closingPickupTime,
  items,
  numberOfItems,
  openingPickupTime,
  orderId,
  orderedBy,
  totalPrice,
  pending,
  isHistory,
  delivered,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.paddingVerticalMedium,

        Shadows.shadowLight,
        styles.container,
      ]}
    >
      {isHistory && (
        <View style={styles.status}>
          {delivered ? <Green /> : <Canceled />}
        </View>
      )}
      <Text
        style={[
          Fonts.sansSemiBold,
          GlobalStyles.marginVerticalMedium,
          { fontSize: 18 },
        ]}
      >{`${orderId} - ${capitalizeSentence(
        orderedBy
      )} ordered ${numberOfItems} items`}</Text>

      <Text
        style={[
          Fonts.sansNormal,
          GlobalStyles.marginVerticalMedium,
          { color: Colors.grey7D7D, fontSize: 12 },
        ]}
      >
        {numberOfItems} items
      </Text>

      <View style={[GlobalStyles.flexRow, GlobalStyles.justifySpaceBetween]}>
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansSemiBold, { marginBottom: 4, fontSize: 14 }]}>
            ₦{numberWithCommas(totalPrice)}
          </Text>
          <Text
            style={[
              Fonts.sansSemiBold,
              { color: Colors.grey6C6C, fontSize: 12 },
            ]}
          >
            Delivery Pay
          </Text>
        </View>
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansSemiBold, { marginBottom: 4, fontSize: 14 }]}>
            <Text>{moment(openingPickupTime).format("h:mm a")} </Text> -{" "}
            <Text>{moment(closingPickupTime).format("h:mm a")} </Text>
          </Text>
          <Text
            style={[
              Fonts.sansSemiBold,
              { color: Colors.grey6C6C, fontSize: 12 },
            ]}
          >
            Pickup Time Between
          </Text>
        </View>
        <View style={[GlobalStyles.flex1, { alignSelf: "flex-start" }]}>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate("FoodServiceOrderDetailsScreen", {
                id: orderId,
              });
            }}
          >
            <Text
              style={[
                Fonts.sansRegular,
                GlobalStyles.textAlignCenter,
                { marginBottom: 4, textDecorationLine: "underline" },
              ]}
            >
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }} />
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 6 }} />}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: Colors.greyF1F1,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={[
                  Fonts.sansSemiBold,
                  { color: Colors.grey7D7D, fontSize: 14 },
                ]}
              >
                {capitalizeSentence(item)}{" "}
              </Text>
            </View>
          );
        }}
      />
      <View style={{ marginTop: 10 }} />
      {!isHistory && (
        <View>
          {pending ? (
            <Text
              style={[
                Fonts.sansNormal,
                {
                  textDecorationLine: "underline",
                  color: Colors.yellowFFDC,
                  alignSelf: "flex-start",
                },
              ]}
            >
              Pending Errandboi matching
            </Text>
          ) : (
            <View>
              <ActionButton
                onPress={() => {}}
                label={"Confirm ErrandBoi Identity"}
                active={true}
                backgroundColor={Colors.primary}
                style={{ alignSelf: "flex-start" }}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default FoodServiceOrderItem;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.greyD5D4,
    position: "relative",
  },
  status: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
