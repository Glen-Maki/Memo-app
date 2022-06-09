import { StyleSheet, View } from "react-native";

import { Memo } from "./Components/Memo";
import { Provider as PaperProvider } from "react-native-paper";
import { RotateCambus } from "./Components/RotateCambus";
// import SliderText from "./Components/SliderText";
import { MemoProvider } from "./Components/textState";

export default function App() {
  return (
    <PaperProvider>
      <MemoProvider>
        <View style={styles.container}>
          <RotateCambus />
          {/*<SliderText />*/}
        </View>
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
