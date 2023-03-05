import { StyleSheet, Text, View, SectionList, FlatList } from "react-native";
import React from "react";
import Sections from "../../data/Sections";
import SectionHeader from "./SectionHeader";
import DisplayCard from "../Display/DisplayCard";
import GlobalStyles from "../../GlobalStyles";
import FullTextInput from "../shared/FullTextInput";
import Sizes from "../../constants/Sizes";
import Layout from "../../constants/Layout";

const { height, width } = Layout.window;

const Feed = () => {
  return (
    <View style={[styles.container]}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={Sections}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        SectionSeparatorComponent={() => (
          <View style={{ marginBottom: Sizes.medium }} />
        )}
        style={{ marginBottom: 20 }}
        renderSectionHeader={({ section }) => (
          <>
            <SectionHeader section={section} />

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

export default Feed;

const styles = StyleSheet.create({
  container: {},
  seperator: {
    marginBottom: 20,
  },
});
