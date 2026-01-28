import { JobListIconAnime } from "@/components/job-list-anime";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { mockJobs } from "@/lib/mock";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Header() {
  return (
    // <View style={styles.container}>
    <View>
      {/* <View style={styles.header}>
        <Text style={styles.subtitle}>Ажилтны санал · Employee Referral</Text>
        <Text style={styles.title}>Ажлын санал</Text>
      </View>

      <View style={styles.countBox}>
        <Text style={styles.count}>
          {mockJobs.length}
          <Text style={styles.countLabel}> нээлттэй ажлын байр</Text>
        </Text>
      </View> */}
      <ThemedView
        style={{
          backgroundColor: "#f0f6ff",
          paddingVertical: 30,
          paddingHorizontal: 26,
        }}
      >
        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#f0f6ff",
            // paddingBottom: 32,
          }}
        >
          <JobListIconAnime />
          <ThemedView style={{ backgroundColor: "#f0f6ff" }}>
            <ThemedText type="title" style={{ fontSize: 26 }}>
              Ажлын зар
            </ThemedText>
            <ThemedText style={{ color: "#687076" }}>
              {mockJobs.length} Нээлттэй ажлын байр
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
  },

  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  subtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  countBox: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  count: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  countLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
  },
});
