import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DisplayFullButton from "./DisplayFullButton";
import DisplayPlusButton from "./DisplayPlusButton";
import { DisplayButtonType } from "../../types";

const DisplayButton = ({ count }: DisplayButtonType) => {
  return (
    <View style={{ position: "absolute", top: 8, right: 8, zIndex: 3 }}>
      {count > 0 ? <DisplayFullButton count={count} /> : <DisplayPlusButton />}
    </View>
  );
};

export default DisplayButton;

const styles = StyleSheet.create({});
