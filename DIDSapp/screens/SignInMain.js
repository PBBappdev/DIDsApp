import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
//import { TextInput as RNPTextInput } from "react-native-paper";
import StatePlaceholder from "../components/StatePlaceholder";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignInMain = () => {
  const navigation = useNavigation();
  const [stateInput, setStateInput] = useState(""); // Add this state to hold the input value

  return (
    <ScrollView
      style={styles.signinmain}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signInMainScrollViewContent}
    >
      
     <View style={styles.searchbarWrapper}>
          <View style={[styles.searchbar, styles.searchbarPosition]}>
            
             <TextInput
              style={styles.stateInput} // Add a new style for TextInput
              placeholder="Search Location or Day" // Set the placeholder text
              value={stateInput}
              onChangeText={(text) => setStateInput(text)} // Update the state on text change
              
            />
            
          </View>
          <Image
            style={[styles.searchIcon]}
            contentFit="cover"
            source={require("../assets/search.png")}
      />
        </View>
        <View stlye={styles.contentWrapper}>
      <View style={[styles.headerFormat, styles.groupsLayout]}>
        <Text style={styles.headerText}>Suggested Group</Text>
        <View style={styles.parentPosition}>
        <Pressable
          style={[styles.parentLayout]}
          onPress={() => navigation.navigate("SignInConfidentiality")}
        >
          <Text style={[styles.textTime, styles.textLayout]}>14/12 - 18:00</Text>
          <Text style={[styles.locationText, styles.locationFormat]}>
            Gosford, Thursday
          </Text>
          <Image
            style={[styles.circledRightIcon, styles.circledIconLayout]}
            contentFit="cover"
            source={require("../assets/circled-right.png")}
          />
        </Pressable>
        </View>
      </View>
      <Image
        style={[styles.signinmainChild, styles.signinmainLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={[styles.headerFormat, styles.groupsLayout]}>
        <Text style={styles.headerText}>Saved Groups</Text>
        <View style={styles.parentPosition}>
          <Pressable
            style={styles.parentLayout}
            onPress={() => navigation.navigate("SignInConfidentiality")}
          >
            <Text style={[styles.locationText, styles.locationFormat]}>
              Gosford, Thursday
            </Text>
            <Text style={[styles.textTime, styles.textLayout]}>14/12 - 18:00</Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right.png")}
            />
          </Pressable>
          <Pressable style={[ styles.parentLayout]}>
            <Text style={[styles.locationText, styles.locationFormat]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.textTime, styles.textLayout]}>
              17/12 - 18:30
            </Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right11.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.signinmainChild, styles.signinmainLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={[styles.headerFormat, styles.groupsLayout]}>
      <Text style={styles.headerText}>All Groups</Text>
        <View style={styles.parentPosition}>
          <Pressable
            style={styles.parentLayout}
            onPress={() => navigation.navigate("SignInConfidentiality")}
          >
            <Text style={[styles.locationText, styles.locationFormat]}>
              Gosford, Thursday
            </Text>
            <Text style={[styles.textTime, styles.textLayout]}>14/12 - 18:00</Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right.png")}
            />
          </Pressable>
          <Pressable style={[styles.parentLayout]}>
            <Text style={[styles.locationText, styles.locationFormat]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.textTime, styles.textLayout]}>
              17/12 - 18:30
            </Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right.png")}
            />
          </Pressable>
          <Pressable style={[styles.parentLayout]}>
            <Text style={[styles.locationText, styles.locationFormat]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.textTime, styles.textLayout]}>
              17/12 - 18:30
            </Text>
            <Image
              style={[styles.circledRightIcon, styles.circledIconLayout]}
              contentFit="cover"
              source={require("../assets/circled-right.png")}
            />
          </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInMainScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentWrapper: {
    left: 22,
    right: 22,
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
  stateInput: {
    flex: 1,
    height: 36,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    color: 'white',
    fontFamily: "PTSans-Regular",
    color: "#fff",
  },
  searchIcon: {
    top: -15,
    width: 25,
    height: 25,
    marginLeft: 20,
  },
  groupsLayout: {
    width: 346,
    marginTop: 10,
  },
  parentLayout: {
    height: 69,
    borderWidth: 2,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: "100%",
    marginTop: 15,
    position: 'relative',
  },
  textLayout: {
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
  },
  locationFormat: {
    height: 30,
    width: 264,
    top: 5,
    alignItems: "center",
    display: "flex",
    left: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  circledIconLayout: {
    height: 50,
    width: 50,
    top: 9,
    position: "absolute",
  },
  signinmainLayout: {
    maxHeight: "100%",
    width: 50,
    left: "20%",
    marginTop: 10,
    marginBottom: 10,
    height: 2,
  },
  headerText: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    top: 0,
    left: 0,
    position: "relative",
  },
  textTime: {
    top: 33,
    alignItems: "center",
    display: "flex",
    left: 13,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  circledRightIcon: {
    left: 277,
  },
  parent: {
    left: 1,
    top: 34,
    position: "relative",
  },
  headerFormat: {
    position:"relative",
    zIndex: 1,
  },
  signinmainChild: {
    zIndex: 2,
  },
  parentPosition: {
    left: 0,
    top: 0,
    position: "relative",
    marginBottom: 10,
  },
  signinmain: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default SignInMain;
