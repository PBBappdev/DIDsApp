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
      <View style={[styles.frameParent, styles.parentPosition]}>
        <RNPTextInput
          style={styles.frameLayout}
          label="Native Language"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Preferred Language"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#000000" },
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
        <Text style={styles.continue}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  parentPosition: {
    left: 28,
    position: "absolute",
    marginTop: 50,
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: "100%",
    borderStyle: "solid",
  },
  languageFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 45,
    position: "absolute",
  },
  
  frameItem: {
    marginTop: 40,
  },
  frameParent: {
    top: "30%",
    width: "85%",
    position: "relative",
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
    marginTop: "10%",
    height: 100,
    width: "85%",
  },
  continue: {
    top: 19,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "relative",
  },
  continueWrapper: {
    top: "65%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: "85%",
  },
  lanuageselect: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default LanuageSelect;
