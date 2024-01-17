import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Helpline1 = ({ style }) => {
  return (
    <View style={[styles.helpline, style]}>
      <Image
        style={styles.onlineSupportIcon}
        contentFit="cover"
        source={require("../assets/online-support11.png")}
      />
      <Text style={styles.helpline1}>Helpline</Text>
    </View>
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
    color: Color.colorGoldenrod_100,
    textAlign: "center",
  },
  helpline: {
    alignItems: "center",
  },
});

export default Helpline1;
