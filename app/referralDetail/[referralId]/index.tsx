// import { useAllReferrals } from "@/app/hook/use-all-referrals-hr";
// import { useColorScheme } from "@/hooks/use-color-scheme.web";
// import {
//   CandidateStatusLabels,
//   JobLevelLabels,
//   JobTypeLabels,
//   mockEmployees,
//   ReferralStatusColors,
//   ReferralStatusLabels,
//   RelationLabels,
// } from "@/lib/mockData";
// import axios from "axios";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import React, { useEffect, useState } from "react";
// import {
//   Alert,
//   Linking,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// const ReferralDetail = () => {
//   const router = useRouter();
//   const { referralId } = useLocalSearchParams<{ referralId: string }>();
//   const { allReferralsHR } = useAllReferrals();
//   const scheme = useColorScheme();

//   const referralData = allReferralsHR.find((ref) => ref._id === referralId);

//   // const [status, setStatus] = useState(referralData?.referralStatus);
// const [status, setStatus] = useState(referralData?.referralStatus ?? "SUBMITTED");
// const safeStatus = status ?? referralData.referralStatus;

//   useEffect(() => {
//     if (referralData?.referralStatus) {
//       setStatus(referralData.referralStatus);
//     }
//   }, [referralData]);

//   if (!referralData) {
//     return (
//       <View style={styles.centered}>
//         <Text>Referral not found</Text>
//       </View>
//     );
//   }

//   const employee = mockEmployees.find(
//     (emp) => emp._id === referralData.referringEmployeeId,
//   );
//   const resumeUrl = referralData.candidateResume;

//   const handleApprove = () => {
//     Alert.alert(
//       "Ажилд авах уу?",
//       "Санал болгож буй хүнийг ажилд авах тохиолдолд урамшууллын хүсэлт санхүүд илгээгдэх ба ажилчинд мэдэгдэл очих болно.",
//       [
//         { text: "Цуцлах", style: "cancel" },
//         {
//           text: "Туршилтын хугацаа",
//           onPress: async () => {
//             await axios.patch(
//               `http://192.168.10.210:4000/hr/referral/${referralId}/bonus100`,
//             );
//             setTimeout(() => {
//               setStatus("BONUS100");
//               router.back();
//             }, 300);
//           },
//           style: "default",
//         },
//         {
//           text: "Бүтэн цагаар",
//           onPress: async () => {
//             await axios.patch(
//               `http://192.168.10.210:4000/hr/referral/${referralId}/bonus200`,
//             );
//             setTimeout(() => {
//               setStatus("BONUS200");
//               router.back();
//             }, 300);
//           },
//           style: "default",
//         },
//       ],
//     );
//   };

//   const handleReject = () => {
//     Alert.alert(
//       "Татгалзах уу?",
//       "Татгалзсан тохиолдолд санал болгосон ажилчинд мэдэгдэл очих болно.",
//       [
//         { text: "Буцах", style: "cancel" },
//         {
//           text: "Татгалзах",
//           onPress: async () => {
//             await axios.patch(
//               `http://192.168.10.210:4000/hr/referral/${referralId}/rejected`,
//             );
//             setTimeout(() => {
//               setStatus("REJECTED");
//               router.back();
//             }, 300);
//           },
//           style: "destructive",
//         },
//       ],
//     );
//   };

//   return (
//     <View
//       style={[
//         styles.mainContainer,
//         { backgroundColor: scheme === "dark" ? "#191a1bff" : "#f0f6ff" },
//       ]}
//     >
//       <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
//         <View style={styles.card}>
//           <View style={styles.headerRow}>
//             <Text style={styles.cardTitle}>Санал болгогч ажилтны мэдээлэл</Text>
//           </View>

//           {employee && (
//             <View style={styles.infoList}>
//               <View style={styles.infoStyle}>
//                 <Text style={styles.label}>Нэр:</Text>
//                 <Text style={styles.value}>
//                   {employee.employeeFirstName} {employee.employeeLastName}
//                 </Text>
//               </View>

//               {employee && (
//                 <Pressable
//                   onPress={() => {
//                     if (employee.employeeTelNumber) {
//                       const cleanNumber = employee.employeeTelNumber.replace(
//                         /\s/g,
//                         "",
//                       );
//                       Linking.openURL(`tel:${cleanNumber}`);
//                     }
//                   }}
//                   style={({ pressed }) => [
//                     styles.infoStyle,
//                     { opacity: pressed ? 0.5 : 1 },
//                   ]}
//                 >
//                   <Text style={styles.label}>Утас:</Text>
//                   <View style={{ flex: 1 }}>
//                     <Text
//                       style={[
//                         styles.value,
//                         { color: "#0077b5", textDecorationLine: "underline" },
//                       ]}
//                     >
//                       {employee.employeeTelNumber}
//                     </Text>
//                   </View>
//                 </Pressable>
//               )}

//               {employee && (
//                 <Pressable
//                   onPress={() => {
//                     if (employee.employeeEmail) {
//                       Linking.openURL(`mailto:${employee.employeeEmail}`);
//                     }
//                   }}
//                   style={({ pressed }) => [
//                     styles.infoStyle,
//                     { opacity: pressed ? 0.5 : 1, marginTop: 4 },
//                   ]}
//                 >
//                   <Text style={styles.label}>И-мэйл:</Text>
//                   <View style={{ flex: 1 }}>
//                     <Text
//                       style={[
//                         styles.value,
//                         { color: "#0077b5", textDecorationLine: "underline" },
//                       ]}
//                     >
//                       {employee.employeeEmail}
//                     </Text>
//                   </View>
//                 </Pressable>
//               )}

//               <View style={styles.infoStyle}>
//                 <Text style={styles.label}>Хэлтэс:</Text>
//                 <Text style={styles.value}>{employee.employeeDepartment}</Text>
//               </View>
//               <View style={styles.infoStyle}>
//                 <Text style={styles.label}>Түвшин:</Text>
//                 <Text style={styles.value}>
//                   {JobLevelLabels[employee.employeeJobLevel]}
//                 </Text>
//               </View>
//               <View style={styles.infoStyle}>
//                 <Text style={styles.label}>Ажлын төрөл:</Text>
//                 <Text style={styles.value}>
//                   {JobTypeLabels[employee.employeeJobType]}
//                 </Text>
//               </View>
//             </View>
//           )}

//           <View style={styles.divider} />
//           <View style={{ gap: 10 }}>
//             <View>
//               <Text style={styles.label}>
//                 Санал болгож буй хүнтэй харилцаа:
//               </Text>
//               <View style={{ flex: 1, marginTop: 5 }}>
//                 <Text style={styles.value}>
//                   {RelationLabels[referralData.relationWithCandidate]}
//                 </Text>
//               </View>
//             </View>
//             <View>
//               <Text style={styles.label}>Санал болгох шалтгаан:</Text>
//               <View style={{ flex: 1, marginTop: 5 }}>
//                 <Text style={styles.value}>{referralData.refferalReason}</Text>
//               </View>
//             </View>
//             <View style={styles.infoStyle}>
//               <Text style={styles.label}>Зөвшөөрөл авсан эсэх: </Text>
//               <Text style={styles.value}>
//                 {referralData.hasCandidateConsent ? "Тийм" : "Үгүй"}
//               </Text>
//             </View>
//             <View style={styles.infoStyle}>
//               <Text style={styles.label}>Одоо ажиллаж байгаа эсэх: </Text>
//               <Text style={styles.value}>
//                 {referralData.isNotCurrentEmployee ? "Тийм" : "Үгүй"}
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Санал болгож буй хүний мэдээлэл</Text>

//           <View style={styles.infoList}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <View style={styles.infoStyle}>
//                 <Text style={styles.label}>Нэр:</Text>
//                 <Text style={styles.value}>
//                   {referralData.candidateFirstName}
//                   {referralData.candidateLastName}
//                 </Text>
//               </View>

//               <View
//                 style={[
//                   styles.statusBadge,
//                   { backgroundColor: ReferralStatusColors[status!] + "20" },
//                 ]}
//               >
//                 <Text
//                   style={{
//                     color: ReferralStatusColors[status!],
//                     fontWeight: "600",
//                     fontSize: 12,
//                   }}
//                 >
//                   {ReferralStatusLabels[status!]}
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.infoStyle}>
//               <Text style={styles.label}>Утас:</Text>
//               <Text style={styles.value}>
//                 {referralData.candidateTelNumber}
//               </Text>
//             </View>

//             <Pressable
//               onPress={() => {
//                 if (referralData.candidateTelNumber) {
//                   const cleanNumber = referralData.candidateTelNumber.replace(
//                     /\s/g,
//                     "",
//                   );
//                   Linking.openURL(`tel:${cleanNumber}`);
//                 }
//               }}
//               style={({ pressed }) => [
//                 styles.infoStyle,
//                 { opacity: pressed ? 0.5 : 1 },
//               ]}
//             >
//               <Text style={styles.label}>Утас:</Text>
//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={[
//                     styles.value,
//                     { color: "#0077b5", textDecorationLine: "underline" },
//                   ]}
//                 >
//                   {referralData.candidateTelNumber || "Дугаар байхгүй"}
//                 </Text>
//               </View>
//             </Pressable>

//             <Pressable
//               onPress={() => {
//                 if (referralData.candidateEmail) {
//                   Linking.openURL(`mailto:${referralData.candidateEmail}`);
//                 }
//               }}
//               style={({ pressed }) => [
//                 styles.infoStyle,
//                 { opacity: pressed ? 0.5 : 1 },
//               ]}
//             >
//               <Text style={styles.label}>И-мэйл:</Text>
//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={[
//                     styles.value,
//                     { color: "#0077b5", textDecorationLine: "underline" },
//                   ]}
//                 >
//                   {referralData.candidateEmail}
//                 </Text>
//               </View>
//             </Pressable>

//             {referralData.candidateLinkedinUrl && (
//               <Pressable
//                 onPress={() =>
//                   Linking.openURL(referralData.candidateLinkedinUrl!)
//                 }
//                 style={styles.infoStyle}
//               >
//                 <Text style={styles.label}>LinkedIn:</Text>
//                 <View style={{ flex: 1 }}>
//                   <Text
//                     style={[
//                       styles.value,
//                       { color: "#0077b5", textDecorationLine: "underline" },
//                     ]}
//                   >
//                     {referralData.candidateLinkedinUrl}
//                   </Text>
//                 </View>
//               </Pressable>
//             )}

//             <View>
//               <Text style={styles.label}>Ажил эрхлэлтийн байдал:</Text>
//               <View style={{ flex: 1, marginTop: 5 }}>
//                 <Text style={styles.value}>
//                   {CandidateStatusLabels[referralData.candidateCurrentStatus]}
//                 </Text>
//               </View>
//             </View>

//             <View>
//               <Text style={styles.label}>Сонирхсон чиглэл:</Text>
//               <View style={{ flex: 1, marginTop: 5 }}>
//                 {referralData.candidateFieldOfInterest ? (
//                   <Text style={styles.value}>
//                     {referralData.candidateFieldOfInterest}
//                   </Text>
//                 ) : (
//                   <Text>•••</Text>
//                 )}
//               </View>
//             </View>
//           </View>

//           <View style={styles.divider} />

//           {resumeUrl && (
//             <Pressable
//               onPress={() => Linking.openURL(resumeUrl)}
//               style={styles.resumeButton}
//             >
//               <Text style={styles.resumeText}>Анкет үзэх (PDF)</Text>
//             </Pressable>
//           )}
//           <View style={{ marginTop: 20 }}>
//             <View style={styles.infoStyle}>
//               <Text style={styles.label}>Илгээсэн огноо:</Text>
//               <Text style={styles.value}>{referralData.createdAt}</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {status === "SUBMITTED" && (
//         <View style={styles.footer}>
//           <Pressable
//             style={[styles.actionButton, styles.rejectBtn]}
//             onPress={handleReject}
//           >
//             <Text style={styles.rejectBtnText}>Татгалзах</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.actionButton, styles.approveBtn]}
//             onPress={handleApprove}
//           >
//             <Text style={styles.approveBtnText}>Ажилд авах</Text>
//           </Pressable>
//         </View>
//       )}
//     </View>
//   );
// };

// export default ReferralDetail;

// const styles = StyleSheet.create({
//   mainContainer: { flex: 1, padding: 20 },
//   centered: { flex: 1, justifyContent: "center", alignItems: "center" },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: "#F2F0EF",
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//   },
//   headerRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   cardTitle: {
//     fontWeight: "700",
//     fontSize: 17,
//     color: "#1a1a1a",
//     marginBottom: 20,
//   },
//   statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
//   infoList: { gap: 10 },
//   infoStyle: { flexDirection: "row", gap: 8, alignItems: "center" },
//   label: { fontSize: 14, color: "#737373", lineHeight: 20 },
//   value: { color: "#1a1a1a", fontWeight: "500" },
//   divider: {
//     height: 2,
//     backgroundColor: "#F2F0EF",
//     marginVertical: 12,
//     borderRadius: 10,
//   },
//   resumeButton: {
//     paddingVertical: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#E5E5E5",
//     alignItems: "center",
//   },
//   resumeText: { fontSize: 14, fontWeight: "600" },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     padding: 20,
//     paddingBottom: 34,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderTopColor: "#E5E5E5",
//     gap: 12,
//   },
//   actionButton: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   approveBtn: { backgroundColor: "#10B981" },
//   approveBtnText: { color: "#fff", fontWeight: "600" },
//   rejectBtn: {
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#EF4444",
//   },
//   rejectBtnText: { color: "#EF4444", fontWeight: "600" },
// });

import { useAllReferrals } from "@/app/hook/use-all-referrals-hr";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import {
  JobLevelLabels,
  JobTypeLabels,
  mockEmployees,
  ReferralStatusColors,
  ReferralStatusEnum,
  ReferralStatusLabels,
  RelationLabels,
} from "@/lib/mockData";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
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
  const { allReferralsHR } = useAllReferrals();
  const scheme = useColorScheme();

  const referralData = useMemo(
    () => allReferralsHR.find((ref) => ref._id === referralId),
    [allReferralsHR, referralId],
  );

  const [status, setStatus] = useState<ReferralStatusEnum>(
    (referralData?.referralStatus as ReferralStatusEnum) ?? "SUBMITTED",
  );

  useEffect(() => {
    if (referralData?.referralStatus) {
      setStatus(referralData.referralStatus);
    }
  }, [referralData]);

  const safeStatus = (status ||
    referralData?.referralStatus ||
    "SUBMITTED") as ReferralStatusEnum;
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
          text: "Туршилтын хугацаа",
          onPress: async () => {
            try {
              await axios.patch(
                `http://192.168.10.210:4000/hr/referral/${referralId}/bonus100`,
              );
              setStatus("BONUS100");
              setTimeout(() => router.back(), 300);
            } catch {
              Alert.alert("Алдаа", "Сервертэй холбогдож чадсангүй.");
            }
          },
        },
        {
          text: "Бүтэн цагаар",
          onPress: async () => {
            try {
              await axios.patch(
                `http://192.168.10.210:4000/hr/referral/${referralId}/bonus200`,
              );
              setStatus("BONUS200");
              setTimeout(() => router.back(), 300);
            } catch {
              Alert.alert("Алдаа", "Сервертэй холбогдож чадсангүй.");
            }
          },
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
          style: "destructive",
          onPress: async () => {
            try {
              await axios.patch(
                `http://192.168.10.210:4000/hr/referral/${referralId}/rejected`,
              );
              setStatus("REJECTED");
              setTimeout(() => router.back(), 300);
            } catch {
              Alert.alert("Алдаа", "Сервертэй холбогдож чадсангүй.");
            }
          },
        },
      ],
    );
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: scheme === "dark" ? "#191a1bff" : "#f0f6ff" },
      ]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>Санал болгогч ажилтны мэдээлэл</Text>
          </View>

          {employee && (
            <View style={styles.infoList}>
              <View style={styles.infoStyle}>
                <Text style={styles.label}>Нэр:</Text>
                <Text style={styles.value}>
                  {employee.employeeFirstName} {employee.employeeLastName}
                </Text>
              </View>

              <Pressable
                onPress={() => {
                  if (employee.employeeTelNumber) {
                    const cleanNumber = employee.employeeTelNumber.replace(
                      /\s/g,
                      "",
                    );
                    Linking.openURL(`tel:${cleanNumber}`);
                  }
                }}
                style={({ pressed }) => [
                  styles.infoStyle,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <Text style={styles.label}>Утас:</Text>
                <Text
                  style={[
                    styles.value,
                    {
                      color: "#0077b5",
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  {employee.employeeTelNumber}
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  employee.employeeEmail &&
                  Linking.openURL(`mailto:${employee.employeeEmail}`)
                }
                style={({ pressed }) => [
                  styles.infoStyle,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <Text style={styles.label}>И-мэйл:</Text>
                <Text
                  style={[
                    styles.value,
                    {
                      color: "#0077b5",
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  {employee.employeeEmail}
                </Text>
              </Pressable>

              <View style={styles.infoStyle}>
                <Text style={styles.label}>Хэлтэс:</Text>
                <Text style={styles.value}>{employee.employeeDepartment}</Text>
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.label}>Түвшин:</Text>
                <Text style={styles.value}>
                  {JobLevelLabels[employee.employeeJobLevel]}
                </Text>
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.label}>Ажлын төрөл:</Text>
                <Text style={styles.value}>
                  {JobTypeLabels[employee.employeeJobType]}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.divider} />

          <View style={{ gap: 10 }}>
            <View>
              <Text style={styles.label}>
                Санал болгож буй хүнтэй харилцаа:
              </Text>
              <Text style={styles.value}>
                {RelationLabels[referralData.relationWithCandidate]}
              </Text>
            </View>

            <View>
              <Text style={styles.label}>Санал болгох шалтгаан:</Text>
              <Text style={styles.value}>{referralData.refferalReason}</Text>
            </View>

            <View style={styles.infoStyle}>
              <Text style={styles.label}>Зөвшөөрөл авсан эсэх:</Text>
              <Text style={styles.value}>
                {referralData.hasCandidateConsent ? "Тийм" : "Үгүй"}
              </Text>
            </View>

            <View style={styles.infoStyle}>
              <Text style={styles.label}>Одоо ажиллаж байгаа эсэх:</Text>
              <Text style={styles.value}>
                {referralData.isNotCurrentEmployee ? "Тийм" : "Үгүй"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Санал болгож буй хүний мэдээлэл</Text>

          <View style={styles.infoList}>
            <View style={styles.headerRow}>
              <View style={styles.infoStyle}>
                <Text style={styles.label}>Нэр:</Text>
                <Text style={styles.value}>
                  {referralData.candidateFirstName}{" "}
                  {referralData.candidateLastName}
                </Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: ReferralStatusColors[safeStatus] + "20",
                  },
                ]}
              >
                <Text
                  style={{
                    color: ReferralStatusColors[safeStatus],
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  {ReferralStatusLabels[safeStatus]}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => {
                const clean = referralData.candidateTelNumber?.replace(
                  /\s/g,
                  "",
                );
                clean && Linking.openURL(`tel:${clean}`);
              }}
              style={({ pressed }) => [
                styles.infoStyle,
                { opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Text style={styles.label}>Утас:</Text>
              <Text
                style={[
                  styles.value,
                  {
                    color: "#0077b5",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                {referralData.candidateTelNumber || "•••"}
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                referralData.candidateEmail &&
                Linking.openURL(`mailto:${referralData.candidateEmail}`)
              }
              style={({ pressed }) => [
                styles.infoStyle,
                { opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Text style={styles.label}>И-мэйл:</Text>
              <Text
                style={[
                  styles.value,
                  {
                    color: "#0077b5",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                {referralData.candidateEmail}
              </Text>
            </Pressable>
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

          <View style={{ marginTop: 20 }}>
            <View style={styles.infoStyle}>
              <Text style={styles.label}>Илгээсэн огноо:</Text>
              <Text style={styles.value}>{referralData.createdAt}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {safeStatus === "SUBMITTED" && (
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
  infoStyle: { flexDirection: "row", gap: 8, alignItems: "center" },
  label: { fontSize: 14, color: "#737373", lineHeight: 20 },
  value: { color: "#1a1a1a", fontWeight: "500" },
  divider: {
    height: 2,
    backgroundColor: "#F2F0EF",
    marginVertical: 12,
    borderRadius: 10,
  },
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
