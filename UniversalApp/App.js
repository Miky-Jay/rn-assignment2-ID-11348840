import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.size}>My name is <Text style={styles.name}> Mikaela-Jessie Agboyitor </Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    fontSize: 24,
  },
  name: {
    fontWeight: "bold",
  }
});
