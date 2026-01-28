import { mockJobs } from "@/lib/mock";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function Jobs() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.navigate({
          pathname: "/job/[id]",
          params: { id: item.id },
        })
      }
    >
      <View style={styles.rowBetween}>
        <Text style={styles.title}>{item.title}</Text>

        {item.referralCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.referralCount}</Text>
          </View>
        )}
      </View>

      <Text style={styles.department}>{item.department}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.salary}>
          ₮{item.salaryMin.toLocaleString()} - ₮
          {item.salaryMax.toLocaleString()}
        </Text>
        <Text style={styles.date}>{item.postedDate}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={mockJobs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
  },

  badge: {
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
  },

  department: {
    fontSize: 14,
    color: "#6B7280",
    marginVertical: 4,
  },

  salary: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
    // color: "#0a6786ff",
  },

  date: {
    fontSize: 12,
    color: "#6B7280",
  },
});
