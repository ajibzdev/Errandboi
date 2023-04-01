import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import BottomSheet from "../shared/BottomSheet";
import { CategoryType as CatType } from "../../types";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../shared/AuthInput";
import { capitalizeSentence } from "../../utils/utilityFunctions";
import FullWidthButton from "../shared/FullWidthButton";
import Sizes from "../../constants/Sizes";

type CategoryType = {
  value: string;
  setValue: any;
  loading: boolean;
  submit: () => void;
};

const AddCategoryBottomSheet = React.forwardRef(
  ({ value, loading, setValue, submit }: CategoryType, ref) => {
    const categoryRef: any = React.useRef();
    return (
      <BottomSheet ref={ref} heading="Add Category">
        <View style={[GlobalStyles.flex1, GlobalStyles.alignCenter]}>
          <View style={{ marginTop: Sizes.medium }} />
          <AuthInput
            label="Category Name"
            onChangeText={setValue}
            ref={categoryRef}
            value={value}
          />

          <Text style={[GlobalStyles.marginVerticalMedium]}>
            Your categories will determine how users see your item in your
            store.{" "}
          </Text>

          <FullWidthButton
            label="Add Category"
            onPress={submit}
            loading={loading}
            disabled={value == ""}
          />
        </View>
      </BottomSheet>
    );
  }
);

export default AddCategoryBottomSheet;

const styles = StyleSheet.create({});
