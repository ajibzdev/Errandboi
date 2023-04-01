import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import DisplayCard from "../components/Display/DisplayCard";
import Feed from "../components/Feed/Feed";
import FullTextInput from "../components/shared/FullTextInput";
import Sections from "../data/Sections";
import { getEndpoint } from "../api/responseHandler";
import API from "../api/API";
import { CartContext } from "../store/cart-context";

const HomeScreen = () => {
  // Contexts
  const cartCtx = React.useContext(CartContext);

  // States
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [products, setProducts] = React.useState([]);
  const [foodService, setFoodService] = React.useState([]);
  const [sections, setSections] = React.useState<any>([]);

  // Booleans
  const [loading, setLoading] = React.useState<boolean>(false);

  // Ref
  const productRef = React.useRef<any>(null);
  const foodServiceRef = React.useRef<any>(null);

  // Functions
  const getProducts = async () => {
    try {
      const res = await getEndpoint(API.allProduct);

      setProducts(() => res);

      productRef.current = res;
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const getFoodService = async () => {
    try {
      const res = await getEndpoint(API.allFoodService);

      foodServiceRef.current = res;

      setProducts(() => res);
    } catch (err: any) {
      console.log(err.response);
    }
  };

  // Use Effects
  // Get Cart
  React.useEffect(() => {
    cartCtx.getCart();
  }, []);

  // Get Product
  React.useEffect(() => {
    try {
      setLoading(() => true);

      getProducts();
      getFoodService();

      setLoading(() => false);
    } catch (err) {
      setLoading(() => false);
      console.log(err);
      throw new Error("Products and Food service error while fethcing");
    }
  }, []);

  // Set Sections
  React.useEffect(() => {
    if (foodService && products) {
      setSections(() => [
        {
          title: "Popular Near You",
          data: productRef.current,
        },
        {
          title: "Top Restaurants Near You",
          data: foodServiceRef.current,
        },
      ]);
    }
  }, [foodService, products]);

  return (
    <View style={[GlobalStyles.root]}>
      <View style={[GlobalStyles.paddingHorizontalLarge]}>
        <FullTextInput
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder={"Search Erranboi"}
        />

        <View style={styles.seperator} />
      </View>
      <Feed Sections={sections} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  seperator: {
    marginBottom: 20,
  },
});
