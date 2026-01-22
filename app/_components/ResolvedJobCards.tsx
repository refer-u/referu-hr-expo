import { Fonts } from "@/constants/theme";
import { mockPostedJobs, mockReferrals } from "@/lib/mockData";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ResolvedJobCards() {
  const router = useRouter();

  const resolvedJobs = mockPostedJobs
    .map((job) => {
      const resolvedReferrals = mockReferrals.filter(
        (ref) =>
          ref.postedJobId === job._id &&
          (ref.referralStatus === "APPROVED" ||
            ref.referralStatus === "REJECTED")
      );

      return {
        ...job,
        referralCount: resolvedReferrals.length,
      };
    })
    .filter((job) => job.referralCount > 0);

  const handleReferrals = (jobId: string) => {
    router.push({
      pathname: "/referrals/[jobId]",
      params: { jobId },
    });
  };

  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          {resolvedJobs.map((job) => (
            <View key={job._id}>
              <Pressable onPress={() => handleReferrals(job._id)}>
                <View style={styles.cardContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.titleText}>{job.jobTitle}</Text>

                    <View style={styles.statusBadge}>
                      <Text
                        style={{
                          color: "#3a3b3d",
                          fontWeight: 600,
                          fontSize: 12,
                        }}
                      >
                        Шийдвэрлэгдсэн
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.departmentTitle}>
                    {job.jobDepartment}
                  </Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 90,
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
    fontSize: 18,
    fontWeight: 600,
    fontFamily: Fonts.sans,
  },
  departmentTitle: {
    color: "#737373",
    marginTop: 12,
    fontSize: 16,
  },
  statusBadge: {
    backgroundColor: "#d2d5db",
    width: "auto",
    paddingVertical: 2,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 12,
  },
});
