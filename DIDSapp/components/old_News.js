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

const News = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.news, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "InfoScreen" })
      }
    >
      <Image
        style={styles.infoSquaredIcon}
        contentFit="cover"
        source={require("../assets/info-squared.png")}
      />
      <Text style={styles.info}>Info</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  infoSquaredIcon: {
    width: 40,
    height: 40,
  },
  info: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  news: {
    alignItems: "center",
  },
});

export default News;
