import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import DisplayCard from "../components/Display/DisplayCard";

const HomeScreen = () => {
  return (
    <View style={[GlobalStyles.root, GlobalStyles.paddingHorizontalLarge]}>
      <Text>HomeScreen</Text>
      <View>
        <DisplayCard
          label="Korede Spagetti"
          price="600"
          isFood={true}
          status
          location="Big Meals Busa"
          image=""
        />
      </View>

      <View>
        <DisplayCard
          label="BGH Restaurant - Opposit pioneer "
          price="250"
          isFood={false}
          status={false}
          location="Babcock University Guest House"
          time="10:00AM - 6:00PM"
          image=""
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
