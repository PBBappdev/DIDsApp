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

const Helpline4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.helpline, style]}
      onPress={() => navigation.navigate("Helpline2")}
    >
      <Image
        style={styles.headsetIcon}
        contentFit="cover"
        source={require("../assets/headset.png")}
      />
      <Text style={styles.helpline1}>Helpline</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headsetIcon: {
    width: 23,
    height: 23,
  },
  helpline1: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.pTSansCaption,
    color: Color.colorTomato_100,
    textAlign: "center",
  },
  helpline: {
    alignItems: "center",
  },
});

export default Helpline4;
