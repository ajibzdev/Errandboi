import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenNavigationType } from "../types";
import GlobalStyles from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import DisplayFullCard from "../components/Display/DisplayFullCard";
import NavTitle from "../components/shared/NavTitle";
import { getEndpoint } from "../api/responseHandler";
import API from "../api/API";

type ViewMoreProps = {
  navigation: any;
  route: any;
  callFunction: () => void;
  onRefresh: () => void;
  data: any;
};

const ViewMoreScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Routes
  const { section, data } = route.params;
  const isFood = data.indexOf(section) == 0;
  const title = isFood ? "Popular Food" : "Top Restaurants";

  // States
  const [viewFeed, setViewFeed] = React.useState(null);

  // Boolean
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  // handlers
  const getMoreDetails = async () => {
    setRefreshing(() => true);
    try {
      const res = await getEndpoint(
        isFood ? API.allProduct : API.allFoodService
      );

      setViewFeed(() => res);
    } catch (err: any) {
      console.log(err.response);
      throw new Error("ViewMore: getMor");
    }

    setRefreshing(() => false);
  };

  const getDetails = async () => {
    setLoading(() => true);
    try {
      const res = await getEndpoint(
        isFood ? API.allProduct : API.allFoodService
      );

      setViewFeed(() => res);
    } catch (err: any) {
      console.log(err.response);
      throw new Error("ViewMore: getDet");
    }

    setLoading(() => false);
  };

  //   Use Effects
  React.useEffect(() => {
    getDetails();
  }, []);

  if (loading) {
    return (
      <View style={[GlobalStyles.root, GlobalStyles.flexCenter]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label={title} />
      <View style={[GlobalStyles.paddingHorizontalLarge, GlobalStyles.flex1]}>
        <KeyboardAwareFlatList
          refreshing={refreshing}
          onRefresh={getMoreDetails}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={viewFeed}
          renderItem={({ item }) =>
            isFood ? (
              <DisplayFullCard
                image={item.image}
                label={item?.category?.name}
                location={item?.foodservice?.name}
                isFood={isFood}
                price={item.price}
                status={item.status}
                _id={item?.product_id}
              />
            ) : (
              // @ts-ignore
              <DisplayFullCard
                image={item?.store_picture}
                label={item?.name}
                location={item?.location}
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewMoreScreen;

const styles = StyleSheet.create({});
