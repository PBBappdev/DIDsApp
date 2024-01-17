import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignInQuestions = () => {
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] =
    useState(undefined);
  const [frameRadio1selectedIndex, setFrameRadio1selectedIndex] =
    useState(undefined);
  const [frameRadio2selectedIndex, setFrameRadio2selectedIndex] =
    useState(undefined);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.signinquestions}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signInQuestionsScrollViewContent}
    >
      <View style={styles.signInParent}>
        <Text style={styles.signIn}>Sign In</Text>
        <View style={[styles.neutralIDontKnowParent, styles.parentSpaceBlock]}>
          <Text style={styles.neutralI}>3 = neutral / I don’t know</Text>
          <Text style={[styles.stronglyDisagree, styles.stronglyPosition]}>
            1= Strongly disagree
          </Text>
          <Text style={[styles.stronglyAgree, styles.stronglyPosition]}>
            5 = Strongly agree
          </Text>
        </View>
        <Text style={[styles.inTheLast, styles.theTypo]}>
          In the last week, I have felt isolation
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadioselectedIndex}
          onChange={setFrameRadioselectedIndex}
        >
          <Radio>{() => <Text style={styles.frameRadioText}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast1, styles.theTypo]}>
          In the last week, my situation has felt hopeless
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadio1selectedIndex}
          onChange={setFrameRadio1selectedIndex}
        >
          <Radio>{() => <Text style={styles.frameRadio1Text}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast, styles.theTypo]}>
          In the last week, I have felt suicidal
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadio2selectedIndex}
          onChange={setFrameRadio2selectedIndex}
        >
          <Radio>{() => <Text style={styles.frameRadio2Text}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast1, styles.theTypo]}>
          Any other comments? (max 160 characters)
        </Text>
        <TextInput
          style={styles.frameChild}
          placeholder="Your answer"
          multiline={true}
          placeholderTextColor="#c4ced3"
        />
      </View>
      <Pressable
        style={styles.signInWrapper}
        onPress={() => navigation.navigate("SignInRate")}
      >
        <Text style={[styles.signIn1, styles.theTypo]}>Sign In</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameRadioText: {
    fontSize: 14,
  },
  frameRadioRadio: {
    padding: 52.25,
  },
  frameRadio1Text: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadio1Radio: {
    padding: 52.25,
  },
  frameRadio2Text: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadio2Radio: {
    padding: 52.25,
  },
  signInQuestionsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusBarPosition: {
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    position: "absolute",
    width: 390,
  },
  parentSpaceBlock: {
    marginTop: 22,
    width: 334,
  },
  stronglyPosition: {
    top: 23,
    height: 20,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  theTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  signIn: {
    width: 95,
    height: 43,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 22,
  },
  neutralI: {
    left: 76,
    width: 189,
    height: 20,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    top: 0,
    position: "absolute",
  },
  stronglyDisagree: {
    width: 147,
    textAlign: "left",
    top: 23,
    left: 0,
  },
  stronglyAgree: {
    left: 202,
    textAlign: "right",
    width: 132,
  },
  neutralIDontKnowParent: {
    height: 43,
  },
  inTheLast: {
    height: 25,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    marginTop: 22,
    width: 334,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inTheLast1: {
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    marginTop: 22,
    width: 334,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 45,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    marginTop: 22,
    width: 334,
  },
  signInParent: {
    marginTop: 25,
    alignItems: "center",
  },
  signIn1: {
    bottom: 19,
    left: 133,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    position: "absolute",
  },
  signInWrapper: {
    borderRadius: Border.br_3xs,
    height: 60,
    width: 334,
    marginTop: 25,
    backgroundColor: Color.colorGoldenrod_100,
  },
  signinquestions: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default SignInQuestions;
