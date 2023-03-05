import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import Paginator from "../components/FoodServiceDetails/Paginator";
import StoreNameView from "../components/FoodServiceDetails/StoreNameView";
import StoreAddressView from "../components/FoodServiceDetails/StoreAddressView";
import StoreAvailableHours from "../components/FoodServiceDetails/StoreAvailableHours";
import StoreBanner from "../components/FoodServiceDetails/StoreBanner";
import Sizes from "../constants/Sizes";
import Fonts from "../constants/Fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScreenNavigationType } from "../types";

const StoreDetailsScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  // States
  const [activeScreen, setActiveScreen] = React.useState(1);

  const [storeName, setStoreName] = React.useState<string>("");
  const [storeAddress, setStoreAddress] = React.useState<string>("");
  const [openingTime, setOpeningTime] = React.useState(new Date());
  const [closingTime, setClosingTime] = React.useState(new Date());
  const [storeBanner, setStoreBanner] = React.useState<string>("");

  // Refs
  const storeNameRef: any = React.useRef();
  const storeAddressRef: any = React.useRef();
  const openingTimeRef: any = React.useRef();
  const storeBannerRef: any = React.useRef();
  const closingTimeRef: any = React.useRef();

  const handleSubmit = async () => {
    navigation.navigate("FoodServiceTab");
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyles.root,
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.alignCenter,
      ]}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={[
            GlobalStyles.flex1,
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.alignCenter,
          ]}
        >
          <View style={{ marginTop: Sizes.large }} />
          <Paginator activeIndex={activeScreen} />

          <View style={{ marginTop: Sizes.extraLarge }} />

          <View style={[GlobalStyles.flex1]}>
            {/* Store Name */}
            {activeScreen == 1 && (
              <StoreNameView
                setValue={setStoreName}
                refObj={storeNameRef}
                value={storeName}
                setActiveIndex={setActiveScreen}
              />
            )}

            {/* Store Address */}
            {activeScreen == 2 && (
              <StoreAddressView
                value={storeAddress}
                setValue={setStoreAddress}
                refObj={storeAddressRef}
                setActiveIndex={setActiveScreen}
              />
            )}

            {/* Store Available Hours */}
            {activeScreen == 3 && (
              <StoreAvailableHours
                closingHours={closingTime}
                closingRef={closingTimeRef}
                openingHours={openingTime}
                openingRef={openingTimeRef}
                setActiveIndex={setActiveScreen}
                setClosing={setClosingTime}
                setOpening={setOpeningTime}
              />
            )}

            {/* Store Banner */}
            {activeScreen == 4 && (
              <StoreBanner
                setActiveIndex={setActiveScreen}
                setValue={setStoreBanner}
                value={storeBanner}
                refObj={storeBannerRef}
                handleSubmit={handleSubmit}
              />
            )}
          </View>

          {activeScreen !== 1 && (
            <View style={[{ alignSelf: "flex-start", paddingLeft: 30 }]}>
              <TouchableOpacity
                onPress={() => {
                  setActiveScreen((prev) => --prev);
                }}
              >
                <Text
                  style={[GlobalStyles.textColorPrimary, Fonts.sansRegular]}
                >
                  Previous
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoreDetailsScreen;

const styles = StyleSheet.create({});
