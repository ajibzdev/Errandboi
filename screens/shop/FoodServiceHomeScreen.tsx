import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import ShopProducts from "../../data/ShopProducts";
import Fonts from "../../constants/Fonts";
import FullWidthButton from "../../components/shared/FullWidthButton";
import { ScreenNavigationType } from "../../types";
import Feed from "../../components/Feed/Feed";
import FeedFoodService from "../../components/Feed/FeedFoodService";

const FoodServiceHomeScreen: React.FC<ScreenNavigationType> = ({
  navigation,
}) => {
  const addProductHandler = () => {
    navigation.navigate("AddProductScreen");
  };

  return (
    <View style={[GlobalStyles.root]}>
      {ShopProducts.length == 0 && (
        <View style={[GlobalStyles.flex1, GlobalStyles.flexCenter]}>
          <View style={[GlobalStyles.alignCenter]}>
            <Text style={[Fonts.sansH3]}>No products to show</Text>
            <View style={{ marginTop: 16 }} />
            <FullWidthButton label="Add Product " onPress={addProductHandler} />
            <View style={{ marginTop: 16 }} />
            <Text style={[Fonts.sansNormal, { fontSize: 12 }]}>
              After you add a product customers will see your profile
            </Text>
          </View>
        </View>
      )}

      {ShopProducts.length > 0 && (
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansH1, GlobalStyles.paddingHorizontalLarge]}>
            Shop
          </Text>
          <FeedFoodService />
          <FullWidthButton label="Add Product " onPress={addProductHandler} />
        </View>
      )}
    </View>
  );
};

export default FoodServiceHomeScreen;

const styles = StyleSheet.create({});
