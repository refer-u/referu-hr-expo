import { Info } from "lucide-react-native";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  formData: Record<string, any>;
  hasReferrals: boolean;
  onChange: (field: string, value: string) => void;
};

type Option = {
  label: string;
  value: string;
};

const JobTypeOptions: Option[] = [
  { label: "Бүтэн цагийн", value: "full-time" },
  { label: "Хагас цагийн", value: "part-time" },
  { label: "Гэрээт", value: "contract" },
];

const LevelOptions: Option[] = [
  { label: "Junior", value: "junior" },
  { label: "Mid-level", value: "mid" },
  { label: "Senior", value: "senior" },
  { label: "Lead", value: "lead" },
];

export default function EditForm({ formData, hasReferrals, onChange }: Props) {
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);

  const getLabel = (options: Option[], value: string) =>
    options.find((o) => o.value === value)?.label ?? "Сонгох";

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {hasReferrals && (
        <View style={styles.alert}>
          <Info size={16} color="#ca7c7cff" />
          <Text style={styles.alertText}>
            Санал ирсэн зарыг засварлах боломжгүй
          </Text>
        </View>
      )}

      <View style={styles.card}>
        <Field label="Албан тушаал *">
          <TextInput
            value={formData.title}
            onChangeText={(v) => onChange("title", v)}
            editable={!hasReferrals}
            placeholder="Жишээ: Senior Software Engineer"
            style={styles.input}
          />
        </Field>

        <Field label="Хэлтэс *">
          <TextInput
            value={formData.department}
            onChangeText={(v) => onChange("department", v)}
            editable={!hasReferrals}
            placeholder="Жишээ: Технологийн алба"
            style={styles.input}
          />
        </Field>

        <Field label="Ажлын төрөл *">
          <Select
            open={jobTypeOpen}
            onOpenChange={setJobTypeOpen}
            value={formData.jobType}
            options={JobTypeOptions}
            disabled={hasReferrals}
            onSelect={(v) => onChange("jobType", v)}
          />
        </Field>

        <Field label="Түвшин *">
          <Select
            open={levelOpen}
            onOpenChange={setLevelOpen}
            value={formData.level}
            options={LevelOptions}
            disabled={hasReferrals}
            onSelect={(v) => onChange("level", v)}
          />
        </Field>

        <Field label="Цалингийн хүрээ *">
          <View style={styles.row}>
            <TextInput
              value={String(formData.salaryMin ?? "")}
              onChangeText={(v) => onChange("salaryMin", v)}
              editable={!hasReferrals}
              placeholder="Доод"
              keyboardType="numeric"
              style={[styles.input, styles.flex]}
            />
            <Text style={styles.dash}>-</Text>
            <TextInput
              value={String(formData.salaryMax ?? "")}
              onChangeText={(v) => onChange("salaryMax", v)}
              editable={!hasReferrals}
              placeholder="Дээд"
              keyboardType="numeric"
              style={[styles.input, styles.flex]}
            />
          </View>
        </Field>

        <Textarea
          label="Үндсэн үүрэг хариуцлага *"
          value={formData.responsibilities}
          disabled={hasReferrals}
          onChange={(v) => onChange("responsibilities", v)}
        />

        <Textarea
          label="Шаардлага *"
          value={formData.requirements}
          disabled={hasReferrals}
          onChange={(v) => onChange("requirements", v)}
        />

        <Textarea
          label="Нэмэлт мэдээлэл"
          value={formData.additionalInfo}
          disabled={hasReferrals}
          onChange={(v) => onChange("additionalInfo", v)}
        />

        <Field label="Шаардлагатай ур чадвар *">
          <TextInput
            value={formData.skills}
            onChangeText={(v) => onChange("skills", v)}
            editable={!hasReferrals}
            placeholder="Жишээ: React, TypeScript, Node.js"
            style={styles.input}
          />
        </Field>

        <Textarea
          label="Урамшуулал & нэмэгдэл *"
          value={formData.benefits}
          disabled={hasReferrals}
          onChange={(v) => onChange("benefits", v)}
        />

        <Field label="Холбоо барих мэдээлэл *">
          <TextInput
            value={formData.contactInfo}
            onChangeText={(v) => onChange("contactInfo", v)}
            editable={!hasReferrals}
            placeholder="И-мэйл эсвэл утас"
            style={styles.input}
          />
        </Field>

        <Field label="Байршил *">
          <TextInput
            value={formData.location}
            onChangeText={(v) => onChange("location", v)}
            editable={!hasReferrals}
            placeholder="Жишээ: Улаанбаатар хот"
            style={styles.input}
          />
        </Field>
      </View>
    </ScrollView>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

function Textarea({
  label,
  value,
  disabled,
  onChange,
}: {
  label: string;
  value: string;
  disabled: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <Field label={label}>
      <TextInput
        value={value}
        onChangeText={onChange}
        editable={!disabled}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textarea]}
      />
    </Field>
  );
}

function Select({
  open,
  onOpenChange,
  value,
  options,
  disabled,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  value: string;
  options: Option[];
  disabled: boolean;
  onSelect: (v: string) => void;
}) {
  return (
    <>
      <Pressable
        disabled={disabled}
        style={styles.input}
        onPress={() => onOpenChange(true)}
      >
        <Text>{options.find((o) => o.value === value)?.label ?? "Сонгох"}</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => onOpenChange(false)}
        />
        <View style={styles.modal}>
          {options.map((o) => (
            <Pressable
              key={o.value}
              style={styles.option}
              onPress={() => {
                onSelect(o.value);
                onOpenChange(false);
              }}
            >
              <Text>{o.label}</Text>
            </Pressable>
          ))}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    padding: 16,
    paddingBottom: 120,
  },
  alert: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#fef3c7",
    borderColor: "#fde68a",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  alertText: {
    color: "#92400e",
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  field: {
    gap: 6,
  },
  label: {
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#f4f4f5",
    borderRadius: 8,
    padding: 12,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dash: {
    color: "#6b7280",
  },
  flex: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  option: {
    paddingVertical: 12,
  },
});
