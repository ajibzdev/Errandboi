import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import Colors from "../constants/Colors";
import { ScreenNavigationType } from "../types";

const LoadingScreenTemp: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Call: Function
  // destination: Screen to navigate to
  // message: Message to display
  // navParams?: Params to pass

  const loadFunction = route.params.call;
  const destination = route.params.destination;
  const message = route.params.message;
  const toScreen =
    typeof route.params.toScreen === "undefined"
      ? false
      : route.params.toScreen;

  const params = typeof route.params.navParams === "undefined" ? false : true;

  //  console.log(params)

  const loadInfo = async () => {
    try {
      await loadFunction();

      if (toScreen) {
        navigation.replace(destination, { screen: route.params.screen });
      } else {
        if (params) {
          navigation.replace(destination, route.params.navParams);
        } else {
          navigation.replace(destination);
        }
      }
    } catch (error) {
      console.log("Error in loading");
      console.log(error);
    }
  };

  useEffect(() => {
    loadInfo();
  });

  // ServiceWorker.load((v: any) => navigation.replace('tabs'));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.grey6C6C,
      }}
    >
      <ActivityIndicator size={"large"} color={Colors.primary} />
      <Text
        style={{
          fontFamily: "sans-semiBold",
          marginTop: 20,
          color: Colors.white,
        }}
      >
        {message}
      </Text>
    </View>
  );
};

export default LoadingScreenTemp;
