import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetpassword}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1Typo]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.batteryPosition]} />
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
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.resetPassword, styles.resetClr]}>
          Reset Password
        </Text>
      </View>
      <View style={styles.frameParent}>
        <RNPTextInput
          style={styles.frameLayout}
          label="Password"
          mode="outlined"
          right={
            <RNPTextInput.Icon style={{ marginTop: "50%" }} name="eye-off" />
          }
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Confirm Password"
          mode="outlined"
          right={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="eye-outline"
            />
          }
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <Pressable
        style={styles.resetPasswordWrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.resetPassword1, styles.resetClr]}>
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
  batteryPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  resetClr: {
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    alignItems: "center",
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: 334,
    borderStyle: "solid",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
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
    left: "50%",
    position: "absolute",
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
  resetPassword: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    textAlign: "left",
    height: 76,
    width: 334,
  },
  backArrowParent: {
    marginTop: 57,
  },
  frameItem: {
    marginTop: 33,
  },
  frameParent: {
    width: 334,
    marginTop: 57,
  },
  resetPassword1: {
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
    marginTop: 57,
  },
  resetpassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
  },
});

export default ResetPassword;
