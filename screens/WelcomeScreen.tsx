import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../assets/icons/FoodIcon.svg";
import Fonts from "../constants/Fonts";
import GlobalStyles from "../GlobalStyles";
import Colors from "../constants/Colors";
import BottomShadow from "../components/shared/BottomShadow";
import FullWidthButton from "../components/shared/FullWidthButton";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[GlobalStyles.root, { backgroundColor: Colors.white }]}>
      <View style={[GlobalStyles.flex1, { marginTop: 100 }]}>
        <View style={[GlobalStyles.alignCenter, GlobalStyles.flex1]}>
          <Icon height={298} width={425} />
          <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
            Welcome to Errandboi
          </Text>

          <Text style={[Fonts.sansNormal, GlobalStyles.textAlignCenter]}>
            {`Voila! You have successfully signed into your
             account`}
          </Text>
        </View>
        <View style={[styles.buttonContainer]}>
          <BottomShadow>
            <FullWidthButton
              label="Continue to account"
              onPress={() => {
                // @ts-ignore
                navigation.navigate("AccountSelectionScreen");
              }}
            />
          </BottomShadow>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "flex-end",
  },
});
