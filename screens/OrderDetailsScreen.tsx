import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import { ScreenNavigationType } from "../types";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Location from "../assets/icons/LocationBlackIcon.svg";
import Calendar from "../assets/icons/CalendarIcon.svg";
import { CartData } from "../data/Cart";
import BottomShadow from "../components/shared/BottomShadow";
import Sizes from "../constants/Sizes";

export const GreyText = ({ text }: { text: string }) => {
  return <Text style={[Fonts.sansSemiBold, styles.greyText]}>{text}</Text>;
};
const OrderDetailsScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  const [status, setStatus] = React.useState<boolean>(false);
  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Order Details" />

      <View
        style={[
          GlobalStyles.alignCenter,
          GlobalStyles.marginVerticalLarge,
          GlobalStyles.flex1,
        ]}
      >
        <GreyText text="Order Number" />
        <Text style={[Fonts.sansH1]}>6571</Text>

        <View style={{ marginTop: 16 }} />
        <GreyText text="Delivery From" />
        <Text style={[Fonts.sansSemiBold, { fontSize: 16 }]}>
          BGH Restaurant, Big Meals, Talk Shop Queen Esther
        </Text>

        <View style={{ marginTop: 16 }} />
        <GreyText text="Delivery To" />

        <View style={[GlobalStyles.flexRow]}>
          <Location height={12} width={12} />
          <Text style={[Fonts.sansSemiBold, { fontSize: 14, marginLeft: 8 }]}>
            Felicia Adebisi Activity Hall
          </Text>
        </View>

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

            <Text style={[Fonts.sansSemiBold, { fontSize: 14, marginLeft: 8 }]}>
              EST. PICKUP TIME
            </Text>
          </View>

          <Text>Status</Text>
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

          {status ? (
            <Text style={[Fonts.sansNormal, { color: "green" }]}>Ready</Text>
          ) : (
            <Text style={[Fonts.sansNormal, { color: Colors.yellowFFDC }]}>
              Pending
            </Text>
          )}
        </View>

        <View style={{ marginTop: 32 }} />
        <GreyText text="Items & Payment" />

        <Text style={[Fonts.sansH2, { marginTop: 20 }]}>Order...</Text>
        <View
          style={[GlobalStyles.paddingHorizontalLarge, GlobalStyles.width100]}
        >
          {CartData.map((item) => {
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
      </View>
      <BottomShadow style={[{ alignItems: "flex-start" }]}>
        <View
          style={[GlobalStyles.paddingHorizontalLarge, { paddingBottom: 20 }]}
        >
          <View
            style={[
              GlobalStyles.flex1,
              GlobalStyles.justifySpaceBetween,
              GlobalStyles.flexRow,
              GlobalStyles.deviceViewWidth,
              GlobalStyles.marginVerticalSmall,
              { paddingRight: Sizes.extraLarge },
            ]}
          >
            <Text style={[Fonts.sansRegular]}>Subtotal: </Text>
            <Text style={[Fonts.sansRegular]}>₦ 1,250</Text>
          </View>
          <View
            style={[
              GlobalStyles.flex1,
              GlobalStyles.justifySpaceBetween,
              GlobalStyles.flexRow,
              GlobalStyles.deviceViewWidth,
              GlobalStyles.marginVerticalSmall,
              { paddingRight: Sizes.extraLarge },
            ]}
          >
            <Text style={[Fonts.sansRegular]}>Delivery: </Text>
            <Text style={[Fonts.sansRegular]}>₦ 850</Text>
          </View>

          <View
            style={[
              GlobalStyles.flex1,
              GlobalStyles.justifySpaceBetween,
              GlobalStyles.flexRow,
              GlobalStyles.deviceViewWidth,
              GlobalStyles.marginVerticalSmall,
              { paddingRight: Sizes.extraLarge },
            ]}
          >
            <Text style={[Fonts.sansBold, { fontSize: 18 }]}>Total: </Text>
            <Text style={[Fonts.sansRegular]}>₦2,100</Text>
          </View>
        </View>
      </BottomShadow>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  greyText: {
    fontSize: 12,
    color: Colors.grey7D7D,
  },
});
