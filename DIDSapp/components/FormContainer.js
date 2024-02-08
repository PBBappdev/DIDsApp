import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.allGroupsTodayParent}>
      <Text style={styles.allGroupsToday}>All Groups Today</Text>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.onlineThursday, styles.textFlexBox]}>
            Online, Thursday
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>14/12 - 19:20</Text>
          <Image
            style={styles.circledRightIcon}
            contentFit="cover"
            source={require("../assets/circled-right.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.onlineThursday, styles.textFlexBox]}>
            Online, Thursday
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>14/12 - 19:20</Text>
          <Image
            style={styles.circledRightIcon}
            contentFit="cover"
            source={require("../assets/circled-right.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 69,
    width: 345,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  allGroupsToday: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    fontFamily: FontFamily.PTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    left: 0,
    position: "absolute",
    top: 0,
    height: 69,
  },
  onlineThursday: {
    top: 4,
    left: 13,
    width: 245,
    height: 30,
    fontFamily: FontFamily.PTSansCaptionBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    display: "flex",
  },
  text: {
    top: 33,
    left: 14,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.PTSansCaption,
    width: 220,
    height: 31,
  },
  circledRightIcon: {
    top: 9,
    left: 276,
    width: 50,
    height: 50,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 12,
  },
  groupParent: {
    top: 34,
  },
  allGroupsTodayParent: {
    top: 295,
    left: 25,
    height: 184,
    width: 345,
    position: "absolute",
  },
});

export default FormContainer;
