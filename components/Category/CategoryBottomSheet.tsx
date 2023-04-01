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
type CategoryType = {
  category: CatType[];
  setCategory: any;
  setSelected: any;
};

const CategoryBottomSheet = React.forwardRef(
  ({ category, setCategory, setSelected }: CategoryType, ref) => {
    return (
      <BottomSheet ref={ref} heading="Category">
        {category.length > 0 ? (
          <ScrollView style={[GlobalStyles.flex1]}>
            {category.map((item: CatType) => {
              return (
                <TouchableOpacity
                  style={[GlobalStyles.marginVerticalMedium]}
                  onPress={() => {
                    setSelected(() => item.name);
                    setCategory(item);
                    // @ts-ignore
                    ref.current.close();
                  }}
                  key={item.id}
                >
                  <Text style={[Fonts.sansSemiBold]}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <View style={[GlobalStyles.flex1]}>
            <Text style={[Fonts.sansH1, GlobalStyles.textColorPrimary]}>
              No category
            </Text>
          </View>
        )}
      </BottomSheet>
    );
  }
);

export default CategoryBottomSheet;

const styles = StyleSheet.create({});
