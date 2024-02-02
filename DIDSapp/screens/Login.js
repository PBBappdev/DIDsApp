import React, { createContext, useContext, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable, Alert  } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import firebaseApp  from "../firebase";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const navigation = useNavigation();

  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const auth = getAuth(firebaseApp);

  const signin = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
      navigation.navigate("BottomTabsRoot", { screen: "Meetings1" })
    } catch ({message}) {
      console.log(message)
      alert("Incorrect Login Please Try Again")
    }
  }
  
  return (
    <ScrollView
      style={styles.login}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.loginScrollViewContent}
    >
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.login1, styles.logInFlexBox]}>Login</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <RNPTextInput
            style={styles.frameLayout}
            label="Email Address"
            value={email}
            onChangeText={updateEmail}
            mode="outlined"
            placeholderTextColor="#fff"
            activeOutlineColor="#fbb042"
            theme={{
              fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
              colors: { text: "#c4ced3" },
            }}
            
          />
          <RNPTextInput
            style={[styles.frameItem, styles.frameLayout]}
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={updatePassword}
            placeholderTextColor="#c4ced3"
            activeOutlineColor="#fbb042"
            theme={{
              fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
              colors: { text: "#c4ced3" },
            }}
            secureTextEntry
          />
        </View>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
          
        >
          <Text style={[styles.forgotPassword1, styles.logInFlexBox]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.logInWrapper}
        onPress={signin}
        // onPress={() =>
        //   
        //   //navigation.navigate("BottomTabsRoot", { screen: "Meetings1" })
        // }
      >
        <Text style={[styles.logIn, styles.logInFlexBox]}>Log in</Text>
      </Pressable>
      <Text style={[styles.byUsingOurContainer, styles.logInFlexBox]}>
        <Text style={styles.byUsingOurContainer1}>
          <Text
            style={styles.byUsingOur}
          >{`By using our app you are agreeing to our `}</Text>
          <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
  logInFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: 334,
    borderStyle: "solid",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  login1: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    textAlign: "left",
    display: "flex",
    color: Color.colorBlack,
  },
  backArrowParent: {
    marginTop: 82,
  },
  frameItem: {
    marginTop: 33,
  },
  frameGroup: {
    width: 334,
  },
  forgotPassword1: {
    textDecorationLine: "underline",
    width: "100%",
    color: Color.colorTomato_100,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  forgotPassword: {
    marginTop: 9,
  },
  frameParent: {
    alignItems: "flex-end",
    marginTop: 82,
  },
  logIn: {
    top: 19,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "relative",
  },
  logInWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: 334,
    marginTop: 82,
  },
  byUsingOur: {
    color: Color.colorLightgray,
  },
  termsAndConditions: {
    color: Color.colorTomato_100,
  },
  byUsingOurContainer1: {
    width: "100%",
  },
  byUsingOurContainer: {
    height: 73,
    width: 334,
    marginTop: 82,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    display: "flex",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default Login;
