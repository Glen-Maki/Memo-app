import { useState, createContext, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

import { Memo } from "./Memo";
import { RotatedMemo } from "./RotatedMemo";
import { useText } from "./textState";

export const MemoContext = createContext<any | undefined>(undefined);

export function RotateCambus() {
  const [rotate, setRotate] = useState(false);
  const rotateState = () => {
    if (rotate) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  };

  return (
    <View style={styles.cambus}>
      <View style={styles.banner}></View>
      <View style={styles.memo}>
        {!rotate && <Memo />}
        {rotate && <RotatedMemo />}
      </View>
      <View>
        <Button
          icon="sync"
          mode="contained"
          onPress={rotateState}
          contentStyle={styles.button}
        >
          相手に見せる
        </Button>
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
    // backgroundColor: "#00ffff",
  },
  button: { height: 50 },
  banner: { minHeight: 30 },
});
