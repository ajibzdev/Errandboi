import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import ShopProducts from "../../data/ShopProducts";
import Fonts from "../../constants/Fonts";
import FullWidthButton from "../../components/shared/FullWidthButton";
import { CategoryType, ScreenNavigationType } from "../../types";
import Feed from "../../components/Feed/Feed";
import FeedFoodService from "../../components/Feed/FeedFoodService";
import { getEndpoint } from "../../api/responseHandler";
import API from "../../api/API";
import { UserContext } from "../../store/user-context";

const FoodServiceHomeScreen: React.FC<ScreenNavigationType> = ({
  navigation,
}) => {
  // Context
  const userCtx = React.useContext(UserContext);

  // States
  const [category, setCategory] = React.useState<CategoryType[]>([]);
  const [filteredProduct, setFilteredProducts] = React.useState<any>([]);

  // Ref
  const categoryRef: any = React.useRef(null);
  const productsRef: any = React.useRef(null);

  // Boolean
  const [fetchingProduct, setFetchingProduct] = React.useState<boolean>(false);

  // Functions
  const getCategoryHandler = async () => {
    try {
      setFetchingProduct(() => true);
      const res = await getEndpoint(`${API.getCategory}${userCtx.user.id}/`);

      setCategory(() => res);
      categoryRef.current = res;

      setFetchingProduct(() => false);
    } catch (err: any) {
      setFetchingProduct(() => false);
      console.log(err.response);
    }
  };

  const getProducts = async () => {
    try {
      const res = await getEndpoint(API.myProduct);
      productsRef.current = res;

      let products = productsRef.current;

      // Grouping product based on category
      const groupedProducts = products.reduce((acc: any, curr: any) => {
        const category = curr.category.name;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(curr);
        return acc;
      }, {});

      // Filtering products
      const filtProducts = Object.entries(groupedProducts).map(
        ([categoryName, products]) => ({
          title: categoryName,
          data: products,
        })
      );

      setFilteredProducts(() => filtProducts);
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const addProductHandler = async () => {
    await getCategoryHandler();
    console.log(categoryRef.current);
    navigation.navigate("AddProductScreen", {
      category: categoryRef.current,
      getProducts: getProducts,
    });
  };

  React.useLayoutEffect(() => {
    getProducts();
  }, []);

  if (!filteredProduct) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[GlobalStyles.root]}>
      {filteredProduct.length == 0 && (
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

      {filteredProduct.length > 0 && (
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansH1, GlobalStyles.paddingHorizontalLarge]}>
            Shop
          </Text>
          <FeedFoodService sections={filteredProduct} />
        </View>
      )}
    </View>
  );
};

export default FoodServiceHomeScreen;

const styles = StyleSheet.create({});
