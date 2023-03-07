import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import DisplayCard from "../components/Display/DisplayCard";
import Feed from "../components/Feed/Feed";
import FullTextInput from "../components/shared/FullTextInput";
import Sections from "../data/Sections";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

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
      <Feed Sections={Sections} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  seperator: {
    marginBottom: 20,
  },
});
