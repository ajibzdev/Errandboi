import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../types";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import OrdersScreen from "../screens/OrdersScreen";
import AccountScreen from "../screens/AccountScreen";
import Home from "../assets/icons/HomeIcon.svg";
import HomeActive from "../assets/icons/HomeActiveIcon.svg";
import Search from "../assets/icons/SearchIcon.svg";
import SearchActive from "../assets/icons/SearchActiveIcon.svg";
import Orders from "../assets/icons/OrdersIcon.svg";
import OrdersActive from "../assets/icons/OrdersActiveIcon.svg";

import Account from "../assets/icons/AccountIcon.svg";
import AccountActive from "../assets/icons/AccountActiveIcon.svg";
import MainHeader from "../components/MainHeader/MainHeader";
import Fonts from "../constants/Fonts";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function HomeTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        header: () => <MainHeader />,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({}) => {
          return {
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <HomeActive />;
              }
              return <Home />;
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    Fonts.sansSemiBold,
                    {
                      fontSize: 12,
                      lineHeight: 15,
                      color: focused ? Colors.primary : Colors.grey6C6C,
                    },
                  ]}
                >
                  Home
                </Text>
              );
            },
            tabBarLabelStyle: { color: Colors.primary },
          };
        }}
      />

      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <SearchActive />;
            }
            return <Search />;
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  Fonts.sansSemiBold,
                  {
                    fontSize: 12,
                    lineHeight: 15,
                    color: focused ? Colors.primary : Colors.grey6C6C,
                  },
                ]}
              >
                Search
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <OrdersActive />;
            }
            return <Orders />;
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  Fonts.sansSemiBold,
                  {
                    fontSize: 12,
                    lineHeight: 15,
                    color: focused ? Colors.primary : Colors.grey6C6C,
                  },
                ]}
              >
                Orders
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AccountActive />;
            }
            return <Account />;
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  Fonts.sansSemiBold,
                  {
                    fontSize: 12,
                    lineHeight: 15,
                    color: focused ? Colors.primary : Colors.grey6C6C,
                  },
                ]}
              >
                Account
              </Text>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeTabs;

const styles = StyleSheet.create({});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
