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

const FrameComponent2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <StatusBar style={styles.statusBarLayout} barStyle="default" />
        <View style={[styles.backArrowParent, styles.statusBarLayout]}>
          <Pressable
            style={styles.backArrow}
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
          <Text style={styles.requestRoleChange}>Request Role Change</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBarLayout: {
    width: 390,
    backgroundColor: Color.colorGoldenrod_100,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: 28,
    top: 11,
    width: 40,
    height: 40,
    position: "absolute",
  },
  requestRoleChange: {
    top: 8,
    left: 73,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansCaptionBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 244,
    height: 43,
    position: "absolute",
    justifyContent: "center",
  },
  backArrowParent: {
    height: 65,
  },
  view: {
    justifyContent: "center",
  },
});

export default FrameComponent2;
