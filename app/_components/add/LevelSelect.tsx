import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Level = "junior" | "mid" | "senior" | "lead" | "";

export default function LevelSelect({
  value,
  onChange,
}: {
  value: Level;
  onChange: (v: Level) => void;
}) {
  const [open, setOpen] = useState(false);

  const options: [Level, string][] = [
    ["junior", "Junior"],
    ["mid", "Mid-level"],
    ["senior", "Senior"],
    ["lead", "Lead"],
  ];

  const label = options.find(([v]) => v === value)?.[1] || "Сонгох";

  return (
    <View style={{ gap: 6 }}>
      <Text>Түвшин *</Text>

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
