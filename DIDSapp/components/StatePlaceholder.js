import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatePlaceholder = ({
  searchText = "Search",
  meetingLocationSearchText,
  showText = true,
  showDictation,
  statePlaceholderPosition,
  statePlaceholderTop,
  statePlaceholderLeft,
  statePlaceholderBackgroundColor,
  searchGlyphFontFamily,
  placeholderLabelFontFamily,
  placeholderLabelColor,
  placeholderLabelLetterSpacing,
  placeholderLabelLineHeight,
  placeholderLabelTextAlign,
  placeholderLabelOverflow,
  placeholderLabelHeight,
  dictationFontFamily,
}) => {
  const statePlaceholderStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statePlaceholderPosition),
      ...getStyleValue("top", statePlaceholderTop),
      ...getStyleValue("left", statePlaceholderLeft),
      ...getStyleValue("backgroundColor", statePlaceholderBackgroundColor),
    };
  }, [
    statePlaceholderPosition,
    statePlaceholderTop,
    statePlaceholderLeft,
    statePlaceholderBackgroundColor,
  ]);

  const searchGlyphStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", searchGlyphFontFamily),
    };
  }, [searchGlyphFontFamily]);

  const placeholderLabelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", placeholderLabelFontFamily),
      ...getStyleValue("color", placeholderLabelColor),
      ...getStyleValue("letterSpacing", placeholderLabelLetterSpacing),
      ...getStyleValue("lineHeight", placeholderLabelLineHeight),
      ...getStyleValue("textAlign", placeholderLabelTextAlign),
      ...getStyleValue("overflow", placeholderLabelOverflow),
      ...getStyleValue("height", placeholderLabelHeight),
    };
  }, [
    placeholderLabelFontFamily,
    placeholderLabelColor,
    placeholderLabelLetterSpacing,
    placeholderLabelLineHeight,
    placeholderLabelTextAlign,
    placeholderLabelOverflow,
    placeholderLabelHeight,
  ]);

  const dictationStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", dictationFontFamily),
    };
  }, [dictationFontFamily]);

  return (
    <View style={[styles.stateplaceholder, statePlaceholderStyle]}>
      <Text
        style={[styles.searchGlyph, styles.searchGlyphTypo, searchGlyphStyle]}
      >
        􀊫
      </Text>
      {showText && (
        <Text
          style={[
            styles.placeholderLabel,
            styles.searchGlyphTypo,
            placeholderLabelStyle,
          ]}
          numberOfLines={meetingLocationSearchText}
        >
          {searchText}
        </Text>
      )}
      {showDictation && (
        <Text style={[styles.dictation, dictationStyle]}>􀊱</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchGlyphTypo: {
    textAlign: "left",
    color: Color.labelsSecondary,
    fontFamily: FontFamily.sFProDisplayUltralightItalic,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  searchGlyph: {
    width: 25,
  },
  placeholderLabel: {
    flex: 1,
    letterSpacing: 0,
    overflow: "hidden",
    height: 22,
  },
  dictation: {
    textAlign: "center",
    color: Color.labelsSecondary,
    fontFamily: FontFamily.sFProDisplayUltralightItalic,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  stateplaceholder: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillsTertiary,
    width: 361,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
  },
});

export default StatePlaceholder;
