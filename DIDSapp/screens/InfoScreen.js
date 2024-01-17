import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InfoScreen = () => {
  return (
    <View style={styles.infoscreen}>
      <StatusBar barStyle="default" />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Pressable
          style={[styles.visitOurWebsiteWrapper, styles.wrapperLayout]}
          onPress={() => Linking.openURL("https://parentsbeyondbreakup.com/")}
        >
          <Text style={styles.visitOurWebsite}>Visit Our Website</Text>
        </Pressable>
        <Pressable
          style={[styles.supportUsVolunteerWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/volunteer/")
          }
        >
          <Text style={[styles.supportUs, styles.faqsTypo]}>
            Support Us / Volunteer
          </Text>
        </Pressable>
        <Pressable
          style={[styles.donateWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/donate/")
          }
        >
          <Text style={styles.visitOurWebsite}>Donate</Text>
        </Pressable>
        <Pressable
          style={[styles.supportUsVolunteerWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/faqs/")
          }
        >
          <Text style={[styles.faqs, styles.faqsTypo]}>FAQ’s</Text>
        </Pressable>
        <Pressable
          style={[styles.donateWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/news/")
          }
        >
          <Text style={styles.visitOurWebsite}>News</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    position: "absolute",
    alignItems: "center",
  },
  wrapperLayout: {
    height: 70,
    width: 342,
    backgroundColor: Color.colorGoldenrod_100,
  },
  wrapperSpaceBlock: {
    marginTop: 20,
    borderRadius: Border.br_3xs,
  },
  faqsTypo: {
    width: 220,
    left: 63,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    position: "absolute",
  },
  infoTypo: {
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 22,
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  visitOurWebsite: {
    top: 22,
    left: 78,
    width: 185,
    height: 26,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    position: "absolute",
  },
  visitOurWebsiteWrapper: {
    borderRadius: Border.br_3xs,
    width: 342,
  },
  supportUs: {
    top: 19,
    height: 31,
  },
  supportUsVolunteerWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorTomato_100,
    borderWidth: 2,
    width: 345,
    height: 69,
  },
  donateWrapper: {
    height: 70,
    width: 342,
    backgroundColor: Color.colorGoldenrod_100,
  },
  faqs: {
    top: 23,
  },
  frameParent: {
    top: 76,
    left: 22,
    alignItems: "center",
  },
  infoscreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default InfoScreen;
