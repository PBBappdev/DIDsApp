import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignInConfidentiality = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signinconfidentiality}>
      <StatusBar style={styles.statusBarPosition} barStyle="default" />
      <Image
        style={styles.signinconfidentialityChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.gosfordNararaCommunity, styles.gosfordFlexBox]}>
        Gosford Narara Community center 2 pandala Rd, Narara NSW 2250
      </Text>
      <Pressable
        style={styles.map}
        onPress={() =>
          Linking.openURL(
            "https://www.google.com/maps/place/37%C2%B053'55.1%22S+145%C2%B004'53.4%22E/@-37.898645,145.0789241,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-37.898645!4d145.081499?entry=ttu"
          )
        }
      >
        <Text style={styles.map1}>Map</Text>
      </Pressable>
      <Text style={[styles.theInformationYou, styles.signInToTypo]}>
        The information you provide in this form is confidential. We require
        minimal basic detail in order to be able to contact you and to
        understand where, when and how our services are accessed. This helps us
        plan support where it is most needed and enables us to keep our services
        free.
      </Text>
      <Pressable
        style={styles.signInToGroupWrapper}
        onPress={() => navigation.navigate("SignInQuestions")}
      >
        <Text style={[styles.signInTo, styles.signInToTypo]}>
          Sign in to group
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 390,
    left: 0,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  gosfordFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  signInToTypo: {
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  signinconfidentialityChild: {
    top: 249,
    maxHeight: "100%",
    width: 345,
    left: 22,
    position: "absolute",
  },
  gosfordNararaCommunity: {
    top: 157,
    height: 74,
    color: Color.colorBlack,
    lineHeight: 22,
    display: "flex",
    position: "absolute",
    fontFamily: FontFamily.pTSansRegular,
    width: 345,
    left: 22,
    fontSize: FontSize.size_5xl,
  },
  map1: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
  },
  map: {
    left: 313,
    top: 205,
    position: "absolute",
  },
  theInformationYou: {
    top: 305,
    height: 199,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    width: 345,
    left: 22,
  },
  signInTo: {
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    fontWeight: "700",
    left: 90,
    top: 19,
  },
  signInToGroupWrapper: {
    top: 567,
    left: 23,
    borderRadius: Border.br_3xs,
    width: 334,
    height: 60,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  signinconfidentiality: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignInConfidentiality;
