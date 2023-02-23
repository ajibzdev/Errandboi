import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import AuthInput from "../shared/AuthInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import FullWidthButton from "../shared/FullWidthButton";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../GlobalStyles";

const { height, width } = Layout.window;

type LocationType = {
  location: string;
  setLocation: any;
  dropOffInstructions: string;
  setDropOffInstructions: any;
};

type LocationViewType = {
  location: LocationType;
};

const LocationView = React.forwardRef(
  (
    {
      location,
      setDropOffInstructions,
      setLocation,
      dropOffInstructions,
    }: LocationType,
    ref: any
  ) => {
    const hallRef = React.useRef<any>();
    const dropRef = React.useRef<any>();

    return (
      <View style={[GlobalStyles.width100, GlobalStyles.alignCenter]}>
        <AuthInput
          label="Hall of Residence / Location "
          value={location}
          onChangeText={setLocation}
          ref={hallRef}
        />

        <TextInput
          numberOfLines={4}
          placeholder={"Drop Off Instructions "}
          placeholderTextColor={Colors.grey7D7D}
          style={styles.input}
          value={dropOffInstructions}
          onChangeText={setDropOffInstructions}
          multiline={true}
        />

        <View style={{ marginVertical: 24 }} />
        <FullWidthButton
          onPress={() => {
            ref.current.close();
          }}
          label="Save Address"
        />
      </View>
    );
  }
);

const LocationBottomSheet = React.forwardRef(
  (
    {
      location,
      dropOffInstructions,
      setDropOffInstructions,
      setLocation,
    }: LocationType,
    ref
  ) => {
    return (
      <BottomSheet ref={ref} heading="Edit Address" height={height * 0.6}>
        <LocationView
          dropOffInstructions={dropOffInstructions}
          location={location}
          setDropOffInstructions={setDropOffInstructions}
          setLocation={setLocation}
          ref={ref}
        />
      </BottomSheet>
    );
  }
);

export default LocationBottomSheet;

const styles = StyleSheet.create({
  input: {
    height: 80,
    flex: 1,
    width: "100%",
    borderRadius: Sizes.medium,
    backgroundColor: Colors.backgroundInput,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: Sizes.medium,

    fontFamily: "sans-regular",
  },
});
