import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MeetingsSelected = ({ style }) => {
  return (
    <View style={[styles.meetingsSelected, style]}>
      <Image
        style={styles.conferenceForegroundSelected}
        contentFit="cover"
        source={require("../assets/conference-foreground-selected11.png")}
      />
      <Text style={styles.meetings}>Meetings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conferenceForegroundSelected: {
    width: 23,
    height: 23,
  },
  meetings: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.pTSansCaption,
    color: Color.colorTomato_100,
    textAlign: "center",
  },
  meetingsSelected: {
    alignItems: "center",
  },
});

export default MeetingsSelected;
