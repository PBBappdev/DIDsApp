import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, QueryStartAtConstraint } from "firebase/firestore";


const SignInConfidentiality = ({route}) => {
  const navigation = useNavigation();
  const { location, day, date, time, state, address, description, meetingId, saveState} = route.params;
  const locationText = address;

  const database = getFirestore(firebaseApp);

  
  return (
    <View style={styles.signinconfidentiality}>
      <StatusBar style={styles.statusBarPosition} barStyle="default" />
      <SafeAreaView style={[styles.parent]}>
      <View style={styles.view}>
        <Pressable
          style={styles.backArrow}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        
        <Text style={[styles.gosfordThursday, styles.textFlexBox2]}>
          {location}, {day}
        </Text>
        <Text style={[styles.text, styles.textFlexBox2]}> {date} -{time}</Text>
      </View>
    </SafeAreaView>
      <Image
        style={styles.signinconfidentialityChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.locationText]}>
        {address}
      </Text>
      <Pressable
        style={[styles.map, styles.mapTypo]}
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`
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
        onPress={() => navigation.navigate("SignInQuestions", {
          day: day,
          date: date,
          time: time,
          state: state,
          address: address,
          description: description,
          location: location,
          meetingId: meetingId,
          confidentiality: true,         
        })}
      >
        <Text style={[styles.signInTo]}>
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
  parent: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  textFlexBox2: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 32,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 23,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 39,
    left: 90,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.PTSansCaption,
    display: "flex",
    alignItems: "center",
    width: 220,
    height: 31,
  },
  gosfordThursday: {
    top: 13,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
  },
  view: {
    width: "100%",
    height: 81,
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
    position: "relative",
  },
  signinconfidentialityChild: {
    top: 249,
    maxHeight: "100%",
    width: 345,
    left: 22,
    position: "absolute",
  },
  locationText: {
    marginTop: 10,
    fontSize: FontSize.size_3xl,
    lineHeight: 29,
    height: 60,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    right: 22,
    width: "85%",
    left: 22,
    position: "relative",
  },
  map1: {
    //textDecoration: "underline",
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    fontSize: FontSize.size_5xl,
  },
  mapTypo: {
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    position: "relative",
  },
  map: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue,
    position: 'relative',
    left: 22,
    marginTop: 10,
  },
  theInformationYou: {
    marginTop: 30,
    height: 199,
    position: 'relative',
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
    fontSize: 24,
    left: 5,
    top: 13,
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
