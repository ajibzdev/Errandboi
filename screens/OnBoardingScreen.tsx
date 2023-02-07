import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
} from "react-native";
import React, { useRef, useState } from "react";
// import Run from "../assets/icons/RunDashIcon.svg";
import GlobalStyles from "../GlobalStyles";
import { ScreenNavigationType } from "../types";
import slides from "../data/slides";
import Onboarding from "../components/onBoarding/OnBoarding";
import Colors, { Shadows } from "../constants/Colors";
import Paginator from "../components/onBoarding/Paginator";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import Sizes from "../constants/Sizes";
import Fonts from "../constants/Fonts";
import Logo from "../assets/icons/ErrandLogoOrange.svg";

const OnBoardingScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<any | null>(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems?: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleSkip = async () => {
    slideRef.current.scrollToIndex({ index: slides.length - 1 });
  };

  const navigateSignUp = () => {
    //   AsyncStorage.setItem("@viewedNewOnboarding", "true");
    navigation.replace("signup");
  };

  const navigateLogIn = () => {
    // AsyncStorage.setItem("@viewedNewOnboarding", "true");
    navigation.replace("login");
  };

  return (
    <SafeAreaView style={[GlobalStyles.root, GlobalStyles.alignCenter]}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        data={slides}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        renderItem={({ item }) => (
          <Onboarding
            item={item}
            handleSkip={handleSkip}
            slides={slides}
            colors={Colors}
            currentIndex={currentIndex}
          />
        )}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />

      <View style={{ top: -30 }}>
        <Paginator data={slides} scrollX={scrollX} colors={Colors} />
      </View>

      <View
        style={[
          {
            width: "100%",
            height: "20%",
            // paddingBottom: 20,
            // top: Sizes.large,
            bottom: -80,
            backgroundColor: Colors.white,
          },
          Shadows.lightShadow,
        ]}
      >
        <View style={[GlobalStyles.alignCenter, { paddingTop: 16 }]}>
          <View style={{ width: "90%", marginBottom: 20 }}>
            <View style={[GlobalStyles.flexRow]}>
              <ButtonPrimary
                label="Log in"
                onPress={navigateLogIn}
                style={[GlobalStyles.marginVerticalSmall, { marginRight: 10 }]}
              />
              <ButtonPrimary
                label="Sign Up"
                active={true}
                onPress={navigateSignUp}
                style={[GlobalStyles.marginVerticalSmall]}
              />
            </View>
          </View>
          <Text style={[Fonts.sansSemiBold, { fontSize: 16 }]}>
            Not looking to shop ?{" "}
            <Text
              style={[
                { color: Colors.primary },
                Fonts.sansBold,
                { fontSize: 16 },
              ]}
              onPress={navigateSignUp}
            >
              Become an errander
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 50 }} />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
