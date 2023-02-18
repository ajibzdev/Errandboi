import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import Fonts from "../constants/Fonts";
import FullTextInput from "../components/shared/FullTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import Sizes from "../constants/Sizes";
import SearchRecommendation from "../components/Search/SearchRecommendation";
import SearchResultList from "../components/Search/SearchResultList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const onRefresh = async () => {};

  return (
    <View style={[GlobalStyles.paddingHorizontalLarge]}>
      <Text style={[Fonts.sansH1]}>Search</Text>

      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.alignCenter,
          styles.searchContainer,
        ]}
      >
        <View style={[GlobalStyles.flex1]}>
          <FullTextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={"Search Erranboi"}
          />
        </View>

        {searchQuery !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSearchQuery("");
            }}
          >
            <Text
              style={[
                Fonts.sans14,
                GlobalStyles.textColorPrimary,
                GlobalStyles.marginHorizontallMedium,
              ]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {searchQuery == "" && <SearchRecommendation />}

      {searchQuery !== "" && (
        <SearchResultList
          refreshing={refreshing}
          onRefresh={onRefresh}
          searchQuery={searchQuery}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Sizes.medium,
    marginBottom: 20,
  },
});
