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

const { height, width } = Layout.window;

type FeedType = {
  Sections?: any;
};

const FeedFoodService = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={ShopProducts}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
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
                const id = new Date().toString() + Math.random().toString();

                return (
                  <DisplayCard
                    _id={id}
                    image={item.image}
                    label={item.label}
                    location={item.location}
                    price={item.price}
                    shopOwner={true}
                    isFood={item.isFood}
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
  container: {},
  seperator: {
    marginBottom: 20,
  },
});
