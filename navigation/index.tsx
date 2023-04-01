import { FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { AuthContext } from "../store/auth-context";

import { RootStackParamList } from "../types";
import AuthenticatedStack from "./AuthenticatedStack";
import AuthStack from "./AuthStack";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
    // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const authCtx = React.useContext(AuthContext);

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authCtx.isAuthenticated ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : null}

        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
        />
      </Stack.Navigator>
    </>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
