import ParallaxScrollView from "@/components/parallax-scroll-view";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "../_components/home/Header";
import Jobs from "../_components/home/Jobs";
import { ReferUHeader } from "../_components/ReferUHeader";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#005295", dark: "#1D3D47" }}
      headerImage={<ReferUHeader />}
    >
      <StatusBar style="light" />
      {/* <SafeAreaView edges={["top"]} style={styles.safeArea}> */}
      <View style={styles.container}>
        <Header />
        <Jobs />
        {/* <SignOutButton /> */}
      </View>
      {/* </SafeAreaView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: "#f0f6ff",
  // },
  container: {
    flex: 1,
    backgroundColor: "#f0f6ff",
    paddingBottom: 0,

    //  backgroundColor: "#F9FAFB",
  },
});
