import * as React from "react";
import { StatusBar, StyleSheet, Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SignInWrongDay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signinwrongday}>
      <StatusBar style={styles.statusBarPosition} barStyle="default" />
      <Image
        style={styles.signinwrongdayChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.online, styles.textFlexBox]}>Online</Text>
      <View style={[styles.backArrowParent, styles.statusBarPosition]}>
        <Pressable
          style={styles.backArrow}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textFlexBox]}>14/12 - 18:00</Text>
        <Text style={[styles.onlineTuesday, styles.joinHereFlexBox]}>
          Online, Tuesday
        </Text>
      </View>
      <Text style={[styles.joinHere, styles.joinHereFlexBox]}>Join Here</Text>
      <Text style={[styles.cannotSignIn, styles.textFlexBox]}>
        Cannot sign in, come back on day when group is running.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 390,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  joinHereFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    position: "absolute",
  },
  signinwrongdayChild: {
    top: 251,
    maxHeight: "100%",
    width: 345,
    left: 22,
    position: "absolute",
  },
  online: {
    top: 145,
    height: 50,
    fontFamily: FontFamily.pTSansRegular,
    left: 22,
    fontSize: FontSize.size_5xl,
    display: "flex",
    width: 345,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    left: 23,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 39,
    left: 90,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.pTSansCaption,
    width: 220,
    height: 31,
  },
  onlineTuesday: {
    top: 13,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansCaptionBold,
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 22,
  },
  backArrowParent: {
    top: 35,
    height: 81,
  },
  joinHere: {
    top: 206,
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.pTSansRegular,
    left: 22,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
  },
  cannotSignIn: {
    top: 262,
    fontSize: FontSize.size_3xl,
    height: 118,
    fontFamily: FontFamily.pTSansRegular,
    left: 22,
    width: 345,
  },
  signinwrongday: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignInWrongDay;
