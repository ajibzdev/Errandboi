import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Sizes from "../../constants/Sizes";
import GlobalStyles from "../../GlobalStyles";
import ProfilePicture from "../../components/shared/ProfilePicture";
// Svgs
import Profile from "../../assets/icons/ProfilePictureIcon.svg";
import Pencil from "../../assets/icons/PencilPrimaryIcon.svg";

import { handleProfilePicture } from "../../utils/handleImages";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import NavTitle from "../../components/shared/NavTitle";
import AuthInput from "../../components/shared/AuthInput";
import { BooleanType, StringType } from "../../types";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";

const FoodServiceStoreScreen = () => {
  const [value, setValue] = React.useState<string>("");
  const [storeName, setStoreName] = React.useState<StringType>("");
  const [storeAddress, setStoreAddress] = React.useState<StringType>("");
  const [openingTime, setOpeningTime] = React.useState<Date>(new Date());
  const [closingTime, setClosingTime] = React.useState<Date>(new Date());

  const valueRef = React.useRef<any>();
  const storeNameRef = React.useRef<any>();
  const storeAddressRef = React.useRef<any>();
  const openingTimeRef = React.useRef<any>();
  const closingTimeRef = React.useRef<any>();

  //Booleans
  const [openTimeModal, setOpenTimeModal] = React.useState<boolean>(false);
  const [closeTimeModal, setCloseTimeModal] = React.useState<boolean>(false);
  // Loaders
  const [loading, setLoading] = React.useState<BooleanType>(false);
  const handleSubmit = async () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Store Info" />
      <KeyboardAwareScrollView>
        <View
          style={[
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.alignCenter,
          ]}
        >
          <View style={{ marginTop: Sizes.large }} />

          <View style={[GlobalStyles.alignCenter]}>
            {value ? (
              <ProfilePicture uri={value} height={72} width={72} />
            ) : (
              <Profile width={120} height={72} />
            )}
          </View>
          <View style={{ marginTop: 18 }} />
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              handleProfilePicture(setValue, "image", false);
            }}
          >
            <View style={[GlobalStyles.flexRow]}>
              <Pencil height={10} width={10} />

              <Text
                style={[
                  Fonts.sansSemiBold,
                  GlobalStyles.textColorPrimary,
                  { marginLeft: 8, fontSize: 12 },
                ]}
              >
                Edit Banner
              </Text>
            </View>
          </TouchableOpacity>

          {/* <View style={{ marginTop: Sizes.large }} /> */}
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <AuthInput
              label="Store Name"
              placeholder="e.g., BGH Restaurant"
              onChangeText={setValue}
              ref={storeNameRef}
              value={value}
              // width={"93%"}
            />

            <View style={{ marginTop: Sizes.large }} />
            <AuthInput
              label="Store Address"
              placeholder="e.g., Guest house babcock"
              onChangeText={setStoreAddress}
              ref={storeAddressRef}
              value={storeAddress}
            />
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
                ref={openingTimeRef}
                // @ts-ignore
                onChangeText={setOpeningTime}
                // @ts-ignore
                value={openingTime}
                width={"45%"}
                dropdown={true}
                tapFunction={() => {
                  setOpenTimeModal(() => true);
                }}
              />
              <AuthInput
                label="Closing Time"
                placeholder="10:00PM"
                ref={closingTimeRef}
                dropdown={true}
                // @ts-ignore
                onChangeText={setClosingTime}
                // @ts-ignore
                value={moment(closingTime).format("HH:MM a")}
                width={"45%"}
                tapFunction={() => {
                  setOpenTimeModal(() => true);
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAwareScrollView>

      <BottomShadow>
        <FullWidthButton
          label="Save Changes"
          onPress={handleSubmit}
          disabled={
            storeAddress == "" ||
            storeName == "" ||
            openingTime == null ||
            closingTime == null
          }
          loading={loading}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default FoodServiceStoreScreen;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.6,
    borderColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 32,
  },
});
