import { Button } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import { useRotate } from "./rotateState";

export const Buttons = () => {
  const { rotate, setRotate } = useRotate();
  const rotateState = () => {
    if (rotate) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  };

  return (
    <View style={styles.box}>
      <Button title="相手に見せる" size="sm" onPress={rotateState}></Button>
      <Button title="削除する" size="sm"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
