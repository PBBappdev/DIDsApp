import React, { useState } from "react";
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


const CreateProfile = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const navigation = useNavigation();

  const { textInputs, setTextInput } = useTextInputContext();

  const handleInputChange = (name, value) => {
    setTextInput(name, value);
  };

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
      
        <View style={styles.frameGroup}>
          <View style={[styles.wrapper, styles.frameLayout]}>
            <DropDownPicker
              style={styles.borderBorder}
              open={frameDropdownOpen}
              setOpen={setFrameDropdownOpen}
              value={frameDropdownValue}
              setValue={setFrameDropdownValue}
              placeholder="+61"
              items={['+61', '+1', '+44']}
              labelStyle={styles.frameDropdownValue}
              dropDownContainerStyle={styles.frameDropdowndropDownContainer}
            />
          </View>
          <RNPTextInput
            style={[styles.frameChild, styles.frameLayout]}
            label="Mobile Number"
            mode="outlined"
            keyboardType="numeric"
            placeholderTextColor="#c4ced3"
            activeOutlineColor="#fbb042"
            value={textInputs.mobileNum}
            onChangeText={(value) => handleInputChange('mobileNum', value)}
            theme={{
              fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
              colors: { text: "#000000" },
            }}
          />
        </View>
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Country"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={textInputs.country}
          onChangeText={(value) => handleInputChange('country', value)}
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Postcode"
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
          label="Gender"
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
          label="Ethnicity"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          value={textInputs.ethnicity}
          onChangeText={(value) => handleInputChange('ethnicity', value)}
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
          value={textInputs.dOb}
          onChangeText={(value) => {
            handleDateOfBirthChange(value);
            handleInputChange('dOb', value);
            
          }}
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
          onPress={() => navigation.navigate("LanuageSelect")}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#000",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansBold,
  },
  frameDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
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
