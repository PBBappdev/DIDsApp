import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RoleSelect = () => {
  const [checkedCheckboxAndLabel, setCheckedCheckboxAndLabel] = useState(true);
  const [defaultCheckboxAndLabelchecked, setDefaultCheckboxAndLabelchecked] =
    useState(false);
  const [defaultCheckboxAndLabel1checked, setDefaultCheckboxAndLabel1checked] =
    useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.roleselect}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.roleSelectScrollViewContent}
    >
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1FlexBox]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <Text style={[styles.meetings, styles.time1FlexBox]}>Meetings</Text>
      </View>
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("LanuageSelect")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.role, styles.roleFlexBox]}>Role</Text>
      </View>
      <View style={styles.checkboxcheckedCheckboxAndParent}>
        <View style={styles.checkboxFlexBox}>
          <View>
            <Checkbox
              status={checkedCheckboxAndLabel ? "checked" : "unchecked"}
              onPress={() =>
                setCheckedCheckboxAndLabel(!checkedCheckboxAndLabel)
              }
              color="#fbb042"
            />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Client</Text>
        </View>
        <View
          style={[styles.checkboxdefaultCheckboxAnd, styles.checkboxFlexBox]}
        >
          <View>
            <Checkbox
              status={defaultCheckboxAndLabelchecked ? "checked" : "unchecked"}
              onPress={() =>
                setDefaultCheckboxAndLabelchecked(
                  !defaultCheckboxAndLabelchecked
                )
              }
              color="#fbb042"
            />
          </View>
          <Text style={[styles.label1, styles.labelTypo]}>
            <Text style={styles.volunteer}>Volunteer</Text>
            <Text style={styles.text}>*</Text>
          </Text>
        </View>
        <View
          style={[styles.checkboxdefaultCheckboxAnd, styles.checkboxFlexBox]}
        >
          <View>
            <Checkbox
              status={defaultCheckboxAndLabel1checked ? "checked" : "unchecked"}
              onPress={() =>
                setDefaultCheckboxAndLabel1checked(
                  !defaultCheckboxAndLabel1checked
                )
              }
              color="#fbb042"
            />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Staff*</Text>
        </View>
      </View>
      <Text style={[styles.approvalRequiredForContainer, styles.roleFlexBox]}>
        <Text style={styles.approvalRequiredForContainer1}>
          <Text
            style={styles.approvalRequiredFor}
          >{`Approval required for roles with `}</Text>
          <Text style={styles.text1}>*</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.continueWrapper}
        onPress={() => navigation.navigate("InitialNotifications")}
      >
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  roleSelectScrollViewContent: {
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
  time1FlexBox: {
    textAlign: "center",
    lineHeight: 22,
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
  roleFlexBox: {
    alignItems: "center",
    display: "flex",
    width: 334,
    textAlign: "left",
    lineHeight: 22,
  },
  labelTypo: {
    lineHeight: 33,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
  },
  checkboxFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 22,
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
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
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
  meetings: {
    top: -524,
    left: 1455,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
  },
  statusBar: {
    alignSelf: "stretch",
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  role: {
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
  },
  backArrowParent: {
    marginTop: 54,
  },
  label: {
    fontFamily: FontFamily.pTSansRegular,
    color: Color.colorBlack,
  },
  volunteer: {
    fontFamily: FontFamily.pTSansRegular,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  label1: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  checkboxdefaultCheckboxAnd: {
    marginTop: 61,
  },
  checkboxcheckedCheckboxAndParent: {
    width: 334,
    marginTop: 54,
  },
  approvalRequiredFor: {
    fontSize: FontSize.size_3xl,
  },
  text1: {
    fontSize: FontSize.size_13xl,
  },
  approvalRequiredForContainer1: {
    width: "100%",
  },
  approvalRequiredForContainer: {
    color: Color.colorLightgray,
    fontFamily: FontFamily.pTSansRegular,
    width: 334,
    marginTop: 54,
  },
  continue: {
    top: 19,
    left: 123,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  continueWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 54,
  },
  roleselect: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default RoleSelect;
