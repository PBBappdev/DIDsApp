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

const FrameComponent6 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.parent, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.backArrow}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "SignInMain" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.text, styles.textFlexBox2]}>14/12 - 18:00</Text>
        <Text style={[styles.gosfordThursday, styles.textFlexBox2]}>
          Gosford, Thursday
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  textFlexBox2: {
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
    fontFamily: FontFamily.PTSansCaption,
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
    fontFamily: FontFamily.PTSansCaptionBold,
  },
  view: {
    width: 390,
    height: 81,
  },
});

export default FrameComponent6;
