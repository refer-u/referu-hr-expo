import ParallaxScrollView from "@/components/parallax-scroll-view";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../_components/home/Header";
import Jobs from "../_components/home/Jobs";
import { ReferUHeader } from "../_components/ReferUHeader";
import { SignOutButton } from "../_components/SignOutButton";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#005295", dark: "#1D3D47" }}
      headerImage={<ReferUHeader />}
    >
      <StatusBar style="dark" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <Jobs />
          <SignOutButton />
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f6ff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f6ff",
    //  backgroundColor: "#F9FAFB",
  },
});
