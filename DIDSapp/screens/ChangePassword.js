import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const ChangePassword = () => {
  return (
    <View style={styles.changepassword}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <RNPTextInput
          style={styles.frameLayout}
          label="Current Password"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="New Password"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Confirm Password"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <Pressable
        style={[styles.resetPasswordWrapper, styles.frameParentLayout]}
      >
        <Text style={[styles.resetPassword, styles.passwordFlexBox]}>
          Reset Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fbb042",
  },
  viewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  passwordFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  frameParentLayout: {
    width: 334,
    position: "absolute",
  },
  frameLayout: {
    height: 72,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    width: 334,
  },
  frameItem: {
    marginTop: 33,
  },
  frameParent: {
    top: 186,
    left: 27,
  },
  resetPassword: {
    top: 19,
    left: 75,
    fontFamily: FontFamily.pTSansBold,
    width: 180,
  },
  resetPasswordWrapper: {
    top: 622,
    left: 26,
    borderRadius: Border.br_3xs,
    height: 60,
    backgroundColor: Color.colorGoldenrod_100,
  },
  changepassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangePassword;
