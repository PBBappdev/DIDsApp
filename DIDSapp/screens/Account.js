import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Account = () => {
  const [datePicker, setDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.account}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.accountScrollViewContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.parentLayout}>
          <Text style={styles.firstName}>First Name</Text>
          <TextInput
            style={[styles.aston, styles.astonPosition]}
            placeholder="Aston"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <View style={styles.lastNameParent}>
          <Text style={styles.firstName}>Last Name</Text>
          <TextInput
            style={[styles.aston1, styles.astonPosition]}
            placeholder="Lamport"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={styles.lastNameParent}>
          <Text style={styles.firstName}>Mobile</Text>
          <TextInput
            style={[styles.aston1, styles.astonPosition]}
            placeholder="0413 842 321"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Email</Text>
          <TextInput
            style={[styles.astongmailcom, styles.astonPosition]}
            placeholder="Aston@gmail.com"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Gender</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="Male"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Country</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="Australia"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Post Code</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="3109"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Ethnicity</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="Caucasian"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Language</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="English"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>Secondary</Text>
          <TextInput
            style={[styles.male, styles.astonPosition]}
            placeholder="N/A"
            placeholderTextColor="#c4ced3"
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={styles.firstName}>DOB</Text>
          <RNKDatepicker
            placeholder={() => (
              <Text style={styles.datePickerPlaceHolder}>30/03/2002</Text>
            )}
            date={datePicker}
            onSelect={setDatePicker}
            controlStyle={styles.datePickerValue}
          />
        </View>
      </View>
      <Pressable
        style={styles.confirmChangesWrapper}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Settings2" })
        }
      >
        <Text style={styles.confirmChanges}>Confirm Changes</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  datePickerPlaceHolder: {
    fontFamily: "PTSans-Regular",
    color: "#c4ced3",
    fontSize: 18,
  },
  datePickerValue: {},
  accountScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusBarPosition: {
    left: 0,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
    width: 390,
  },
  astonPosition: {
    left: 106,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  parentLayout: {
    height: 42,
    width: 295,
  },
  firstName: {
    textAlign: "left",
    width: 108,
    fontFamily: FontFamily.pTSansRegular,
    fontSize: FontSize.size_lg,
    height: 42,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  aston: {
    top: 5,
  },
  aston1: {
    top: 12,
  },
  lastNameParent: {
    marginTop: 7,
    width: 295,
    height: 43,
  },
  frameChild: {
    maxHeight: "100%",
    width: 345,
    marginTop: 7,
  },
  astongmailcom: {
    top: 11,
  },
  emailParent: {
    marginTop: 7,
  },
  male: {
    top: 6,
  },
  frameParent: {
    marginTop: 30,
  },
  confirmChanges: {
    top: 19,
    left: 87,
    fontFamily: FontFamily.pTSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  confirmChangesWrapper: {
    borderRadius: Border.br_3xs,
    width: 334,
    height: 60,
    marginTop: 30,
    backgroundColor: Color.colorGoldenrod_100,
  },
  account: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default Account;
