import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";
import AuthInput from "../shared/AuthInput";
import { StateType } from "../../types";
import FullWidthButton from "../shared/FullWidthButton";
import Profile from "../../assets/icons/ProfilePictureIcon.svg";
import Pencil from "../../assets/icons/PencilPrimaryIcon.svg";
import Colors from "../../constants/Colors";
import { handleProfilePicture } from "../../utils/handleImages";
import ProfilePicture from "../shared/ProfilePicture";

const StoreBanner: React.FC<any> = ({
  setValue,
  value,
  refObj,
  setActiveIndex,
  handleSubmit,
  loading,
}) => {
  return (
    <View
      style={[GlobalStyles.alignCenter, GlobalStyles.paddingHorizontalLarge]}
    >
      <Text style={[Fonts.sansH1, GlobalStyles.marginVerticalMedium]}>
        Upload store banner
      </Text>

      <Text
        style={[
          Fonts.sansH3,
          ,
          { fontFamily: "sans-semiBold" },
          GlobalStyles.textAlignCenter,
        ]}
      >
        Select your logo/banner, so your customers can easily identify you.
      </Text>
      <View style={{ marginTop: Sizes.extraLarge }} />

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

      <FullWidthButton
        label="Go to profile"
        loading={loading}
        onPress={async () => {
          handleSubmit && handleSubmit();
        }}
      />

      <Text
        style={[
          Fonts.sansH4,
          GlobalStyles.textAlignCenter,
          GlobalStyles.marginVerticalMedium,
        ]}
      >
        By registering as a ‘Store Owner’ you agree to our terms of service and
        privacy policy
      </Text>
    </View>
  );
};

export default StoreBanner;

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
