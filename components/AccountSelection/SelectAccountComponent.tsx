import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import SelectAccountRadioButton from "./SelectAccountRadioButton";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

type SelectAccountComponentType = {
  title: string;
  description: string;
  isActive: boolean;
  onPress: () => void;
};
const SelectAccountComponent: React.FC<SelectAccountComponentType> = ({
  title,
  description,
  isActive,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          GlobalStyles.paddingHorizontalLarge,
          GlobalStyles.flexRow,
          GlobalStyles.justifySpaceBetween,
          GlobalStyles.width100,
          GlobalStyles.paddingVerticalLarge,
          GlobalStyles.marginVerticalLarge,

          styles.container,
          isActive && { borderColor: Colors.black },
        ]}
      >
        <View style={[GlobalStyles.flex1]}>
          <Text style={[Fonts.sansRegular, styles.title]}>{title}</Text>
          <Text style={[Fonts.sansNormal, GlobalStyles.marginVerticalSmall]}>
            {description}
          </Text>
        </View>

        <SelectAccountRadioButton isActive={isActive} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectAccountComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.greyD5D4,
    borderRadius: Sizes.medium,
  },
  title: {
    fontFamily: "sans-black",
  },
});
