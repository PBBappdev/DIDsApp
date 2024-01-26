import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.resetpassword}>
     
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.resetPassword]}>
          Reset Password
        </Text>
      </View>
      <View style={styles.frameParent}>
      <RNPTextInput
          style={styles.frameLayout}
          label="Password"
          mode="outlined"
          secureTextEntry={passwordVisible}
          right={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name={passwordVisible ? "eye-off"  : "eye-outline"}
              onPress={togglePasswordVisibility}
            />
          }
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Confirm Password"
          mode="outlined"
          secureTextEntry={confirmPasswordVisible}
          right={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name={confirmPasswordVisible ? "eye-off" : "eye-outline"}
              onPress={toggleConfirmPasswordVisibility}
            />
          }
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <Pressable
        style={styles.resetPasswordWrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.resetPassword1, styles.resetClr]}>
          Reset Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  resetPassword: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    textAlign: "left",
    height: 76,
    width: 334,
    lineHeight: 100,
  },
  backArrowParent: {
    marginTop: 57,
  },
  frameItem: {
    marginTop: 33,
  },
  frameParent: {
    width: 334,
    marginTop: 57,
  },
  resetPassword1: {
    top: 19,
    left: 75,
    fontSize: FontSize.size_3xl,
    justifyContent: "center",
    width: 180,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    position: "absolute",
    display: "flex",
  },
  resetPasswordWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 57,
  },
  resetpassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
  },
});

export default ResetPassword;
