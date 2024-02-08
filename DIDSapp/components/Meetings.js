import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Meetings = ({ style }) => {
  return (
    <View style={[styles.meetings, style]}>
      <Image
        style={styles.conferenceForegroundSelected}
        contentFit="cover"
        source={require("../assets/conference-foreground-selected.png")}
      />
      <Text style={styles.meetings1}>Meetings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conferenceForegroundSelected: {
    width: 23,
    height: 23,
  },
  meetings1: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.PTSansCaption,
    color: Color.colorWhite,
    textAlign: "center",
  },
  meetings: {
    alignItems: "center",
  },
});

export default Meetings;
