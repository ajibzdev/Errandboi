import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import Tick from "../../assets/icons/TickIcon.svg";

type BtnPaginatorType = {
  visited?: boolean;
  active?: boolean;
  label: string;
};

const BtnPaginator: React.FC<BtnPaginatorType> = ({
  label,
  visited,
  active,
}) => {
  return (
    <View
      style={[
        GlobalStyles.flexCenter,
        styles.btn,
        (active || visited) && GlobalStyles.backgroundColorPrimary,
      ]}
    >
      <View>
        {visited ? (
          <Tick />
        ) : (
          <Text style={[Fonts.sansH4, GlobalStyles.textColorWhite]}>
            {label}
          </Text>
        )}
      </View>
    </View>
  );
};

export default BtnPaginator;

const styles = StyleSheet.create({
  btn: {
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: Colors.greyD5D4,
  },
});
