import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent5 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <StatusBar style={styles.statusBarPosition2} barStyle="default" />
        <View style={[styles.backArrowParent, styles.statusBarPosition2]}>
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.navigate("SignInConfidentiality")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textFlexBox1]}>14/12 - 18:00</Text>
          <Text style={[styles.gosfordThursday, styles.textFlexBox1]}>
            Gosford, Thursday
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBarPosition2: {
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    position: "absolute",
    width: 390,
  },
  textFlexBox1: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 22,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 23,
    top: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 39,
    left: 90,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.pTSansCaption,
    display: "flex",
    alignItems: "center",
    width: 220,
    height: 31,
  },
  gosfordThursday: {
    top: 13,
    left: 89,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansCaptionBold,
  },
  backArrowParent: {
    top: 35,
    height: 81,
  },
  view: {
    height: 116,
    width: 390,
  },
});

export default FrameComponent5;
