import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { auth } from "../firebase";


const Settings2 = () => {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully");
      navigation.navigate("Welcome");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleLogout = () => {
    logout(); // Call the logout function when the button is pressed
    
  };

  return (
    <View style={styles.settings}>
      <StatusBar barStyle="default" />
      <View style={styles.frameParent}>
        <Pressable
          style={styles.wrapperLayout}
          onPress={() => navigation.navigate("Account")}
        >
          <Text style={[styles.account, styles.changeTypo]}>Account</Text>
        </Pressable>
        <Pressable
          style={[styles.notificationsWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={[styles.notifications, styles.changeTypo]}>
            Notifications
          </Text>
        </Pressable>
        <Pressable
          style={[styles.notificationsWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("RequestRoleChange")}
        >
          <Text style={[styles.requestRoleChange, styles.changeTypo]}>
            Request Role Change
          </Text>
        </Pressable>
        <Pressable
          style={[styles.notificationsWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={[styles.changePassword, styles.changeTypo]}>
            Change Password
          </Text>
        </Pressable>
        <Pressable style={[styles.notificationsWrapper, styles.wrapperLayout]}>
          <Text
            style={[styles.termsConditions, styles.changeTypo]}
          >{`Terms & Conditions`}</Text>
        </Pressable>
        <Pressable
          style={[styles.notificationsWrapper, styles.wrapperLayout]}
          onPress={handleLogout}
        >
          <Text style={[styles.logout, styles.changeTypo]}>
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    top: 19,
    position: "absolute",
  },
  wrapperLayout: {
    height: 60,
    width: 334,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  meetingsTypo: {
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 22,
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  account: {
    left: 129,
  },
  notifications: {
    left: 107,
  },
  logout: {
    left: 125,
  },
  notificationsWrapper: {
    marginTop: 33,
  },
  requestRoleChange: {
    left: 68,
  },
  changePassword: {
    left: 85,
  },
  termsConditions: {
    left: 74,
  },
  frameParent: {
    top: 79,
    left: 30,
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Settings2;
