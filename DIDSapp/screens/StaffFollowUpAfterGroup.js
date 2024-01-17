import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const StaffFollowUpAfterGroup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stafffollowupaftergroup}>
      <StatusBar style={styles.statusBarPosition} barStyle="default" />
      <View style={[styles.backArrowParent, styles.statusBarPosition]}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("StaffRate")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.requestAFollow, styles.requestFlexBox]}>
          Request a Follow Up
        </Text>
      </View>
      <Text style={[styles.attendees, styles.attendeesClr]}>Attendees</Text>
      <View style={styles.sendRequestWrapper}>
        <Text style={[styles.sendRequest, styles.requestFlexBox]}>
          Send Request
        </Text>
      </View>
      <Text style={[styles.reasonForWhy, styles.reasonForWhyLayout]}>
        Reason for why?
      </Text>
      <View style={[styles.yourAnswerWrapper, styles.reasonForWhyLayout]}>
        <Text style={[styles.yourAnswer, styles.yourAnswerTypo]}>
          Your answer
        </Text>
      </View>
      <Image
        style={[styles.dropDownIcon, styles.dropDownIconLayout]}
        contentFit="cover"
        source={require("../assets/drop-down.png")}
      />
      <View style={[styles.astonLamportWrapper, styles.dropDownIconLayout]}>
        <Text style={[styles.astonLamport, styles.yourAnswerTypo]}>
          Aston Lamport
        </Text>
      </View>
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
  requestFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
  },
  attendeesClr: {
    color: Color.colorBlack,
    textAlign: "left",
    left: 26,
  },
  reasonForWhyLayout: {
    width: 334,
    position: "absolute",
  },
  yourAnswerTypo: {
    fontFamily: FontFamily.pTSansRegular,
    alignItems: "center",
    display: "flex",
    lineHeight: 22,
    position: "absolute",
  },
  dropDownIconLayout: {
    height: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    top: 14,
    width: 40,
    height: 40,
    left: 26,
    position: "absolute",
  },
  requestAFollow: {
    top: 19,
    left: 90,
    width: 211,
    height: 30,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  backArrowParent: {
    top: 35,
    height: 72,
  },
  attendees: {
    top: 179,
    fontFamily: FontFamily.pTSansCaptionBold,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  sendRequest: {
    top: 22,
    left: 78,
    width: 185,
    height: 26,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  sendRequestWrapper: {
    top: 708,
    left: 24,
    borderRadius: Border.br_3xs,
    width: 342,
    height: 70,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  reasonForWhy: {
    top: 331,
    fontSize: FontSize.title3Bold_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    color: Color.colorBlack,
    left: 26,
  },
  yourAnswer: {
    top: 8,
    left: 14,
    fontSize: FontSize.size_base,
    color: Color.colorLightgray,
    width: 120,
    height: 31,
    textAlign: "left",
  },
  yourAnswerWrapper: {
    top: 360,
    left: 28,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 276,
  },
  dropDownIcon: {
    top: 233,
    width: 50,
    left: 26,
  },
  astonLamport: {
    top: 10,
    width: 172,
    height: 32,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xl,
    left: 0,
    fontFamily: FontFamily.pTSansRegular,
  },
  astonLamportWrapper: {
    top: 232,
    left: 77,
    backgroundColor: Color.colorLightgray,
    width: 269,
  },
  stafffollowupaftergroup: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default StaffFollowUpAfterGroup;
