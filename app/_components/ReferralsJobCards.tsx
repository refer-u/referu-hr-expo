import { Fonts } from "@/constants/theme";
import { mockJobs } from "@/lib/mockData";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ReferralsJobCards() {
  const router = useRouter();
  const referralJobs = mockJobs.filter((jobs) => jobs.status === "SUBMITTED");

  const handleReferrals = () => {
    router.push("/referrals/Referrals");
  };
  return (
    <View>
      <View style={{ flexDirection: "column", gap: 10 }}>
        {referralJobs.map((jobs) => (
          <View key={jobs.id}>
            <Pressable onPress={handleReferrals}>
              <View style={styles.cardContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.titleText}>{jobs.title}</Text>
                  <View style={styles.countBadge}>
                    <Text style={{ color: "#193cb8", fontWeight: 500 }}>
                      {jobs.referralCount} санал
                    </Text>
                  </View>
                </View>

                <Text style={styles.departmentTitle}>{jobs.department}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: "#F2F0EF",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 3,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: Fonts.sans,
  },
  departmentTitle: {
    color: "#737373",
    marginTop: 12,
  },
  countBadge: {
    backgroundColor: "#dbeafe",
    width: 70,
    paddingVertical: 2,
    paddingHorizontal: 8,

    borderRadius: 12,
  },
});
