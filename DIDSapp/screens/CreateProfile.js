import React, { useState, useRef  } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useTextInputContext } from '../components/TextInputContext';
import PhoneInput from "react-native-phone-number-input";
//import DatePicker from 'react-native-date-picker'


const CreateProfile = () => {;
  const navigation = useNavigation();
  const { textInputs, setTextInput } = useTextInputContext();

  const handleInputChange = (name, value) => {
    setTextInput(name, value);
  };

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const isValidDateOfBirth = (date) => {
    // Regular expression for DD/MM/YYYY format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    return dateRegex.test(date);
  };

  const handleDateOfBirthChange = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Insert '/' at appropriate positions
    let formattedDate = '';
  for (let i = 0; i < numericValue.length; i++) {
    if (i === 2 || i === 4) {
      formattedDate += '/';
    }
    formattedDate += numericValue[i];
  }

  // Update state
  setTextInput('dOb', formattedDate);
};

  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [countryCode, setCountryCode] = useState('au'); 
  



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
          onPress={() => navigation.navigate("CreateAccount")}
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
          style={{ borderWidth: 1, borderRadius: 5 }}
          textStyle={{ fontSize: 16, color: 'blue' }}
          containerStyle={{ width: "100%"}}
          flagButtonStyle={{ backgroundColor: 'lightgray' }}
          />
      </View>
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
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
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Gender*"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={textInputs.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Date Of Birth"
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={date} // Convert date to string
          //onTouchStart={() => setOpen(true)} // Open date picker modal on touch
          onChangeText={(date) => {
            setDate(date);
          }}
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        {/* <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
      /> */}
      
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
          onPress={() => navigation.navigate("LanuageSelect")}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  phoneInput: { 
    height: 50, 
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
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
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
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
  wrapper: {
    width: "20%",
  },
  frameChild: {
    width: "62%",
    marginLeft: "3%",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    marginTop: "5%",
    width: "85%",
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
    width: "85%",
    marginTop: "2%",
  },
  createprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default CreateProfile;
