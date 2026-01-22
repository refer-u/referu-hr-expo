import { JobDetail } from "@/lib/types";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  jobDetail: JobDetail;
};

export default function Bottom({ jobDetail }: Props) {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();

  const handleEdit = () => {
    if (!jobDetail) return;

    if (jobDetail.hasReferrals) {
      Alert.alert("Алдаа", "Санал ирсэн зарыг засварлах боломжгүй");
      return;
    }

    router.push(`/job/${params.id}/edit`);
  };

  const handleDelete = () => {
    Alert.alert("Анхаар", "Та энэ зарыг устгахдаа итгэлтэй байна уу?", [
      { text: "Болих", style: "cancel" },
      {
        text: "Устгах",
        style: "destructive",
        onPress: () => {
          Alert.alert("Амжилттай", "Зар амжилттай устгагдлаа 🗑️");
          router.push("/");
        },
      },
    ]);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Pressable
          style={[styles.button, styles.destructive]}
          onPress={handleDelete}
        >
          <Feather name="trash-2" size={16} color="#fff" />
          <Text style={styles.buttonText}>Устгах</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleEdit}>
          <Feather name="edit" size={16} color="#fff" />
          <Text style={styles.buttonText}>Засах</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    padding: 16,
  },
  container: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    backgroundColor: "#4d86e8ff",
    paddingVertical: 11,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  destructive: {
    backgroundColor: "#f51d1dc0",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
