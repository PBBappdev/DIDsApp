import React, { useState, useEffect  } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
  Alert,
  
} from "react-native";
import { Picker } from "@react-native-picker/picker"
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useTextInputContext } from '../components/TextInputContext';
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from "@react-native-community/datetimepicker"
import { set } from "react-native-reanimated";
import { firebaseApp, auth } from "../firebase";
import { getAuth,  initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence, deleteUser} from "firebase/auth";
import { getFirestore, addDoc, collection, doc, setDoc, query, where, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import DropDownPicker from 'react-native-dropdown-picker';



const CreateProfile = () => {;
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const { textInputs, setTextInput } = useTextInputContext();
  const [selectedGender, setSelectedGender] = useState("");

  const handleInputChange = (name, value) => {
    setTextInput(name, value);
  };



  //dob components
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatepicker();
        console.log(currentDate)
        setDateOfBirth(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  }

  const checkAnswered = async () => {

    if (phoneNumber !== "" && countryCode !== "" && selectedGender !== "" && textInputs.postcode !== undefined) {
      addUser();
    } else {
      Alert.alert(
        'Missing Answer(s)',
        'Please answer questions marked with a ( * )',
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

  //phone number
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [countryCode, setCountryCode] = useState("au"); 

  


  //push to db
  const database = getFirestore(firebaseApp);
  const userRef = collection(database, "Users");
  const addUser = async () => {
    try {
      const user = auth.currentUser.uid
      const userObj = { 
        phoneNumber: phoneNumber,
        phoneCountrycode: countryCode,
        gender: selectedGender, 
        postcode: textInputs.postcode, 
        DoB: dateOfBirth,
      };

      const userDocRef = doc(userRef, user)
      console.log("Adding user:", userObj);

      await updateDoc(userDocRef, userObj);

      console.log("User data added successfully");
      navigation.navigate("LanuageSelect");

    } catch (e) {
      alert (e)
      console.log(e);
    }
  };


//remove user details from auth and user collection
const auth = getAuth();
const user = auth.currentUser;
const [removedAuth, setRemovedAuth] = useState(false);
const [removedDoc, setRemovedDoc] = useState(false);

const removeUserDetails = async () => {
  try {
    if (user) {
      await deleteUser(user);
      console.log("Deleted user successfully:");
      setRemovedAuth(true);
      
      const userReference = doc(database, "users", user.uid);
      await deleteDoc(userReference);
      console.log("Deleted user document successfully:");
      setRemovedDoc(true);
      
      
    } else {
      console.log("User is not authenticated");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
  
  if (removedAuth && removedDoc == true) {
    await navigation.navigate("CreateAccount");
  }
 
};


  return (
    <View
      style={styles.createprofile}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createProfileScrollViewContent}
    >
      
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          //onPress={() => navigation.navigate("CreateAccount")}
          onPress = {removeUserDetails}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.profileFlexBox]}>Profile</Text>
      </View>
      
          <View style={[styles.frameItem, styles.frameLayout]}>
          <PhoneInput
          defaultCode="AU"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number*"
          onChangeCountry={(countryData) => {
            console.log(countryData); // Add this line for debugging
            const selectedCountryCode = countryData.callingCode; // Ensure countryData is defined
            console.log("Selected country code:", selectedCountryCode);
            setCountryCode(selectedCountryCode);
          }}
          style={{ borderWidth: 1, borderRadius: 5, borderColor: 'black', backgroundColor: "rgba(246,246,246,255)" }}
          textStyle={{ fontSize: 16, color: 'blue' }}
          containerStyle={{ width: "100%"}}
          flagButtonStyle={{ backgroundColor: 'lightgray' }}
          />
      </View>
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          keyboardType="numeric"
          label="Postcode*"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={textInputs.postcode}
          onChangeText={(value) => handleInputChange('postcode', value)}
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <DropDownPicker
          items={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
            {label: 'Other', value: 'other'},
          ]}
          placeholder="Gender *"
          open={open}
          setOpen={setOpen}
          value={selectedGender}
          setValue={setSelectedGender}
          //containerStyle={{height: 50}}
          style={[styles.frameItem, styles.frameLayout, styles.picker]}
          dropDownContainerStyle={{
            width: '90%',
            }}
          itemSeparatorStyle={{
           
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(items) => setSelectedGender(items.value)}
        />

        {showPicker && (
          <DateTimePicker
          keyboardType="numeric"
          mode='date'
          display="spinner"
          value={date}
          onChange={onChange}
          onConfirm={() => setShowPicker(false)}
          />
        )}
        
        {/* {showPicker && Platform.OS === 'ios' && ( //for IOS
          <View
          style={{flexDirection: 'row',
        justifyContent: 'space-around'}}
          ></View>
        )} */}

        <RNPTextInput
          onPressIn={toggleDatepicker}
          //editable={false}
          style={[styles.frameItem, styles.frameLayout]}
          label="Date Of Birth"
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={dateOfBirth} 
          //onChangeText={setDateOfBirth}
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />     
        
      <View style={styles.mandatoryInformationParent}>
        <Text
          style={[styles.mandatoryInformation, styles.continueWrapperPosition]}
        >
          <Text style={styles.mandatoryInformationTxtContainer}>
            <Text style={styles.mandatoryInformation1}>
              * Mandatory information
            </Text>
          </Text>
        </Text>
        <TouchableOpacity
          style={[styles.continueWrapper, styles.continueWrapperPosition]}
          activeOpacity={0.7}
          //onPress={() => navigation.navigate("LanuageSelect")}
          onPress={checkAnswered}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInput: { 
    height: 50, 
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
}, 
picker: {
  width: '90%',
  marginBottom: 10,
 // height: 50,
  position: 'relative',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#black',
  backgroundColor: '#f6f6f6', // Background color of the picker
},

  createProfileScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  profileFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 35,
  },
  
  continueWrapperPosition: {
    width: "100%",
    position: "relative",
  },
  icon: {
    height: "100%",
    width: "85%",
  },
  backArrow: {
    width: 40,
    height: 40,
    marginTop: "10%",
  },
  profile: {
    marginTop: "5%",
    fontFamily: FontFamily.PTSansCaption,
    height: 40,
    //width: "90%",
    alignItems: "center",
    fontSize: FontSize.size_13xl,
  },
  backArrowParent: {
    marginTop: 14,
    width: "85%",
  },
  frameItem: {
    marginTop: "5%",
    width: "90%",
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
  },
  text: {
    fontSize: FontSize.size_13xl,
  },
  mandatoryInformation1: {
    fontSize: FontSize.title3Bold_size,
  },
  mandatoryInformationTxtContainer: {
    width: "100%",
  },
  mandatoryInformation: {
    top: "20%",
    fontFamily: FontFamily.PTSansRegular,
    height: 52,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  continue: {
    top: 19,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.PTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "relative",
  },
  continueWrapper: {
    position: "relative",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
  },
  mandatoryInformationParent: {
    height: 126,
    width: "90%",
    marginTop: "2%",
  },
  createprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    paddingLeft: 28,
    maxWidth: "100%",
    width: "100%",
  },
});

export default CreateProfile;
