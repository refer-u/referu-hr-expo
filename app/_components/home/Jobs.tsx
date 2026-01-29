import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const API_URL = "http://192.168.1.47:4000/api/worki/jobs";

type Job = {
  id: string;
  title: string;
  department: string;
  salary: string;
  link: string;
};

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔒 URL-г 100% browser нээгдэх хэлбэрт оруулна
  const normalizeUrl = (url?: string) => {
    if (!url) return "";

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    if (url.startsWith("/")) {
      return `https://worki.mn${url}`;
    }

    return `https://worki.mn/${url}`;
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        const mapped: Job[] = (json.data || [])
          .map((item: any, index: number) => ({
            id: String(index),
            title: item.title ?? "",
            department: item.company ?? "",
            salary: item.salary ?? "",
            link: normalizeUrl(item.link),
          }))
          // 🔥 link байхгүй card-уудыг бүр мөсөн хаяна
          .filter((j: any) => j.title);

        console.log("JOBS:", mapped);
        setJobs(mapped);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("API error", "Job data татаж чадсангүй");
      })
      .finally(() => setLoading(false));
  }, []);

  const openWorki = async (url: string) => {
    if (!url) return;

    console.log("OPENING:", url);

    await WebBrowser.openBrowserAsync(url, {
      presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
      controlsColor: "#2563EB",
    });
  };

  const renderItem = ({ item }: { item: Job }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.department}>{item.department}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.salary}>{item.salary}</Text>

        <TouchableOpacity onPress={() => openWorki(item.link)}>
          <Text style={styles.viewBtn}>Үзэх</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      scrollEnabled={false}
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
    paddingBottom: 120,
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
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  department: {
    fontSize: 14,
    color: "#6B7280",
    marginVertical: 4,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },
  viewBtn: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2563EB",
  },
});
