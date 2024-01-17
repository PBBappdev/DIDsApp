import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotpassword}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1Typo]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.backArrowParent}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.forgotPassword, styles.passwordClr]}>
          Forgot Password
        </Text>
      </View>
      <Text style={[styles.enterYourEmail, styles.passwordClr]}>
        Enter your email and we will send you a password reset link.
      </Text>
      <RNPTextInput
        style={styles.forgotpasswordChild}
        label="Email Address"
        mode="outlined"
        placeholderTextColor="#c4ced3"
        activeOutlineColor="#fbb042"
        theme={{
          fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
          colors: { text: "#c4ced3" },
        }}
      />
      <Pressable
        style={styles.resetPasswordWrapper}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={[styles.resetPassword, styles.passwordClr]}>
          Reset Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
  },
  time1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  passwordClr: {
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    alignItems: "center",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  time: {
    right: "68.36%",
    left: "-11.54%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorBlack,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.8,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.5,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.2,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "-9.23%",
    left: "66.05%",
  },
  statusBar: {
    alignSelf: "stretch",
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  forgotPassword: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    display: "flex",
  },
  backArrowParent: {
    marginTop: 53,
  },
  enterYourEmail: {
    fontFamily: FontFamily.pTSansRegular,
    height: 65,
    width: 334,
    textAlign: "left",
    display: "flex",
    marginTop: 53,
    fontSize: FontSize.size_mid,
  },
  forgotpasswordChild: {
    borderRadius: Border.br_8xs,
    height: 72,
    width: 334,
    marginTop: 53,
    borderStyle: "solid",
  },
  resetPassword: {
    top: 19,
    left: 75,
    fontSize: FontSize.size_3xl,
    justifyContent: "center",
    width: 180,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    position: "absolute",
    display: "flex",
  },
  resetPasswordWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 53,
  },
  forgotpassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
  },
});

export default ForgotPassword;
