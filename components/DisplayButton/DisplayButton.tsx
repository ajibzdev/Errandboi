import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DisplayFullButton from "./DisplayFullButton";
import DisplayPlusButton from "./DisplayPlusButton";
import { DisplayButtonType } from "../../types";

const DisplayButton = ({ count, product, shopOwner }: DisplayButtonType) => {
  return (
    <View style={{ position: "absolute", top: 8, right: 8, zIndex: 3 }}>
      {shopOwner ? (
        <DisplayPlusButton
          count={count}
          product={product}
          shopOwner={shopOwner}
        />
      ) : count > 0 ? (
        <DisplayFullButton product={product} count={count} />
      ) : (
        <DisplayPlusButton count={count} product={product} />
      )}
    </View>
  );
};

export default DisplayButton;

const styles = StyleSheet.create({});
