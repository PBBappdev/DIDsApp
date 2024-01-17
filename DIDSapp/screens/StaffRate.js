import React, { useState } from "react";
import { StyleSheet, View, StatusBar, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StaffRate = () => {
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] =
    useState(undefined);

  return (
    <View style={styles.staffrate}>
      <View style={styles.staffrateChild} />
      <StatusBar barStyle="default" />
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      <Image
        style={styles.staffrateItem}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>14/12 - 18:00</Text>
      <Text style={[styles.gosfordNararaCommunity, styles.mapTypo]}>
        Gosford Narara Community center 2 pandala Rd, Narara NSW 2250
      </Text>
      <Text style={styles.gosfordThursday}>Gosford, Thursday</Text>
      <Text style={[styles.rate, styles.rateFlexBox]}>Rate</Text>
      <Text style={[styles.map, styles.mapTypo]}>Map</Text>
      <Text style={[styles.pleaseRateThe, styles.parentLayout]}>
        Please rate the group after it is over
      </Text>
      <Text style={[styles.iFoundThe, styles.followTypo]}>
        I found the group helpful
      </Text>
      <Text style={[styles.anyHelplineFollow, styles.followTypo]}>
        Any helpline follow up requests for this group?
      </Text>
      <View style={[styles.submitWrapper, styles.wrapperLayout]}>
        <Text style={[styles.submit, styles.followTypo]}>Submit</Text>
      </View>
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
      <View style={[styles.requestAFollowUpWrapper, styles.wrapperLayout]}>
        <Text style={[styles.requestAFollow, styles.followTypo]}>
          Request a Follow Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameRadioText: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadioRadio: {
    padding: 52.25,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
  },
  mapTypo: {
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
  },
  rateFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  parentLayout: {
    width: 334,
    alignItems: "center",
    position: "absolute",
  },
  followTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  wrapperLayout: {
    height: 60,
    borderRadius: Border.br_3xs,
    width: 334,
    left: 28,
    position: "absolute",
  },
  stronglyPosition: {
    top: 402,
    height: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pTSansRegular,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  staffrateChild: {
    height: 116,
    width: 390,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  backArrowIcon: {
    top: 54,
    left: 23,
    width: 40,
    height: 40,
    position: "absolute",
  },
  staffrateItem: {
    marginLeft: -172,
    top: 245,
    maxHeight: "100%",
    width: 345,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 74,
    left: 90,
    fontSize: FontSize.size_4xl,
    height: 31,
    width: 220,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 22,
    position: "absolute",
  },
  gosfordNararaCommunity: {
    top: 153,
    left: 22,
    height: 74,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    position: "absolute",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    width: 345,
  },
  gosfordThursday: {
    top: 48,
    left: 89,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  rate: {
    marginLeft: -47,
    top: 248,
    width: 95,
    height: 43,
    fontSize: FontSize.size_7xl,
    justifyContent: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  map: {
    top: 201,
    left: 313,
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  pleaseRateThe: {
    top: 295,
    fontSize: FontSize.size_lg,
    left: 28,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    display: "flex",
    width: 334,
    color: Color.colorBlack,
    height: 35,
  },
  iFoundThe: {
    top: 351,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
  },
  anyHelplineFollow: {
    marginLeft: -171,
    top: 536,
    width: 343,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    left: "50%",
  },
  submit: {
    bottom: 19,
    left: 133,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    color: Color.colorBlack,
  },
  submitWrapper: {
    top: 675,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    borderRadius: Border.br_3xs,
  },
  neutralI: {
    marginLeft: -94,
    top: 382,
    width: 189,
    height: 20,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.pTSansRegular,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  stronglyDisagree: {
    width: 120,
    left: 28,
    textAlign: "left",
  },
  stronglyAgree: {
    left: 261,
    textAlign: "right",
    width: 101,
  },
  parent: {
    marginLeft: -167,
    top: 422,
    flexDirection: "row",
    justifyContent: "space-between",
    left: "50%",
  },
  requestAFollow: {
    top: 19,
    left: 57,
    color: Color.colorWhite,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    width: 220,
  },
  requestAFollowUpWrapper: {
    top: 599,
    backgroundColor: Color.colorTomato_100,
  },
  staffrate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default StaffRate;
