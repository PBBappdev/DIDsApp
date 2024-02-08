import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const News1 = ({ style }) => {
  return (
    <View style={[styles.news, style]}>
      <Image
        style={styles.activityFeedIcon}
        contentFit="cover"
        source={require("../assets/activity-feed2.png")}
      />
      <Text style={styles.info}>Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityFeedIcon: {
    width: 40,
    height: 40,
  },
  info: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.InterRegular,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
  },
  news: {
    alignItems: "center",
  },
});

export default News1;
