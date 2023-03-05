import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Fonts from "../../constants/Fonts";
import GlobalStyles from "../../GlobalStyles";
import Colors, { Shadows } from "../../constants/Colors";
import Location from "../../assets/icons/LocationIcon.svg";
import Sizes from "../../constants/Sizes";
import { DisplayCardType } from "../../types";
import DisplayButton from "../DisplayButton/DisplayButton";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import { CartContext } from "../../store/cart-context";

const { height, width } = Layout.window;

const DisplayCard = ({
  _id,
  image,
  label,
  location,
  isFood,
  price,
  status,
  time,
}: DisplayCardType) => {
  const navigation = useNavigation();

  const cartCtx = React.useContext(CartContext);
  const count = cartCtx.getProductCount(_id);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        !isFood &&
          // @ts-ignore
          navigation.navigate("LocationScreen", {
            image,
            label,
            location,
            isFood,
            price,
            status,
            time,
          });
      }}
    >
      <View style={[styles.container, Shadows.shadowLight]}>
        <DisplayButton
          count={count}
          product={{
            image,
            label,
            location,
            isFood,
            price,
            status,
            time,
            _id,
          }}
        />
        <Image
          style={[GlobalStyles.width100, styles.image]}
          source={require("../../assets/images/FoodImage.png")}
          resizeMode={"cover"}
        />

        <View style={styles.mainContainer}>
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.width100,
              GlobalStyles.alignCenter,
            ]}
          >
            <Text
              style={[
                Fonts.sansSemiBold,
                GlobalStyles.textCapitalize,
                styles.label,
                GlobalStyles.flex1,
              ]}
              numberOfLines={1}
            >
              {" "}
              {label}
            </Text>

            {isFood && price && (
              <Text style={[Fonts.sansSemiBold, styles.price]}>₦{price}</Text>
            )}
          </View>

          <View
            style={[
              GlobalStyles.marginVerticalSmall,
              GlobalStyles.width100,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Location height={12} width={Sizes.medium} />
            <Text
              style={[
                Fonts.sansNormal,
                GlobalStyles.marginHorizontalSmall,
                GlobalStyles.textCapitalize,
                styles.font14,
                styles.location,
              ]}
              numberOfLines={1}
            >
              {location}
            </Text>
          </View>

          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.width100,
              GlobalStyles.alignCenter,
            ]}
          >
            {isFood ? (
              <Text
                style={[
                  Fonts.sansNormal,
                  styles.font14,
                  GlobalStyles.flex1,
                  GlobalStyles.textCapitalize,
                  { color: status ? Colors.green71D : Colors.redDB5 },
                ]}
                numberOfLines={1}
              >
                {status ? "Available" : " Not Available "}
              </Text>
            ) : (
              <Text
                style={[
                  Fonts.sansNormal,
                  styles.font14,
                  GlobalStyles.flex1,
                  GlobalStyles.textCapitalize,
                  { color: status ? Colors.green71D : Colors.redDB5 },
                ]}
                numberOfLines={1}
              >
                {status ? "Opened" : " Closed "}
              </Text>
            )}

            {!isFood && (
              <Text style={[styles.font14, styles.grey6C]}>
                {status ? (
                  <Text>
                    Delivery:{" "}
                    <Text
                      style={[Fonts.sansSemiBold, styles.grey6C, styles.font14]}
                    >
                      ₦{price}
                    </Text>{" "}
                  </Text>
                ) : (
                  <Text>{time}</Text>
                )}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginLeft: 12,
    overflow: "hidden",
    width: width * 0.55,
    marginVertical: Sizes.medium,
  },
  image: {
    height: 136,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  mainContainer: {
    padding: 10,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  label: {
    fontSize: 16,
  },
  price: { color: Colors.primary, fontSize: 14 },
  font14: {
    fontSize: 14,
  },
  location: { color: Colors.grey7D7D },
  grey6C: { color: Colors.grey6C6C },
});
