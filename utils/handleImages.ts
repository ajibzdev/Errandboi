import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import mime from "mime";

export const handleProfilePicture = async (
  setImage: any,
  type: "image" | "video" = "image",
  allowsMultiple: boolean = false
) => {
  let result: any = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:
      type == "image"
        ? ImagePicker.MediaTypeOptions.Images
        : type == "video"
        ? ImagePicker.MediaTypeOptions.Videos
        : ImagePicker.MediaTypeOptions.All,
    allowsEditing: !allowsMultiple,
    allowsMultipleSelection: allowsMultiple,
    orderedSelection: allowsMultiple,
    aspect: [4, 3],
    quality: 1,
  });

  // console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }

  return result.assets[0].uri;
};

export const createFormData = (
  photo: any,
  body: any = {},
  fileName: string = "profile_image"
) => {
  const data: any = new FormData();
  try {
    if (photo.length > 1) {
      photo.forEach((item: any) => {
        // let uri;
        // let myAssetId;
        // let returnedAssetInfo;
        // uri = item;
        // myAssetId = uri.slice(5);
        // returnedAssetInfo = await MediaLibrary.getAssetInfoAsync(myAssetId);

        data.append(fileName, {
          uri: item,
          name: "image.jpg",
          type: "image/jpeg",
        });

        // data.append(fileName, {
        //   uri: item,
        //   name: item.substring(item.lastIndexOf("/") + 1, item.length),
        //   type: mime.getType(item), // after this change problem has gone
        // });
      });

      Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
      });
    } else {
      data.append(fileName, {
        uri: photo,
        name: "image.jpg",
        type: "image/jpeg",
      });

      Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
      });
    }
  } catch (err: any) {
    console.log(err.message);
  }

  return data;
};
