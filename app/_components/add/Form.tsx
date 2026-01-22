import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import JobTypeSelect from "./JobSelect";
import LevelSelect from "./LevelSelect";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Form({ formData, setFormData }: Props) {
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Field label="Албан тушаал *">
          <Input
            value={formData.title}
            onChangeText={(v: string) => handleInputChange("title", v)}
            placeholder="Жишээ: Senior Software Engineer"
          />
        </Field>

        <Field label="Хэлтэс *">
          <Input
            value={formData.department}
            onChangeText={(v: string) => handleInputChange("department", v)}
            placeholder="Жишээ: Технологийн алба"
          />
        </Field>

        <JobTypeSelect
          value={formData.jobType}
          onChange={(v) => handleInputChange("jobType", v)}
        />

        <LevelSelect
          value={formData.level}
          onChange={(v) => handleInputChange("level", v)}
        />

        <Field label="Цалингийн хүрээ *">
          <View style={styles.row}>
            <Input
              value={formData.salaryMin}
              onChangeText={(v: string) => handleInputChange("salaryMin", v)}
              placeholder="Доод"
              keyboardType="numeric"
              style={{ flex: 1 }}
            />
            <Text style={styles.dash}>-</Text>
            <Input
              value={formData.salaryMax}
              onChangeText={(v: string) => handleInputChange("salaryMax", v)}
              placeholder="Дээд"
              keyboardType="numeric"
              style={{ flex: 1 }}
            />
          </View>
        </Field>

        <Field label="Үндсэн үүрэг хариуцлага *">
          <Textarea
            placeholder="Үндсэн үүрэг хариуцлагыг оруулна уу"
            value={formData.responsibilities}
            onChangeText={(v: string) =>
              handleInputChange("responsibilities", v)
            }
          />
        </Field>

        <Field label="Шаардлага *">
          <Textarea
            placeholder="Шаардлагыг оруулна уу"
            value={formData.requirements}
            onChangeText={(v: string) => handleInputChange("requirements", v)}
          />
        </Field>

        <Field label="Нэмэлт мэдээлэл">
          <Textarea
            placeholder="Нэмэлт мэдээлэл"
            value={formData.additionalInfo}
            onChangeText={(v: string) => handleInputChange("additionalInfo", v)}
          />
        </Field>

        <Field label="Шаардлагатай ур чадвар *">
          <Input
            value={formData.skills}
            onChangeText={(v: string) => handleInputChange("skills", v)}
            placeholder="Жишээ: React, TypeScript, Node.js"
          />
        </Field>

        <Field label="Урамшуулал & нэмэгдэл *">
          <Textarea
            placeholder="Урамшуулал, нэмэгдэл олголт"
            value={formData.benefits}
            onChangeText={(v: string) => handleInputChange("benefits", v)}
          />
        </Field>

        <Field label="Холбоо барих мэдээлэл *">
          <Input
            value={formData.contactInfo}
            onChangeText={(v: string) => handleInputChange("contactInfo", v)}
            placeholder="И-мэйл эсвэл утас"
          />
        </Field>

        <Field label="Байршил *">
          <Input
            value={formData.location}
            onChangeText={(v: string) => handleInputChange("location", v)}
            placeholder="Улаанбаатар хот"
          />
        </Field>
      </View>
    </ScrollView>
  );
}

const Field = ({ label, children }: any) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    {children}
  </View>
);

const Input = (props: any) => (
  <TextInput
    {...props}
    style={[styles.input, props.style]}
    placeholderTextColor="#9CA3AF"
  />
);

const Textarea = (props: any) => (
  <TextInput
    {...props}
    multiline
    numberOfLines={4}
    style={[styles.input, styles.textarea]}
    placeholderTextColor="#9CA3AF"
  />
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 140,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },

  field: {
    gap: 6,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#F9FAFB",
    color: "#111827",
  },

  textarea: {
    minHeight: 90,
    textAlignVertical: "top",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  dash: {
    fontSize: 16,
    color: "#6B7280",
  },
});
