import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, View, TextInput } from "react-native";

import { useText } from "./textState";

export function Memo() {
  const { text, onChangeText } = useText();
  return (
    <ScrollView style={styles.memoView}>
      <TextInput
        style={styles.memo}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  memo: {
    fontSize: 30,
    marginTop: 5,
  },
  memoView: {
    flex: 1,
  },
});
