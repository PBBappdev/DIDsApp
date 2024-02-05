import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
//import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioGroup, Radio } from "@ui-kitten/components";


const RoleSelect = () => {
  const [selectedRole, setSelectedRole] = useState(""); // Updated state

  const navigation = useNavigation();

  
  const handleRadioPress = (role) => {
    setSelectedRole(role);
  };


  const isContinueEnabled = selectedRole !== ""; // Check if a role is selected
  
  return (
    <ScrollView
      style={styles.roleselect}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.roleSelectScrollViewContent}
    >
      <View style={styles.backArrowParent}>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate("LanuageSelect")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.role, styles.roleFlexBox]}>Role</Text>
      </View>
      <View style={styles.radioButtonsContainer}>
      <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={selectedRole === "Client" ? 0 : null}
          onChange={(index) => handleRadioPress("Client")}
        >
          <Radio status='warning' style={styles.radioText}>Client</Radio>
        </RadioGroup>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={selectedRole === "Volunteer" ? 0 : null}
          onChange={(index) => handleRadioPress("Volunteer")}
          
        >
          <Radio status='warning' style={styles.radioText}>Volunteer</Radio>
        </RadioGroup>
        <RadioGroup
          style={[styles.parent, styles.parentSpaceBlock]}
          selectedIndex={selectedRole === "Staff" ? 0 : null}
          onChange={(index) => handleRadioPress("Staff")}
        >
         <Radio status='warning'>
          <Text style={styles.radioText}>Staff</Text>
          </Radio>
        </RadioGroup>
      </View>
      <Text style={[styles.approvalRequiredForContainer, styles.roleFlexBox]}>
        <Text style={styles.approvalRequiredForContainer1}>
          <Text
            style={styles.approvalRequiredFor}
          >{`Approval required for roles with `}</Text>
          <Text style={styles.text1}>*</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.continueWrapper}
        onPress={() => {
          if (isContinueEnabled) {
            navigation.navigate("InitialNotifications");
          } else {
            // Display an alert if Continue is pressed without selecting a role
            alert("Please select a role before continuing.");
          }
        }}
        
      >
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  roleSelectScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  radioButtonsContainer: {
    width: "85%",
    marginTop: 54,
  },
  radioButton: {
    marginVertical: 10,
  },
  radioText: {
    fontSize: 30,
  },  
  parentSpaceBlock: {
    marginTop: 22,
    width: 334,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roleFlexBox: {
    alignItems: "center",
    display: "flex",
    width: 334,
    textAlign: "left",
    lineHeight: 40,
  },
  checkboxFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  role: {
    fontFamily: FontFamily.PTSansCaption,
    height: 76,
    width: "85%",
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
  },
  backArrowParent: {
    marginTop: 54,
  },
  approvalRequiredFor: {
    fontSize: FontSize.size_3xl,
  },
  text1: {
    fontSize: FontSize.size_13xl,
  },
  approvalRequiredForContainer1: {
    width: "100%",
  },
  approvalRequiredForContainer: {
    color: Color.colorLightgray,
    fontFamily: FontFamily.PTSansRegular,
    width: "85%",
    marginTop: 54,
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
    width: "85%",
    marginTop: 54,
  },
  roleselect: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default RoleSelect;
