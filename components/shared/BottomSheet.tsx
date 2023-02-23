import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import GlobalStyles from "../../GlobalStyles";
import Back from "../../assets/icons/BackIcon.svg";
import Fonts from "../../constants/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type BottomSheetType = {
  children: React.ReactElement;
  heading: string;
  height?: number;
};
const BottomSheet = React.forwardRef(
  ({ children, heading, height }: BottomSheetType, ref: any) => {
    return (
      // @ts-ignore
      <RBSheet
        // @ts-ignore
        ref={ref}
        closeOnDragDown
        closeOnPressMask
        closeOnPressBack
        height={height || 338}
        animationType={"fade"}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0, 0.1)",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          },
          draggableIcon: {
            display: "none",
          },
          container: {
            borderTopLeftRadius: 24,
            // backgroundColor: 'transparent',

            borderTopRightRadius: 24,
          },
        }}
      >
        <View
          style={[
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.width100,
            GlobalStyles.alignCenter,
          ]}
        >
          <View style={{ marginTop: 41 }} />
          <View style={[GlobalStyles.flexRow]}>
            <TouchableOpacity
              onPress={() => {
                ref.current.close();
              }}
            >
              <Back height={20} width={20} />
            </TouchableOpacity>
            <Text
              style={[
                Fonts.sansSemiBold,
                GlobalStyles.textAlignCenter,
                GlobalStyles.alignCenter,
                GlobalStyles.flex1,
                { fontFamily: "sans-black" },
              ]}
            >
              {heading}
            </Text>
          </View>

          <SafeAreaView edges={["bottom"]}>
            <KeyboardAwareScrollView bounces={false}>
              <View style={{ marginTop: 12 }} />
              {children}
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </View>
      </RBSheet>
    );
  }
);

export default BottomSheet;

const styles = StyleSheet.create({});
