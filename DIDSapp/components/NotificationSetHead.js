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

const FrameComponent4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <StatusBar style={styles.statusBarPosition1} barStyle="default" />
        <View style={[styles.backArrowParent, styles.statusBarPosition1]}>
          <Pressable
            style={[styles.backArrow, styles.backArrowPosition]}
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
          <Text style={[styles.notifications, styles.backArrowPosition]}>
            Notifications
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBarPosition1: {
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    position: "absolute",
    width: 390,
  },
  backArrowPosition: {
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
  notifications: {
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
  backArrowParent: {
    top: 35,
    height: 65,
  },
  view: {
    height: 100,
    width: 390,
  },
});

export default FrameComponent4;
