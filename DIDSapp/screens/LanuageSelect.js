import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LanuageSelect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lanuageselect}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
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
      <View style={[styles.frameParent, styles.parentPosition]}>
        <RNPTextInput
          style={styles.frameLayout}
          label="Preferred Language"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Secondary Language"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <View style={[styles.backArrowParent, styles.parentPosition]}>
        <Pressable
          style={[styles.backArrow, styles.statusBarPosition]}
          onPress={() => navigation.navigate("CreateProfile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.language, styles.languageFlexBox]}>Language</Text>
      </View>
      <TouchableOpacity
        style={[styles.continueWrapper, styles.parentPosition]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("RoleSelect")}
      >
        <Text style={[styles.continue, styles.languageFlexBox]}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
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
  parentPosition: {
    left: 28,
    position: "absolute",
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: 334,
    borderStyle: "solid",
  },
  languageFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 22,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
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
    width: 390,
    height: 32,
    left: 0,
  },
  frameItem: {
    marginTop: 40,
  },
  frameParent: {
    top: 230,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
    left: 0,
  },
  language: {
    top: 39,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    display: "flex",
    alignItems: "center",
    height: 76,
    width: 334,
    left: 0,
  },
  backArrowParent: {
    top: 61,
    height: 115,
    width: 334,
  },
  continue: {
    top: 19,
    left: 123,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    textAlign: "left",
  },
  continueWrapper: {
    top: 569,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
  },
  lanuageselect: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LanuageSelect;
