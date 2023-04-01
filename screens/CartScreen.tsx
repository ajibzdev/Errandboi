import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavTitle from "../components/shared/NavTitle";
import GlobalStyles from "../GlobalStyles";
import NoCart from "../assets/icons/NoCartIcon.svg";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { CartData } from "../data/Cart";
import CartList from "../components/Cart/CartList";
import BottomShadow from "../components/shared/BottomShadow";
import Sizes from "../constants/Sizes";
import FullSeperatedButton from "../components/shared/FullSeperatedButton";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../store/cart-context";

const CartScreen = () => {
  const cartCtx = React.useContext(CartContext);

  const cartLength = cartCtx.cart.length;
  const navigation = useNavigation();

  // Functions

  const handleSubmit = async () => {
    // @ts-ignore
    navigation.navigate("CheckoutScreen");
  };

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Cart" />

      <View style={[styles.mainContainer]}>
        {cartLength <= 0 && (
          <View style={[GlobalStyles.width100, GlobalStyles.flexCenter]}>
            <View style={[GlobalStyles.alignCenter, { marginTop: 120 }]}>
              <NoCart width={264} height={198} />

              <Text
                style={[
                  Fonts.sansRegular,

                  { fontFamily: "sans-black", marginTop: 16, marginBottom: 8 },
                ]}
              >
                Your cart is empty
              </Text>

              <Text
                style={[
                  { color: Colors.grey6C6C },
                  Fonts.sansNormal,
                  GlobalStyles.textAlignCenter,
                ]}
              >
                Looks like you have not added anything to your cart. Go ahead &
                explore top meals
              </Text>
            </View>
          </View>
        )}

        {cartLength > 0 && <CartList />}
      </View>
      {cartLength > 0 && (
        <BottomShadow bottom={0} style={[{ alignItems: "flex-start" }]}>
          <View
            style={[GlobalStyles.paddingHorizontalLarge, { paddingBottom: 20 }]}
          >
            <Text style={[Fonts.sansH3]}>Total</Text>

            <View
              style={[
                GlobalStyles.flex1,
                GlobalStyles.justifySpaceBetween,
                GlobalStyles.flexRow,
                GlobalStyles.deviceViewWidth,
                GlobalStyles.marginVerticalSmall,
                { paddingRight: Sizes.extraLarge },
              ]}
            >
              <Text style={[Fonts.sansRegular]}>Subtotal: </Text>
              <Text style={[Fonts.sansRegular]}>₦ 1,250</Text>
            </View>
            <View
              style={[
                GlobalStyles.flex1,
                GlobalStyles.justifySpaceBetween,
                GlobalStyles.flexRow,
                GlobalStyles.deviceViewWidth,
                GlobalStyles.marginVerticalSmall,
                { paddingRight: Sizes.extraLarge },
              ]}
            >
              <Text style={[Fonts.sansRegular]}>Delivery: </Text>
              <Text style={[Fonts.sansRegular]}>₦ 850</Text>
            </View>
            <View
              style={[
                GlobalStyles.alignCenter,
                GlobalStyles.deviceViewWidth,
                GlobalStyles.flex1,

                { paddingRight: 30, marginTop: 12 },
              ]}
            >
              <FullSeperatedButton
                onPress={handleSubmit}
                label={"Place Order"}
                smallerLabel={"₦2,100"}
              />
            </View>
          </View>
        </BottomShadow>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {},
});
