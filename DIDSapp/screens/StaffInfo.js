import * as React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsForm from "../components/SettingsForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StaffInfo = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.staffinfo}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.staffInfoScrollViewContent}
    >
      <StatusBar barStyle="default" />
      <View style={styles.frameParent}>
        <Pressable style={styles.wrapperLayout}>
          <Text style={styles.visitOurWebsite}>Visit Our Website</Text>
        </Pressable>
        <Pressable style={[styles.resourceVolunteer, styles.resourceLayout]}>
          <View
            style={[styles.resourceVolunteerChild, styles.resourceLayout]}
          />
          <Text style={[styles.supportUs, styles.faqsTypo]}>
            Support Us / Volunteer
          </Text>
        </Pressable>
        <Pressable style={[styles.donateWrapper, styles.wrapperLayout]}>
          <Text style={styles.visitOurWebsite}>Donate</Text>
        </Pressable>
        <Pressable style={[styles.resourceVolunteer, styles.resourceLayout]}>
          <View
            style={[styles.resourceVolunteerChild, styles.resourceLayout]}
          />
          <Text style={[styles.faqs, styles.faqsTypo]}>FAQ’s</Text>
        </Pressable>
        <Pressable style={[styles.donateWrapper, styles.wrapperLayout]}>
          <Text style={styles.visitOurWebsite}>News</Text>
        </Pressable>
        <Pressable style={[styles.resourceVolunteer, styles.resourceLayout]}>
          <View
            style={[styles.resourceVolunteerChild, styles.resourceLayout]}
          />
          <Text style={[styles.faqs, styles.faqsTypo]}>PBB Workplace</Text>
        </Pressable>
        <Pressable style={[styles.donateWrapper, styles.wrapperLayout]}>
          <Text style={styles.visitOurWebsite}>HQ Contacts</Text>
        </Pressable>
        <Pressable
          style={[styles.resourceVolunteer, styles.resourceLayout]}
          onPress={() => navigation.navigate("StaffFollowUp")}
        >
          <View
            style={[styles.resourceVolunteerChild, styles.resourceLayout]}
          />
          <Text style={[styles.faqs, styles.faqsTypo]}>
            Request a Follow Up
          </Text>
        </Pressable>
      </View>
      <SettingsForm
        propPosition="relative"
        propMarginTop={28}
        propTop={9}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  staffInfoScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  resourceLayout: {
    height: 69,
    width: 345,
  },
  faqsTypo: {
    width: 220,
    left: 63,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  wrapperLayout: {
    height: 70,
    width: 342,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  visitOurWebsite: {
    top: 22,
    left: 78,
    width: 185,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  resourceVolunteerChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorTomato_100,
    borderWidth: 2,
    position: "absolute",
    height: 69,
    width: 345,
    borderRadius: Border.br_3xs,
  },
  supportUs: {
    top: 19,
    height: 31,
  },
  resourceVolunteer: {
    marginTop: 24,
  },
  donateWrapper: {
    marginTop: 24,
  },
  faqs: {
    top: 23,
  },
  frameParent: {
    marginTop: 28,
    borderRadius: Border.br_3xs,
  },
  staffinfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default StaffInfo;
