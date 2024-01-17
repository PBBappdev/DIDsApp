import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Switch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const InitialNotifications = () => {
  const [switchDefaultValue, setSwitchDefaultValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(undefined);
  const [switch1Value, setSwitch1Value] = useState(undefined);
  const [switch2Value, setSwitch2Value] = useState(undefined);
  const [switch3Value, setSwitch3Value] = useState(undefined);
  const [switch4Value, setSwitch4Value] = useState(undefined);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.initialnotifications}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.initialNotificationsScrollViewContent}
    >
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
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
      </View>
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("RoleSelect")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.notifications, styles.notificationsFlexBox]}>
          Notifications
        </Text>
      </View>
      <View style={styles.backArrowParent}>
        <View style={styles.meetingRemindersParent}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Meeting Reminders
          </Text>
          <Switch
            style={[styles.switchdefault, styles.switchLayout]}
            value={switchDefaultValue}
            onValueChange={setSwitchDefaultValue}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingChangesParent, styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Meeting Changes
          </Text>
          <Switch
            style={styles.switchLayout}
            value={switchValue}
            onValueChange={setSwitchValue}
            color="#fbb042"
          />
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            News
          </Text>
          <Switch
            style={styles.switch1}
            value={switch1Value}
            onValueChange={setSwitch1Value}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingChangesParent, styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Role Change
          </Text>
          <Switch
            style={styles.switch1}
            value={switch2Value}
            onValueChange={setSwitch2Value}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingChangesParent, styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Rate Group
          </Text>
          <Switch
            style={styles.switch1}
            value={switch3Value}
            onValueChange={setSwitch3Value}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingChangesParent, styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Sign In at Group
          </Text>
          <Switch
            style={styles.switch1}
            value={switch4Value}
            onValueChange={setSwitch4Value}
            color="#fbb042"
          />
        </View>
      </View>
      <Pressable
        style={styles.createAccountWrapper}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Meetings1" })
        }
      >
        <Text
          style={[styles.createAccount, styles.createAccountTypo]}
        >{`Create Account `}</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  initialNotificationsScrollViewContent: {
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
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  notificationsFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  createAccountTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  switchLayout: {
    marginLeft: 77,
    height: 30,
    width: 60,
  },
  parentFlexBox: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 22,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    position: "absolute",
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
  notifications: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  backArrowParent: {
    marginTop: 66,
  },
  meetingReminders: {
    fontFamily: FontFamily.pTSansRegular,
    width: 188,
    height: 41,
    alignItems: "center",
    display: "flex",
  },
  switchdefault: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  meetingRemindersParent: {
    width: 325,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  meetingChangesParent: {
    justifyContent: "center",
  },
  switch1: {
    marginLeft: 75,
    height: 30,
    width: 60,
  },
  createAccount: {
    top: 19,
    left: 97,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  createAccountWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 66,
  },
  initialnotifications: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default InitialNotifications;
