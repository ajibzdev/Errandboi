import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../GlobalStyles";
import NavTitle from "../../components/shared/NavTitle";
import ProfilePicture from "../../components/shared/ProfilePicture";
import Profile from "../../assets/icons/ProfilePictureIcon.svg";
import Pencil from "../../assets/icons/PencilPrimaryIcon.svg";
import { handleProfilePicture } from "../../utils/handleImages";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { StringType } from "../../types";
import AuthInput from "../../components/shared/AuthInput";

const AddProductScreen = () => {
  // States
  const [value, setValue] = React.useState(null);
  //   Product State
  const [productTitle, setProductTitle] = React.useState<StringType>(null);
  const [productPrice, setProductPrice] = React.useState<StringType>(null);
  const [category, setCategory] = React.useState<StringType>(null);

  //   Product Ref
  const productTitleRef = React.useRef<any>();
  const productPriceRef = React.useRef<any>();
  const categoryRef = React.useRef<any>();

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Add Product" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={[
            GlobalStyles.flex1,
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.alignCenter,
          ]}
        >
          <View style={{ marginTop: Sizes.large }} />
          <View style={[GlobalStyles.alignCenter]}>
            {value ? (
              <ProfilePicture uri={value} height={120} width={120} />
            ) : (
              <Profile width={120} height={120} />
            )}
          </View>
          <View style={{ marginTop: 18 }} />
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              handleProfilePicture(setValue, "image", false);
            }}
          >
            <View style={[GlobalStyles.flexRow]}>
              <Pencil height={10} width={10} />

              <Text
                style={[
                  Fonts.sansSemiBold,
                  GlobalStyles.textColorPrimary,
                  { marginLeft: 8, fontSize: 12 },
                ]}
              >
                Upload Banner
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 40 }} />
          <AuthInput
            ref={productTitleRef}
            label="Product Title"
            onChangeText={setProductTitle}
            value={productTitle}
          />
          <AuthInput
            ref={productPriceRef}
            label="Product Price"
            onChangeText={setProductPrice}
            value={productPrice}
            keyboardType={"decimal-pad"}
          />

          <View
            style={[GlobalStyles.flexRow, GlobalStyles.justifySpaceBetween]}
          >
            <AuthInput
              ref={productTitleRef}
              label="Product Title"
              onChangeText={setProductTitle}
              value={productTitle}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.6,
    borderColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 32,
  },
});
