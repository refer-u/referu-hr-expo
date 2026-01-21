import { useColorScheme } from "@/hooks/use-color-scheme.web";
import {
  CandidateStatusLabels,
  JobLevelLabels,
  mockEmployees,
  mockReferrals,
  ReferralStatusColors,
  ReferralStatusLabels,
  RelationLabels,
} from "@/lib/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ReferralDetail = () => {
  const router = useRouter();
  const { referralId } = useLocalSearchParams<{ referralId: string }>();
  const scheme = useColorScheme();

  const referralData = mockReferrals.find((ref) => ref._id === referralId);

  const [status, setStatus] = useState(referralData?.referralStatus);

  if (!referralData) {
    return (
      <View style={styles.centered}>
        <Text>Referral not found</Text>
      </View>
    );
  }

  const employee = mockEmployees.find(
    (emp) => emp._id === referralData.referringEmployeeId,
  );
  const resumeUrl = referralData.candidateResume;

  const handleApprove = () => {
    Alert.alert(
      "Ажилд авах уу?",
      "Санал болгож буй хүнийг ажилд авах тохиолдолд урамшууллын хүсэлт санхүүд илгээгдэх ба ажилчинд мэдэгдэл очих болно.",
      [
        { text: "Цуцлах", style: "cancel" },
        {
          text: "Ажилд авах",
          onPress: () => {
            setTimeout(() => {
              setStatus("APPROVED");
              router.back();
            }, 300);
          },
          style: "default",
        },
      ],
    );
  };

  const handleReject = () => {
    Alert.alert(
      "Татгалзах уу?",
      "Татгалзсан тохиолдолд санал болгосон ажилчинд мэдэгдэл очих болно.",
      [
        { text: "Буцах", style: "cancel" },
        {
          text: "Татгалзах",
          onPress: () => {
            setTimeout(() => {
              setStatus("REJECTED");
              router.back();
            }, 300);
          },
          style: "destructive",
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: scheme === "dark" ? "#191a1bff" : "#f8f9fa" },
      ]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>Санал болгогч ажилтны мэдээлэл</Text>
          </View>

          {employee && (
            <View style={styles.infoList}>
              <Text style={styles.label}>
                Нэр:
                <Text style={styles.value}>
                  {employee.employeeFirstName} {employee.employeeLastName}
                </Text>
              </Text>
              <Text style={styles.label}>
                Утас:
                <Text style={styles.value}>{employee.employeeTelNumber}</Text>
              </Text>
              <Text style={styles.label}>
                Хэлтэс:
                <Text style={styles.value}>{employee.employeeDepartment}</Text>
              </Text>
              <Text style={styles.label}>
                Түвшин:
                <Text style={styles.value}>
                  {JobLevelLabels[employee.employeeJobLevel]}
                </Text>
              </Text>
            </View>
          )}

          <View style={styles.divider} />
          <View style={{ gap: 10 }}>
            <Text style={styles.label}>
              Харилцаа:
              <Text style={styles.value}>
                {RelationLabels[referralData.relationWithCandidate]}
              </Text>
            </Text>
            <Text style={styles.label}>
              Шалтгаан:
              <Text style={styles.value}>{referralData.referralReason}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Санал болгож буй хүний мэдээлэл</Text>

          <View style={styles.infoList}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.label}>
                Нэр:
                <Text style={styles.value}>
                  {referralData.candidateFirstName}{" "}
                  {referralData.candidateLastName}
                </Text>
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: ReferralStatusColors[status!] + "20" },
                ]}
              >
                <Text
                  style={{
                    color: ReferralStatusColors[status!],
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  {ReferralStatusLabels[status!]}
                </Text>
              </View>
            </View>

            <Text style={styles.label}>
              И-мэйл:
              <Text style={styles.value}>{referralData.candidateEmail}</Text>
            </Text>
            <Text style={styles.label}>
              Ажил эрхлэлтийн байдал:
              <Text style={styles.value}>
                {CandidateStatusLabels[referralData.candidateCurrentStatus]}
              </Text>
            </Text>
          </View>

          <View style={styles.divider} />

          {resumeUrl && (
            <Pressable
              onPress={() => Linking.openURL(resumeUrl)}
              style={styles.resumeButton}
            >
              <Text style={styles.resumeText}>Анкет үзэх (PDF)</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>

      {status === "SUBMITTED" && (
        <View style={styles.footer}>
          <Pressable
            style={[styles.actionButton, styles.rejectBtn]}
            onPress={handleReject}
          >
            <Text style={styles.rejectBtnText}>Татгалзах</Text>
          </Pressable>
          <Pressable
            style={[styles.actionButton, styles.approveBtn]}
            onPress={handleApprove}
          >
            <Text style={styles.approveBtnText}>Ажилд авах</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReferralDetail;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F2F0EF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: 17,
    color: "#1a1a1a",
    marginBottom: 20,
  },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  infoList: { gap: 10 },
  label: { fontSize: 14, color: "#737373", lineHeight: 20 },
  value: { color: "#1a1a1a", fontWeight: "500" },
  divider: { height: 1, backgroundColor: "#F2F0EF", marginVertical: 12 },
  resumeButton: {
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    alignItems: "center",
  },
  resumeText: { fontSize: 14, fontWeight: "600" },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    padding: 20,
    paddingBottom: 34,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    gap: 12,
  },
  actionButton: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  approveBtn: { backgroundColor: "#10B981" },
  approveBtnText: { color: "#fff", fontWeight: "600" },
  rejectBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EF4444",
  },
  rejectBtnText: { color: "#EF4444", fontWeight: "600" },
});
