import * as React from "react";
import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StaffFollowUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stafffollowup}>
      <View style={[styles.backArrowParent, styles.statusBarPosition]}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("StaffInfo")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={styles.requestAFollow}>Request a Follow Up</Text>
      </View>
      <StatusBar style={styles.statusBarPosition} barStyle="default" />
      <View style={styles.frameParent}>
        <Pressable
          style={styles.parentLayout}
          onPress={() => navigation.navigate("MeetingInfo")}
        >
          <Text
            style={[styles.gosfordThursday, styles.onlineTuesdayTypo]}
            numberOfLines={1}
          >
            Gosford, Thursday
          </Text>
          <Text style={[styles.text, styles.textLayout]} numberOfLines={1}>
            14/12 - 18:00
          </Text>
        </Pressable>
        <Pressable
          style={[styles.onlineTuesdayParent, styles.parentLayout]}
          onPress={() => navigation.navigate("MeetingInfo")}
        >
          <Text style={[styles.onlineTuesday, styles.onlineTuesdayTypo]}>
            Online, Tuesday
          </Text>
          <Text style={[styles.text1, styles.textLayout]}>19/12 - 18:50</Text>
        </Pressable>
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
  onlineTuesdayTypo: {
    textAlign: "left",
    height: 30,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  textLayout: {
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  parentLayout: {
    height: 69,
    width: 345,
    borderWidth: 2,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    left: 17,
    top: 17,
    width: 40,
    height: 40,
    position: "absolute",
  },
  requestAFollow: {
    top: 22,
    left: 82,
    textAlign: "center",
    justifyContent: "center",
    width: 226,
    height: 30,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  backArrowParent: {
    top: 32,
    height: 75,
  },
  gosfordThursday: {
    top: 4,
    width: 195,
    left: 14,
  },
  text: {
    top: 29,
    left: 13,
  },
  onlineTuesday: {
    top: 5,
    width: 174,
    left: 13,
  },
  text1: {
    top: 34,
    left: 14,
  },
  onlineTuesdayParent: {
    marginTop: 18,
  },
  frameParent: {
    top: 185,
    left: 22,
    position: "absolute",
  },
  stafffollowup: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 904,
    overflow: "hidden",
    width: "100%",
  },
});

export default StaffFollowUp;
