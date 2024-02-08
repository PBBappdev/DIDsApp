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

const News2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.news, style]}
      onPress={() => navigation.navigate("InfoScreen")}
    >
      <Image
        style={styles.informationIcon}
        contentFit="cover"
        source={require("../assets/information.png")}
      />
      <Text style={styles.info}>Info</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  informationIcon: {
    width: 23,
    height: 23,
  },
  info: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.PTSansCaption,
    color: Color.colorWhite,
    textAlign: "center",
  },
  news: {
    alignItems: "center",
  },
});

export default News2;
