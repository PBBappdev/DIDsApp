import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, Pressable, View, Linking, Alert } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, QueryStartAtConstraint } from "firebase/firestore";

const SignInRate = ({route}) => {
  const { location, day, date, time, state, address, description, meetingId, confidentiality, docID} = route.params;

  const [frameRadioselectedIndex, setFrameRadioselectedIndex] = useState(undefined); //rating selection
  const [rate, setRating] = useState(undefined);

  const handleRating = (value) => {
    setFrameRadioselectedIndex(value);
    setRating(value + 1);
  }

  const navigation = useNavigation();

 
  const database = getFirestore(firebaseApp);

  const checkAnswered = async () => {

    if (frameRadioselectedIndex != undefined)
    {
        
      try {
        const docRef = collection(database, 'SignIn') 
  
        await updateDoc(doc(docRef, docID),{
          rate: rate,
        });
        console.log('Document written with ID: ', docRef);
  
        navigation.navigate("SignInMain", {
          day: day,
          date: date,
          time: time,
          state: state,
          address: address,
          description: description,
          location: location,
          meetingId: meetingId,
          confidentiality: confidentiality,
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      Alert.alert(
        'Missing Answer(s)',
        'Please provide a rating',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <View style={styles.signinrate}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      <SafeAreaView style={[styles.parentHeader]}>
      <View style={styles.view}>
        <Pressable
          style={styles.backArrow}
          onPress={() =>
            navigation.navigate("SignInQuestions", {
              day: day,
              date: date,
              time: time,
              state: state,
              address: address,
              description: description,
              location: location,
              meetingId: meetingId,         
            })}
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
        style={styles.signinrateChild}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text
        style={styles.locationText}
      >
        {address}
      </Text>
      
      <Pressable
        style={[styles.map, styles.mapTypo]}
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
          )
        }
      >
        <Text style={styles.map1}>Map</Text>
      </Pressable>
      <Text style={styles.rate}>Rate</Text>
      <Text style={[styles.pleaseRateThe, styles.parentLayout]}>
        Please rate the group after the meeting is over
      </Text>
      
      <View style={[styles.neutralIDontKnowParent, styles.parentSpaceBlock]}>
          <Text style={styles.neutralI}>3 = neutral / I don’t know</Text>
          <Text style={[styles.stronglyDisagree, styles.stronglyPosition]}>
            1= Strongly disagree
          </Text>
          <Text style={[styles.stronglyAgree, styles.stronglyPosition]}>
            5 = Strongly agree
          </Text>
        </View>
        <Text style={[styles.inTheLast, styles.theTypo]}>
          I found the group helpful
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadioselectedIndex}
          onChange={index => handleRating(index)}
        >
          <Radio>{() => <Text style={styles.frameRadioText}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 5</Text>}</Radio>
        </RadioGroup>
      <Pressable
        style={[styles.submitWrapper, styles.parentLayout]}
        onPress={() => 
          checkAnswered()
        }
      >
        <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentHeader: {
    backgroundColor: Color.colorGoldenrod_100,
    width: '100%',
  },
  view: {
    height: 81,
    position: 'relative',
  },
  backArrow: {
    left: 23,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  gosfordThursday: {
    top: 13,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
  },
  textFlexBox2: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 32,
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
  wrapper: {
    backgroundColor: "#fbb042",
  },
  frameRadioText: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadioRadio: {
    padding: 52.25,
  },
  viewPosition: {
    width: "100%",
    left: 0,
    position: "relative",
  },
  pleaseRateTheFlexBox: {
    display: "flex",
    color: Color.colorBlack,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    //lineHeight: 30,
  },
  parentLayout: {
    width: "85%",
    position: "relative",
    //right: 20,
  },
  pleaseRateThe: {
    marginTop: 10,
    fontSize: FontSize.size_lg,
    left: 28,
    maxWidth: "100%",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.pTSansRegular,
    //lineHeight: 24,
  },
  stronglyPosition: {
    top: 51,
    height: 20,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    position: "absolute",
  },
  signinrateChild: {
    marginTop: 0,
    maxHeight: "100%",
    width: "100%",
    left: 22,
    position: "relative",
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
  rate: {
    marginTop: 20,
    left: 147,
    width: 87,
    height: 43,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.pTSansCaption,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 40,
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
  submitTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    //lineHeight: 22,
    position: "relative",
  },
  submit: {
    bottom: -12,
    left: 0,
    width: "100%",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.pTSansBold,
  },
  submitWrapper: {
    marginTop: 10,
    width: "100%",
    left: 28,
    borderRadius: Border.br_3xs,
    height: 60,
    backgroundColor: Color.colorGoldenrod_100,
    position: 'relative',
  },
  neutralI: {
    top: 31,
    left: 76,
    width: 189,
    height: 20,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansRegular,
    lineHeight: 22,
    position: "absolute",
  },
  stronglyDisagree: {
    width: 120,
    textAlign: "left",
    left: 0,
  },
  stronglyAgree: {
    left: 233,
    textAlign: "right",
    width: 101,
  },
  parent: {
    top: 71,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    left: 0,
  },
  signinrate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  parentHeader: {
    backgroundColor: Color.colorGoldenrod_100,
    width: '100%',
  },
  view: {
    height: 81,
    position: 'relative',
  },
  backArrow: {
    left: 23,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  gosfordThursday: {
    top: 13,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
  },
  textFlexBox2: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 32,
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
  frameRadioText: {
    fontSize: 14,
  },
  parentSpaceBlock: {
    marginTop: 22,
    width: "85%",
    left: 28,
    right: 22,
  },
  stronglyPosition: {
    top: 23,
    height: 20,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    //lineHeight: 25,
    position: "absolute",
  },
  theTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  neutralI: {
    left: 76,
    width: 189,
    height: 20,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    top: 0,
    position: "absolute",
  },
  stronglyDisagree: {
    width: 147,
    textAlign: "left",
    top: 23,
    left: 0,
  },
  stronglyAgree: {
    left: 202,
    textAlign: "right",
    width: 132,
  },
  neutralIDontKnowParent: {
    height: 46,
    left: 28,
  },
  inTheLast: {
    height: 25,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    marginTop: 22,
    left: 28,
    width: "90%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

 
 

 
});

export default SignInRate;
