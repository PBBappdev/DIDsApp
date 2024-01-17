import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignInRate = () => {
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] =
    useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.signinrate}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      <Image
        style={styles.signinrateChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text
        style={[styles.gosfordNararaCommunity, styles.pleaseRateTheFlexBox]}
      >
        Gosford Narara Community center 2 pandala Rd, Narara NSW 2250
      </Text>
      <Text style={styles.rate}>Rate</Text>
      <Text style={styles.map}>Map</Text>
      <Text style={[styles.pleaseRateThe, styles.parentLayout]}>
        Please rate the group after it is over
      </Text>
      <Pressable
        style={[styles.submitWrapper, styles.parentLayout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
        }
      >
        <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      </Pressable>
      <View style={[styles.iFoundTheGroupHelpfulParent, styles.parentLayout]}>
        <Text style={[styles.iFoundThe, styles.submitTypo]}>
          I found the group helpful
        </Text>
        <Text style={styles.neutralI}>3 = neutral / I don’t know</Text>
        <Text style={[styles.stronglyDisagree, styles.stronglyPosition]}>
          Strongly disagree
        </Text>
        <Text style={[styles.stronglyAgree, styles.stronglyPosition]}>
          Strongly agree
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentLayout]}
          selectedIndex={frameRadioselectedIndex}
          onChange={setFrameRadioselectedIndex}
        >
          <Radio>{() => <Text style={styles.frameRadioText}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 5</Text>}</Radio>
        </RadioGroup>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fbb042",
  },
  frameRadioText: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadioRadio: {
    padding: 52.25,
  },
  viewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  pleaseRateTheFlexBox: {
    display: "flex",
    color: Color.colorBlack,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
  },
  parentLayout: {
    width: 334,
    position: "absolute",
  },
  submitTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  stronglyPosition: {
    top: 51,
    height: 20,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    position: "absolute",
  },
  signinrateChild: {
    top: 245,
    maxHeight: "100%",
    width: 345,
    left: 22,
    position: "absolute",
  },
  gosfordNararaCommunity: {
    top: 153,
    height: 74,
    alignItems: "center",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    width: 345,
    left: 22,
    position: "absolute",
  },
  rate: {
    top: 248,
    left: 147,
    width: 95,
    height: 43,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.pTSansCaption,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  map: {
    top: 201,
    left: 313,
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  pleaseRateThe: {
    top: 295,
    fontSize: FontSize.size_lg,
    left: 28,
    width: 334,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    height: 35,
  },
  submit: {
    bottom: 19,
    left: 133,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
  },
  submitWrapper: {
    top: 597,
    left: 36,
    borderRadius: Border.br_3xs,
    height: 60,
    backgroundColor: Color.colorGoldenrod_100,
  },
  iFoundThe: {
    fontSize: FontSize.title3Bold_size,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  neutralI: {
    top: 31,
    left: 76,
    width: 189,
    height: 20,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    position: "absolute",
  },
  stronglyDisagree: {
    width: 120,
    textAlign: "left",
    left: 0,
  },
  stronglyAgree: {
    left: 233,
    textAlign: "right",
    width: 101,
  },
  parent: {
    top: 71,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    left: 0,
  },
  iFoundTheGroupHelpfulParent: {
    top: 351,
    height: 125,
    left: 28,
    width: 334,
  },
  signinrate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignInRate;
