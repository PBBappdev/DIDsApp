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

const Settings11 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.settings, style]}
      onPress={() => navigation.navigate("Settings2")}
    >
      <Image
        style={styles.sliderIcon}
        contentFit="cover"
        source={require("../assets/slider11.png")}
      />
      <Text style={styles.settings1}>Settings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sliderIcon: {
    width: 23,
    height: 23,
  },
  settings1: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.pTSansCaption,
    color: Color.colorTomato_100,
    textAlign: "center",
  },
  settings: {
    alignItems: "center",
  },
});

export default Settings11;
