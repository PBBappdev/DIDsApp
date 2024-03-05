import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { firebaseApp, auth } from "../firebase";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, getReactNativePersistence} from "firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { getFirestore, doc, getDoc, limit, startAfter, setDoc, deleteDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, QueryStartAtConstraint } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


const InfoScreen = () => {
  const navigation = useNavigation();
  //get users selected role to show different options.
  const [role, setActiveRole] = useState("");
  const database = getFirestore(firebaseApp);
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // Get the current user's ID from Firebase authentication
        const userId = auth.currentUser.uid;

        if (!userId) {
          console.error("User not logged in");
          return;
        }
        
        // Get the Firestore instance and the reference to the user's document
        
        const userDocRef = doc(database, "Users", userId);

        // Fetch the user's document from Firestore
        const userDocSnapshot = await getDoc(userDocRef);

        // Check if the user has a document in Firestore
        if (userDocSnapshot.exists()) {
          // Get the SelectedRole field from the user's document
          const setRole = userDocSnapshot.data().RoleActive;

          // Set the isStaff state based on the user's role
          setActiveRole(setRole);
          console.log(setRole);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <View style={styles.infoscreen}>
      <StatusBar barStyle="default" />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Pressable
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() => Linking.openURL("https://parentsbeyondbreakup.com/")}
        >
          <Text style={styles.orangeText}>Visit Our Website</Text>
        </Pressable>
        <Pressable
          style={[styles.redWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/volunteer/")
          }
        >
          <Text style={[styles.RedOutlineProps]}>
            Support Us / Volunteer
          </Text>
        </Pressable>
        <Pressable
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/donate/")
          }
        >
          <Text style={styles.orangeText}>Donate</Text>
        </Pressable>
        <Pressable
          style={[styles.redWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/faqs/")
          }
        >
          <Text style={[styles.RedOutlineProps]}>FAQ’s</Text>
        </Pressable>
        <Pressable
          style={[styles.orangeWrapper, styles.wrapperSpaceBlock]}
          onPress={() =>
            Linking.openURL("https://parentsbeyondbreakup.com/news/")
          }
        >
          <Text style={styles.orangeText}>News</Text>
        </Pressable>

        {role == "Staff" && (
        <Pressable
          style={[styles.redWrapper, styles.wrapperSpaceBlock]}
          onPress={() => navigation.navigate("Approval")
          }
        >
          <Text style={[styles.RedOutlineProps]}>Role Approval</Text>
        </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    position: "absolute",
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    marginTop: 20,
    borderRadius: Border.br_3xs,
  },
  RedOutlineProps: {
    width: '80%',
    top: 23,
    left: 35,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    position: "absolute",
  },
  orangeText: {
    width: '80%',
    top: 23,
    left: 35,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    position: "absolute",
  },
  redWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorTomato_100,
    borderWidth: 2,
    width: 345,
    height: 69,
  },
  orangeWrapper: {
    height: 70,
    width: "100%",
    backgroundColor: Color.colorGoldenrod_100,
  },
  frameParent: {
    top: 50,
    left: 22,
    alignItems: "center",
  },
  infoscreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default InfoScreen;
