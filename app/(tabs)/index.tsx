import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../_components/home/Header";
import Jobs from "../_components/home/Jobs";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#000000ff" }}
      edges={["top"]}
    >
      <View style={styles.container}>
        <Header />
        <Jobs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
