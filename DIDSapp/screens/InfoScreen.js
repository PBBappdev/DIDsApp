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
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() => Linking.openURL("https://parentsbeyondbreakup.com/")}
        >
          <Text style={styles.orangeText}>Visit Our Website</Text>
        </Pressable>
        <Pressable
          style={[styles.redWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/volunteer/")
          }
        >
          <Text style={[styles.RedOutlineProps]}>
            Support Us / Volunteer
          </Text>
        </Pressable>
        <Pressable
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/donate/")
          }
        >
          <Text style={styles.orangeText}>Donate</Text>
        </Pressable>
        <Pressable
          style={[styles.redWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/faqs/")
          }
        >
          <Text style={[styles.RedOutlineProps]}>FAQ’s</Text>
        </Pressable>
        <Pressable
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/news/")
          }
        >
          <Text style={styles.orangeText}>News</Text>
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
  wrapperSpaceBlock: {
    marginTop: 20,
    borderRadius: Border.br_3xs,
  },
  RedOutlineProps: {
    width: '80%',
    top: 23,
    left: 35,
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
  orangeText: {
    width: '80%',
    top: 23,
    left: 35,
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
  redWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorTomato_100,
    borderWidth: 2,
    width: 345,
    height: 69,
  },
  orangeWrapper: {
    height: 70,
    width: "100%",
    backgroundColor: Color.colorGoldenrod_100,
  },
  frameParent: {
    top: 50,
    left: 22,
    alignItems: "center",
  },
  infoscreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default InfoScreen;
