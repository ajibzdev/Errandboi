import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { SearchRecommendations } from "../../data/Search";
import Fonts from "../../constants/Fonts";
import GlobalStyles from "../../GlobalStyles";

const SearchRecommendation = () => {
  return (
    <KeyboardAwareFlatList
      data={SearchRecommendations}
      bounces={false}
      ListHeaderComponent={() => (
        <Text
          style={[
            Fonts.sansBold,
            { fontSize: 18 },
            GlobalStyles.marginVerticalLarge,
          ]}
        >
          Cuisines
        </Text>
      )}
      ItemSeparatorComponent={() => (
        <View style={[GlobalStyles.marginVerticalLarge]} />
      )}
      renderItem={({ item }) => {
        return (
          <Text style={[Fonts.sansNormal, GlobalStyles.textColorPrimary]}>
            {item}
          </Text>
        );
      }}
    />
  );
};

export default SearchRecommendation;

const styles = StyleSheet.create({});
