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
import { getFirestore, doc, getDoc, setDoc, updateDoc, addDoc, collection, query, where, getDocs} from "firebase/firestore";
import InfoScreen from "./InfoScreen";


const Approval = () => {
  const navigation = useNavigation();
  StatusBar.setBackgroundColor("#FBB042");

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchUsersWithRequestedRoles(); // Assuming fetchMeetings() is your function to fetch meetings from the database
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
    setRefreshing(false);
  };

  const [users, setUsers] = useState([]);
  const database = getFirestore(firebaseApp);
  const fetchUsersWithRequestedRoles = async () => {
    try {
      const usersRef = collection(database, 'Users');
      const querySnapshot = await getDocs(
        query(usersRef, where('RequestedRole', '!=', 'Client'))
      );
      const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      // Filter out users with RoleActive equal to "Staff"
      const filteredUsers = usersData.filter(user => user.RoleActive !== user.RequestedRole);
      
      setUsers(filteredUsers);
      console.log("Fetched users with requested roles:", filteredUsers);
    } catch (error) {
      console.error('Error fetching users with requested roles:', error);
    }
  };
  
  useEffect(() => {
    fetchUsersWithRequestedRoles();
  }, [database]);

  const approveRole = async (userId, requestedRole) => {
    try {
        const docRef = collection(database, 'Users') 
        await updateDoc(doc(docRef, userId),{
            RoleActive: requestedRole,
        });
            onRefresh();
    } catch (error) {
        console.error('Error approving role:', error);
    }
    };

    const denyRole = async (userId, RoleActive) => {
        try {
            const docRef = collection(database, 'Users') 
            await updateDoc(doc(docRef, userId),{
                RequestedRole: RoleActive,
            });
                onRefresh();
        } catch (error) {
            console.error('Error approving role:', error);
        }
    };
  
  return (
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
       <View style={styles.view}>
        <StatusBar style={styles.statusBarLayout} barStyle="default" />
        <View style={[styles.backArrowParent, styles.statusBarLayout]}>
          <Pressable
            style={styles.backArrow}
            onPress={() =>
              navigation.navigate("InfoScreen")
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
          <Text style={styles.requestRoleChange}>Approve Role</Text>
        </View>
      </View>
      <View style={styles.savedGroups}>
  <View style={styles.frameParent}>
    {users.map((user, index) => (
      <Pressable
        key={index}
        style={styles.tuesdayParentLayout}
        onPress={() => {}}
      >
        <Text style={[styles.locationText, styles.locationTextLayout]}>
          {user.fName} {user.lName}
        </Text>
        <Text style={[styles.text, styles.textLayout1]}>
          Requested role: {user.RequestedRole}
        </Text>
        <Pressable  
          style={[styles.Icon, styles.iconLayout]}
          onPress={() => approveRole(user.userID, user.RequestedRole)}
        >
          <Image
            style={[styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus31.png")}
          />
        </Pressable>
        <Pressable  
          style={[styles.Icon]}
          onPress={() => denyRole(user.userID, user.RoleActive)}
        >
          <Image
            style={[styles.iconLayoutMinus]}
            contentFit="cover"
            source={require("../assets/minus2.png")}
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
  statusBarLayout: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 28,
    top: 11,
    width: 40,
    height: 35,
    position: "relative",
  },
  requestRoleChange: {
    marginTop: 20,
    marginLeft: 73,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 244,
    height: 43,
    position: "absolute",
    justifyContent: "center",
  },
  backArrowParent: {
    height: 65,
  },
  view: {
    width: "100%",
    justifyContent: "center",
  },
  //end header
  iconLayoutMinus: {
        height: 39,
        width: 39,
        right: 60,
        bottom: 53
  },
  meetingsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
  locationText: {
    width: '80%',
    left: 14,
  },
  text: {
    left: 13,
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
    //lineHeight: 22,
    position: "absolute",
  },
  Icon: {
    marginLeft: '80%',
    marginTop: 15,
    position: "relative",
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
  plusIcon: {
    left: 307,
    top: 0,
    position: "absolute",
  },
  meetings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Approval;
