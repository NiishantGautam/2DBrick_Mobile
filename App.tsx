import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {theme} from "./theme"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Game from "@/components/Game"

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/*<Text style={styles.textContainer} >Building 2D game with RN</Text>*/}
      <Game />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite

  }
});
