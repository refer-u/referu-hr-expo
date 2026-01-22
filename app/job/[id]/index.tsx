import { mockJobData } from "@/lib/mock";
import { JobDetail } from "@/lib/types";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Bottom from "../_components/dynamic/Bottom";
import Content from "../_components/dynamic/Content";

export default function JobDetailPage() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (!id) return;
    const job = mockJobData[id];
    if (job) setJobDetail(job);
  }, [id]);

  useFocusEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  });

  if (!jobDetail) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Ачааллаж байна...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 0 }}>
        <Content jobDetail={jobDetail} />
      </ScrollView>

      <Bottom jobDetail={jobDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
