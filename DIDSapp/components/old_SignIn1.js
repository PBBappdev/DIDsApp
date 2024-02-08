import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignIn1 = ({ style }) => {
  return (
    <View>
      <Image
        style={styles.signUpIcon}
        contentFit="cover"
        source={require("../assets/sign-up111.png")}
      />
      <Text style={styles.signIn1}>Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpIcon: {
    position: "relative",
    width: 40,
    height: 40,
  },
  signIn1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.InterRegular,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
  },
});

export default SignIn1;
