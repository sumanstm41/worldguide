import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <View style={{ padding: 16, backgroundColor: "green" }}>
        <Text>Search</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
