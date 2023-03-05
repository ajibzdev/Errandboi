import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type ProfilePictureType = {
  height?: number;
  width?: number;
  uri: string;
};
const ProfilePicture = ({
  height = 48,
  width = 48,
  uri,
}: ProfilePictureType) => {
  return (
    <Image
      source={!uri ? require("../../assets/images/FoodImage.png") : { uri }}
      resizeMode={"cover"}
      style={[{ height, width, borderRadius: width }]}
    />
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
