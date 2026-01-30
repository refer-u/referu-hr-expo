import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ReferralsJobCards from "../_components/ReferralsJobCards";
import { ReferUHeader } from "../_components/ReferUHeader";
import ResolvedJobCards from "../_components/ResolvedJobCards";

export default function TabThreeScreen() {
  const [activeTab, setActiveTab] = useState<"incoming" | "resolved">(
    "incoming",
  );
  const scheme = useColorScheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#005295", dark: "#1D3D47" }}
      headerImage={<ReferUHeader />}
    >
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: "#f0f6ff",
          paddingHorizontal: 25,
          paddingVertical: 20,
          paddingBottom: 150,
          height: "100%",
          // flex: 1,
          // backgroundColor: scheme === "dark" ? "#191a1bff" : "#ffffffff",
        }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <View
            style={{
              flexDirection: "column",
              gap: 25,
            }}
          >
            <Pressable style={styles.titleContainer}>
              <Text
                style={{
                  fontFamily: Fonts.sans,
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Миний цонх
              </Text>
            </Pressable>
            <View style={styles.container}>
              <Pressable
                style={[
                  styles.tab,
                  activeTab === "incoming" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("incoming")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "incoming" && styles.activeTabText,
                  ]}
                >
                  Ирсэн саналууд
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.tab,
                  activeTab === "resolved" && styles.activeTab,
                ]}
                onPress={() => setActiveTab("resolved")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "resolved" && styles.activeTabText,
                  ]}
                >
                  Шийдвэрлэгдсэн
                </Text>
              </Pressable>
            </View>
            {activeTab === "incoming" ? (
              <View>
                <ReferralsJobCards />
              </View>
            ) : (
              <View>
                <ResolvedJobCards />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    marginBottom: 7,
    justifyContent: "space-between",
    gap: 2,
    backgroundColor: "#edebeaff",
    borderRadius: 12,
    paddingVertical: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 3,
    paddingHorizontal: 3,
  },
  tab: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },
  tabText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  activeTabText: {
    color: "black",
    fontWeight: "500",
  },
});
