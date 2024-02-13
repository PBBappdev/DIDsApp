import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ImageBackground,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import { KeyboardAvoidingView } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import StatePlaceholder from "../components/StatePlaceholder";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, updateDoc, addDoc, collection, query, where, getDocs, QueryStartAtConstraint } from "firebase/firestore";


const Meetings1 = () => {
  StatusBar.setBackgroundColor("#FBB042");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchMeetings(); // Assuming fetchMeetings() is your function to fetch meetings from the database
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
    setRefreshing(false);
  };


  const navigation = useNavigation();

  //day modal
  const [dayOpen, setDayOpen] = useState(false);
  const [dayValue, setDayValue] = useState();
  const [dayItems, setDayItems] = useState([
    { value: "All", label: "Any Day" },
    { value: "Mon", label: "Mon" },
    { value: "Tue", label: "Tue" },
    { value: "Wed", label: "Wed" },
    { value: "Thur", label: "Thur" },
    { value: "Fri", label: "Fri" },
    { value: "Sat", label: "Sat" },
    { value: "Sun", label: "Sun" },
  ]);
  const [isDayModalVisible, setDayModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const openDayModal = () => setDayModalVisible(true);
  const closeDayModal = () => setDayModalVisible(false);

  const handleDaySelect = (item) => {
    setDayValue(item.value);
    setSelectedDay(item);
    closeDayModal();
  };

  //state modal
  const [stateOpen, setStateOpen] = useState(false);
  const [stateValue, setStateValue] = useState("State");
  const [stateItems, setStateItems] = useState([
    { value: "Any", label: "Any State" },
    { value: "VIC", label: "VIC" },
    { value: "NSW", label: "NSW" },
    { value: "ACT", label: "ACT" },
    { value: "QLD", label: "QLD" },
    { value: "WA", label: "WA" },
    { value: "NT", label: "NT" },
    { value: "SA", label: "SA" },
  ]);
  
  const [isStateModalVisible, setStateModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const openStateModal = () => setStateModalVisible(true);
  const closeStateModal = () => setStateModalVisible(false);

  const handleStateSelect = (item) => {
    setStateValue(item.value);
    setSelectedState(item);
    closeStateModal();
  };

//cancel buttom
const resetState = () => {
  setDayValue(null);
  setSelectedDay(null);
  setDayModalVisible(false);

  setStateValue("State");
  setSelectedState(null);
  setStateModalVisible(false);

  setSearchInput('');
};


  //dynamically grab groups
  const [savedGroups, setSavedGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

// Add these state variables for filtered groups
const [filteredSavedGroups, setFilteredSavedGroups] = useState([]);
const [filteredAllGroups, setFilteredAllGroups] = useState([]);

useEffect(() => {
  fetchMeetings();
}, []);


const [day, setDay] = useState('');

// get meeting data
const database = getFirestore(firebaseApp);
const meetingRef = collection(database, "Meetings");
const [meetingsData, setMeetingsData] = useState([]);
const fetchMeetings = async () => {
  try {
    const meetingsSnapshot = await getDocs(meetingRef);
    const meetingsData = [];
    meetingsSnapshot.forEach((doc) => {
      const meeting = doc.data();
      meetingsData.push({
        id: doc.id,
        location: meeting.suburb.trim(),
        day: meeting.day.trim(),
        date: meeting.date.trim(),
        time: meeting.time.trim(),
      });
    });
    setSavedGroups(meetingsData);
    setFilteredSavedGroups(meetingsData); // Update filtered saved groups
    setAllGroups(meetingsData);
    setFilteredAllGroups(meetingsData); // Update filtered saved groups
  } catch (error) {
    console.error('Error fetching meetings:', error);
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



//SAVE group
const saveMeeting = async (meetingId) => {
  try {
    const user = auth.currentUser;
    //console.log("Current user:", user);

    // Search for the user document with matching userID
    const usersCollectionRef = collection(database, "Users");
    if (!usersCollectionRef) {
      console.error("User collection reference is undefined");
    }
    const querySnapshot = await getDocs(usersCollectionRef.where("userID", "==", user.uid));
    console.log("Query snapshot", querySnapshot);

    if (!querySnapshot.empty) {
      // Iterate through the query results (should be only one result)
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log("User document:", userData);

        // Get the reference to the user's meetings collection
        const userMeetingsRef = collection(doc.ref, "Meetings");
        console.log("User meetings reference:", userMeetingsRef);

        // Add the meeting to the user's meetings collection
        addDoc(userMeetingsRef, {
          meetingId: meetingId
        }).then(() => {
          console.log("Meeting saved successfully!");
        }).catch((error) => {
          console.error("Error saving meeting:", error);
        });
      });
    } else {
      console.log("User document not found for the current user.");
    }
  } catch (error) {
    console.error("Error saving meeting:", error);
  }
};

  return (
    // <KeyboardAvoidingView
    //   style={styles.container} // You can adjust the style as needed
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView
      style={styles.meetings}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.meetingsScrollViewContent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.statusBarParent}>
        <StatusBar barStyle="default" />
        <View style={styles.searchbarWrapper}>
          <View style={[styles.searchbar, styles.searchbarPosition]}>
            
             <TextInput
              style={styles.stateInput} // Add a new style for TextInput
              placeholder="Search Location or Day" // Set the placeholder text
              value={searchInput}
              onChangeText={(text) => {
                setSearchInput(text);
                console.log('Search Input:', text); // Add this line to log the search input
              }}
              
            />
            
          </View>
          <Image
            style={[styles.searchIcon]}
            contentFit="cover"
            source={require("../assets/search.png")}
      />
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.dayParent}>
            <View style={styles.day}>
              {/* Down Arrow Icon */}
              <Image
                      style={styles.downArrowIcon}
                      source={require("../assets/sort-left.png")}
                    />
              <TouchableOpacity onPress={openDayModal}>
                <Text style={styles.dayValue}>
                  {selectedDay ? selectedDay.label : "Select Day"}
                </Text>
              </TouchableOpacity>
               {/* Day Modal */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={isDayModalVisible}
                onRequestClose={closeDayModal}
              >
              <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={closeDayModal}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <FlatList
                    data={dayItems}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.modalItem}
                        onPress={() => handleDaySelect(item)}
                      >
                        <Text>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.value}
                  />
                </View>
              </View>
            </Modal>
            </View>

            <View style={[styles.dayParent, styles.day]}>
              {/* Down Arrow Icon */}
              <Image
                      style={styles.downArrowIcon}
                      source={require("../assets/sort-left.png")}
                    />
              <TouchableOpacity onPress={openStateModal}>
                <Text style={styles.dayValue}>
                  {selectedState ? selectedState.label : "Select State"}
                </Text>
              </TouchableOpacity>
              {/* State Modal */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={isStateModalVisible}
                onRequestClose={closeStateModal}
              >
                <View style={styles.modalContainer}>
                  <TouchableWithoutFeedback onPress={closeStateModal}>
                    <View style={styles.overlay} />
                  </TouchableWithoutFeedback>
                  <View style={styles.modalContent}>
                    
                    <FlatList
                      data={stateItems}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.modalItem}
                          onPress={() => handleStateSelect(item)}
                        >
                          <Text>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.value}
                    />
                  </View>
                </View>
              </Modal>
            </View>
            <Pressable
              style={[styles.cancel, styles.stateSpaceBlock]}
              onPress={resetState}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/cancel.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.savedGroups}>
        <Text style={[styles.savedGroups1, styles.groupsTypo]}>
          Saved Groups
        </Text>
        <View style={styles.frameParent}>
        {filteredSavedGroups.map((meeting, index) => (
            <Pressable
              key={index}
              style={styles.tuesdayParentLayout}
              onPress={() => navigation.navigate("MeetingInfo")}
            >
              <Text style={[styles.locationText, styles.locationTextLayout]} numberOfLines={1}>
              {meeting.location} - { meeting.day}
              </Text>
              <Text style={[styles.text, styles.textLayout1]} numberOfLines={1}>
              {meeting.date} - {meeting.time}
              </Text>
              <Image
                style={[styles.Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/minus2.png")}
              />
            </Pressable>
          ))}
          <Image
          style={styles.savedGroupsChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        </View>
        
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
              onPress={() => navigation.navigate("MeetingInfo")}
            >
              <Text style={[styles.locationText, styles.locationTextLayout]}>
              {meeting.location} - { meeting.day}
              </Text>
              <Text style={[styles.text, styles.textLayout1]}>
              {meeting.date} - {meeting.time}
              </Text>
              <Pressable  
                style={[styles.Icon, styles.iconLayout]}
                onPress={() => {
                saveMeeting(meeting.id);
                }}
              >
              <Image
                style={[styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus31.png")}
              />
              </Pressable>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
    //</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayValue: { //Day text
    marginTop: 9,
    marginLeft: 5, 
    color: "#fff",
    fontSize: 16,
    backgroundColor: '#FBB042',
    fontFamily: FontFamily.PTSansRegular,
  },
  daydropDownContainer: {
    backgroundColor: "#fbb042",
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
  stateValue: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
  },
  statedropDownContainer: {
    backgroundColor: "#fbb042",
  },
  meetingsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
  stateSpaceBlock: {
    marginLeft: 35,
    height: 34,
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
  onlineTypo: {
    width: 293,
    height: 30,
    fontFamily: FontFamily.PTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  minusIcon1Position: {
    top: 1,
    position: "absolute",
  },
  text4Text: {
    textDecorationLine: "line-through",
    color: Color.colorTomato_100,
    alignItems: "center",
    display: "flex",
    left: 14,
    textAlign: "left",
    lineHeight: 22,
    position: "absolute",
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
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
  dropdownpicker: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  day: { //frame for day
    width: 115,
    height: 40,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#FBB042',
    position: 'relative',
  },
  state: {
    width: 121,
    borderRadius: Border.br_8xs,
    marginLeft: 35,
  },
  icon: {
    top: 7,
    right: -10,
    postion: 'relative',
    height: "100%",
    width: "100%",
  },
  cancel: {
    width: 34,
  },
  dayParent: { 
    left: 21,
    width: '87%',
    flexDirection: "row",
    marginTop: 11,
    position: "absolute",
    
  },
  frameWrapper: {
    backgroundColor: "rgba(251, 176, 66, 0.6)",
    height: 72,
    width: '100%',
    position: 'relative'
  },
  statusBarParent: {
    zIndex: 0,
    width: '100%',
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
    top: 10,
    left: '40%',
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
  allGroups1: {
    position: 'relative',
    left: 3,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.SourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
  },
  plusIcon: {
    left: 307,
    top: 0,
    position: "absolute",
  },
  bayswaterTuesdayParent: {
    marginTop: 12,
  },
  onlineFriday: {
    color: Color.colorTomato_100,
    width: 293,
    height: 30,
    fontFamily: FontFamily.PTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    top: 4,
  },
  text4: {
    color: Color.colorTomato_100,
    top: 33,
    height: 31,
    width: 220,
    fontFamily: FontFamily.PTSansCaption,
    fontSize: FontSize.size_lgi,
  },
  allGroups: {
    height: 508,
    zIndex: 2,
    width: 345,
    marginTop: 17,
    marginBottom: 30,
  },
  searchIcon: {
    top: -15,
    width: 25,
    height: 25,
    marginLeft: 20,
    
  },
  modalContainer: {
    flex: 1,
    zIndex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FBB042",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  modalItem: {
    paddingVertical: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  downArrowIcon: {
    width: 10,
    height: 10,
    position: "absolute",
    right: 10, // Adjust the right property as needed
    top: 15, // Adjust the top property as needed
    zIndex: 1,
  },
  meetings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Meetings1;
