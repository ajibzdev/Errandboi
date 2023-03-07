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
import { ScreenNavigationType, StringType } from "../../types";
import AuthInput from "../../components/shared/AuthInput";
import {
  numberWithCommas,
  setInputWithComma,
} from "../../utils/utilityFunctions";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";

const EditProductScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Product ID
  const { id } = route.params;

  // States
  const [value, setValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  //   Product State
  const [productTitle, setProductTitle] = React.useState<StringType>(null);
  const [productPrice, setProductPrice] = React.useState<string>("0");
  const [category, setCategory] = React.useState<StringType>(null);

  //   Product Ref
  const productTitleRef = React.useRef<any>();
  const productPriceRef = React.useRef<any>();
  const categoryRef = React.useRef<any>();

  //   Submit
  const handleSubmit = async () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Edit Product" />
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
            placeholder={"e.g., Indomie"}
          />
          <AuthInput
            ref={productPriceRef}
            label="Product Price"
            onChangeText={(text) => {
              setInputWithComma(text, setProductPrice);
            }}
            value={productPrice}
            keyboardType={"decimal-pad"}
            placeholder={"700"}
          />

          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.width100,
              GlobalStyles.justifySpaceBetween,
            ]}
          >
            <AuthInput
              ref={categoryRef}
              label="Category"
              onChangeText={setCategory}
              value={category}
              dropdown={true}
              width={"45%"}
              placeholder={"Select"}
            />

            <TouchableOpacity style={[GlobalStyles.flexCenter]}>
              <Text style={[Fonts.sansH3, GlobalStyles.textColorPrimary]}>
                Add Category
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <BottomShadow>
        <FullWidthButton
          label="Create Product"
          onPress={handleSubmit}
          loading={loading}
          disabled={productTitle === "" || productTitle == null}
        />
      </BottomShadow>
    </SafeAreaView>
  );
};

export default EditProductScreen;

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
