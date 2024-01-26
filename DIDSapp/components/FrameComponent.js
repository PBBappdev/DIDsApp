import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.parent, style]}>
      <View style={styles.view}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textFlexBox]}>14/12 - 18:00</Text>
        <Text style={[styles.gosfordThursday, styles.textFlexBox]}>
          Gosford, Thursday
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Color.colorGoldenrod_100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 33,
    left: 79,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 22,
    top: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 40,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.pTSansCaption,
    width: 220,
    height: 31,
  },
  gosfordThursday: {
    top: 10,
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansCaptionBold,
    width: 232,
    height: 30,
  },
  view: {
    width: "100%",
    height: 81,
  },
});

export default FrameComponent;
