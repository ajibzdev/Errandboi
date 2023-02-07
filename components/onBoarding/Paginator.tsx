import React from "react";
import {
  Animated,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from "react-native";
import Sizes from "../../constants/Sizes";

const Paginator = ({
  data,
  scrollX,
  colors,
}: {
  data: any;
  scrollX: any;
  colors?: any;
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.pages}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                backgroundColor:
                  dotWidth.__getValue() > 20 ? colors.primary : "#E7E7ED",
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flexDirection: "row",
  },
  dot: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    marginHorizontal: 4,
  },
});

export default Paginator;
