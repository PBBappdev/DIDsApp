import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.createaccount}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createAccountScrollViewContent}
    >
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.frameLayout1]}>
          <View style={styles.time}>
            <Text style={styles.time1}>9:41</Text>
          </View>
        </View>
        <View style={[styles.frame1, styles.frameLayout1]}>
          <View style={styles.time}>
            <View style={styles.battery}>
              <View style={styles.border} />
              <Image
                style={[styles.capIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/cap.png")}
              />
              <View style={styles.capacity} />
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
      </View>
      <View style={styles.backArrowParent}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text
          style={[styles.createAccount, styles.createAccountFlexBox]}
          numberOfLines={1}
        >
          Create Account
        </Text>
      </View>
      <View style={styles.frameParent}>
        <RNPTextInput
          style={styles.frameLayout}
          label="First Name*"
          placeholder="First Name"
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
          label="Last Name*"
          placeholder="Lat Name"
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
          label="Email Address*"
          placeholder="Email"
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
          label="Password*"
          placeholder="Password"
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
          label="Confirm Password*"
          placeholder="Confirm Password*"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <View style={styles.frame2}>
        <TouchableOpacity
          style={[styles.continueWrapper, styles.frameLayout1]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("CreateProfile")}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
        <View style={[styles.frame3, styles.frame3Layout]}>
          <Text style={[styles.mandatoryInformation, styles.frame3Layout]}>
            <Text style={styles.mandatoryInformationTxtContainer}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.mandatoryInformation1}>
                Mandatory information
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createAccountScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameLayout1: {
    height: 60,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  createAccountFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    color: Color.colorBlack,
    lineHeight: 22,
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: 334,
    borderStyle: "solid",
  },
  frame3Layout: {
    height: 52,
    top: 0,
    width: 334,
    position: "absolute",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  time: {
    marginTop: -24,
    top: "50%",
    right: "0%",
    left: "0%",
    height: 54,
    position: "absolute",
    width: "100%",
  },
  frame: {
    left: -45,
    width: 168,
    top: -14,
    height: 60,
    overflow: "hidden",
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
    left: "50%",
    position: "absolute",
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.8,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
    left: "50%",
    position: "absolute",
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
  frame1: {
    left: 258,
    width: 168,
    top: -14,
    height: 60,
    overflow: "hidden",
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  createAccount: {
    top: 39,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    fontSize: FontSize.size_13xl,
    width: 334,
    position: "absolute",
  },
  backArrowParent: {
    height: 115,
    marginTop: 14,
    width: 334,
  },
  frameItem: {
    marginTop: 33,
  },
  frameParent: {
    width: 331,
    marginTop: 14,
  },
  continue: {
    top: 19,
    left: 125,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  continueWrapper: {
    marginLeft: -170,
    top: 52,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    width: 340,
    left: "50%",
  },
  text: {
    fontSize: FontSize.size_13xl,
  },
  mandatoryInformation1: {
    fontSize: FontSize.title3Bold_size,
  },
  mandatoryInformationTxtContainer: {
    width: "100%",
  },
  mandatoryInformation: {
    fontFamily: FontFamily.pTSansRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    color: Color.colorBlack,
    lineHeight: 22,
  },
  frame3: {
    marginLeft: -167,
    left: "50%",
    overflow: "hidden",
  },
  frame2: {
    height: 112,
    marginTop: 14,
    width: 334,
    overflow: "hidden",
  },
  createaccount: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccount;
