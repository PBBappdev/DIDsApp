import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, Pressable, View, Linking  } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import HTML from 'react-native-render-html';
import { useNavigation } from "@react-navigation/native";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, QueryStartAtConstraint } from "firebase/firestore";


const MeetingInfo = ({ route }) => {
  const { location, day, date, time, state, address, description, meetingId, saveState} = route.params;
  const [isSaved, setIsSaved] = useState(saveState);
  const navigation = useNavigation();
  const database = getFirestore(firebaseApp);

  const toggleSave = () => {
    
    //SAVE group
    if (isSaved == true)
    {
      removeMeeting(meetingId);
      setIsSaved(false);
    }
    else if (isSaved == false)
    {
      saveMeeting(meetingId);
      setIsSaved(true);
    };
    

  };
//SAVE group
  const saveMeeting = async (meetingId) => {
    try {
      const user = auth.currentUser;
      //console.log(user.uid);
      
      // Reference to the user's document
      const userRef = doc(database, "Users", user.uid);
  
      // Get the user document snapshot
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        // Access the "SavedMeetings" subcollection within the user's document
        const userMeetingsRef = collection(userRef, "SavedMeetings");
        
        // Add a new document to the "SavedMeetings" subcollection with the meeting ID as the document ID
        await setDoc(doc(userMeetingsRef, meetingId), {
          meetingId: meetingId
        });
        
        console.log("Meeting saved successfully!");
      } else {
        console.log("User document not found.");
      }
    } catch (error) {
      console.error("Error saving meeting:", error);
    }
  };
  
  //remove group
  const removeMeeting = async (meetingId) => {
    try {
      const user = auth.currentUser;
      //console.log(user.uid);
  
      // Reference to the user's document
      const userRef = doc(database, "Users", user.uid);
  
      // Access the "SavedMeetings" subcollection within the user's document
      const userMeetingsRef = collection(userRef, "SavedMeetings");

      const meetingDocRef = doc(userMeetingsRef, meetingId); // Correctly call doc() with the Firestore instance and the path
      
      // Delete the meeting document from the "SavedMeetings" subcollection
      await deleteDoc(meetingDocRef);
  
      console.log("Meeting removed successfully!");
    } catch (error) {
      console.error("Error removing meeting:", error);
    }
  };

  const locationText = address;

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`;
    Linking.openURL(googleMapsUrl);
  };
  return (
    <View style={styles.meetinginfo}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      <View style={[styles.parent]}>
      <View style={styles.view}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textFlexBox]}> {date} -{time} </Text>
        <Text style={[styles.gosfordThursday, styles.textFlexBox]}>
          {location}- {day}
        </Text>
      </View>
    </View>
      <Pressable style={[styles.saveGroupParent, styles.plusIconLayout]}
       onPress={toggleSave}
       >
        <Text style={[styles.saveGroup, styles.mapTypo]}>
        {isSaved ? "Remove Group" : "Save Group"}
        </Text>
        <Image
          style={[styles.plusIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={
            isSaved
              ? require("../assets/minus2.png") // Use the minus icon when saved
              : require("../assets/plus1.png") // Use the plus icon when not saved
          }
        />
      </Pressable>
      <Image
        style={[styles.meetinginfoChild, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />

      <Text
        style={[styles.locationText, styles.saveGroupFlexBox]}
      >{address}</Text>
      <Pressable>
      <Text style={[styles.map, styles.mapTypo]}
      onPress={openGoogleMaps}
      >Map</Text>
      </Pressable>
      <Image
        style={[styles.meetinginfoItem, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
    <View
      style={styles.descriptionText}>
      <HTML
        style={[styles.saveGroupFlexBox]}
        source={{ html: description }}
        contentWidth={250} // Adjust this width as needed
        
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fbb042",
  },
  viewPosition: {
    width: "100%",
    position: "absolute",
    left: 0,
  },
  meetinginfoLayout: {
    right: 22,
    maxHeight: "100%",
    width: "85%",
    left: 22,
    height: 2,
    position: "relative",
  },
  meetinginfoItem: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
  },

  plusIconLayout: {
    height: 40,
    position: "relative",
  },
  textPosition: {
    lineHeight: 30,
    left: 79,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  
  meetinginfoChild: {
    marginTop: 20,
    postion: 'relative',
  },
  saveGroupFlexBox: {
    alignItems: "center",
    display: "flex",
    maxWidth: '90%',
    color: Color.colorBlack,
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
    left: 22,
    position: "relative",
  },
  mapTypo: {
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    position: "relative",
  },
  map: {
    textDecorationLine: "underline",
    color: Color.colorCornflowerblue,
    position: 'relative',
    left: 22,
    marginTop: 10,
  },
  saveGroup: {
    width: "80%", // Adjust width as needed
    height: 39,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  saveGroupParent: {
    marginTop: 10,
    position: "relative",
    width: "90%",
    left: 22,
    flexDirection: "row", // Ensure the button and text are in the same row
    alignItems: "center", // Align items vertically
  },
  plusIcon: {
    width: 40,
    height: 40,
    left: 0,
  },
  descriptionText: {
    top: -10,
    fontSize: FontSize.size_base,
    height: 300,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    right: 22,
    left: 22,
    width: "90%",
    position: "relative",
  },
  meetinginfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  parent: {
    backgroundColor: Color.colorGoldenrod_100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  view: {
    width: "100%",
    height: 81,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 33,
    left: 79,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 22,
    top: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 40,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.PTSansCaption,
    width: 220,
    height: 31,
  },
  gosfordThursday: {
    top: 10,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
    width: "90%",
    height: 35,
  },
  
});

export default MeetingInfo;
