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

const SignIn = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
      }
    >
      <Image
        style={styles.signUpIcon}
        contentFit="cover"
        source={require("../assets/sign-up21.png")}
      />
      <Text style={styles.signIn1}>Sign In</Text>
    </Pressable>
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
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
});

export default SignIn;
