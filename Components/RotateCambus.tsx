import { useState, createContext, useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
// import { Button } from "react-native-paper";
import { Buttons } from "./Buttons";

import { Memo } from "./Memo";
import { RotatedMemo } from "./RotatedMemo";
// import { useText } from "./textState";
import { useRotate } from "./rotateState";

export const MemoContext = createContext<any | undefined>(undefined);

export function RotateCambus() {
  // const [rotate, setRotate] = useState(false);
  const { rotate } = useRotate();

  return (
    <View style={styles.cambus}>
      <View style={styles.banner}></View>
      <ScrollView style={styles.memo}>
        {!rotate && <Memo />}
        {rotate && <RotatedMemo />}
      </ScrollView>
      <View style={styles.button}>
        <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cambus: {
    flex: 1,
  },
  memo: {
    flex: 1,
    // position: "absolute",
    // backgroundColor: "#00ffff",
  },
  button: {
    flex: 1,
    maxHeight: 30,
    bottom: 0,
  },
  banner: { minHeight: 20 },
});
