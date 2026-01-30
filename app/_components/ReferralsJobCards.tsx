import { Fonts } from "@/constants/theme";
import { ReferralType } from "@/lib/type";
import { hrPostedJobs } from "@/lib/utils/get-datas";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAllReferrals } from "../hook/use-all-referrals-hr";

export default function ReferralsJobCards() {
  const router = useRouter();
  const { allReferralsHR } = useAllReferrals();
  console.log({ allReferralsHR });

  // const referralJobs = hrPostedJobs
  //   .map((job) => {
  //     const submittedReferrals = mockReferrals.filter(
  //       (ref) =>
  //         ref.postedJobId === job._id && ref.referralStatus === "SUBMITTED",
  //     );

  //     return {
  //       ...job,
  //       referralCount: submittedReferrals.length,
  //     };
  //   })
  //   .filter((job) => job.referralCount > 0);

  const submittedReferrals: ReferralType["referralStatus"][] = ["SUBMITTED"];

  const submittedJobs = hrPostedJobs.filter((job) =>
    allReferralsHR.find(
      (referral) =>
        referral.postedJobId === job._id &&
        submittedReferrals.includes(referral.referralStatus),
    ),
  );

  const handleReferrals = (jobId: string) => {
    router.push({ pathname: "/referrals/[jobId]", params: { jobId } });
  };

  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
          }}
        >
          {submittedJobs.map((job) => {
            const jobReferrals = allReferralsHR.filter(
              (referral) => referral.postedJobId === job._id,
            );
            return (
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
                      <View style={styles.countBadge}>
                        <Text
                          style={{
                            color: "#193cb8",
                            fontWeight: 600,
                            fontSize: 12,
                          }}
                        >
                          {jobReferrals.length} санал
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.departmentTitle}>
                      {job.jobDepartment}
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

// import { useAllReferrals } from "@/app/hook/use-all-referrals-hr";
// import { Fonts } from "@/constants/theme";
// import { useColorScheme } from "@/hooks/use-color-scheme.web";
// import {
//   mockEmployees,
//   ReferralStatusColors,
//   ReferralStatusLabels,
// } from "@/lib/mockData";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import React from "react";
// import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// const ReferralsPage = () => {
//   const router = useRouter();
//   const { jobId } = useLocalSearchParams<{ jobId: string }>();
//   const { allReferralsHR, loading } = useAllReferrals();
//   const scheme = useColorScheme();
//   console.log({ allReferralsHR });

//   const filteredReferrals =
//     allReferralsHR?.filter((referral) => referral.postedJobId === jobId) || [];

//   const handleReferralDetail = (referralId: string) => {
//     router.push({
//       pathname: "/referralDetail/[referralId]",
//       params: { referralId },
//     });
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: scheme === "dark" ? "#191a1bff" : "#f0f6ff",
//         padding: 28,
//       }}
//     >
//       <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
//         <View style={{ flexDirection: "column" }}>
//           {loading && (
//             <Text style={{ textAlign: "center", marginBottom: 16 }}>
//               Loading...
//             </Text>
//           )}

//           {filteredReferrals.map((referral) => {
//             const employee = mockEmployees.find(
//               (emp) => emp._id === referral.referringEmployeeId,
//             );

//             return (
//               <View key={referral._id} style={{ marginBottom: 16 }}>
//                 <Pressable onPress={() => handleReferralDetail(referral._id)}>
//                   <View style={styles.cardContainer}>
//                     <View
//                       style={{
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                       }}
//                     >
//                       <View style={{ flexDirection: "column" }}>
//                         <Text style={styles.titleText}>
//                           {referral.candidateFirstName}{" "}
//                           {referral.candidateLastName}
//                         </Text>
//                         <Text style={{ color: "gray", fontSize: 12 }}>
//                           Санал болгосон
//                         </Text>
//                       </View>

//                       {/* Badge */}
//                       <View
//                         style={[
//                           styles.countBadge,
//                           {
//                             backgroundColor:
//                               ReferralStatusColors[referral.referralStatus] +
//                               "20",
//                           },
//                         ]}
//                       >
//                         <Text
//                           style={{
//                             color:
//                               ReferralStatusColors[referral.referralStatus],
//                             fontWeight: "600",
//                             fontSize: 12,
//                           }}
//                         >
//                           {ReferralStatusLabels[referral.referralStatus]}
//                         </Text>
//                       </View>
//                     </View>

//                     {/* Separator */}
//                     <View
//                       style={{
//                         width: "100%",
//                         borderColor: "#e7e5e5ff",
//                         opacity: 5,
//                         borderWidth: 0.5,
//                         marginTop: 8,
//                       }}
//                     />

//                     {employee && (
//                       <View style={{ marginTop: 8 }}>
//                         <Text
//                           style={{
//                             fontSize: 16,
//                             fontWeight: "500",
//                             fontFamily: Fonts.sans,
//                           }}
//                         >
//                           {employee.employeeFirstName}{" "}
//                           {employee.employeeLastName}
//                         </Text>
//                         <View
//                           style={{
//                             flexDirection: "row",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Text style={styles.employeeJobTitle}>
//                             {employee.employeeDepartment}
//                           </Text>
//                           <Text style={styles.employeeJobTitle}>•</Text>
//                           <Text style={styles.employeeJobTitle}>
//                             {employee.employeeJobTitle}
//                           </Text>
//                         </View>
//                       </View>
//                     )}

//                     <Text style={styles.departmentTitle}>
//                       Огноо: {referral.createdAt}
//                     </Text>
//                   </View>
//                 </Pressable>
//               </View>
//             );
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default ReferralsPage;

// const styles = StyleSheet.create({
//   cardContainer: {
//     borderWidth: 1,
//     borderRadius: 10,
//     height: "auto",
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     borderColor: "#F2F0EF",
//     flexDirection: "column",
//     backgroundColor: "#fff",

//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,

//     elevation: 3,
//   },
//   titleText: {
//     fontSize: 18,
//     fontWeight: "600",
//     fontFamily: Fonts.sans,
//   },
//   departmentTitle: {
//     color: "#737373",
//     marginTop: 12,
//     fontSize: 14,
//   },
//   employeeJobTitle: {
//     color: "#737373",
//     marginTop: 5,
//     fontSize: 14,
//   },
//   countBadge: {
//     backgroundColor: "#dbeafe",
//     width: "auto",
//     paddingVertical: 2,
//     paddingHorizontal: 8,
//     flexDirection: "row",
//     justifyContent: "center",
//     borderRadius: 12,
//   },
// });
