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

const FrameComponent3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.parent, style]}>
      <View style={styles.view}>
        <Pressable
          style={[styles.backArrow, styles.backArrowPosition1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Settings2" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </Pressable>
        <Text style={[styles.changePassword, styles.backArrowPosition1]}>
          Change Password
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  backArrowPosition1: {
    top: 11,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 17,
    width: 40,
    height: 40,
  },
  changePassword: {
    left: 100,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.PTSansCaptionBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 189,
    height: 43,
  },
  view: {
    width: 390,
    height: 65,
  },
});

export default FrameComponent3;
