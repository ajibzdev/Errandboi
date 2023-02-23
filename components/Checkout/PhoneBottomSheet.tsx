import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import AuthInput from "../shared/AuthInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import FullWidthButton from "../shared/FullWidthButton";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../GlobalStyles";

const { height, width } = Layout.window;

type PhoneType = {
  phone: string;
  setPhone: any;
};

type PhoneViewType = {
  phone: PhoneType;
};

const PhoneView = React.forwardRef(
  ({ phone, setPhone }: PhoneType, ref: any) => {
    const hallRef = React.useRef<any>();
    const dropRef = React.useRef<any>();

    return (
      <View style={[GlobalStyles.width100, GlobalStyles.alignCenter]}>
        <AuthInput
          label="Mobile Number "
          value={phone}
          onChangeText={setPhone}
          ref={hallRef}
          // @ts-ignore
          keyboardType={"decimal-pad"}
        />

        <View style={{ marginVertical: 24 }} />
        <FullWidthButton
          onPress={() => {
            ref.current.close();
          }}
          label="Save Phone"
        />
      </View>
    );
  }
);

const PhoneBottomSheet = React.forwardRef(
  ({ phone, setPhone }: PhoneType, ref) => {
    return (
      <BottomSheet ref={ref} heading="Edit Phone" height={height * 0.4}>
        <PhoneView phone={phone} setPhone={setPhone} ref={ref} />
      </BottomSheet>
    );
  }
);

export default PhoneBottomSheet;

const styles = StyleSheet.create({
  input: {
    height: 80,
    flex: 1,
    width: "100%",
    borderRadius: Sizes.medium,
    backgroundColor: Colors.backgroundInput,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: Sizes.medium,

    fontFamily: "sans-regular",
  },
});
