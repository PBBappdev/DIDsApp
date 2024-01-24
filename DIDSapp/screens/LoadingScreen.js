import React, { useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LoadingScreen = () => {
  const [
    ellipseActivityIndicatorAnimating,
    setEllipseActivityIndicatorAnimating,
  ] = useState(true);

  return (
    <View style={styles.loadingscreen}>
      <Image
        style={styles.didsLogoIcon}
        contentFit="cover"
        source={require("../assets/dids-logo11.png")}
      />
      <ActivityIndicator
        style={styles.loadingscreenChild}
        animating={ellipseActivityIndicatorAnimating}
        size="large"
        color="#fbb042"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    height: 54,
    top: "50%",
    width: "43.18%",
    marginTop: -24,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  time1: {
    width: "26.31%",
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.pTSansBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    right: "68.36%",
    left: "-11.54%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorBlack,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.8,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.5,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.2,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "-9.23%",
    left: "66.05%",
  },
  statusBar: {
    top: 0,
    left: 0,
    width: 390,
    height: 32,
    position: "absolute",
  },
  didsLogoIcon: {
    top: 246,
    left: 68,
    width: 255,
    height: 130,
    position: "absolute",
  },
  loadingscreenChild: {
    top: 434,
    left: 156,
    width: 79,
    height: 79,
    position: "absolute",
  },
  loadingscreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoadingScreen;
