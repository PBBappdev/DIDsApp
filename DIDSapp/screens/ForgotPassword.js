import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, connectAuthEmulator, confirmPasswordReset, sendPasswordResetEmail} from "firebase/auth";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleResetPassword = async() => {
    await sendPasswordResetEmail(auth, email)
      .then(() => alert("Password reset email sent"))
      .catch((error) => console.log(error.message));
    // if (email) {
    //   auth
    //     .sendPasswordResetEmail(email)
    //     .then(() => {
    //       Alert.alert("Password Reset Email Sent", "Check your email for instructions to reset your password.");
    //     })
    //     .catch((error) => {
    //       Alert.alert("Error", error.message);
    //     });
    // } else {
    //   Alert.alert("Error", "Please enter your email address.");
    // }
  };

  return (
    <View style={styles.forgotpassword}>
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          /> 
        </Pressable>
        <Text style={[styles.forgotPassword, styles.fpasswordFlexBox]}>
          Forgot Password
        </Text>
      </View>
      <Text style={[styles.enterYourEmail]}>
        Enter your email and we will send you a password reset link.
      </Text>
      <RNPTextInput
        style={styles.forgotpasswordChild}
        label="Email Address"
        mode="outlined"
        placeholderTextColor="#c4ced3"
        activeOutlineColor="#fbb042"
        
        theme={{
          fonts: { regular: { fontFamily:  FontFamily.PTSans, fontWeight: "Bold" } },
          colors: { text: "black" },
        }}
        value={email}
        onChangeText={setEmail}
      />
      <Pressable
        style={styles.resetPasswordWrapper}
        onPress={handleResetPassword}
      >
        <Text style={[styles.resetPassword]}>
          Reset Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
  fpasswordFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  forgotPassword: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.PTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    display: "flex",
    marginTop: 20, // Adjusted marginTop for better positioning
  },
  backArrowParent: {
    marginTop: 53,
    flexDirection: 'column', // Ensure that the children are laid out horizontally
    alignItems: 'flex-start', // Center items vertically
  },
  enterYourEmail: {
    fontFamily: FontFamily.PTSansRegular,
    height: 65,
    width: 334,
    textAlign: "left",
    display: "flex",
    marginTop: 53,
    fontSize: FontSize.size_mid,
  },
  forgotpasswordChild: {
    borderRadius: Border.br_8xs,
    height: 72,
    width: 334,
    marginTop: 53,
    borderStyle: "solid",
  },
  resetPassword: {
    top: 19,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.PTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "relative",
  },
  resetPasswordWrapper: {
    position: "relative",
    marginTop: 30,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: '80%',
  },
  forgotpassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    overflow: "visible",
    alignItems: "center",
    width: "100%",
  },
});

export default ForgotPassword;
