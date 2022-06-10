import { Button, Icon } from "@rneui/themed";
import { Alert } from "react-native";
import { useText } from "../textState";

export const DeleteButton = () => {
  const { text, onChangeText } = useText();

  const deleteText = () => {
    Alert.alert("本当に削除しますか？", "", [
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          onChangeText("");
        },
      },
    ]);
  };

  return (
    <Button size="md" radius="lg" onPress={deleteText}>
      <Icon name="delete" color="#FFFFFF" />
    </Button>
  );
};
