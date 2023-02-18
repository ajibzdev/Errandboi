import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavTitle from "../components/shared/NavTitle";
import { ScreenNavigationType } from "../types";
import GlobalStyles from "../GlobalStyles";
import Fonts from "../constants/Fonts";
import Location from "../assets/icons/LocationIcon.svg";
import Dot from "../assets/icons/SmallDotIcon.svg";
import Sizes from "../constants/Sizes";
import Colors from "../constants/Colors";
import Feed from "../components/Feed/Feed";
import ProfilePicture from "../components/shared/ProfilePicture";

const LocationScreen = ({ route, navigation }: ScreenNavigationType) => {
  const { label, location, image } = route.params;

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  return (
    <SafeAreaView style={[]}>
      <NavTitle label={"Home"} />

      <View style={[styles.mainContainer]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.alignCenter,
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.marginVerticalExtraLarge,
          ]}
        >
          <ProfilePicture height={79} width={79} uri={image} />

          <View style={[GlobalStyles.marginHorizontalLarge]}>
            <Text style={[Fonts.sansBold, styles.label]} numberOfLines={1}>
              {label}{" "}
            </Text>
            <View
              style={[
                GlobalStyles.marginVerticalSmall,
                GlobalStyles.width100,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Location height={12} width={Sizes.medium} />
              <Text
                style={[
                  Fonts.sansNormal,
                  GlobalStyles.marginHorizontalSmall,
                  GlobalStyles.textCapitalize,
                  styles.font14,
                  styles.location,
                ]}
                numberOfLines={1}
              >
                {location}
              </Text>
            </View>

            <View style={[GlobalStyles.flexRow]}>
              <Text style={[Fonts.sans14, { color: Colors.green71D }]}>
                Open now
              </Text>
              <Dot
                height={4}
                width={4}
                style={[GlobalStyles.marginHorizontalSmall]}
              />
              <Text style={[Fonts.sans14]}>Closes at 10:29 PM</Text>
            </View>
          </View>
        </View>
      </View>

      <Feed />
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
  },
  font14: {
    fontSize: 14,
  },
  location: { color: Colors.grey7D7D },
});
