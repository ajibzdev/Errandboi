import { StyleSheet, Text, View, SectionList, FlatList } from "react-native";
import React from "react";
import Sections from "../../data/Sections";
import SectionHeader from "./SectionHeader";
import DisplayCard from "../Display/DisplayCard";
import GlobalStyles from "../../GlobalStyles";
import FullTextInput from "../shared/FullTextInput";
import Sizes from "../../constants/Sizes";
import Layout from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import ShopProducts from "../../data/ShopProducts";
import FullWidthButton from "../shared/FullWidthButton";
import { getEndpoint } from "../../api/responseHandler";
import API from "../../api/API";
import { CategoryType } from "../../types";
import { UserContext } from "../../store/user-context";

const { height, width } = Layout.window;

type FeedType = {
  Sections?: any;
};

const FeedFoodService = ({ sections }: { sections: any }) => {
  const navigation = useNavigation();

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

    // @ts-ignore
    navigation.navigate("AddProductScreen", {
      category: categoryRef.current,
      getProducts: getProducts,
    });
  };

  return (
    <View style={[styles.container]}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={sections}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        ListFooterComponent={() => (
          <View style={[GlobalStyles.marginVerticalMedium]}>
            <FullWidthButton
              label="Add Product"
              onPress={addProductHandler}
              loading={fetchingProduct}
            />
          </View>
        )}
        SectionSeparatorComponent={() => (
          <View style={{ marginBottom: Sizes.medium }} />
        )}
        style={{ marginBottom: 20 }}
        renderSectionHeader={({ section }) => (
          <>
            {/* @ts-ignore */}
            <SectionHeader
              section={section}
              onPress={() => {
                // @ts-ignore
                navigation.navigate("ViewMoreScreen", {
                  title: section.title,
                  onRefresh: () => {},
                  callFunction: () => {},
                  shopOwner: true,
                  data: section.data,
                  isFood: section.data[0].isFood,
                });
              }}
            />

            <FlatList
              data={section.data}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal
              // snapToAlignment="center"
              // decelerationRate={"fast"}

              // snapToInterval={height}
              renderItem={({ item }) => {
                return (
                  <DisplayCard
                    _id={item.product_id}
                    image={item.image}
                    label={item?.name}
                    location={item.location}
                    price={item?.price.toString()}
                    shopOwner={true}
                    isFood={true}
                  />
                );
              }}
            />
          </>
        )}
        renderItem={({ item }) => {
          return null;
        }}
      />
    </View>
  );
};

export default FeedFoodService;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  seperator: {
    marginBottom: 20,
  },
});
