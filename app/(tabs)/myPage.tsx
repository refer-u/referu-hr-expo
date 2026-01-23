import { Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ReferralsJobCards from "../_components/ReferralsJobCards";
import ResolvedJobCards from "../_components/ResolvedJobCards";

export default function TabThreeScreen() {
  const [activeTab, setActiveTab] = useState<"incoming" | "resolved">(
    "incoming",
  );
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: "#ffffff",
          paddingHorizontal: 25,
          paddingVertical: 70,
          height: "100%",
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
    </>
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
    backgroundColor: "#F2F0EF",
    borderRadius: 12,
    paddingVertical: 3,
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
