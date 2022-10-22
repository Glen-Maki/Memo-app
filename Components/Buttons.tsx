import { Button, Icon } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

import { DeleteButton } from "./Button/DeleteButton";
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
      <Button size="md" radius="lg" onPress={rotateState}>
        <Icon name="sync" color="#FFFFFF" />
      </Button>
      <DeleteButton />
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
