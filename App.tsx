import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {theme} from "./theme"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer} >Building 2D game with RN</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    color: theme.colorAtomicTangerine,
    backgroundColor: theme.colorTeaGreen,
    fontWeight: "900",
    fontSize: 23
  }
});
