import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Helpline = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.helpline, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Helpline2" })
      }
    >
      <Image
        style={styles.onlineSupportIcon}
        contentFit="cover"
        source={require("../assets/online-support.png")}
      />
      <Text style={styles.helpline1}>Helpline</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  onlineSupportIcon: {
    width: 40,
    height: 40,
  },
  helpline1: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  helpline: {
    alignItems: "center",
  },
});

export default Helpline;
