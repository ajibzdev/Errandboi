import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Search from "../../assets/icons/Search.svg";
import Sizes from "../../constants/Sizes";
import Colors, { Shadows } from "../../constants/Colors";

const FullTextInput = ({
  value,
  onChangeText,
  onSubmitEditing,
  placeholder,
  placeholderTextColor,
}: {
  value: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: any;
  onSubmitEditing?: any;
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.greyF9F9,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          paddingVertical: 15,
          borderRadius: 6,
        },
        Shadows.shadowLight,
      ]}
    >
      <View style={{ marginRight: 12 }}>
        <Search height={18} width={18} stroke={Colors.grey6C6C} />
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.grey6C6C}
        style={{
          flex: 1,
          borderRadius: 6,
          fontSize: Sizes.large,
          color: Colors.grey6C6C,
        }}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={value}
      />
    </View>
  );
};

export default FullTextInput;

const styles = StyleSheet.create({});
