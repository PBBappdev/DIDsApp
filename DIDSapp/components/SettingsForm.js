import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingsForm = ({
  propPosition,
  propMarginTop,
  propBottom,
  propLeft,
  propTop,
  onHelplinePress,
  onNewsPress,
  onSignInPress,
  onSettingsPress,
}) => {
  const navigationBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
    };
  }, [propPosition, propMarginTop, propBottom, propLeft]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.navigationBar, navigationBarStyle]}>
      <View style={[styles.meetingsSelectedParent, frameViewStyle]}>
        <View style={styles.meetingsSelected}>
          <Image
            style={styles.conferenceForegroundSelected}
            contentFit="cover"
            source={require("../assets/conference-foreground-selected.png")}
          />
          <Text style={styles.meetings}>Meetings</Text>
        </View>
        <Pressable style={styles.signInSpaceBlock} onPress={onHelplinePress}>
          <Image
            style={styles.conferenceForegroundSelected}
            contentFit="cover"
            source={require("../assets/headset11.png")}
          />
          <Text style={styles.meetings}>Helpline</Text>
        </Pressable>
        <Pressable style={styles.signInSpaceBlock} onPress={onNewsPress}>
          <Image
            style={styles.conferenceForegroundSelected}
            contentFit="cover"
            source={require("../assets/information.png")}
          />
          <Text style={styles.meetings}>Info</Text>
        </Pressable>
        <Pressable
          style={[styles.signIn, styles.signInSpaceBlock]}
          onPress={onSignInPress}
        >
          <Image
            style={styles.conferenceForegroundSelected}
            contentFit="cover"
            source={require("../assets/sign-up.png")}
          />
          <Text style={styles.meetings}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.signInSpaceBlock} onPress={onSettingsPress}>
          <Image
            style={styles.conferenceForegroundSelected}
            contentFit="cover"
            source={require("../assets/slider1.png")}
          />
          <Text style={styles.meetings}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  conferenceForegroundSelected: {
    width: 23,
    height: 23,
  },
  meetings: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.PTSansCaption,
    color: Color.colorWhite,
    textAlign: "center",
  },
  meetingsSelected: {
    alignItems: "center",
  },
  signIn: {
    justifyContent: "center",
  },
  meetingsSelectedParent: {
    position: "absolute",
    top: 9,
    left: 8,
    flexDirection: "row",
  },
  navigationBar: {
    backgroundColor: Color.colorBlack,
    width: 390,
    height: 64,
    marginTop: 28,
  },
});

export default SettingsForm;
