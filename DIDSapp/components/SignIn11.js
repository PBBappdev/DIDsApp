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

const SignIn3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.signIn, style]}
      onPress={() => navigation.navigate("SignInMain")}
    >
      <Image
        style={styles.signUpIcon}
        contentFit="cover"
        source={require("../assets/sign-up11.png")}
      />
      <Text style={styles.signIn1}>Sign In</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signUpIcon: {
    width: 23,
    height: 23,
  },
  signIn1: {
    fontSize: FontSize.size_xs,
    lineHeight: 22,
    fontFamily: FontFamily.PTSansCaption,
    color: Color.colorTomato_100,
    textAlign: "center",
  },
  signIn: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignIn3;
