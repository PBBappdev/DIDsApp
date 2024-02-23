import React, { useState  } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { Switch } from 'react-native-switch';
import PhoneInput from "react-native-phone-number-input";
import { firebaseApp, auth } from "../firebase";
import { getAuth,  initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import { getFirestore, addDoc, collection, doc, setDoc, query, where, getDocs, updateDoc } from "firebase/firestore";



const CreateProfile = () => {;
  const navigation = useNavigation();
  const [lanuage, setLanuage] = useState('');

  const [countryCode, setCountryCode] = useState('AU');
  const [countryName, setCountryName] =useState('Australia')
  const handleInputChange = (name, value) => {
    setTextInput(name, value);
  };

  const [indigenous, setIndigenous] = useState(true);
  toggleIndigenous = () => {
    setIndigenous(!indigenous);
  };

  const [englishNative, setEnglishNative] = useState(true);
  toggleNative = () => {
    setEnglishNative(!englishNative);
  };

  const handlePressCountryPicker = () => {
    // Logic to open the country picker modal
  };

  //push to db
  const database = getFirestore(firebaseApp);
  const userRef = collection(database, "Users");
  const addUser = async () => {
    try {
      const user = auth.currentUser.uid
      const userObj = { 
        FirstNationsPerson: indigenous,
        EnglishNativeLanguage: englishNative,
        BirthCountry: countryName 
      };

      const userDocRef = doc(userRef, user)
      console.log("Adding user:", userObj);

      await updateDoc(userDocRef, userObj);

      console.log("User data added successfully");
      navigation.navigate("RoleSelect");

    } catch (e) {
      alert (e)
      console.log(e);
    }
  };
  return (
    <ScrollView
      style={styles.createprofile}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createProfileScrollViewContent}
    >
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("CreateProfile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.profile, styles.profileFlexBox]}>Profile</Text>
      </View>
      <View style={styles.switchFormat}>
      <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Indigenous / First Nations
          </Text>
          <View style={styles.switchContainer}>
        <Switch
          style={[styles.switchdefault, styles.switchLayout]}
          value={indigenous}
          onValueChange={(value)=>{
          toggleIndigenous();
          console.log(value);
          }}
          disabled={false}
          activeText={'Yes'}
          inActiveText={'No'}
          backgroundActive={Color.colorGoldenrod_100}
          backgroundInactive={'gray'}
          circleActiveColor={Color.colorGoldenrod_100}
          circleInActiveColor={'#000000'}
        />
        </View>
        </View>
        <View style={styles.switchFormat}>
          <Text style={[styles.meetingReminders, styles.createAccountTypo]}>
            Native Lanuage is English 
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              style={[styles.switchdefault, styles.switchLayout]}
              value={englishNative}
              onValueChange={(value)=>{
                toggleNative();
              console.log(value);
              }}
              disabled={false}
              activeText={'Yes'}
              inActiveText={'No'}
              backgroundActive={Color.colorGoldenrod_100}
              backgroundInactive={'gray'}
              circleActiveColor={Color.colorGoldenrod_100}
              circleInActiveColor={'#000000'}
            />
          </View>
        </View>
        
        <View >
          <Text style={[styles.countryOfBirthContainer]}>
              Country of Birth:  {countryName}
          </Text>
        </View>
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          defaultCode={countryCode}
          placeholder={"Phone Number*"}
          containerStyle={styles.phoneInput}
          textContainerStyle={styles.phoneInputText}
          flagButtonStyle={styles.phoneInputFlagButton}
          onChangeCountry={(countryData) => {
            console.log(countryData); // Add this line for debugging
            const selectedCountryCode = countryData.name; // Ensure countryData is defined
            console.log("Selected country code:", selectedCountryCode);
            setCountryCode(selectedCountryCode);
            setCountryName(selectedCountryCode);

          }}
        />
        {/* Render a Pressable over the PhoneInput to trigger the country picker */}
        <TouchableOpacity
          style={styles.phoneInputPickerButton}
          onPress={handlePressCountryPicker}
        />
      </View>

     
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Preferred Language"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={lanuage}
          onChangeText={setLanuage}
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
          //onPress={() => navigation.navigate("RoleSelect")}
          onPress={addUser}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createProfileScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  switchdefault: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  meetingReminders: {
    fontFamily: FontFamily.PTSansRegular,
    width: "85%",
    fontSize: 16,
    alignItems: "center",
    display: "flex",
  },
  switchFormat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 30,
    width: "80%",
  },
  switchContainer: {
    flex: 1,
    alignItems: "flex-end",
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
    width: "85%",
    alignItems: "center",
    fontSize: FontSize.size_13xl,
  },
  backArrowParent: {
    marginTop: 14,
    width: "85%",
  },
  frameItem: {
    marginTop: "5%",
    width: "85%",
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
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
    width: "85%",
    marginTop: "2%",
  },
  createprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  phoneInputContainer: {
    position: "relative",
    height: 50,
  },
  phoneInput: {
    position: "absolute",
    top: 20,
    left: -40,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  phoneInputText: {
    fontSize: 16,
    color: "#000", // Adjust color as needed
    backgroundColor: 'transparent'
  },
  phoneInputFlagButton: {
    backgroundColor: "transparent", // Adjust color as needed
  },
  phoneInputPickerButton: {
    position: "absolute",
    height: 30,
    top: 0,
    left: 10,
    right: 0,
    bottom: 0,
  },
  countryOfBirthContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    width: "80%",
    position: "relative",
    fontFamily: FontFamily.PTSansBold,
    fontSize: 16,
  },
});

export default CreateProfile;
