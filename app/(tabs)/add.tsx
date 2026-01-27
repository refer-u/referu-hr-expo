import ParallaxScrollView from "@/components/parallax-scroll-view";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottom from "../_components/add/Bottom";
import Form from "../_components/add/Form";
import { ReferUHeader } from "../_components/ReferUHeader";

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#005295", dark: "#1D3D47" }}
      headerImage={<ReferUHeader />}
    >
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.back}>
          <Form formData={formData} setFormData={setFormData} />
          <Bottom formData={formData} />
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  back: {
    backgroundColor: "#F9FAFB",
  },
});
