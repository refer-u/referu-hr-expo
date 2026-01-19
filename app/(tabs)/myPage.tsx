import { Pressable, StyleSheet, Text, View } from "react-native";

import { Fonts } from "@/constants/theme";
import { useState } from "react";
import ReferralsJobCards from "../_components/ReferralsJobCards";
import ResolvedJobCards from "../_components/ResolvedJobCards";

export default function TabThreeScreen() {
  const [activeTab, setActiveTab] = useState<"incoming" | "resolved">(
    "incoming"
  );

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        paddingVertical: 30,
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Pressable style={styles.titleContainer}>
          <Text
            style={{
              fontFamily: Fonts.sans,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Миний цонх
          </Text>
        </Pressable>
        <View style={styles.container}>
          <Pressable
            style={[styles.tab, activeTab === "incoming" && styles.activeTab]}
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
            style={[styles.tab, activeTab === "resolved" && styles.activeTab]}
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
    </View>
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
    paddingVertical: 8,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },
  tabText: {
    color: "black",
    fontWeight: "500",
  },
  activeTabText: {
    color: "black",
    fontWeight: "500",
  },
});
