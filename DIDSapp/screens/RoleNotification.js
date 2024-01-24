import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RoleNotification = () => {
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const [checkedCheckbox1, setCheckedCheckbox1] = useState(false);
  const [checkedCheckbox2, setCheckedCheckbox2] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.rolenotification}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.roleNotificationScrollViewContent}
    >

      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("InitialNotifications")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.roleApproval, styles.waitingOnHqFlexBox]}>
          Role Approval
        </Text>
      </View>
      <View style={styles.rolenotificationChild} />
      <Text style={[styles.madeAMistake, styles.waitingOnHqFlexBox]}>
        Made a mistake?
      </Text>
      <Pressable
        style={styles.selectDifferentRoleWrapper}
        onPress={() => navigation.navigate("RoleSelect")}
      >
        <Text style={[styles.selectDifferentRole, styles.time1Typo]}>
          Select Different Role
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Meetings1" })
        }
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.continueToApp, styles.waitingOnHqFlexBox]}>
          Continue To App
        </Text>
      </Pressable>
      <Text style={[styles.waitingOnHq, styles.waitingOnHqTypo]}>
        Waiting on HQ Approval for role requested before gaining access
      </Text>
      <Text style={[styles.wouldYouLike, styles.appLayout]}>
        Would you like to receive a notification upon approval?
      </Text>
      <View style={styles.groupParent}>
        <View style={styles.checkedLayout}>
          <View style={styles.groupChildPosition}>
            <Checkbox
              status={checkedCheckbox ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox(!checkedCheckbox)}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.app, styles.appLayout]}>App</Text>
        </View>
        <View style={[styles.checkedCheckboxGroup, styles.checkedLayout]}>
          <View style={styles.groupChildPosition}>
            <Checkbox
              status={checkedCheckbox1 ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox1(!checkedCheckbox1)}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.app, styles.appLayout]}>Email</Text>
        </View>
        <View style={[styles.checkedCheckboxGroup, styles.checkedLayout]}>
          <View style={styles.groupChildPosition}>
            <Checkbox
              status={checkedCheckbox2 ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox2(!checkedCheckbox2)}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.app, styles.appLayout]}>SMS</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  roleNotificationScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
  },
  time1Typo: {
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  waitingOnHqFlexBox: {
    display: "flex",
    alignItems: "center",
    lineHeight: 22,
  },
  groupChildLayout: {
    height: 69,
    width: 345,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  waitingOnHqTypo: {
    width: 297,
    left: 48,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
  },
  appLayout: {
    height: 58,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.colorBlack,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  checkedLayout: {
    width: 239,
    height: 60,
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontFamily: FontFamily.pTSansBold,
    lineHeight: 22,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  time: {
    right: "68.36%",
    left: "-11.54%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorBlack,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.8,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.5,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.2,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "-9.23%",
    left: "66.05%",
  },
  statusBar: {
    alignSelf: "stretch",
    height: 32,
    zIndex: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  roleApproval: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    marginLeft: 23,
    textAlign: "left",
    display: "flex",
    width: 334,
    color: Color.colorBlack,
  },
  backArrowParent: {
    flexDirection: "row",
    zIndex: 1,
    marginTop: 14,
    alignItems: "center",
    width: 334,
  },
  rolenotificationChild: {
    backgroundColor: Color.colorLightgray,
    height: 487,
    zIndex: 2,
    borderRadius: Border.br_3xs,
    marginTop: 14,
    width: 334,
  },
  madeAMistake: {
    color: Color.colorLightgray,
    height: 34,
    zIndex: 3,
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    display: "flex",
    marginTop: 14,
    width: 334,
    fontSize: FontSize.size_mid,
  },
  selectDifferentRole: {
    top: 19,
    left: 79,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    lineHeight: 22,
    textAlign: "center",
    fontWeight: "700",
  },
  selectDifferentRoleWrapper: {
    backgroundColor: Color.colorGoldenrod_100,
    zIndex: 4,
    height: 60,
    borderRadius: Border.br_3xs,
    marginTop: 14,
    width: 334,
  },
  groupChild: {
    borderColor: Color.colorTomato_100,
    borderWidth: 2,
    height: 69,
    width: 345,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  continueToApp: {
    top: 20,
    left: 50,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.pTSansCaptionBold,
    justifyContent: "center",
    width: 245,
    height: 30,
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
    display: "flex",
  },
  rectangleParent: {
    zIndex: 5,
    marginTop: 14,
  },
  waitingOnHq: {
    top: 184,
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    lineHeight: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    position: "absolute",
    width: 297,
  },
  wouldYouLike: {
    top: 252,
    zIndex: 7,
    width: 297,
    left: 48,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
  },
  app: {
    top: 1,
    left: 75,
    width: 164,
    fontFamily: FontFamily.pTSansRegular,
  },
  checkedCheckboxGroup: {
    marginTop: 16,
  },
  groupParent: {
    top: 313,
    zIndex: 8,
    left: 48,
    position: "absolute",
  },
  rolenotification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default RoleNotification;
