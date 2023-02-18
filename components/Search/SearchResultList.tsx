import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { SearchResults } from "../../data/Search";
import DisplayFullCard from "../Display/DisplayFullCard";
import Fonts from "../../constants/Fonts";
import GlobalStyles from "../../GlobalStyles";

type SearchResultListType = {
  onRefresh: () => void;
  refreshing: boolean;
  searchQuery?: string;
};

const SearchResultList = ({
  refreshing,
  searchQuery,
  onRefresh,
}: SearchResultListType) => {
  return (
    <KeyboardAwareFlatList
      refreshing={refreshing}
      onRefresh={onRefresh}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={SearchResults}
      renderItem={({ item }) => (
        <DisplayFullCard
          image={item.image}
          label={item.label}
          location={item.location}
          isFood={item.isFood}
          price={item.price}
          status={item.status}
        />
      )}
      ListHeaderComponent={({}) => {
        return (
          <View>
            <Text
              style={[
                Fonts.sansBold,
                { fontSize: 18 },
                GlobalStyles.marginVerticalLarge,
              ]}
            >{`Results for "${searchQuery}"`}</Text>
          </View>
        );
      }}
    />
  );
};

export default SearchResultList;

const styles = StyleSheet.create({});
