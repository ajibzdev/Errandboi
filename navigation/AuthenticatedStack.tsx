import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../types";
import HomeTabs from "./HomeTabs";
import LocationScreen from "../screens/LocationScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import SubmitOrderScreen from "../screens/SubmitOrderScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import AccountInfoScreen from "../screens/AccountInfoScreen";
import PaymentScreen from "../screens/PaymentScreen";
import AddressScreen from "../screens/AddressScreen";
import DeleteAccountScreen from "../screens/DeleteAccountScreen";
import SetNewPasswordScreen from "../screens/SetNewPasswordScreen";
import { UserContext } from "../store/user-context";
import StoreDetailsScreen from "../screens/StoreDetailsScreen";
import FoodServiceTab from "./FoodServiceTabs";
import AddProductScreen from "../screens/shop/AddProductScreen";
import EditProductScreen from "../screens/shop/EditProductScreen";
import ViewMoreScreen from "../screens/ViewMoreScreen";
import FoodServiceOrderDetailsScreen from "../screens/shop/FoodServiceOrderDetailsScreen";
import FoodServiceAccountScreen from "../screens/shop/FoodServiceAccountScreen";
import FoodServiceAccountInfoScreen from "../screens/shop/FoodServiceAccountInfoScreen";
import FoodServicePaymentScreen from "../screens/shop/FoodServicePaymentScreen";
import FoodServiceTransactionScreen from "../screens/shop/FoodServiceTransactionScreen";
import FoodServiceWithdrawScreen from "../screens/shop/FoodServiceWithdrawScreen";
import FoodServiceStoreScreen from "../screens/shop/FoodServiceStoreScreen";
import AccountScreen from "../screens/AccountScreen";
import LoadingScreenTemp from "../screens/LoadingScreenTemp";

const Stack = createStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  const userCtx = useContext(UserContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userCtx.user.userType === "User" ? (
        <>
          <Stack.Screen name="Home" component={HomeTabs} />

          <Stack.Screen name="LocationScreen" component={LocationScreen} />
          {/* Cart */}
          <Stack.Screen name="CartScreen" component={CartScreen} />
          {/* Checkout */}
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />

          {/* Submit Order */}
          <Stack.Screen
            name="SubmitOrderScreen"
            component={SubmitOrderScreen}
          />

          {/* Checkout */}
          <Stack.Screen
            name="OrderDetailsScreen"
            component={OrderDetailsScreen}
          />

          {/* Accounts */}
          {/* Account Info */}
          <Stack.Screen
            name="AccountInfoScreen"
            component={AccountInfoScreen}
          />

          {/* Payment Screen */}
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

          {/* Address Screen*/}
          <Stack.Screen name="AddressScreen" component={AddressScreen} />

          {/* Delete Account Screen*/}
          <Stack.Screen
            name="DeleteAccountScreen"
            component={DeleteAccountScreen}
          />

          {/* Address Screen*/}
          <Stack.Screen
            name="SetNewPasswordScreen"
            component={SetNewPasswordScreen}
          />
        </>
      ) : null}

      {userCtx.user.userType === "FoodProvider" ? (
        <>
          {!userCtx.user.hasVisited ? (
            <Stack.Screen
              name="StoreDetailsScreen"
              component={StoreDetailsScreen}
            />
          ) : null}

          <Stack.Screen name="FoodServiceTab" component={FoodServiceTab} />
          <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
          <Stack.Screen
            name="EditProductScreen"
            component={EditProductScreen}
          />
          <Stack.Screen name="ViewMoreScreen" component={ViewMoreScreen} />
          <Stack.Screen
            name="FoodServiceOrderDetailsScreen"
            component={FoodServiceOrderDetailsScreen}
          />
          <Stack.Screen
            name="FoodServiceAccountScreen"
            component={FoodServiceAccountScreen}
          />

          {/* Accounts */}
          {/* Account Info */}
          <Stack.Screen
            name="FoodServiceStoreInfoScreen"
            component={FoodServiceStoreScreen}
          />
          <Stack.Screen
            name="FoodServiceAccountInfoScreen"
            component={AccountInfoScreen}
          />

          {/* Payment Screen */}
          <Stack.Screen
            name="FoodServicePaymentScreen"
            component={PaymentScreen}
          />

          {/* Transaction Screen*/}
          <Stack.Screen
            name="FoodServiceTransactionScreen"
            component={FoodServiceTransactionScreen}
          />

          {/* Withdraw Screen*/}
          <Stack.Screen
            name="FoodServiceWithdrawScreen"
            component={FoodServiceWithdrawScreen}
          />

          {/* Delete Account Screen*/}
          <Stack.Screen
            name="DeleteAccountScreen"
            component={DeleteAccountScreen}
          />

          {/* Address Screen*/}
          <Stack.Screen
            name="SetNewPasswordScreen"
            component={SetNewPasswordScreen}
          />
        </>
      ) : null}

      {userCtx.user.userType == "Courier" ? (
        <>
          <Stack.Screen name="Home" component={HomeTabs} />
        </>
      ) : null}

      <Stack.Screen name="LoadingScreenTemp" component={LoadingScreenTemp} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
