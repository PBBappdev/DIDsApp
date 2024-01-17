import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import StatePlaceholder from "../components/StatePlaceholder";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Meetings1 = () => {
  const [dayOpen, setDayOpen] = useState(false);
  const [dayValue, setDayValue] = useState();
  const [dayItems, setDayItems] = useState([
    { value: "Mon", label: "Mon" },
    { value: "Tue", label: "Tue" },
    { value: "Wed", label: "Wed" },
    { value: "Thur", label: "Thur" },
    { value: "Fri", label: "Fri" },
    { value: "Sat", label: "Sat" },
    { value: "Sun", label: "Sun" },
  ]);
  const [stateOpen, setStateOpen] = useState(false);
  const [stateValue, setStateValue] = useState("State");
  const [stateItems, setStateItems] = useState([
    { value: "VIC", label: "VIC" },
    { value: "NSW", label: "NSW" },
    { value: "ACT", label: "ACT" },
    { value: "QLD", label: "QLD" },
    { value: "WA", label: "WA" },
    { value: "NT", label: "NT" },
    { value: "SA", label: "SA" },
  ]);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.meetings}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.meetingsScrollViewContent}
    >
      <View style={styles.statusBarParent}>
        <StatusBar barStyle="default" />
        <View style={styles.searchbarWrapper}>
          <View style={[styles.searchbar, styles.searchbarPosition]}>
            <StatePlaceholder
              showText
              showDictation={false}
              statePlaceholderPosition="absolute"
              statePlaceholderTop={0}
              statePlaceholderLeft={0}
              statePlaceholderBackgroundColor="rgba(0, 0, 0, 0.1)"
              searchGlyphFontFamily="PTSans-Regular"
              placeholderLabelFontFamily="PTSans-Regular"
              placeholderLabelColor="unset"
              placeholderLabelTextAlign="unset"
              placeholderLabelOverflow="unset"
              placeholderLabelHeight="unset"
              dictationFontFamily="PTSans-Regular"
            />
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.dayParent}>
            <View style={styles.day}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={dayOpen}
                setOpen={setDayOpen}
                value={dayValue}
                setValue={setDayValue}
                placeholder="Day"
                items={dayItems}
                labelStyle={styles.dayValue}
                dropDownContainerStyle={styles.daydropDownContainer}
              />
            </View>
            <View style={[styles.state, styles.stateSpaceBlock]}>
              <DropDownPicker
                style={styles.dropdownpicker}
                open={stateOpen}
                setOpen={setStateOpen}
                value={stateValue}
                setValue={setStateValue}
                placeholder="State"
                items={stateItems}
                labelStyle={styles.stateValue}
                dropDownContainerStyle={styles.statedropDownContainer}
              />
            </View>
            <Pressable
              style={[styles.cancel, styles.stateSpaceBlock]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/cancel.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.savedGroups}>
        <Text style={[styles.savedGroups1, styles.groupsTypo]}>
          Saved Groups
        </Text>
        <Image
          style={styles.savedGroupsChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <View style={styles.frameParent}>
          <Pressable
            style={styles.tuesdayParentLayout}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text
              style={[styles.gosfordThursday, styles.onlineFriday2Typo]}
              numberOfLines={1}
            >
              Gosford, Thursday
            </Text>
            <Text style={[styles.text, styles.textLayout1]} numberOfLines={1}>
              14/12 - 18:00
            </Text>
            <Image
              style={[styles.minusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/minus2.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.onlineTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineTuesday, styles.onlineTypo]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.text1, styles.textLayout1]}>
              19/12 - 18:50
            </Text>
            <Image
              style={[styles.minusIcon1, styles.minusIcon1Position]}
              contentFit="cover"
              source={require("../assets/minus2.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.allGroups}>
        <Text style={[styles.allGroups1, styles.minusIcon1Position]}>
          All Groups
        </Text>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.tuesdayParentLayout}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineTuesday1, styles.onlineTypo]}>
              Online, Tuesday
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>19/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bayswaterTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineTuesday1, styles.onlineTypo]}>
              Bayswater, Tuesday
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>19/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bayswaterTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineFriday, styles.text4Text]}>
              Online, Friday
            </Text>
            <Text style={[styles.text4, styles.text4Text]}>20/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bayswaterTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineTuesday1, styles.onlineTypo]}>
              Online, Friday
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>20/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bayswaterTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineFriday2, styles.onlineFriday2Typo]}>
              Online, Friday
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>20/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bayswaterTuesdayParent, styles.tuesdayParentLayout]}
            onPress={() => navigation.navigate("MeetingInfo")}
          >
            <Text style={[styles.onlineFriday2, styles.onlineFriday2Typo]}>
              Online, Friday
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>20/12 - 18:50</Text>
            <Image
              style={[styles.plusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/plus31.png")}
            />
          </Pressable>
        </View>
      </View>
      <ImageBackground
        style={[styles.searchIcon, styles.searchbarPosition]}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dayValue: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PTSans-Regular",
  },
  daydropDownContainer: {
    backgroundColor: "#fbb042",
  },
  stateValue: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PTSans-Regular",
  },
  statedropDownContainer: {
    backgroundColor: "#fbb042",
  },
  meetingsScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchbarPosition: {
    left: 17,
    position: "absolute",
  },
  stateSpaceBlock: {
    marginLeft: 35,
    height: 34,
  },
  groupsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
  },
  onlineFriday2Typo: {
    height: 30,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    display: "flex",
    top: 4,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  textLayout1: {
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
    alignItems: "center",
    display: "flex",
    top: 34,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  iconLayout: {
    height: 39,
    width: 39,
  },
  tuesdayParentLayout: {
    height: 69,
    borderWidth: 2,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 345,
  },
  onlineTypo: {
    width: 293,
    height: 30,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  minusIcon1Position: {
    top: 1,
    position: "absolute",
  },
  textLayout: {
    top: 33,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
  },
  text4Text: {
    textDecoration: "line-through",
    color: Color.colorTomato_100,
    alignItems: "center",
    display: "flex",
    left: 14,
    textAlign: "left",
    lineHeight: 22,
    position: "absolute",
  },
  meetings1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.pTSansCaption,
    lineHeight: 22,
  },
  signInSpaceBlock: {
    marginLeft: 38,
    alignItems: "center",
  },
  searchbar: {
    width: 361,
    height: 36,
    top: 14,
  },
  searchbarWrapper: {
    height: 70,
    width: 390,
    backgroundColor: Color.colorGoldenrod_100,
  },
  dropdownpicker: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  day: {
    width: 115,
    height: 34,
    borderRadius: Border.br_8xs,
  },
  state: {
    width: 121,
    borderRadius: Border.br_8xs,
    marginLeft: 35,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cancel: {
    width: 34,
  },
  dayParent: {
    left: 21,
    width: 341,
    flexDirection: "row",
    top: 14,
    position: "absolute",
  },
  frameWrapper: {
    backgroundColor: "rgba(251, 176, 66, 0.6)",
    height: 72,
    width: 390,
  },
  statusBarParent: {
    zIndex: 0,
  },
  savedGroups1: {
    top: 2,
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
    position: "absolute",
  },
  savedGroupsChild: {
    top: 217,
    left: 148,
    width: 50,
    height: 0,
    position: "absolute",
  },
  gosfordThursday: {
    width: 292,
    left: 14,
  },
  text: {
    left: 13,
  },
  minusIcon: {
    left: 306,
    width: 39,
    top: 0,
    position: "absolute",
  },
  onlineTuesday: {
    top: 5,
    left: 13,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text1: {
    left: 14,
  },
  minusIcon1: {
    height: 39,
    width: 39,
    left: 306,
  },
  onlineTuesdayParent: {
    marginTop: 18,
  },
  frameParent: {
    top: 34,
    left: 0,
    position: "absolute",
  },
  savedGroups: {
    width: 346,
    height: 208,
    zIndex: 1,
    marginTop: 17,
  },
  allGroups1: {
    left: 3,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 22,
    fontSize: FontSize.title3Bold_size,
  },
  onlineTuesday1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
    left: 14,
    top: 4,
    width: 293,
  },
  text2: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
    left: 14,
  },
  plusIcon: {
    left: 307,
    top: 0,
    position: "absolute",
  },
  bayswaterTuesdayParent: {
    marginTop: 12,
  },
  onlineFriday: {
    color: Color.colorTomato_100,
    width: 293,
    height: 30,
    fontFamily: FontFamily.pTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    top: 4,
  },
  text4: {
    color: Color.colorTomato_100,
    top: 33,
    height: 31,
    width: 220,
    fontFamily: FontFamily.pTSansCaption,
    fontSize: FontSize.size_lgi,
  },
  onlineFriday2: {
    width: 245,
    left: 13,
  },
  allGroups: {
    height: 508,
    zIndex: 2,
    width: 345,
    marginTop: 17,
  },
  searchIcon: {
    top: 55,
    width: 25,
    height: 25,
    zIndex: 4,
  },
  meetings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Meetings1;
