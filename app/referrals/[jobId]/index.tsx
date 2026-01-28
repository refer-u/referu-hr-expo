import { Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import {
  mockEmployees,
  mockReferrals,
  ReferralStatusColors,
  ReferralStatusLabels,
} from "@/lib/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const router = useRouter();
  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  const scheme = useColorScheme();

  const filteredReferrals = mockReferrals.filter(
    (referral) => referral.postedJobId === jobId,
  );

  // console.log({ employee });

  const handleReferralDetail = (referralId: string) => {
    router.push({
      pathname: "/referralDetail/[referralId]",
      params: { referralId },
    });
  };

  return (
    <View
      style={{
        backgroundColor: scheme === "dark" ? "#191a1bff" : "#f0f6ff",
        height: "100%",
        padding: 28,
        //  backgroundColor: "#f0f6ff",
      }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ flexDirection: "column", gap: 16 }}>
          {filteredReferrals.map((referral) => {
            const employee = mockEmployees.find(
              (emp) => emp._id === referral.referringEmployeeId,
            );
            return (
              <View key={referral._id}>
                <Pressable onPress={() => handleReferralDetail(referral._id)}>
                  <View style={styles.cardContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "column", gap: 3 }}>
                        <Text style={styles.titleText}>
                          {referral.candidateFirstName}{" "}
                          {referral.candidateLastName}
                        </Text>
                        <Text style={{ color: "gray", fontSize: 12 }}>
                          Санал болгосон
                        </Text>
                      </View>

                      {/* badge */}
                      <View
                        style={[
                          styles.countBadge,
                          {
                            backgroundColor:
                              ReferralStatusColors[referral.referralStatus] +
                              "20",
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color:
                              ReferralStatusColors[referral.referralStatus],
                            fontWeight: 600,
                            fontSize: 12,
                          }}
                        >
                          {ReferralStatusLabels[referral.referralStatus]}
                        </Text>
                      </View>
                    </View>

                    {/* separator */}
                    <View
                      style={{
                        width: "100%",
                        borderColor: "#e7e5e5ff",
                        opacity: 5,
                        borderWidth: 0.5,
                      }}
                    />

                    {employee && (
                      <View style={{ marginTop: 8 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 500,
                            fontFamily: Fonts.sans,
                          }}
                        >
                          {employee.employeeFirstName}{" "}
                          {employee.employeeLastName}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 4,
                            alignItems: "center",
                          }}
                        >
                          <Text style={styles.employeeJobTitle}>
                            {employee.employeeDepartment}
                          </Text>
                          <Text style={styles.employeeJobTitle}>•</Text>
                          <Text style={styles.employeeJobTitle}>
                            {" "}
                            {employee.employeeJobTitle}
                          </Text>
                        </View>
                      </View>
                    )}

                    <Text style={styles.departmentTitle}>
                      Огноо: {referral.createdAt}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: "auto",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: "#F2F0EF",
    flexDirection: "column",
    gap: 8,
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
    fontSize: 14,
  },
  employeeJobTitle: {
    color: "#737373",
    marginTop: 5,
    fontSize: 14,
  },
  countBadge: {
    backgroundColor: "#dbeafe",
    width: "auto",
    paddingVertical: 2,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 12,
  },
});
