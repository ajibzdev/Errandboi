import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import Arrow from "../../assets/icons/ArrowRightIcon.svg";

type BoxType = {
  icon?: any;
  rightElement?: React.ReactElement;
  heading: string;
  label?: string;
  _onPress?: () => void;
  notOpen?: boolean;
};

const Box = React.forwardRef(
  (
    { icon, rightElement, heading, label, notOpen, _onPress }: BoxType,
    ref: any
  ) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          !notOpen && ref.current.open();
          _onPress && _onPress();
        }}
      >
        <View
          style={[
            {
              paddingBottom: 24,
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.grey7D7D,
            },
            GlobalStyles.flexRow,
            GlobalStyles.marginVerticalExtraLarge,
            GlobalStyles.width100,
          ]}
        >
          <View style={[GlobalStyles.flex1, GlobalStyles.flexRow]}>
            <View>{icon}</View>
            <View style={[{ marginLeft: 10 }]}>
              <Text style={[Fonts.sansH3]} numberOfLines={1}>
                {heading}
              </Text>

              {label && (
                <Text style={[Fonts.sans14]} numberOfLines={1}>
                  {label}
                </Text>
              )}
            </View>
          </View>
          {React.isValidElement(rightElement) ? (
            rightElement
          ) : (
            <Arrow height={9} width={14} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default Box;

const styles = StyleSheet.create({});
