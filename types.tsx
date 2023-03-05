/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type AuthStackParamList = {
  login: undefined;
  SignUp: undefined;
  OnBoarding: undefined;
  WelcomeScreen: undefined;
  AccountSelectionScreen: undefined;
  OtpScreen: undefined;
};

export type AuthenticatedStackParamList = {
  Home: undefined;
  FoodServiceTab: undefined;

  LocationScreen: undefined;
  CartScreen: undefined;
  CheckoutScreen: undefined;
  OrderDetailsScreen: undefined;
  SubmitOrderScreen: undefined;
  AccountInfoScreen: undefined;
  PaymentScreen: undefined;
  AddressScreen: undefined;
  DeleteAccountScreen: undefined;
  SetNewPasswordScreen: undefined;

  // Food Service
  StoreDetailsScreen: undefined;
  AddProductScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;

  OrdersScreen: undefined;
  AccountScreen: undefined;
};

export type FoodServiceTabParamList = {
  FoodServiceHomeScreen: undefined;
  FoodServiceOrdersScreen: undefined;
  AccountScreen: undefined;
};

export type ScreenNavigationType = {
  navigation?: any;
  route?: any;
};

export type BooleanType = boolean | null | undefined;

export type StringType = string | null;

export type DefaultType = any;

export type StateType = {
  value: string;
  setValue: any;
  refObj?: any;
  setActiveIndex?: any;
  handleSubmit?: () => void;
};

export type LoginType = {
  state: BooleanType;
  setState?: DefaultType;
};

export type DisplayCardType = {
  image: string;
  label: string;
  price?: string;
  location: string;
  status?: boolean;
  isFood?: boolean;
  time?: string;
  _id?: string;
};

export type DisplayButtonType = {
  count: number;
  product: DisplayCardType;
};

export type SectionType = {
  title: string;
  data: DisplayCardType[];
};

// ORDERS
export type OrderItemType = {
  image: string;
  label: string;
  price: string;
  date: string;
};

// User
export type UserType = {
  firstName: StringType;
  lastName: StringType;
  email: StringType;
  mobileNumber: StringType;
  userType: "User" | "Courier" | "Food service" | "";
  token: StringType;
  hasVisited: boolean;
  faceIdEnabled?: boolean;
};

export type ProductType = {
  _id?: string;
  label: string;
  price: string;
  count: number | null;
  image: string;
};

// Cart
export type CartType = {
  orders: ProductType[];
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
