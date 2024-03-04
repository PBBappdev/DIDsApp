import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { RadioGroup, Radio } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, QueryStartAtConstraint } from "firebase/firestore";

const SignInQuestions = ({route}) => {
  const { location, day, date, time, state, address, description, meetingId, confidentiality} = route.params;
  const [attendeeType, setattendeeType] = useState("");


  const [frameRadioselectedIndex, setFrameRadioselectedIndex] = useState(undefined);
  const [frameRadio1selectedIndex, setFrameRadio1selectedIndex] = useState(undefined);
  const [frameRadio2selectedIndex, setFrameRadio2selectedIndex] = useState(undefined);
  
  const [isolated, setIsolated] = useState(undefined);
  const [hopeless, setHopeless] = useState(undefined);
  const [suicidal, setSuicidal] = useState(undefined);

  const handleIsolatedChange = (value) => {
    setFrameRadioselectedIndex(value);
    setIsolated(value + 1);
  }
  
  const handleHopelessChange = (value) => {
    setFrameRadio1selectedIndex(value);
    setHopeless(value + 1);
  }
  
  const handleSuicidalChange = (value) => {
    setFrameRadio2selectedIndex(value);
    setSuicidal(value + 1);
  }

  // const [docID, setDocID]
  const [meetingCode, setMeetingCode] = useState(901);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [postcode, setPostcode] = useState("");

  const navigation = useNavigation();

  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    if (inputText.length <= 160) {
      setText(inputText);
    } else {
      //Alert.alert('Max Length Reached', `Maximum ${160} characters allowed.`);
    }
  };

  useEffect(() => {
    getUserData();

  }, []);

  //get user specific data
  const getUserData = async () =>{
    // Firebase Authentication
    const user = auth.currentUser;
    console.log("trying");
        try {
          const userDocRef = doc(database, "Users", user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            // User document exists
            const userData = userDocSnapshot.data();
            setEmail(userData.email); // Set email state
            setMobile(userData.phoneNumber); // Set mobile state
            setFirstName(userData.fName); // Set first name state
            setPostcode(userData.postcode);
            //setRole(userData.RoleActive);
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }   
  };


  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const database = getFirestore(firebaseApp);
    //check questions answered before continuing
  const checkAnswered = async () => {

    await getUserData();

    if (frameRadio1selectedIndex !== undefined && frameRadioselectedIndex !== undefined && frameRadio2selectedIndex !== undefined) {
      console.log(isolated, hopeless, suicidal);
      //await getUserData();

      try {
        //const docRef = collection(database, 'SignIn') 

        const currentDate = new Date();
        const currentDateString = formatDate(currentDate); // Format the date as "dd/mm/yyyy"
        const currentTimeString = currentDate.toLocaleTimeString(); // Time string format: "10:30:00 AM"
        //const createdAt = database.firestore.FieldValue.serverTimestamp(); // Get server timestamp

        const docRef = await addDoc(collection(database, 'SignIn'),{
          date: currentDateString,
          time: currentTimeString,
          confidentiality: true,
          meetingCode: meetingCode,
          firstName: firstName,
          mobile: mobile,
          homePostcode: postcode,
          isolated: isolated,
          hopeless: hopeless,
          suicidal: suicidal,
          attendeeType: "First Time", //first timer, returning, leader
          numberOfAttendees: "",
          comments: text,
          emailAddress: email,
          foundUs: "",
          createdAt: currentDate, // Add the createdAt field with the current timestamp
         
          
        });

        const docID = docRef.id;
        console.log('Document written with ID: ', docID);
  
        navigation.navigate("SignInRate", {
          day: day,
          date: date,
          time: time,
          state: state,
          address: address,
          description: description,
          location: location,
          meetingId: meetingId,
          confidentiality: confidentiality,
          docID: docID,
        });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      Alert.alert(
        'Missing Answer(s)',
        'Please answer all questions',
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
    <ScrollView
      style={styles.signinquestions}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signInQuestionsScrollViewContent}
    >
      <SafeAreaView style={[styles.parentHeader]}>
      <View style={styles.view}>
        <Pressable
          style={styles.backArrow}
          onPress={() =>
            navigation.navigate("SignInConfidentiality", {
              day: day,
              date: date,
              time: time,
              state: state,
              address: address,
              description: description,
              location: location,
              meetingId: meetingId,
              confidentiality: confidentiality,         
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
      <View style={styles.signInParent}>
        <Text style={styles.signIn}>Sign In</Text>
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
          In the last week, I have felt isolation
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadioselectedIndex}
          onChange={index => handleIsolatedChange(index)}
        >
          <Radio>{() => <Text style={styles.frameRadioText}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadioText}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast1, styles.theTypo]}>
          In the last week, my situation has felt hopeless
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadio1selectedIndex}
          onChange={index => handleHopelessChange(index)}
        >
          <Radio>{() => <Text style={styles.frameRadio1Text}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio1Text}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast, styles.theTypo]}>
          In the last week, I have felt suicidal
        </Text>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={frameRadio2selectedIndex}
          onChange={index => handleSuicidalChange(index)}
        >
          <Radio>{() => <Text style={styles.frameRadio2Text}> 1</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 2</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 3</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 4</Text>}</Radio>
          <Radio>{() => <Text style={styles.frameRadio2Text}> 5</Text>}</Radio>
        </RadioGroup>
        <Text style={[styles.inTheLast1, styles.theTypo]}>
          Any other comments? (max 160 characters)
        </Text>
        <TextInput
          style={styles.frameChild}
          placeholder="Your answer"
          multiline={true}
          placeholderTextColor="#c4ced3"
          value={text}
          onChangeText={handleTextChange}
          maxLength={160}
        />
      </View>
      <Pressable
        style={styles.signInWrapper}
        onPress={() => checkAnswered()}
      >
        <Text style={[styles.signIn1, styles.theTypo]}>Sign In</Text>
      </Pressable>
    </ScrollView>
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


  frameRadioText: {
    fontSize: 14,
  },
  frameRadioRadio: {
    padding: 52.25,
  },
  frameRadio1Text: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadio1Radio: {
    padding: 52.25,
  },
  frameRadio2Text: {
    fontFamily: "PTSans-Regular",
    fontSize: 16,
    color: "#000",
  },
  frameRadio2Radio: {
    padding: 52.25,
  },
  signInQuestionsScrollViewContent: {
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
  parentSpaceBlock: {
    marginTop: 22,
    width: 334,
  },
  stronglyPosition: {
    top: 23,
    height: 20,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  theTypo: {
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  signIn: {
    width: 95,
    height: 43,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 35,
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
    height: 43,
  },
  inTheLast: {
    height: 25,
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    marginTop: 22,
    width: 334,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inTheLast1: {
    fontSize: FontSize.title3Bold_size,
    fontFamily: FontFamily.pTSansBold,
    marginTop: 22,
    width: 334,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 45,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_base,
    marginTop: 22,
    width: 334,
  },
  signInParent: {
    marginTop: 25,
    alignItems: "center",
  },
  signIn1: {
    bottom: 19,
    left: 133,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    position: "absolute",
  },
  signInWrapper: {
    borderRadius: Border.br_3xs,
    height: 60,
    width: 334,
    marginTop: 25,
    backgroundColor: Color.colorGoldenrod_100,
  },
  signinquestions: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default SignInQuestions;
