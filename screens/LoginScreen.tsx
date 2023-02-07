import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import LoginView from "../components/Login/LoginView";
import { FlatList } from "react-native-gesture-handler";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { BooleanType, ScreenNavigationType } from "../types";
import Sizes from "../constants/Sizes";
import ActionButton from "../components/shared/ActionButton";
import PaginatedView from "../components/shared/PaginatedView";
import LoginHeader from "../components/Login/LoginHeader";
import LoginFooter from "../components/Login/LoginFooter";

const { width, height } = Layout.window;

const LoginScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  const [loginIsActive, setLoginIsActive] = useState<BooleanType>(true);

  const renderItem = ({ item, i }: { item: any; i: number }) => {
    return <View />;
  };

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <FlatList
        data={[1]}
        bounces={false}
        // @ts-ignore
        renderItem={renderItem}
        pagingEnabled
        ListHeaderComponent={
          <LoginHeader state={loginIsActive} setState={setLoginIsActive} />
        }
        ListFooterComponent={
          <LoginFooter state={loginIsActive} setState={setLoginIsActive} />
        }
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
