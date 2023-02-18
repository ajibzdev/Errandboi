import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { BlurView } from "react-native-blur";

import React, { useEffect, useRef, useState } from "react";
import Colors, { Shadows } from "../../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PopupModal = ({
  visible,
  children,
}: {
  visible: any;
  children?: JSX.Element;
}) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);

      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={showModal}
      // animationType="fade"
      style={{ flex: 1 }}
    >
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContainer,
            Shadows.shadowLight,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <KeyboardAwareScrollView bounces={false}>
            {children}
          </KeyboardAwareScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: "90%",
    borderRadius: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.transparentBlack,
    justifyContent: "center",
    alignItems: "center",
  },
});
