import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  formData: any;
};

export default function Bottom({ formData }: Props) {
  const router = useRouter();

  const handleSave = () => {
    if (
      !formData.title ||
      !formData.department ||
      !formData.jobType ||
      !formData.level ||
      !formData.salaryMin ||
      !formData.salaryMax ||
      !formData.responsibilities ||
      !formData.requirements ||
      !formData.skills ||
      !formData.benefits ||
      !formData.contactInfo ||
      !formData.location
    ) {
      Alert.alert("Алдаа", "Заавал бөглөх талбаруудыг бөглөнө үү");
      return;
    }

    Alert.alert("Хадгалж байна...", "Түр хүлээнэ үү");

    setTimeout(() => {
      Alert.alert("Амжилттай", "Амжилттай хадгалагдлаа");
      router.push("/"); // home
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.outline]}
        onPress={() => router.back()}
      >
        <Text style={styles.outlineText}>Цуцлах</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.primary]} onPress={handleSave}>
        <Text style={styles.primaryText}>Хадгалах</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  button: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  outline: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#fff",
  },

  outlineText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  primary: {
    // backgroundColor: "#6c6e73ff",

    backgroundColor: "#0a7ea4",
  },

  primaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
