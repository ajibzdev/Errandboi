import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Sizes from "../../constants/Sizes";
import BtnPaginator from "./BtnPaginator";

type PaginatorType = {
  activeIndex: number;
};

const Paginator: React.FC<PaginatorType> = ({ activeIndex }) => {
  return (
    <View style={[GlobalStyles.flexRow, GlobalStyles.paddingHorizontalLarge]}>
      <BtnPaginator
        label="1"
        visited={activeIndex > 1}
        active={activeIndex == 1}
      />
      <View style={styles.line} />
      <BtnPaginator
        label="2"
        visited={activeIndex > 2}
        active={activeIndex == 2}
      />
      <View style={styles.line} />
      <BtnPaginator
        label="3"
        visited={activeIndex > 3}
        active={activeIndex == 3}
      />
      <View style={styles.line} />
      <BtnPaginator
        label="4"
        visited={activeIndex > 4}
        active={activeIndex == 4}
      />
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  line: {
    height: 1.5,
    flex: 1,
    marginHorizontal: Sizes.medium,
    backgroundColor: "rgba(216, 216, 216, 1)",
  },
});
