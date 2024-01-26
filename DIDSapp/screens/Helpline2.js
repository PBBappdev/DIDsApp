import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Helpline2 = () => {
  return (
    <View style={styles.helpline}>
      <Pressable
        style={[styles.callHelplineWrapper, styles.wrapperLayout]}
        onPress={() => Linking.openURL("tel:1300853437")}
      >
        <Text style={[styles.callHelpline, styles.liveChatTypo]}>
          Call Helpline
        </Text>
      </Pressable>
      <Pressable
        style={[styles.liveChatWrapper, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Text style={[styles.liveChat, styles.liveChatTypo]}>Live Chat</Text>
      </Pressable>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 70,
    width: 334,
    borderRadius: Border.br_3xs,
    left: 28,
    position: "absolute",
  },
  liveChatTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  meetingsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_xs,
    lineHeight: 22,
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  callHelpline: {
    top: 24,
    left: 106,
    color: Color.colorBlack,
  },
  callHelplineWrapper: {
    top: 259,
    backgroundColor: Color.colorGoldenrod_100,
  },
  liveChat: {
    top: 24,
    left: 123,
    display: "flex",
    width: 100,
    height: 30,
    alignItems: "center",
    color: Color.colorWhite,
  },
  liveChatWrapper: {
    top: 352,
    backgroundColor: Color.colorTomato_100,
  },
  helpline: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Helpline2;
