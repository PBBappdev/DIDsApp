import React, { useState, useEffect } from "react";
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
import { Switch } from "react-native-paper";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { requestPermissionsAsync } from "expo-notifications";


const requestNotificationPermissions = async () => {
  try {
    const { granted } = await requestPermissionsAsync();
    if (!granted) {
      console.log("Notification permission denied");
      // You can handle the case where permission is denied
    }
  } catch (error) {
    console.error("Error requesting notification permissions:", error);
  }
};

const Notifications = () => {
  const [toggleOnValue, setToggleOnValue] = useState(false);
  const [toggleOffValue, setToggleOffValue] = useState(false);
  const [toggleOff1Value, setToggleOff1Value] = useState(false);
  const [toggleOff2Value, setToggleOff2Value] = useState(false);
  const [toggleOff3Value, setToggleOff3Value] = useState(false);
  const [toggleOff4Value, setToggleOff4Value] = useState(false);

  return (
    <ScrollView
      style={styles.notifications}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.notificationsScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.meetingRemindersParent}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            Meeting Reminders
          </Text>
          <Switch
            style={[styles.toggleOn, styles.toggleSpaceBlock]}
            value={toggleOnValue}
            onValueChange={(value) => setToggleOnValue(value)}
            color="#fbb042"
          />
        </View>
        <View style={styles.meetingRemindersParent}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            Meeting Changes
          </Text>
          <Switch
            style={[styles.toggleOn, styles.toggleSpaceBlock]}
            value={toggleOffValue}
            onValueChange={(value) => setToggleOffValue(value)}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingRemindersParent]}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            News
          </Text>
          <Switch
            style={[styles.toggleOn, styles.toggleSpaceBlock]}
            value={toggleOff1Value}
            onValueChange={(value) => setToggleOff1Value(value)}
            color="#fbb042"
          />
        </View>
        <View style={styles.meetingRemindersParent}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            Role Change
          </Text>
          <Switch
            style={[styles.toggleOn, styles.toggleSpaceBlock]}
            value={toggleOff2Value}
            onValueChange={(value) => setToggleOff2Value(value)}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingRemindersParent]}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            Rate Group
          </Text>
          <Switch
            style={[styles.toggleOff3, styles.toggleSpaceBlock]}
            value={toggleOff3Value}
            onValueChange={(value) => setToggleOff3Value(value)}
            color="#fbb042"
          />
        </View>
        <View style={[styles.meetingRemindersParent]}>
          <Text style={[styles.meetingReminders, styles.notifications1Clr]}>
            Sign In at Group
          </Text>
          <Switch
            style={[styles.toggleOn, styles.toggleSpaceBlock]}
            value={toggleOff4Value}
            onValueChange={(value) => setToggleOff4Value(value)}
            color="#fbb042"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationsScrollViewContent: {
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
  backArrowPosition: {
    top: 11,
    position: "absolute",
  },
  notifications1Clr: {
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
  },
  toggleSpaceBlock: {
    marginLeft: 75,
    height: 40,
  },
  parentSpaceBlock: {
    marginTop: 49,
    flexDirection: "row",
  },
  meetingReminders: {
    fontFamily: FontFamily.pTSansRegular,
    textAlign: "left",
    width: 188,
    height: 41,
    alignItems: "center",
  },
  toggleOn: {
    width: 60,
  },
  meetingRemindersParent: {
    flexDirection: "row",
  },
  toggleOff: {
    marginLeft: 77,
    width: 60,
    height: 40,
  },
  newsParent: {
    alignItems: "center",
  },
  toggleOff3: {
    flex: 1,
  },
  frameParent: {
    marginTop: 36,
  },
  notifications: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    flex: 1,
  },
});

export default Notifications;
