import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RoleSelect = () => {
  const [selectedRole, setSelectedRole] = useState(""); // Updated state

  const navigation = useNavigation();

  const handleCheckboxPress = (role) => {
    if (selectedRole === role) {
      // If the selected role is the same, unselect it
      setSelectedRole("");
    } else {
      // Otherwise, select the new role
      setSelectedRole(role);
    }
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
      <View style={styles.checkboxcheckedCheckboxAndParent}>
        <View style={styles.checkboxFlexBox}>
          <View>
            <Checkbox
              status={selectedRole === "Client" ? "checked" : "unchecked"}
              onPress={() => handleCheckboxPress("Client")}
              color="#fbb042"
            />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Client</Text>
        </View>
        <View
          style={[styles.checkboxdefaultCheckboxAnd, styles.checkboxFlexBox]}
        >
          <View>
            <Checkbox
               status={selectedRole === "Volunteer" ? "checked" : "unchecked"}
               onPress={() => handleCheckboxPress("Volunteer")}
               color="#fbb042"
            />
          </View>
          <Text style={[styles.label1, styles.labelTypo]}>
            <Text style={styles.volunteer}>Volunteer</Text>
            <Text style={styles.text}>*</Text>
          </Text>
        </View>
        <View
          style={[styles.checkboxdefaultCheckboxAnd, styles.checkboxFlexBox]}
        >
          <View>
            <Checkbox
               status={selectedRole === "Staff" ? "checked" : "unchecked"}
               onPress={() => handleCheckboxPress("Staff")}
               color="#fbb042"
            />
          </View>
          <Text style={[styles.label, styles.labelTypo]}>Staff*</Text>
        </View>
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
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
  },
  time1FlexBox: {
    textAlign: "center",
    lineHeight: 22,
    color: Color.colorBlack,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  roleFlexBox: {
    alignItems: "center",
    display: "flex",
    width: 334,
    textAlign: "left",
    lineHeight: 40,
  },
  labelTypo: {
    lineHeight: 33,
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
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
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: "85%",
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
  },
  backArrowParent: {
    marginTop: 54,
  },
  label: {
    fontFamily: FontFamily.pTSansRegular,
    color: Color.colorBlack,
  },
  volunteer: {
    fontFamily: FontFamily.pTSansRegular,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  label1: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  checkboxdefaultCheckboxAnd: {
    marginTop: 61,
  },
  checkboxcheckedCheckboxAndParent: {
    width: "85%",
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
    fontFamily: FontFamily.pTSansRegular,
    width: "85%",
    marginTop: 54,
  },
  continue: {
    top: 19,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
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
