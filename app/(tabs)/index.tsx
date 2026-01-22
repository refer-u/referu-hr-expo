import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../_components/home/Header";
import Jobs from "../_components/home/Jobs";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <Jobs />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
