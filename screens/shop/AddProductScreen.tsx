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
import { createFormData, handleProfilePicture } from "../../utils/handleImages";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { CategoryType, ScreenNavigationType, StringType } from "../../types";
import AuthInput from "../../components/shared/AuthInput";
import {
  capitalizeSentence,
  numberWithCommas,
  setInputWithComma,
} from "../../utils/utilityFunctions";
import BottomShadow from "../../components/shared/BottomShadow";
import FullWidthButton from "../../components/shared/FullWidthButton";
import CategoryBottomSheet from "../../components/Category/CategoryBottomSheet";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AddCategoryBottomSheet from "../../components/Category/AddCategoryBottomSheet";
import {
  getEndpoint,
  postToEndpoint,
  postWithForm,
} from "../../api/responseHandler";
import API from "../../api/API";

const AddProductScreen: React.FC<ScreenNavigationType> = ({
  route,
  navigation,
}) => {
  // Params
  let category = route.params.category;
  let getProducts = route.params.getProducts;

  // States
  const [categoryList, setCategoryList] =
    React.useState<CategoryType[]>(category);
  const [value, setValue] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState<string>("");
  const [categoryValue, setCategoryValue] = React.useState<CategoryType>(
    category[0]
  );
  // Boolean
  const [adding, setAdding] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);

  //   Product State
  const [productTitle, setProductTitle] = React.useState<StringType>(null);
  const [productPrice, setProductPrice] = React.useState<string>("0");
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    category[0].name
  );

  //   Product Ref
  const productTitleRef = React.useRef<any>();
  const productPriceRef = React.useRef<any>();
  const categoryRef = React.useRef<any>();
  const modalRef = React.useRef<any>();
  const addModalRef = React.useRef<any>();

  // Functions
  const handleAddCategory = async () => {
    try {
      setAdding(() => true);

      const reqData = {
        name: capitalizeSentence(categoryName).trim(),
      };

      const res = await postToEndpoint(API.addCategory, reqData);
      console.log(res);
      if (!res) {
        alert("Error while trying to create category. Category already exists");
      } else {
        const newCat = await getEndpoint(API.getCategory);
        setCategoryList(() => newCat);

        addModalRef.current.close();
      }

      setAdding(() => false);
    } catch (err: any) {
      setAdding(() => false);
      console.log(err.response);
    }
  };

  //   Submit
  const handleSubmit = async () => {
    try {
      setLoading(() => true);
      const reqData = {
        name: productTitle?.trim(),
        price: productPrice.trim(),
        category: categoryValue.id,
      };

      const payload = createFormData(value, reqData, "image");

      const res = await postWithForm(API.addProduct, payload);

      if (!res) {
        alert("Error, while trying to add product.");
      } else {
        navigation.navigate("LoadingScreenTemp", {
          call: getProducts,
          destination: "FoodServiceTab",
          message: "Getting your proudcts...",
        });
      }

      setLoading(() => false);
    } catch (err: any) {
      setLoading(() => false);
      console.log(err.response);
    }
  };

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <CategoryBottomSheet
        setCategory={setCategoryValue}
        category={categoryList}
        ref={modalRef}
        setSelected={setSelectedCategory}
      />
      <AddCategoryBottomSheet
        loading={adding}
        setValue={setCategoryName}
        submit={handleAddCategory}
        value={categoryName}
        ref={addModalRef}
      />
      <NavTitle label="Add Product" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView
          style={[GlobalStyles.flex1, GlobalStyles.paddingHorizontalLarge]}
          contentContainerStyle={{ alignItems: "center" }}
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
              caretHidden={true}
              onChangeText={setSelectedCategory}
              value={selectedCategory}
              dropdown={true}
              width={"45%"}
              placeholder={"Select"}
              tapFunction={() => {
                modalRef.current.open();
              }}
            />

            <TouchableOpacity
              style={[GlobalStyles.flexCenter]}
              onPress={() => {
                addModalRef.current.open();
              }}
            >
              <Text style={[Fonts.sansH3, GlobalStyles.textColorPrimary]}>
                Add Category
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <BottomShadow>
        <FullWidthButton
          label="Create Product"
          onPress={handleSubmit}
          loading={loading}
          disabled={
            productTitle === "" || productTitle == null || categoryValue == null
          }
        />
      </BottomShadow>
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
