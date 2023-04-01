import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const authCtx = React.useContext(AuthContext);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const t = await AsyncStorage.getItem("token");
        const r = await AsyncStorage.getItem("refresh");

        if (t !== null && t && r && r !== null) {
          authCtx.authenticate(t, r);
        }

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "sans-black": require("../assets/fonts/SourceSansPro-Black.ttf"),
          "sans-italic": require("../assets/fonts/SourceSansPro-BlackItalic.ttf"),
          "sans-boldItalic": require("../assets/fonts/SourceSansPro-BoldItalic.ttf"),
          "sans-extraLight": require("../assets/fonts/SourceSansPro-ExtraLight.ttf"),
          "sans-regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
          "sans-semiBold": require("../assets/fonts/SourceSansPro-SemiBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
