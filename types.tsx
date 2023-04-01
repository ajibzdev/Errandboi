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
  AuthStack: undefined;
  AuthenticatedStack: undefined;
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
  FaceIdScreen: undefined;
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
  ViewMoreScreen: undefined;
  LoadingScreenTemp: undefined;

  // Food Service
  StoreDetailsScreen: undefined;
  AddProductScreen: undefined;
  EditProductScreen: undefined;
  FoodServiceOrderDetailsScreen: undefined;
  FoodServiceAccountScreen: undefined;
  FoodServiceAccountInfoScreen: undefined;
  FoodServiceStoreInfoScreen: undefined;
  FoodServiceTransactionScreen: undefined;
  FoodServicePaymentScreen: undefined;
  FoodServiceWithdrawScreen: undefined;
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
  FoodServiceAccountScreen: undefined;
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
  price: string;
  location: string;
  status?: boolean;
  isFood?: boolean;
  time?: string;
  _id?: string;
  shopOwner?: boolean;
  lastEdited?: string;
};

export type DisplayButtonType = {
  count: number;
  product: DisplayCardType;
  shopOwner?: boolean;
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

type accountType = {
  accountName: string;
  accountNumber: number | string;
  bankName: string;
};
export type UserType = {
  firstName: StringType;
  lastName: StringType;
  picture?: string;
  name: string;
  email: StringType;
  mobileNumber: StringType;
  userType: "User" | "Courier" | "FoodProvider" | "";
  id: StringType;
  hasVisited: boolean;
  faceIdEnabled?: boolean;
  account: accountType[];
};

// Category
export type CategoryType = {
  id: string;
  name: string;
};
// Product
export type ProductType = {
  _id?: string;
  label: string;
  price: string;
  count: number;
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
