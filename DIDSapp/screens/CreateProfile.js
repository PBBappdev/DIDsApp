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

const CreateProfile = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.createprofile}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createProfileScrollViewContent}
    >
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
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
      <View style={styles.backArrowParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.wrapper, styles.frameLayout]}>
            <DropDownPicker
              style={styles.borderBorder}
              open={frameDropdownOpen}
              setOpen={setFrameDropdownOpen}
              value={frameDropdownValue}
              setValue={setFrameDropdownValue}
              placeholder="+61"
              items={[]}
              labelStyle={styles.frameDropdownValue}
              dropDownContainerStyle={styles.frameDropdowndropDownContainer}
            />
          </View>
          <RNPTextInput
            style={[styles.frameChild, styles.frameLayout]}
            label="Mobile Number"
            mode="outlined"
            placeholderTextColor="#c4ced3"
            activeOutlineColor="#fbb042"
            theme={{
              fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
              colors: { text: "#c4ced3" },
            }}
          />
        </View>
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Country"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Postcode"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Gender"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Ethnicity"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
        <RNPTextInput
          style={[styles.frameItem, styles.frameLayout]}
          label="Date Of Birth"
          placeholder="DD/MM/YYYY"
          mode="outlined"
          placeholderTextColor="#c4ced3"
          activeOutlineColor="#fbb042"
          theme={{
            fonts: { regular: { fontFamily: "PT Sans", fontWeight: "Bold" } },
            colors: { text: "#c4ced3" },
          }}
        />
      </View>
      <View style={styles.mandatoryInformationParent}>
        <Text
          style={[styles.mandatoryInformation, styles.continueWrapperPosition]}
        >
          <Text style={styles.mandatoryInformationTxtContainer}>
            <Text style={styles.text}>{`* `}</Text>
            <Text style={styles.mandatoryInformation1}>
              Mandatory information
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
    fontFamily: "PTSans-Bold",
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
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
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
    lineHeight: 22,
  },
  frameLayout: {
    height: 72,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
  },
  continueWrapperPosition: {
    left: 0,
    width: 334,
    position: "absolute",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  time: {
    right: "68.36%",
    left: "-11.54%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    width: 25,
    opacity: 0.35,
    height: "100%",
    left: "50%",
    position: "absolute",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorBlack,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.8,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.5,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.2,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "-9.23%",
    left: "66.05%",
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
  },
  profile: {
    fontFamily: FontFamily.pTSansCaption,
    height: 76,
    width: 334,
    alignItems: "center",
    fontSize: FontSize.size_13xl,
  },
  backArrowParent: {
    marginTop: 14,
  },
  wrapper: {
    width: 77,
  },
  frameChild: {
    width: 245,
    marginLeft: 11,
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    marginTop: 11,
    width: 334,
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
    top: 0,
    fontFamily: FontFamily.pTSansRegular,
    height: 52,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
  },
  continue: {
    top: 19,
    left: 123,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.pTSansBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  continueWrapper: {
    top: 66,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod_100,
    height: 60,
  },
  mandatoryInformationParent: {
    height: 126,
    width: 334,
    marginTop: 14,
  },
  createprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default CreateProfile;
