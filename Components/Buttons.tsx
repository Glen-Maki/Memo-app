import { Button } from "react-native-paper";
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
      <Button
        icon="sync"
        mode="contained"
        onPress={rotateState}
        contentStyle={styles.button}
      >
        相手に見せる
      </Button>
      <Button icon="delete" mode="contained">
        削除する
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    height: "auto",
  },
});
