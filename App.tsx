import { StyleSheet, View } from "react-native";

import { ThemeProvider } from "@rneui/themed";
import { RotateCambus } from "./Components/RotateCambus";
import { RotateProvider } from "./Components/rotateState";
import { MemoProvider } from "./Components/textState";

export default function App() {
  return (
    <ThemeProvider>
      <MemoProvider>
        <RotateProvider>
          <View style={styles.container}>
            <RotateCambus />
          </View>
        </RotateProvider>
      </MemoProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
