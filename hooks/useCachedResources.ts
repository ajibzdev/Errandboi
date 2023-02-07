import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

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
