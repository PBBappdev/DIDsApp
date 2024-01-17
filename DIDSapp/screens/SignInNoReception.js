import * as React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import StatePlaceholder from "../components/StatePlaceholder";
import FormContainer from "../components/FormContainer";
import SettingsForm from "../components/SettingsForm";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SignInNoReception = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signinnoreception}>
      <View style={styles.searchFieldWrapper}>
        <StatePlaceholder
          searchText="Search for meeting location"
          showText
          showDictation
          statePlaceholderPosition="absolute"
          statePlaceholderTop={14}
          statePlaceholderLeft={17}
          statePlaceholderBackgroundColor="rgba(118, 118, 128, 0.12)"
          searchGlyphFontFamily="PTSans-Regular"
          placeholderLabelFontFamily="PTSans-Regular"
          placeholderLabelColor="#fff"
          placeholderLabelLineHeight={22}
          placeholderLabelTextAlign="left"
          placeholderLabelOverflow="hidden"
          placeholderLabelHeight={22}
          dictationFontFamily="PTSans-Regular"
        />
      </View>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <View style={[styles.savedGroupsParent, styles.parentPosition]}>
        <Text style={[styles.savedGroups, styles.savedGroupsTypo]}>
          Saved Groups
        </Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
        <Text style={[styles.noGroupsSaved, styles.noGroupsSavedTypo]}>
          No Groups Saved
        </Text>
      </View>
      <View style={[styles.suggestedGroupParent, styles.parentPosition]}>
        <Text style={[styles.suggestedGroup, styles.savedGroupsTypo]}>
          Suggested Group
        </Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
        <Text style={[styles.suggestedGroupNot, styles.noGroupsSavedTypo]}>
          Suggested group not available
        </Text>
      </View>
      <FormContainer />
      <StatusBar barStyle="default" />
      <SettingsForm
        propPosition="absolute"
        propMarginTop="unset"
        propBottom={0}
        propLeft={0}
        propTop={10}
        onHelplinePress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Helpline2" })
        }
        onNewsPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "InfoScreen" })
        }
        onSignInPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
        }
        onSettingsPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Settings2" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 345,
    left: 24,
    position: "absolute",
  },
  savedGroupsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    width: 345,
    left: 0,
    position: "absolute",
  },
  noGroupsSavedTypo: {
    color: Color.colorLightgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    left: 0,
    position: "absolute",
  },
  searchFieldWrapper: {
    top: 35,
    height: 70,
    width: 390,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    position: "absolute",
  },
  searchIcon: {
    top: 55,
    left: 17,
    width: 25,
    height: 25,
    position: "absolute",
  },
  savedGroups: {
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
  },
  groupChild: {
    top: 72,
  },
  noGroupsSaved: {
    top: 32,
  },
  savedGroupsParent: {
    top: 205,
    height: 72,
  },
  suggestedGroup: {
    left: 1,
  },
  groupItem: {
    top: 71,
  },
  suggestedGroupNot: {
    top: 31,
  },
  suggestedGroupParent: {
    top: 116,
    height: 71,
  },
  signinnoreception: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignInNoReception;
