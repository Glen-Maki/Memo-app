import { StyleSheet, View } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import { RotateCambus } from "./Components/RotateCambus";
import { RotateProvider } from "./Components/rotateState";
import { MemoProvider } from "./Components/textState";

export default function App() {
  return (
    <PaperProvider>
      <MemoProvider>
        <RotateProvider>
          <View style={styles.container}>
            <RotateCambus />
            {/*<SliderText />*/}
          </View>
        </RotateProvider>
      </MemoProvider>
    </PaperProvider>
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
