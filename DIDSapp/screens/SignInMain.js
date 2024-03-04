import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Pressable,
  RefreshControl,
} from "react-native";
import { Image } from "expo-image";
//import { TextInput as RNPTextInput } from "react-native-paper";
import StatePlaceholder from "../components/StatePlaceholder";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, QueryStartAtConstraint } from "firebase/firestore";
import * as Location from 'expo-location'; // Import the Location module from Expo

const SignInMain = () => {

  const [userLocation, setUserLocation] = useState(null); // State to hold user's location
  const [nearestGroup, setNearestGroup] = useState([]); // State to hold nearest group
  // Add state to hold the nearest date
const [nearestDate, setNearestDate] = useState('');
  const navigation = useNavigation();
  const [stateInput, setStateInput] = useState(""); // Add this state to hold the input value

  //handle refresh
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchMeetings(pageSize, lastDoc); // Assuming fetchMeetings() is your function to fetch meetings from the database
      //await getUserLocation();
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
    setRefreshing(false);
  };

//get users location
  useEffect(() => {
    
    const getUserLocation = async () => {
      try {
        // Request permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        // Get user's current location
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords); // Set user's location
        //console.log(location)
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    getUserLocation(); // Call the function to get user's location
  }, []);

//suggest group distance calc
const calculateDistance = (userCoords, groupCoords) => {
  const earthRadius = 6371; // Earth's radius in kilometers

  // Convert latitude and longitude from degrees to radians
  const userLatRad = userCoords.latitude * Math.PI / 180;
  const userLonRad = userCoords.longitude * Math.PI / 180;
  const groupLatRad = groupCoords.lat * Math.PI / 180; // Adjusted here
  const groupLonRad = groupCoords.lng * Math.PI / 180; // Adjusted here

  // Calculate differences between coordinates
  const latDiff = groupLatRad - userLatRad;
  const lonDiff = groupLonRad - userLonRad;

  // Calculate Haversine formula
  const a = Math.sin(latDiff / 2) ** 2 +
            Math.cos(userLatRad) * Math.cos(groupLatRad) *
            Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c; // Distance in kilometers

  return distance;
};

//get group lat long
useEffect(() => {
  if (userLocation && allGroups.length > 0) {
    const today = new Date();
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Date without time

    // Filter meetings with the current date
    const meetingsToday = allGroups.filter(meeting => {
      const [day, month, year] = meeting.date.split("/"); // Split the date string into day, month, and year
      const meetingDate = new Date(year, month - 1, day); // Set the time to midnight

      // Only consider meetings that occur on the current date
      return (
        meetingDate.getFullYear() === currentDate.getFullYear() &&
        meetingDate.getMonth() === currentDate.getMonth() &&
        meetingDate.getDate() === currentDate.getDate()
      );
    });

    const nearestGroup = [];
    let minDistance = Infinity;

    // Iterate through meetings and calculate distances
    meetingsToday.forEach(async (meeting) => {
      try {
        // Make API call to get coordinates for group address
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(meeting.address)}&key=AIzaSyDZheXA2B7-M_c4YLXUqAei8lawdWyfHsI`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const groupCoords = data.results[0].geometry.location;
          const distance = calculateDistance(userLocation, groupCoords);

          if (distance < minDistance) {
            minDistance = distance;
            nearestGroup = meeting;
            setNearestGroup(nearestGroup);
            console.log(nearestGroup);
          }
        }
      } catch (error) {
        console.error('Error fetching group coordinates:', error);
      }
    });

    // Set the nearest group after iterating through all meetings
    setNearestGroup(nearestGroup);
  }
}, [userLocation, allGroups]);
  



  //dynamically grab groups
  const [savedGroups, setSavedGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

// Add these state variables for filtered groups
const [filteredSavedGroups, setFilteredSavedGroups] = useState([]);
const [filteredAllGroups, setFilteredAllGroups] = useState([]);


const [day, setDay] = useState('');

// get meeting data
 const database = getFirestore(firebaseApp);
 const meetingRef = collection(database, "Meetings");
 const [meetingsData, setMeetingsData] = useState([]);
 const pageSize = 10; // Adjust the page size as needed
 const lastDoc = null; // Initially, there's no last document
 
 const fetchMeetings = async (pageSize, lastDoc) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      console.error("User not logged in");
      return;
    }

    const userRef = doc(database, "Users", user.uid);
    const userMeetingsRef = collection(userRef, "SavedMeetings");
    const userMeetingsSnapshot = await getDocs(userMeetingsRef);
    const savedMeetingsIds = userMeetingsSnapshot.docs.map((doc) => doc.id);

    const today = new Date();
    const currentDay = today.getDate() - 1;
    const currentMonth = today.getMonth() + 1; // Months are zero-based
    const currentYear = today.getFullYear();
    const formattedToday = `${currentDay}/${currentMonth}/${currentYear}`;

    let meetingsQuery = query(meetingRef, where("date", ">=", formattedToday), orderBy("date"));
    //console.log(meetingsQuery);
     if (lastDoc) {
       meetingsQuery = query(meetingsQuery, startAfter(lastDoc), limit(10));
     }

     meetingsQuery = query(meetingsQuery, limit(pageSize)); // Apply pagination limit

    const meetingsSnapshot = await getDocs(meetingsQuery);
    //console.log(meetingsSnapshot);
    const newMeetingsData = [];
    const allMeetingsData = [];

    meetingsSnapshot.forEach((doc) => {
      const meeting = doc.data();
      const meetingDateParts = meeting.date.split("/");
      const meetingDay = parseInt(meetingDateParts[0]);
      const meetingMonth = parseInt(meetingDateParts[1]);
      const meetingYear = parseInt(meetingDateParts[2]);
      const meetingDate = `${meetingDay}/${meetingMonth}/${meetingYear}`;
      //console.log("Parsed Date:", meetingDate);
      //console.log(meetingDateParts);
      //console.log(formattedToday);
      //console.log(meetingDate);

      if (meetingDate >= formattedToday) {
        const newMeeting = {
          id: doc.id,
          location: meeting.suburb,
          day: meeting.day,
          date: meeting.date,
          time: meeting.time,
          state: meeting.state,
          address: meeting.address,
          description: meeting.description,
        };

        if (savedMeetingsIds.includes(doc.id)) {
          newMeetingsData.push(newMeeting);
        }

        allMeetingsData.push(newMeeting);
      }
    });

    setSavedGroups(newMeetingsData);
    setAllGroups(allMeetingsData);

    return meetingsSnapshot.docs[meetingsSnapshot.docs.length - 1]; // Return the last document for pagination
  } catch (error) {
    console.error("Error fetching meetings:", error);
  }
};




// search function
const [searchInput, setSearchInput] = useState('');

useEffect(() => {
  // logic to filter groups based on searchInput
  const filteredSavedGroups = savedGroups.filter(meeting =>
    meeting.location.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.day.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.date.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.time.toLowerCase().includes(searchInput.toLowerCase())
  );
  setFilteredSavedGroups(filteredSavedGroups);

  const filteredAllGroups = allGroups.filter(meeting =>
    meeting.location.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.day.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.date.toLowerCase().includes(searchInput.toLowerCase()) ||
    meeting.time.toLowerCase().includes(searchInput.toLowerCase())
  );
  setFilteredAllGroups(filteredAllGroups);
}, [searchInput, savedGroups, allGroups]);

useEffect(() => {
  const pageSize = 10; // Adjust the page size as needed

  const fetchInitialMeetings = async () => {
    try {
      const lastDocument = await fetchMeetings(pageSize, lastDoc);
      //console.log(savedGroups);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching initial meetings:', error);
      setRefreshing(false);
    }
  };

  fetchInitialMeetings();
}, []);

  return (
    <ScrollView
      style={styles.signinmain}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signInMainScrollViewContent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      
     <View style={styles.searchbarWrapper}>
          <View style={[styles.searchbar, styles.searchbarPosition]}>
            
             <TextInput
              style={styles.stateInput} // Add a new style for TextInput
              placeholder="Search Location or Day" // Set the placeholder text
              value={searchInput}
              onChangeText={(text) => setSearchInput(text)} // Update the state on text change
              
            />
            
          </View>
          <Image
            style={[styles.searchIcon]}
            contentFit="cover"
            source={require("../assets/search.png")}
        />
        </View>
        <View stlye={styles.contentWrapper}>
          <View style={[styles.headerFormat, styles.groupsLayout]}>
        {nearestGroup.length > 0  &&  (
      <View>
          <Text style={[styles.savedGroups1, styles.groupsTypo]}>
          Suggested Groups
        </Text>
        <View style={styles.frameParent}>
        {nearestGroup && ( // Check if nearestGroup exists
          <Pressable
            key={nearestGroup.id} // Use the key from nearestGroup
            style={styles.tuesdayParentLayout}
            onPress={() => navigation.navigate("SignInConfidentiality", {
              // Pass the details of nearestGroup
              day: nearestGroup.day,
              date: nearestGroup.date,
              time: nearestGroup.time,
              state: nearestGroup.state,
              address: nearestGroup.address,
              description: nearestGroup.description,
              location: nearestGroup.location,
              meetingId: nearestGroup.id,
              
            })}
          >
            <Text style={[styles.locationText, styles.locationTextLayout]} numberOfLines={1}>
              {nearestGroup.location}- {nearestGroup.day}
            </Text>
            <Text style={[styles.text, styles.textLayout1]} numberOfLines={1}>
              {" "}{nearestGroup.date} -{nearestGroup.time}
            </Text>
            <Pressable  
              style={[styles.Icon, styles.iconLayout]}
              onPress={() => navigation.navigate("SignInConfidentiality")}
            >
              <Image
                style={[styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/circled-right.png")}
              />
            </Pressable>
          </Pressable>
        )}
      
          <Image
          style={styles.savedGroupsChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        </View>
        </View>
      )}
      </View>

      {filteredSavedGroups.length > 0 && (
      <View>
      <Text style={[styles.savedGroups1, styles.groupsTypo]}>
          Saved Groups
        </Text>
        <View style={styles.frameParent}>
        {filteredSavedGroups.map((meeting, index) => (
            <Pressable
              key={index}
              style={styles.tuesdayParentLayout}
              onPress={() => navigation.navigate("SignInConfidentiality", {
                //address: meeting.address,
                day: meeting.day,
                date: meeting.date,
                time: meeting.time,
                state: meeting.state,
                address: meeting.address,
                description: meeting.description,
                location: meeting.location,
                meetingId: meeting.id,
                saveState: true,
              })}
            >
              <Text style={[styles.locationText, styles.locationTextLayout]} numberOfLines={1}>
              {meeting.location}- { meeting.day}
              </Text>
              <Text style={[styles.text, styles.textLayout1]} numberOfLines={1}>
              {" "}{meeting.date} -{meeting.time}
              </Text>
              <Pressable  
                style={[styles.Icon, styles.iconLayout]}
                onPress={() => navigation.navigate("SignInConfidentiality")}
              >
              <Image
                style={[styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/circled-right.png")}
              />
              </Pressable>
            </Pressable>
          ))}
          <Image
          style={styles.savedGroupsChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        </View>
      </View>
      )}
      </View>
      
      <View style={styles.savedGroups}>
        <Text style={[styles.savedGroups1, styles.groupsTypo]}>
          All Groups
        </Text>
        <View style={styles.frameParent}>
        {filteredAllGroups.map((meeting, index) => (
           <Pressable
           key={index}
           style={styles.tuesdayParentLayout}
           onPress={() => navigation.navigate("SignInConfidentiality", {
             //address: meeting.address,
             day: meeting.day,
             date: meeting.date,
             time: meeting.time,
             state: meeting.state,
             address: meeting.address,
             description: meeting.description,
             location: meeting.location,
             meetingId: meeting.id,
             
             
           })}
         >
              <Text style={[styles.locationText, styles.locationTextLayout]}>
              {meeting.location}- { meeting.day}
              </Text>
              <Text style={[styles.text, styles.textLayout1]}>
              {" "}{meeting.date} -{meeting.time}
              </Text>
              <Pressable  
                style={[styles.Icon, styles.iconLayout]}
                onPress={() => navigation.navigate("SignInConfidentiality")}

              >
              <Image
                style={[styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/circled-right.png")}
              />
              </Pressable>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInMainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentWrapper: {
    left: 22,
    right: 22,
  },
  searchbar: {
    width: '80%',
    height: 36,
    top: 14,
  },
  searchbarWrapper: {
    height: 70,
    width: '100%',
    zIndex: 2,
    backgroundColor: Color.colorGoldenrod_100,
    position: 'relative'
  },
  stateInput: {
    flex: 1,
    height: 36,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    color: 'white',
    fontFamily: "PTSans-Regular",
    color: "#fff",
  },
  searchIcon: {
    top: -15,
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  groupsLayout: {
    width: 346,
    marginTop: 10,
  },
  headerFormat: {
    position:"relative",
    zIndex: 1,
  },
  signinmain: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  stateInput: {
    flex: 1,
    height: 36,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    color: 'white',
    fontFamily: FontFamily.PTSansRegular,
    color: "#fff",
  }, 
  groupsTypo: {
    textAlign: "left",
    top: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.SourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
  },
  locationTextLayout: {
    height: 30,
    fontFamily: FontFamily.PTSansCaptionBold,
    fontWeight: "700",
    fontSize: 19,
    alignItems: "center",
    display: "flex",
    top: 13,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  textLayout1: {
    height: 18,
    width: 220,
    fontFamily: FontFamily.PTSansCaption,
    fontSize: 14,
    alignItems: "center",
    display: "flex",
    bottom: 16,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  iconLayout: {
    height: 39,
    width: 39,
    right: -8,
  },
  tuesdayParentLayout: {
    height: 75,
    borderWidth: 2,
    marginBottom: 15,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 345,
  },
  searchbarPosition: {
    marginLeft: '13%',
    position: "relative",
  },
  searchbar: {
    width: '80%',
    height: 36,
    top: 14,
  },
  searchbarWrapper: {
    height: 70,
    width: '100%',
    zIndex: 2,
    backgroundColor: Color.colorGoldenrod_100,
    position: 'relative'
  },
  savedGroups1: {
    marginTop: 2,
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.SourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
    position: "relative",
  },
  savedGroupsChild: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 20,
    left: '40%',
    width: 50,
    height: 2,
  },
  savedGroupsChilds: {
    position: 'relative',
    top: 10,
    marginBottom: 10,
    left: '36%',
    width: 50,
    height: 2,
  },
  locationText: {
    width: '80%',
    left: 14,
  },
  text: {
    left: 13,
  },
  Icon: {
    marginLeft: '80%',
    marginTop: 15,
    position: "relative",
  },
  onlineTuesdayParent: {
    marginTop: 18,
  },
  frameParent: {
    top: 34,
    marginBottom: 10,
    left: 0,
    position: "relative",
  },
  savedGroups: {
    zIndex: 1,
    marginTop: 17,
    marginBottom: 10,
  },
  searchIcon: {
    top: -15,
    width: 25,
    height: 25,
    marginLeft: 20,
    
  },

});

export default SignInMain;
