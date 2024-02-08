import React, { createContext, useContext, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Switch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useSwitchContext } from '../components/SwitchContext'; // Adjust the path
import { Permissions } from 'expo';
import * as Notifications from 'expo-notifications';


const InitialNotifications = () => {
  const [toggleOff1Value, setToggleOff1Value] = useState(false);
  const [toggleOff2Value, setToggleOff2Value] = useState(false);
  const [toggleOff3Value, setToggleOff3Value] = useState(false);
  const [toggleOff4Value, setToggleOff4Value] = useState(false);
  const [toggleOff5Value, setToggleOff5Value] = useState(false);
  const [toggleOff6Value, setToggleOff6Value] = useState(false);
  const navigation = useNavigation();

  const requestNotificationPermissions = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
  
      if (status === 'granted') {
        // Notification permissions granted
        console.log('Notification permissions granted');
      } else {
        // Notification permissions denied
        console.log('Notification permissions denied');
      }
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
    }
  };

  return (
    <ScrollView
      style={styles.initialnotifications}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.initialNotificationsScrollViewContent}
    >
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
        <View style={styles.meetingRemindersParent}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Meeting Reminders
          </Text>
          <Switch
            style={[styles.switchdefault, styles.switchLayout]}
            value={toggleOff1Value}
            onValueChange={(value) => {
              setToggleOff1Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
        </View>
        <View style={ styles.parentFlexBox}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Meeting Changes
          </Text>
          <Switch
            style={styles.switchLayout}
            value={toggleOff2Value}
            onValueChange={(value) => {
              setToggleOff2Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
        </View>
        <View style={[styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            News
          </Text>
          <Switch
            style={styles.switchLayout}
            value={toggleOff3Value}
            onValueChange={(value) => {
              setToggleOff3Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
        </View>
        <View style={[styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Role Change
          </Text>
          <Switch
            style={styles.switchLayout}
            value={toggleOff4Value}
            onValueChange={(value) => {
              setToggleOff4Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
        </View>
        <View style={[styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Rate Group
          </Text>
          <Switch
            style={styles.switchLayout}
            value={toggleOff5Value}
            onValueChange={(value) => {
              setToggleOff5Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
        </View>
        <View style={[styles.parentFlexBox]}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Sign In at Group
          </Text>
          <Switch
            style={styles.switchLayout}
            value={toggleOff6Value}
            onValueChange={(value) => {
              setToggleOff6Value(value);
              if (value) {
                requestNotificationPermissions();
              }
            }}
            color="#fbb042"
          />
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
    marginLeft: -60,
    width: 60,
  },
  parentFlexBox: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
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
    fontFamily: FontFamily.PTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 40,
  },
  backArrowParent: {
    marginTop: 66,
  },
  meetingReminders: {
    fontFamily: FontFamily.PTSansRegular,
    width: "85%",
    height: 41,
    alignItems: "center",
    display: "flex",
  },
  switchdefault: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  meetingRemindersParent: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  meetingChangesParent: {
    justifyContent: "center",
  },
  createAccount: {
    top: 19,
    left: 97,
    fontFamily: FontFamily.PTSansBold,
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
