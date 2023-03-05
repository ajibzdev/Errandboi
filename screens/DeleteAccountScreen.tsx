import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenNavigationType } from "../types";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
// Svg
import Icon from "../assets/icons/DeleteAccount.svg";
import Fonts from "../constants/Fonts";
import FullWidthButton from "../components/shared/FullWidthButton";
import Colors from "../constants/Colors";

const DeleteAccountScreen: React.FC<ScreenNavigationType> = ({
  navigation,
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDelete = () => {};
  const handleCancel = () => {};

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label="Delete your account" />
      <View
        style={[GlobalStyles.alignCenter, GlobalStyles.paddingHorizontalLarge]}
      >
        <View style={[{ marginTop: 60 }]} />
        <Icon />

        <Text style={[Fonts.sansH1]}>
          Are you sure you want to delete your account?
        </Text>

        <Text style={[Fonts.sansH4, GlobalStyles.marginVerticalMedium]}>
          Deleting your account is irreversible. if you proceed you’ll loss all
          your account transaction information, order history and recommendation
          history.
        </Text>

        <View style={[{ marginTop: 50 }]} />
        <FullWidthButton
          label="Yes, delete it"
          onPress={handleDelete}
          loading={loading}
          disabled={false}
          backgroundColor={Colors.redDB5}
        />
        <FullWidthButton
          label="No, Keep my account"
          onPress={handleCancel}
          disabled={false}
          backgroundColor={Colors.white}
          textColor={Colors.black}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({});
