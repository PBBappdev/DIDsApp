import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.login}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.loginScrollViewContent}
    >
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
          onPress={() => navigation.navigate("Welcome")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.login1, styles.logInFlexBox]}>Login</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <RNPTextInput
            style={styles.frameLayout}
            label="Email Address"
            mode="outlined"
            placeholderTextColor="#fff"
            activeOutlineColor="#fbb042"
            theme={{
              fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
              colors: { text: "#c4ced3" },
            }}
          />
          <RNPTextInput
            style={[styles.frameItem, styles.frameLayout]}
            label="Password"
            mode="outlined"
            placeholderTextColor="#c4ced3"
            activeOutlineColor="#fbb042"
            theme={{
              fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
              colors: { text: "#c4ced3" },
            }}
          />
        </View>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={[styles.forgotPassword1, styles.logInFlexBox]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.logInWrapper}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Meetings1" })
        }
      >
        <Text style={[styles.logIn, styles.logInFlexBox]}>Log in</Text>
      </Pressable>
      <Text style={[styles.byUsingOurContainer, styles.logInFlexBox]}>
        <Text style={styles.byUsingOurContainer1}>
          <Text
            style={styles.byUsingOur}
          >{`By using our app you are agreeing to our `}</Text>
          <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
  logInFlexBox: {
    alignItems: "center",
    display: "flex",
    lineHeight: 22,
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
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "center",
    fontSize: FontSize.size_mid,
    position: "absolute",
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
  login1: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    display: "flex",
    color: Color.colorBlack,
  },
  backArrowParent: {
    marginTop: 82,
  },
  frameItem: {
    marginTop: 33,
  },
  frameGroup: {
    width: 334,
  },
  forgotPassword1: {
    textDecoration: "underline",
    width: 129,
    color: Color.colorTomato_100,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  forgotPassword: {
    marginTop: 9,
  },
  frameParent: {
    alignItems: "flex-end",
    marginTop: 82,
  },
  logIn: {
    top: 19,
    left: 138,
    fontSize: FontSize.size_3xl,
    justifyContent: "center",
    width: 58,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    display: "flex",
    position: "absolute",
  },
  logInWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 82,
  },
  byUsingOur: {
    color: Color.colorLightgray,
  },
  termsAndConditions: {
    color: Color.colorTomato_100,
  },
  byUsingOurContainer1: {
    width: "100%",
  },
  byUsingOurContainer: {
    height: 73,
    width: 334,
    marginTop: 82,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    display: "flex",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default Login;
