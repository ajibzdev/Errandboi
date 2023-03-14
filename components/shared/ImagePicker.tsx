import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import Colors from "../../constants/Colors";

const ImagePicker = ({
  children,
  pickedImage,
  setPickedImage,
}: {
  children: any;
  pickedImage: any;
  setPickedImage: any;
}) => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermission = async () => {
    // Yet to determine the permission so we ask the user for permission
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permisionResponse = await requestPermission();

      //   Return if the permission was granted or not
      return permisionResponse.granted;
    }

    // The permission has been denied so we cant take pictures yet
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      await requestPermission();

      Alert.alert(
        "Inusfficient Permission",
        "You do not have the required permission to take the photo. "
      );

      // Permission is stil not available so
      return false;
    }

    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image.canceled) {
      return;
    }

    setPickedImage(() => image.assets[0].uri);
  };

  let imagePreview = <Text>No Image taken yet!</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <TouchableWithoutFeedback onPress={takeImageHandler}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
