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
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const NavigationBar4 = ({ style }) => {
  return (
    <View style={[styles.navigationBar, style]}>
      <View style={styles.meetingsSelected}>
        <Image
          style={styles.groupTaskIcon}
          contentFit="cover"
          source={require("../assets/group-task1.png")}
        />
        <Text style={[styles.meetings, styles.meetingsTypo]}>Meetings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
  },
  groupTaskIcon: {
    width: 40,
    height: 40,
  },
  meetings: {
    color: Color.colorGoldenrod_100,
  },
  meetingsSelected: {
    alignItems: "center",
  },
  navigationBar: {
    backgroundColor: Color.colorLightgray,
    width: 390,
    height: 88,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavigationBar4;
