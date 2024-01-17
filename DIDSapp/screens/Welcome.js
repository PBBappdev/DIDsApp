import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.orTypo]}>9:41</Text>
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
      <Image
        style={styles.didsLogoIcon}
        contentFit="cover"
        source={require("../assets/dids-logo.png")}
      />
      <Button
        style={styles.welcomeChild}
        title="Create an account"
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fbb042"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("CreateAccount")}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
      <View style={styles.lineParent}>
        <View style={styles.frameLayout} />
        <Text style={[styles.or, styles.orTypo]}>Or</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Text
        style={[styles.alreadyHaveAn, styles.orTypo]}
      >{`Already have an account?
`}</Text>
      <TouchableHighlight
        style={styles.logIn}
        underlayColor="rgba(240, 73, 55, 0.8)"
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.logIn1, styles.orTypo]}>Log in</Text>
      </TouchableHighlight>
      <Text style={[styles.byUsingOurContainer, styles.orTypo]}>
        <Text style={styles.byUsingOurContainer1}>
          <Text
            style={styles.byUsingOur}
          >{`By using our app you are agreeing to our `}</Text>
          <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "PTSans-Bold",
  },
  frameButtonBtn1: {
    position: "relative",
  },
  frameButtonBtn2: {
    borderRadius: 10,
    width: 334,
    height: 60,
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
  },
  orTypo: {
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
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
  frameLayout: {
    height: 1,
    width: 146,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  time: {
    right: "68.36%",
    left: "-11.54%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
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
  didsLogoIcon: {
    width: 255,
    height: 130,
    marginTop: 45,
  },
  welcomeChild: {
    marginTop: 45,
  },
  or: {
    marginLeft: 13,
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  frameItem: {
    marginLeft: 13,
  },
  lineParent: {
    flexDirection: "row",
    marginTop: 45,
    alignItems: "center",
  },
  alreadyHaveAn: {
    width: 199,
    height: 22,
    marginTop: 45,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  logIn1: {
    color: Color.colorCornflowerblue,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  logIn: {
    marginTop: 45,
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
    display: "flex",
    width: 334,
    height: 73,
    marginTop: 45,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    alignItems: "center",
  },
  welcome: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
  },
});

export default Welcome;
