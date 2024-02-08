import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useTextInputContext } from '../components/TextInputContext';
import { firebaseApp, auth } from "../firebase";
import { getAuth,  initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";


const CreateAccount = () => {
  const navigation = useNavigation();
  const [ firstName, setFirstName] = useState('');
  const { textInputs, setTextInput } = useTextInputContext();
 

  const signup = async () => {
    // Check if passwords match
    if (textInputs.password !== textInputs.confirmPassword) {
      alert("Passwords do not match. Please make sure both passwords are the same.");
      return;
    }
    // Check if password meets security requirements
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegex.test(textInputs.password)) {
      alert("Password must be at least 8 characters long and include at least one letter and one number.");
      return;
    }

    //create user account
    try {
      const { user } = await createUserWithEmailAndPassword(auth, textInputs.emailAddress, textInputs.password)
      addUser();
      console.log(user)
      
      navigation.navigate("CreateProfile")
    } catch ({message}) {
      alert("Cannot create account. Please check login details")
      console.log(user)
    }
  };

  
  
  // const fetchUserName = async (email) => {
  //   try {
  //     const database = getFirestore(firebaseApp);
  //     const userRef = collection(database, "Users");
  //     const q = query(userRef, where("email", "==", email));
  //     const querySnapshot = await getDocs(q);
  
  //     if (querySnapshot.empty) {
  //       alert("User not found");
  //       return;
  //     }
  
  //     // Assuming email is unique and there's only one document returned
  //     querySnapshot.forEach((doc) => {
  //       const userName = doc.data().fName; // Assuming the field is fName
  //       alert(`User's name: ${userName}`);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //     alert("Error fetching user");
  //   }
  // };

  // fetchUserName("astonlamport@gmail.com");
  
  const database = getFirestore(firebaseApp);
  const userRef = collection(database, "Users");

  const addUser = async () => {
    try {
      let user = { fName: firstName, lName: textInputs.lastName, email: textInputs.emailAddress, userID: auth.currentUser.uid };
      console.log("Adding user:", user);
      await addDoc(userRef, user);
      console.log("User added successfully");
    } catch (e) {
      alert (e)
      console.log(e);
    }
  };

  const handleInputChange = (name, value) => {
    setTextInput(name, value);
  };

  return (
    <ScrollView
      style={styles.createaccount}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createAccountScrollViewContent}
    >

      <View style={styles.backArrowParent}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text
          style={[styles.createAccount, styles.createAccountFlexBox]}
          numberOfLines={1}
        >
          Create Account
        </Text>
      </View>
      <View style={styles.frameParent}>
        <RNPTextInput
          style={styles.frameLayout}
          label="First Name*"
          placeholder="First Name"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          value={firstName}
          onChangeText={setFirstName}
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Last Name"
          placeholder="Last Name"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          value={textInputs.lastName}
          onChangeText={(value) => handleInputChange('lastName', value)}
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Email Address*"
          placeholder="Email"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          value={textInputs.emailAddress}
          onChangeText={(value) => handleInputChange('emailAddress', value)}
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Password*"
          placeholder="Password"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          value={textInputs.password}
          onChangeText={(value) => handleInputChange('password', value)}
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Confirm Password*"
          placeholder="Confirm Password*"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          value={textInputs.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: FontFamily.PTSans, fontWeight: "Bold" } },
            colors: { text: "#000000" },
          }}
        />
      </View>
      <View style={styles.frame2}>
        <TouchableOpacity
          style={[styles.continueWrapper, styles.frameLayout1]}
          activeOpacity={0.8}
          //onPress={() => navigation.navigate("CreateProfile")}
          onPress={signup} //uncomment for testing login
          //onPress={addUser}
        >
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
        <View style={[styles.frame3, styles.frame3Layout]}>
          <Text style={[styles.mandatoryInformation, styles.frame3Layout]}>
            <Text style={styles.mandatoryInformationTxtContainer}>
              <Text style={styles.mandatoryInformation1}>
                * Mandatory information
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createAccountScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameLayout1: {
    height: 60,
    position: "absolute",
    paddingBottom: 20,
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  createAccountFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    color: Color.colorBlack,
    lineHeight: 35,
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    width: 334,
    borderStyle: "solid",
    mode: "outlined"
  },
  frame3Layout: {
    height: 52,
    top: 0,
    width: 334,
    position: "absolute",
  },

  frame: {
    left: -45,
    width: 168,
    top: -14,
    height: 60,
    overflow: "hidden",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    height: "100%",
    left: "50%",
    position: "absolute",
  },
  frame1: {
    left: 258,
    width: 168,
    top: -14,
    height: 60,
    overflow: "hidden",
  },
  statusBar: {
    alignSelf: "stretch",
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    width: 40,
    height: 40,
    marginTop: "10%",
    left: 0,
  },
  createAccount: {
    marginTop: "5%",
    fontFamily: FontFamily.PTSansCaption,
    height: 80,
    fontSize: FontSize.size_13xl,
    width: "85%",
    position: "relative",
  },
  backArrowParent: {
    height: 115,
    marginTop: 14,
    width: "85%",
  },
  frameItem: {
    marginTop: "5%",
  },
  frameParent: {
    width: "85%",
    marginTop: "5%",
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
    top: 52,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    width: "100%",
  },
  mandatoryInformation1: {
    fontSize: FontSize.title3Bold_size,
  },
  mandatoryInformationTxtContainer: {
    width: "100%",
  },
  mandatoryInformation: {
    fontFamily: FontFamily.PTSansRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    color: Color.colorBlack,
    lineHeight: 22,
  },
  frame3: {
    marginLeft: -167,
    left: "50%",
    overflow: "hidden",
  },
  frame2: {
    height: 112,
    marginTop: 14,
    width: "85%",
    overflow: "hidden",
  },
  createaccount: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccount;
