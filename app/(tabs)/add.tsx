import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottom from "../_components/add/Bottom";
import Form from "../_components/add/Form";

export default function AddJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    responsibilities: "",
    requirements: "",
    additionalInfo: "",
    skills: "",
    benefits: "",
    contactInfo: "",
    location: "",
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.back}>
        <Form formData={formData} setFormData={setFormData} />
        <Bottom formData={formData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  back: {
    backgroundColor: "#F9FAFB",
  },
});
