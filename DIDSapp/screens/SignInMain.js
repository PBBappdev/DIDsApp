import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
//import { TextInput as RNPTextInput } from "react-native-paper";
import StatePlaceholder from "../components/StatePlaceholder";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignInMain = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.signinmain}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signInMainScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.searchFieldWrapper}>
          <TextInput
            style={styles.searchInput}
          />
        </View>
        <StatusBar barStyle="default" />
      </View>
      <View style={[styles.suggestedgroups, styles.savedgroupsLayout]}>
        <Text style={styles.suggestedGroup}>Suggested Group</Text>
        <Pressable
          style={[styles.parent, styles.parentLayout]}
          onPress={() => navigation.navigate("SignInConfidentiality")}
        >
          <Text style={[styles.text, styles.textLayout]}>14/12 - 18:00</Text>
          <Text style={[styles.gosfordThursday, styles.onlineTuesdayTypo]}>
            Gosford, Thursday
          </Text>
          <Image
            style={[styles.circledRightIcon, styles.circledIconLayout]}
            contentFit="cover"
            source={require("../assets/circled-right.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.signinmainChild, styles.signinmainLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={[styles.savedgroups, styles.savedgroupsLayout]}>
        <Text style={styles.suggestedGroup}>Saved Groups</Text>
        <View style={styles.parentPosition}>
          <Pressable
            style={styles.parentLayout}
            onPress={() => navigation.navigate("SignInConfidentiality")}
          >
            <Text style={[styles.gosfordThursday1, styles.textPosition]}>
              Gosford, Thursday
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>14/12 - 18:00</Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right.png")}
            />
          </Pressable>
          <Pressable style={[styles.onlineTuesdayParent, styles.parentLayout]}>
            <Text style={[styles.onlineTuesday, styles.onlineTuesdayTypo]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.text2, styles.textPosition]}>
              17/12 - 18:30
            </Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right11.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.signinmainItem, styles.signinmainLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={styles.allgroupstoday}>
        <Text style={styles.suggestedGroup}>All Groups Today</Text>
        <View style={styles.frameContainer}>
          <Pressable style={styles.parentLayout}>
            <Text style={[styles.onlineThursday, styles.thursdayTypo]}>
              Online, Thursday
            </Text>
            <Text style={[styles.text3, styles.textPosition]}>
              14/12 - 19:20
            </Text>
            <Image
              style={[styles.circledRightIcon3, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right21.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.onlineThursdayGroup, styles.parentLayout]}
            onPress={() => navigation.navigate("SignInConfidentiality")}
          >
            <Text style={[styles.onlineThursday, styles.thursdayTypo]}>
              Online, Thursday
            </Text>
            <Text style={[styles.text3, styles.textPosition]}>
              14/12 - 19:20
            </Text>
            <Image
              style={[styles.circledRightIcon3, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right21.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInMainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    color: Color.colorBlack,
    fontSize: FontSize.size_l,
    fontFamily: FontFamily.pTSansCaption,
  },
  savedgroupsLayout: {
    width: 346,
    marginTop: 27,
  },
  parentLayout: {
    height: 69,
    borderWidth: 2,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 345,
  },
  textLayout: {
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
  },
  onlineTuesdayTypo: {
    height: 30,
    width: 264,
    alignItems: "center",
    display: "flex",
    left: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  circledIconLayout: {
    height: 50,
    width: 50,
    top: 9,
    position: "absolute",
  },
  signinmainLayout: {
    maxHeight: "100%",
    width: 50,
    marginTop: 27,
  },
  textPosition: {
    left: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  thursdayTypo: {
    top: 4,
    height: 30,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  signIn1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 22,
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  searchFieldWrapper: {
    height: 70,
    backgroundColor: Color.colorGoldenrod_100,
    width: '100%',
  },
  frameParent: {
    height: 105,
    zIndex: 0,
    width: '100%',
  },
  suggestedGroup: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 29,
    alignItems: "center",
    display: "flex",
    left: 13,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  gosfordThursday: {
    top: 2,
  },
  circledRightIcon: {
    left: 277,
  },
  parent: {
    left: 1,
    top: 34,
    position: "absolute",
  },
  suggestedgroups: {
    height: 121,
    zIndex: 1,
    marginTop: 27,
  },
  signinmainChild: {
    zIndex: 2,
  },
  gosfordThursday1: {
    width: 263,
    top: 4,
    height: 30,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  text1: {
    alignItems: "center",
    display: "flex",
    left: 13,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
    top: 34,
  },
  onlineTuesday: {
    top: 5,
  },
  text2: {
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    left: 14,
    top: 34,
  },
  onlineTuesdayParent: {
    marginTop: 18,
  },
  parentPosition: {
    left: 1,
    top: 34,
    position: "absolute",
  },
  savedgroups: {
    height: 208,
    zIndex: 3,
    marginTop: 27,
  },
  signinmainItem: {
    zIndex: 4,
  },
  onlineThursday: {
    width: 264,
    top: 4,
    alignItems: "center",
    display: "flex",
    left: 13,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text3: {
    top: 33,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    left: 14,
  },
  circledRightIcon3: {
    left: 276,
  },
  onlineThursdayGroup: {
    marginTop: 12,
  },
  frameContainer: {
    top: 34,
    left: 0,
    position: "absolute",
  },
  allgroupstoday: {
    height: 184,
    zIndex: 5,
    width: 345,
    marginTop: 27,
  },
  searchIcon: {
    top: 55,
    left: 17,
    width: 25,
    height: 25,
    zIndex: 7,
    position: "absolute",
  },
  signinmain: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default SignInMain;
