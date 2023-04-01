import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Fonts from "../../constants/Fonts";
import GlobalStyles from "../../GlobalStyles";
import Colors, { Shadows } from "../../constants/Colors";
import Location from "../../assets/icons/LocationIcon.svg";
import Sizes from "../../constants/Sizes";
import { DisplayCardType } from "../../types";
import DisplayButton from "../DisplayButton/DisplayButton";

export default function DisplayFullCard({
  image,
  label,
  location,
  isFood,
  price,
  status,
  time,
  shopOwner,
  _id,
  lastEdited,
}: DisplayCardType) {
  return (
    <View style={[styles.container, Shadows.shadowLight]}>
      <DisplayButton
        shopOwner={shopOwner}
        product={{
          image,
          label,
          location,
          isFood,
          price,
          status,
          time,
        }}
        count={0}
      />
      <Image
        style={[GlobalStyles.width100, styles.image]}
        source={{ uri: image }}
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

        {shopOwner && (
          <Text
            style={[Fonts.sansNormal, { fontSize: 12, color: Colors.grey7D7D }]}
          >
            Last Edited: {lastEdited}{" "}
          </Text>
        )}

        {!shopOwner && (
          <View style={[GlobalStyles.width100, GlobalStyles.alignCenter]}>
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
                        style={[
                          Fonts.sansSemiBold,
                          styles.grey6C,
                          styles.font14,
                        ]}
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
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginLeft: 0,
    overflow: "hidden",
    width: "100%",
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
