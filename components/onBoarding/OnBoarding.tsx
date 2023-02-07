import React, { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  Easing,
} from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import GlobalStyles from "../../GlobalStyles";

const Onboarding = ({
  item,
  colors,
  handleSkip,
  currentIndex,
  slides,
}: {
  item: any;
  colors: any;
  handleSkip?: any;
  currentIndex?: any;
  slides?: any;
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer, { backgroundColor: "#FFF3DB" }]}>
        {item.id === "1" ? (
          //  <Sync />
          <Image
            style={{ width: width }}
            source={require("../../assets/images/ob-1.png")}
          />
        ) : item.id === "2" ? (
          <Image
            style={{ width: width }}
            source={require("../../assets/images/ob-2.png")}
          />
        ) : (
          // <Magnify />
          <Image
            style={{ width: width }}
            source={require("../../assets/images/ob-3.png")}
          />

          // <Budget />
        )}
      </View>

      <View style={{ marginTop: Sizes.extraLarge }}>
        <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
        <Text
          style={[
            styles.description,
            { color: colors.text, width: width * 0.9 },
            GlobalStyles.marginVerticalLarge,
          ]}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },

  skip: {
    color: Colors.lightGrey100,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 30,
    marginBottom: 80,
    fontSize: 15,
    fontFamily: "sans-regular",
  },
  imageContainer: {
    // marginBottom: 40,
    // height : "30%"
    backgroundColor: "#FFF3DB",
  },

  image: {
    width: 205,
    height: 170,
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    color: "white",
    textAlign: "center",
    fontFamily: "sans-black",
  },

  description: {
    color: "white",

    fontSize: 18,

    textAlign: "center",
    paddingHorizontal: 12,
    fontFamily: "sans-regular",
  },
});

export default Onboarding;
