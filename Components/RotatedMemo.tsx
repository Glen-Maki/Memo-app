import React, { useState, useContext } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { useText } from "./textState";

export function RotatedMemo() {
  const { text } = useText();
  return (
    <ScrollView
      style={[styles.memoView, { transform: [{ rotate: "180deg" }] }]}
    >
      <Text style={styles.rotateMemo}>{text}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rotateMemo: {
    fontSize: 30,
  },
  memoView: {
    top: 0,
    flex: 1,
  },
});
