import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import AuthInput from "../shared/AuthInput";
import { StateType } from "../../types";
import FullWidthButton from "../shared/FullWidthButton";
// @ts-ignore
import DateTimePicker from "@react-native-community/datetimepicker";

type AvailableHoursType = {
  openingHours: any;
  setOpening: any;

  closingHours: any;
  setClosing: any;

  openingRef: any;
  closingRef: any;

  setActiveIndex: any;
};

const StoreAvailableHours: React.FC<AvailableHoursType> = ({
  closingHours,
  closingRef,
  openingHours,
  openingRef,
  setActiveIndex,
  setClosing,
  setOpening,
}) => {
  const [openTimeModal, setOpenTimeModal] = React.useState<boolean>(false);
  const [closeTimeModal, setCloseTimeModal] = React.useState<boolean>(false);

  return (
    <View
      style={[GlobalStyles.alignCenter, GlobalStyles.paddingHorizontalLarge]}
    >
      {openTimeModal ? (
        <DateTimePicker
          mode="time"
          onChange={(e: any) => {
            setOpening(new Date(e.nativeEvent.timestamp));
            setOpenTimeModal(false);
          }}
          value={openingHours}
          ref={openingRef}
        />
      ) : null}
      {closeTimeModal ? (
        <DateTimePicker
          mode="time"
          onChange={(e: any) => {
            setClosing(new Date(e.nativeEvent.timestamp));
            setCloseTimeModal(false);
          }}
          value={closingHours}
          ref={closingRef}
        />
      ) : null}
      <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
        Add Available Hours
      </Text>

      <Text
        style={[
          Fonts.sansH3,
          ,
          { fontFamily: "sans-semiBold" },
          GlobalStyles.textAlignCenter,
        ]}
      >
        Add the opening and closing time, so your regulars can be notified when
        food is ready.
      </Text>
      <View style={{ marginTop: Sizes.extraLarge }} />

      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.width100,
          { justifyContent: "space-evenly" },
        ]}
      >
        <AuthInput
          label="Opening Time"
          placeholder="9:00AM"
          onChangeText={setOpening}
          ref={openingRef}
          value={openingHours}
          width={"40%"}
          dropdown={true}
          tapFunction={() => {
            setOpenTimeModal(() => true);
          }}
        />
        <AuthInput
          label="Closing Time"
          placeholder="10:00PM"
          onChangeText={setClosing}
          ref={closingRef}
          dropdown={true}
          value={closingHours}
          width={"40%"}
          tapFunction={() => {
            setOpenTimeModal(() => true);
          }}
        />
      </View>

      <FullWidthButton
        label="Next"
        onPress={() => {
          setActiveIndex((prev: any) => ++prev);
        }}
        disabled={false}
      />

      <Text
        style={[
          Fonts.sansH4,
          GlobalStyles.textAlignCenter,
          GlobalStyles.marginVerticalMedium,
        ]}
      >
        By registering as a ‘Store Owner’ you agree to our terms of service and
        privacy policy
      </Text>
    </View>
  );
};

export default StoreAvailableHours;

const styles = StyleSheet.create({});
