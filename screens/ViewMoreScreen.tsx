import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenNavigationType } from "../types";
import GlobalStyles from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import DisplayFullCard from "../components/Display/DisplayFullCard";
import NavTitle from "../components/shared/NavTitle";

type ViewMoreProps = {
  navigation: any;
  route: any;
  callFunction: () => void;
  onRefresh: () => void;
  data: any;
};

const ViewMoreScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // Routes
  const { data, onRefresh, callFunction, shopOwner, title, isFood } =
    route.params;
  // States
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  //   Use Effects

  React.useEffect(() => {
    setLoading(() => true);

    (async () => {
      await callFunction();
    })();
    setLoading(() => false);
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <NavTitle label={title} />
      <View style={[GlobalStyles.paddingHorizontalLarge, GlobalStyles.flex1]}>
        <KeyboardAwareFlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <DisplayFullCard
                image={item.image}
                label={item.label}
                location={item.location}
                isFood={isFood}
                price={item.price}
                status={item.status}
                shopOwner={shopOwner}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewMoreScreen;

const styles = StyleSheet.create({});
