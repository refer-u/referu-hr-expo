import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const API_URL = "http://192.168.10.65:4000/api/scrape/worki";

type Job = {
  id: string;
  title: string;
  department: string;
  salaryMin: number;
  salaryMax: number;
  postedDate: string;
  referralCount: number;
  type: string;
  link: string;
};

export default function Jobs() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const mapped: Job[] = (json.data || []).map(
          (item: any, index: number) => {
            const nums = item.salary?.replace(/[^\d\-]/g, "").split("-") ?? [];
            const min = Number(nums[0]) || 0;
            const max = Number(nums[1]) || min;

            return {
              id: String(index),
              title: item.title,
              department: item.company,
              salaryMin: min,
              salaryMax: max,
              postedDate: "Шинэ",
              referralCount: 0,
              type: item.type || "Full-time",
              link: item.link,
            };
          },
        );

        setJobs(mapped);
      })

      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Job }) => (
    <Pressable
      style={styles.card}
      // onPress={() =>
      //   router.navigate({
      //     pathname: "/job/[id]",
      //     params: { id: item.id },
      //   })
      // }
    >
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.department}>{item.department}</Text> */}

      <Text style={styles.salary}>
        ₮{item.salaryMin.toLocaleString()} – ₮{item.salaryMax.toLocaleString()}
      </Text>

      <View style={styles.footer}>
        <View style={styles.typeRow}>
          <View style={styles.typeChip}>
            <Text style={styles.typeText}>{item.type}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log("Opening link:", item.link);
            if (item.link?.startsWith("http")) {
              Linking.openURL(item.link);
            }
          }}
        >
          <Text style={styles.viewBtn}>Зар үзэх</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      scrollEnabled={false}
      nestedScrollEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    padding: 16,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },

  department: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },

  salary: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4F46E5",
    marginBottom: 12,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  typeRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  typeChip: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  typeText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4F46E5",
  },

  viewBtn: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4F46E5",
  },
});
