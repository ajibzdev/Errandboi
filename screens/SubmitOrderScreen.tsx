import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { ScreenNavigationType } from "../types";
import { CartData } from "../data/Cart";
import Calendar from "../assets/icons/CalendarIcon.svg";
import Sizes from "../constants/Sizes";

const SubmitOrderScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  const { location, dropOffInstructions } = route.params;
  const handleCancel = async () => {};

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OrderDetailsScreen");
    }, 3000);
  }, []);
  return (
    <SafeAreaView
      style={[
        GlobalStyles.root,
        GlobalStyles.paddingHorizontalLarge,
        styles.container,
      ]}
    >
      <View style={[GlobalStyles.flex1]}>
        <View style={[{ marginTop: 30 }]} />
        <Text style={[Fonts.sansBold, GlobalStyles.textColorWhite]}>
          Submitting Order...
        </Text>
        <Text
          style={[
            GlobalStyles.textColorWhite,
            Fonts.sansNormal,
            GlobalStyles.marginVerticalLarge,
          ]}
        >
          {location}
        </Text>
        <Text style={[GlobalStyles.textColorWhite, Fonts.sansNormal]}>
          {dropOffInstructions}
        </Text>

        <View
          style={[
            GlobalStyles.marginVerticalLarge,
            GlobalStyles.deviceViewWidth,
            { borderBottomWidth: 1.3, borderBottomColor: Colors.white },
          ]}
        />

        <View>
          <Text style={[Fonts.sansH2, GlobalStyles.textColorWhite]}>
            Order...
          </Text>
          {CartData.map((item) => {
            return (
              <View
                key={item.label}
                style={[GlobalStyles.flexRow, GlobalStyles.marginVerticalSmall]}
              >
                <Text style={[GlobalStyles.textColorWhite]}>
                  {item.count}x <Text>{item.label} </Text>
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.marginVerticalLarge,
            { marginLeft: 24 },
          ]}
        >
          <Calendar />

          <Text
            style={[
              GlobalStyles.textColorWhite,
              Fonts.sansH3,
              GlobalStyles.marginHorizontallMedium,
            ]}
          >
            EST. PICKUP TIME
          </Text>
        </View>

        <Text
          style={[
            { marginLeft: 32 },
            GlobalStyles.textColorWhite,
            Fonts.sans14,
          ]}
        >
          Arrives between{" "}
          <Text style={[GlobalStyles.textColorPrimary]}>
            11:51 PM - 12:01 AM
          </Text>{" "}
        </Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleCancel}>
        <Text style={[Fonts.sansRegular, { fontFamily: "sans-semiBold" }]}>
          Cancel Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SubmitOrderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  btn: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 55,
    height: 55,
    width: 140,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
