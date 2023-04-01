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
import moment from "moment";
import { createFormData } from "../utils/handleImages";
import { postToEndpoint, postWithForm } from "../api/responseHandler";
import API from "../api/API";
import { UserContext } from "../store/user-context";
import { capitalizeSentence } from "../utils/utilityFunctions";
import axios from "axios";

const StoreDetailsScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  // Contexts
  const userCtx = React.useContext(UserContext);

  // States
  const [activeScreen, setActiveScreen] = React.useState(1);

  const [storeName, setStoreName] = React.useState<string>("");
  const [storeAddress, setStoreAddress] = React.useState<string>("");
  const [openingTime, setOpeningTime] = React.useState(new Date());
  const [closingTime, setClosingTime] = React.useState(new Date());
  const [storeBanner, setStoreBanner] = React.useState<string>("");

  // Boolean
  const [loading, setLoading] = React.useState<boolean>(false);

  // Refs
  const storeNameRef: any = React.useRef();
  const storeAddressRef: any = React.useRef();
  const openingTimeRef: any = React.useRef();
  const storeBannerRef: any = React.useRef();
  const closingTimeRef: any = React.useRef();

  const handleSubmit = async () => {
    try {
      setLoading(() => true);
      const reqData = {
        name: capitalizeSentence(storeName),
        location: capitalizeSentence(storeAddress),
        opening_time: moment(openingTime).format("HH:mm").toString(),
        closing_time: moment(closingTime).format("HH:mm").toString(),
      };

      const payload = await createFormData(
        storeBanner,
        reqData,
        "store_picture"
      );

      const res: any = await axios.post(API.registerFoodService, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(() => false);

      if (!res) {
        alert("An error has occured while trying to register food service");
      } else {
        let u = userCtx.user;
        alert("Success");
        u.name = res?.name;
        u.picture = res?.store_picture;

        // userCtx.userDetailsChange(u);
      }
      setLoading(() => false);
    } catch (err: any) {
      setLoading(() => false);
      console.log(err);
    }
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
                loading={loading}
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
