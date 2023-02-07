import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  FlatList,
} from "react-native";
import React, { isValidElement, useEffect, useState } from "react";
import ActionButton from "../shared/ActionButton";
import { ScreenStack } from "react-native-screens";
import Colors from "../../constants/Colors";

const PaginatedView = ({
  buttons,
  screens,
  buttonColor,
  searching,
  SearchComponent,
}: {
  buttons: any;
  screens: any;
  buttonColor?: string;
  searching?: boolean;
  SearchComponent?: any;
}) => {
  const [buttonsArr, setButtonsArr] = useState(buttons);
  const [activeButton, setActiveButton] = useState(buttons[0]);
  const [activeScreen, setActiveScreen] = useState(screens[0]);
  const [activeButtonToggle, setActiveButtonToggle] = useState(false);

  const changeActiveScreenHandler = (id: any) => {
    const [oldBtn] = buttons.filter((btn: any) => btn.active);

    if (oldBtn) {
      oldBtn.active = false;
    }

    const [newBtn] = buttons.filter((btn: any) => btn.id == id);
    newBtn.active = true;

    setActiveButton(newBtn);

    const [newScreen] = screens.filter((screen: any) => screen.id == id);
    setActiveScreen(newScreen);

    setActiveButtonToggle(!activeButtonToggle);
  };

  useEffect(() => {
    setButtonsArr(buttons);
  }, [activeButtonToggle]);

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <FlatList
          collapsable={false}
          nestedScrollEnabled={true}
          data={
            !searching
              ? buttonsArr
              : [
                  {
                    id: 1,
                    active: true,
                    label: "Search Result",
                  },
                ]
          }
          horizontal
          bounces={false}
          // @ts-ignore
          keyExtractor={(item) => Math.random() * 5}
          renderItem={({ item, index }) => {
            return (
              <ActionButton
                onPress={() => changeActiveScreenHandler(item.id)}
                label={item.label}
                active={item.active}
                key={item.id}
                style={{
                  backgroundColor: item.active
                    ? buttonColor || Colors.primary
                    : Colors.white,
                }}
              />
            );
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={[1]}
        //@ts-ignore
        keyExtractor={(item) => Math.random() * 5}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListFooterComponent={
          !searching ? (
            activeScreen.component
          ) : isValidElement(SearchComponent) ? (
            SearchComponent
          ) : (
            <SearchComponent />
          )
        }
      />
    </View>
  );
};

export default PaginatedView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  header: {
    flex: 1,
    paddingHorizontal: 24,
  },
  screens: {
    flex: 10,

    width: "100%",
  },
});
