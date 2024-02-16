import * as React from "react";
import { StatusBar, StyleSheet, Text, Pressable, View, Linking  } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useRoute } from '@react-navigation/native'

const MeetingInfo = ({ route }) => {
  const { location, day, date, time, state, address, description } = route.params;
  const [isSaved, setIsSaved] = React.useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const locationText = "Gosford Narara Community center 2 pandala Rd, Narara NSW 2250";
  const descriptionText = `FREE weekly Dads in Distress support meeting for all local dads. No need to book, just drop in and new dads always welcome. Confidential, and non judgmental and dad friendly. Free parking on road outside. Find us in the 'Living Room' upstairs.`;

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`;
    Linking.openURL(googleMapsUrl);
  };
  return (
    <View style={styles.meetinginfo}>
      <StatusBar style={styles.viewPosition} barStyle="default" />
      
      <Pressable style={[styles.saveGroupParent, styles.plusIconLayout]}
       onPress={toggleSave}
       >
        <Text style={[styles.saveGroup, styles.mapTypo]}>
        {isSaved ? "Remove Group" : "Save Group"}
        </Text>
        <Image
          style={[styles.plusIcon, styles.plusIconLayout]}
          contentFit="cover"
          source={
            isSaved
              ? require("../assets/minus2.png") // Use the minus icon when saved
              : require("../assets/plus1.png") // Use the plus icon when not saved
          }
        />
      </Pressable>
      <Image
        style={[styles.meetinginfoChild, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />

      <Text
        style={[styles.locationText, styles.saveGroupFlexBox]}
      >{address}</Text>
      <Pressable>
      <Text style={[styles.map, styles.mapTypo]}
      onPress={openGoogleMaps}
      >Map</Text>
      </Pressable>
      <Image
        style={[styles.meetinginfoItem, styles.meetinginfoLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />

      <Text
        style={[styles.descriptionText, styles.saveGroupFlexBox]}
      >{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fbb042",
  },
  viewPosition: {
    width: "100%",
    position: "absolute",
    left: 0,
  },
  meetinginfoLayout: {
    right: 22,
    maxHeight: "100%",
    left: 22,
    height: 2,
    position: "relative",
  },
  meetinginfoItem: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
  },

  plusIconLayout: {
    height: 40,
    position: "absolute",
  },
  textPosition: {
    lineHeight: 30,
    left: 79,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  
  meetinginfoChild: {
    marginTop: 60,
    postion: 'relative',
  },
  saveGroupFlexBox: {
    alignItems: "center",
    display: "flex",
    maxWidth: '90%',
    color: Color.colorBlack,
  },
  locationText: {
    marginTop: 10,
    fontSize: FontSize.size_3xl,
    lineHeight: 29,
    height: 60,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    right: 22,
    left: 22,
    position: "relative",
  },
  mapTypo: {
    fontSize: FontSize.size_5xl,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    position: "relative",
  },
  map: {
    textDecorationLine: "underline",
    color: Color.colorCornflowerblue,
    position: 'relative',
    left: 22,
    marginTop: 10,
  },
  saveGroup: {
    top: 3,
    left: 48,
    width: "80%",
    height: 39,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  saveGroupParent: {
    top: 10,
    width: "90%",
    left: 22,
  },
  plusIcon: {
    width: 40,
    height: 40,
    left: 0,
  },
  descriptionText: {
    top: 10,
    fontSize: FontSize.size_base,
    lineHeight: 28,
    height: 277,
    textAlign: "left",
    fontFamily: FontFamily.PTSansRegular,
    display: "flex",
    color: Color.colorBlack,
    right: 22,
    left: 22,
    position: "relative",
  },
  meetinginfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default MeetingInfo;
