import {
  ActivityIndicator,
  ActivityIndicatorBase,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../GlobalStyles";
import NavTitle from "../../components/shared/NavTitle";
import Fonts from "../../constants/Fonts";
import { ScreenNavigationType } from "../../types";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import Calendar from "../../assets/icons/CalendarIcon.svg";
import { GreyText } from "../OrderDetailsScreen";
import Location from "../../assets/icons/LocationBlackIcon.svg";
import Tag from "../../assets/icons/TagIcon.svg";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";

export const Heading = ({
  label,
  center = false,
}: {
  label: string | React.ReactElement;
  center?: true | false;
}) => {
  return (
    <View
      style={[
        GlobalStyles.width100,
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.marginVerticalLarge,
        { backgroundColor: Colors.greyF9F9, paddingVertical: 10 },
      ]}
    >
      <Text
        style={[
          Fonts.sansSemiBold,
          { fontSize: Sizes.large, textAlign: "left" },
          center && { textAlign: "center" },
        ]}
      >
        {label}{" "}
      </Text>
    </View>
  );
};

const FoodServiceOrderDetailsScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [order, setOrder] = React.useState<any>({
    items: [
      { price: 650, count: 1, label: "spaghetti" },
      { price: 1450, count: 1, label: "Chi Exotic" },
      { price: 100, count: 3, label: "Plantain" },
      { price: 50, count: 2, label: "Caprisone" },
    ],
    totalPrice: 1251,
    numberOfItems: 10,
    orderId: "154578",
    orderedBy: "Ajibz",
    openingPickupTime: new Date(
      "Date Sun Mar 05 2023 09:45:25 GMT+0100 (West Africa Standard Time)"
    ),
    pending: true,

    closingPickupTime: new Date(
      "Date Sun Mar 05 2023 23:45:25 GMT+0100 (West Africa Standard Time)"
    ),
    delivered: true,
    deliveryAddress: "Felicia Adebisi Activity Hall",
  });

  React.useEffect(() => {}, [order]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Order Details" />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[GlobalStyles.flex1]}
      >
        <View style={[{ marginTop: Sizes.medium }]} />

        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.justifySpaceBetween,
          ]}
        >
          <Text style={[Fonts.sansH1, { fontSize: 16 }]}>Unique Order ID:</Text>
          <Text
            style={[Fonts.sansH1, { fontSize: 16, color: Colors.green71D }]}
          >
            {order.orderId}{" "}
          </Text>
        </View>

        <Heading label="Errander Boi" />
        <View style={[GlobalStyles.paddingHorizontalLarge]}>
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
          <Text style={[Fonts.sansNormal, { marginTop: 12 }]}>
            Package the order, an Erranboi will be assigned shortly.
          </Text>
        </View>

        <Heading label="Details" />

        <View>
          <View style={{ marginTop: 16 }} />
          <View
            style={[
              // GlobalStyles.flex1,
              GlobalStyles.width100,
              GlobalStyles.flexRow,
              GlobalStyles.justifySpaceBetween,
              { paddingHorizontal: 23, paddingRight: 39 },
            ]}
          >
            <View style={[GlobalStyles.flexRow]}>
              <Calendar
                fill={Colors.black}
                stroke={Colors.black}
                height={13}
                width={13}
              />

              <Text
                style={[Fonts.sansSemiBold, { fontSize: 14, marginLeft: 8 }]}
              >
                EST. PICKUP TIME
              </Text>
            </View>

            <View />
          </View>

          <View style={{ marginTop: 8 }} />
          <View
            style={[
              // GlobalStyles.flex1,
              GlobalStyles.width100,
              GlobalStyles.flexRow,
              GlobalStyles.justifySpaceBetween,
              { paddingHorizontal: 23, paddingRight: 39 },
            ]}
          >
            <View style={[GlobalStyles.flexRow]}>
              <Text style={[Fonts.sansNormal, { fontSize: 14, marginLeft: 8 }]}>
                Arrives between{" "}
                <Text
                  style={[
                    Fonts.sansBold,
                    { fontSize: 14 },
                    GlobalStyles.textColorPrimary,
                  ]}
                >
                  11:51 PM - 12:01 AM
                </Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Delivery To */}
        <View style={[GlobalStyles.line]} />
        <View style={[GlobalStyles.paddingHorizontalLarge]}>
          <View style={[GlobalStyles.flexRow]}>
            <Tag />
            <Text style={[Fonts.sansNormal, { marginLeft: 8 }]}>
              Order Details
            </Text>
          </View>
          <View style={{ marginTop: 27 }} />

          <GreyText text="Delivery To" />
          <View style={[GlobalStyles.flexRow]}>
            <Location height={12} width={12} />
            <Text style={[Fonts.sansSemiBold, { fontSize: 14, marginLeft: 8 }]}>
              {order.deliveryAddress}
            </Text>
          </View>
        </View>

        <View
          style={[GlobalStyles.paddingHorizontalLarge, { marginBottom: 200 }]}
        >
          <Heading label="Products" center={true} />
          {order.items.map((item: any) => {
            return (
              <View
                key={item.label}
                style={[
                  GlobalStyles.flexRow,
                  GlobalStyles.marginVerticalMedium,
                ]}
              >
                <Text style={[Fonts.sansNormal]}>{item.count}x</Text>
                <Text
                  style={[
                    GlobalStyles.flex1,
                    Fonts.sansSemiBold,
                    { marginLeft: 12, alignItems: "flex-start", fontSize: 14 },
                  ]}
                >
                  {item.label}
                </Text>
                <Text>₦{item.price}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <BottomShadow>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifySpaceBetween,
            GlobalStyles.paddingHorizontalLarge,
          ]}
        >
          <Text style={[Fonts.sansH1, { fontSize: 16 }]}>Unique Order ID:</Text>
          <Text style={[Fonts.sansH1, { fontSize: 16 }]}>{order.orderId} </Text>
        </View>
        {!order.pending && (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.justifySpaceBetween,
              GlobalStyles.paddingHorizontalLarge,
            ]}
          >
            <Text style={[Fonts.sansH1, { fontSize: 16 }]}>
              ErrandBoi Mobile Phone:
            </Text>
            <Text style={[Fonts.sansH1, { fontSize: 16 }]}>
              +234 808 1383 921
            </Text>
          </View>
        )}
        <FullWidthButton
          backgroundColor={Colors.green71D}
          label="Confirm ErrandBoi Identity"
          disabled={order.pending}
          onPress={() => {}}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default FoodServiceOrderDetailsScreen;

const styles = StyleSheet.create({});
