import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";

type BottomSheetType = {
  children: React.ReactNode;
};
const BottomSheet = React.forwardRef(({ children }: BottomSheetType, ref) => {
  return (
    <RBSheet
      // @ts-ignore
      ref={ref}
      closeOnDragDown
      closeOnPressMask
      closeOnPressBack
      height={338}
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
      <Text>BottomSheet</Text>
    </RBSheet>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({});
