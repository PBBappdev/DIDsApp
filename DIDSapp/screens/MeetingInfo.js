import * as React from "react";
import { StatusBar, StyleSheet, Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MeetingInfo = () => {
  return (
    <View style={styles.meetinginfo}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      <Image
        style={[styles.meetinginfoChild, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={[styles.meetinginfoItem, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text
        style={[styles.gosfordNararaCommunity, styles.saveGroupFlexBox]}
      >{`Gosford Narara Community center 
2 pandala Rd, Narara NSW 2250`}</Text>
      <Text style={[styles.map, styles.mapTypo]}>Map</Text>
      <Pressable style={[styles.saveGroupParent, styles.plusIconLayout]}>
        <Text style={[styles.saveGroup, styles.mapTypo]}>Save Group</Text>
        <Image
          style={[styles.plusIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={require("../assets/plus1.png")}
        />
      </Pressable>
      <Text
        style={[styles.freeWeeklyDads, styles.saveGroupFlexBox]}
      >{`FREE weekly Dads in Distress support meeting 
for all local dads. No need to book, just drop in and new dads always welcome. Confidential, and non judgmental and dad friendly. Free parking on road outside. Find us in the 'Living Room' upstairs.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fbb042",
  },
  viewPosition: {
    width: 390,
    position: "absolute",
    left: 0,
  },
  meetinginfoLayout: {
    width: 345,
    maxHeight: "100%",
    left: 22,
    position: "absolute",
  },
  saveGroupFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
  },
  plusIconLayout: {
    height: 40,
    position: "absolute",
  },
  textPosition: {
    lineHeight: 22,
    left: 79,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mapTypo: {
    fontSize: FontSize.size_5xl,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    position: "absolute",
  },
  meetinginfoChild: {
    top: 184,
  },
  meetinginfoItem: {
    top: 324,
  },
  gosfordNararaCommunity: {
    top: 198,
    fontSize: FontSize.size_3xl,
    lineHeight: 29,
    height: 74,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    width: 345,
    left: 22,
    position: "absolute",
  },
  map: {
    top: 272,
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    left: 22,
  },
  saveGroup: {
    top: 1,
    left: 48,
    width: 178,
    height: 39,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  plusIcon: {
    width: 40,
    height: 40,
    left: 0,
    top: 0,
  },
  saveGroupParent: {
    top: 130,
    width: 226,
    left: 22,
  },
  freeWeeklyDads: {
    top: 279,
    fontSize: FontSize.size_base,
    lineHeight: 28,
    height: 277,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    width: 345,
    left: 22,
    position: "absolute",
  },
  meetinginfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetingInfo;
