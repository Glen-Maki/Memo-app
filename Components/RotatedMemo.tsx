import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { useText } from "./textState";

export function RotatedMemo() {
  const { text } = useText();
  return (
    <View style={[styles.memoView, { transform: [{ rotate: "180deg" }] }]}>
      <Text style={styles.rotateMemo}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rotateMemo: {
    fontSize: 30,
  },
  memoView: {
    flex: 1,
  },
});
