import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Checkbox, Switch } from "react-native-paper";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RequestRoleChange = () => {
  const [checkedCheckbox, setCheckedCheckbox] = useState(true);
  const [checkedCheckbox1, setCheckedCheckbox1] = useState(false);
  const [checkedCheckbox2, setCheckedCheckbox2] = useState(false);
  const [toggleOffValue, setToggleOffValue] = useState(false);

  return (
    <ScrollView
      style={styles.requestrolechange}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.requestRoleChangeScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={[styles.checkedCheckboxParent, styles.checkedLayout]}>
          <View style={styles.checkedCheckbox}>
            <Checkbox
              status={checkedCheckbox ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox(!checkedCheckbox)}
              color="#fbb042"
              uncheckedColor="#000"
            />
          </View>
          <Text style={[styles.client, styles.clientLayout]}>Client</Text>
        </View>
        <View style={[styles.checkedCheckboxGroup, styles.checkedLayout]}>
          <View style={styles.checkedCheckbox}>
            <Checkbox
              status={checkedCheckbox1 ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox1(!checkedCheckbox1)}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.client, styles.clientLayout]}>Volunteer*</Text>
        </View>
        <View style={[styles.checkedCheckboxGroup, styles.checkedLayout]}>
          <View style={styles.checkedCheckbox}>
            <Checkbox
              status={checkedCheckbox2 ? "checked" : "unchecked"}
              onPress={() => setCheckedCheckbox2(!checkedCheckbox2)}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.client, styles.clientLayout]}>
            Staff Member*
          </Text>
        </View>
      </View>
      <Text style={[styles.turnOnTo, styles.turnOnToFlexBox]}>
        Turn on to be notified when role change is approved
      </Text>
      <View style={styles.roleChangeParent}>
        <Text style={styles.clientLayout}>Role Change</Text>
        <Switch
          style={styles.toggleOff}
          value={toggleOffValue}
          onValueChange={setToggleOffValue}
        />
      </View>
      <Text
        style={[styles.approvalRequiredForContainer, styles.turnOnToFlexBox]}
      >
        <Text style={styles.approvalRequiredForContainer1}>
          <Text
            style={styles.approvalRequiredFor}
          >{`Approval required for roles with `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <Pressable style={styles.continueWrapper}>
        <Text style={[styles.continue, styles.turnOnToFlexBox]}>Continue</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  requestRoleChangeScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusBarLayout: {
    width: 390,
    backgroundColor: Color.colorGoldenrod_100,
  },
  checkedLayout: {
    width: 255,
    height: 60,
  },
  clientLayout: {
    height: 41,
    width: 188,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
  },
  turnOnToFlexBox: {
    textAlign: "left",
    lineHeight: 22,
  },
  checkedCheckbox: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  client: {
    top: 10,
    left: 67,
    position: "absolute",
  },
  checkedCheckboxParent: {
    height: 60,
  },
  checkedCheckboxGroup: {
    marginTop: 61,
    height: 60,
  },
  frameParent: {
    width: 326,
    marginTop: 43,
    justifyContent: "center",
  },
  turnOnTo: {
    fontSize: FontSize.size_lg,
    width: 323,
    height: 44,
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    marginTop: 43,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
  },
  toggleOff: {
    width: 60,
    height: 30,
    marginLeft: 75,
  },
  roleChangeParent: {
    flexDirection: "row",
    marginTop: 43,
    alignItems: "center",
  },
  approvalRequiredFor: {
    fontSize: FontSize.size_3xl,
  },
  text: {
    fontSize: FontSize.size_13xl,
  },
  approvalRequiredForContainer1: {
    width: "100%",
  },
  approvalRequiredForContainer: {
    color: Color.colorLightgray,
    width: 328,
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    marginTop: 43,
    alignItems: "center",
    display: "flex",
  },
  continue: {
    top: 19,
    left: 123,
    fontFamily: FontFamily.pTSansBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  continueWrapper: {
    borderRadius: Border.br_3xs,
    width: 331,
    height: 60,
    marginTop: 43,
    backgroundColor: Color.colorGoldenrod_100,
  },
  requestrolechange: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default RequestRoleChange;
