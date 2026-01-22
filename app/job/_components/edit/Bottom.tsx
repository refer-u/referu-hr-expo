import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  hasReferrals: boolean;
  onCancel: () => void;
  onSave: () => void;
};

export default function Bottom({ hasReferrals, onCancel, onSave }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Pressable style={[styles.button, styles.outline]} onPress={onCancel}>
          <Text style={styles.outlineText}>Цуцлах</Text>
        </Pressable>

        <Pressable
          style={[styles.button, hasReferrals && styles.disabled]}
          onPress={onSave}
          disabled={hasReferrals}
        >
          <Text style={styles.primaryText}>Хадгалах</Text>
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
  row: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  outline: {
    borderWidth: 1,

    backgroundColor: "#fff",
  },
  outlineText: {
    fontWeight: "600",
    color: "#111827",
  },
  primaryText: {
    fontWeight: "600",
    color: "#272525ff",
  },
  disabled: {
    backgroundColor: "#9ca3af",
  },
});
