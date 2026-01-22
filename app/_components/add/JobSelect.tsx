import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function JobTypeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const options = [
    ["full-time", "Бүтэн цагийн"],
    ["part-time", "Хагас цагийн"],
    ["contract", "Гэрээт"],
  ];

  const label = options.find(([v]) => v === value)?.[1] || "Сонгох";

  return (
    <View style={{ gap: 6 }}>
      <Text>Ажлын төрөл *</Text>

      {/* Trigger */}
      <Pressable
        onPress={() => setOpen((o) => !o)}
        style={{
          padding: 12,
          backgroundColor: "#f4f4f5",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: value ? "#000" : "#9ca3af" }}>{label}</Text>
      </Pressable>

      {/* Dropdown */}
      {open && (
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            marginTop: 4,
          }}
        >
          {options.map(([v, l]) => (
            <Pressable
              key={v}
              onPress={() => {
                onChange(v);
                setOpen(false);
              }}
              style={{ padding: 12 }}
            >
              <Text>{l}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
