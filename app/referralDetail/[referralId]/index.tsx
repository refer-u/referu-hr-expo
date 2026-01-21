// import { mockReferralDetails } from "@/lib/mockData";
// import { useLocalSearchParams } from "expo-router";
// import React from "react";
// import { Pressable, Text, View } from "react-native";

// const index = () => {
//   const { referralId } = useLocalSearchParams<{ referralId: string }>();

//   //   const chosenReferral = mockReferralDetails.find(
//   //     (referral) => referral.id === referralId
//   //   );

//   const chosenReferral = mockReferralDetails.find(
//     (referral) => referral.id === referralId
//   );

//   console.log({ chosenReferral });

//   //   const filteredReferralDetail = mockReferralDetails.filter(
//   //     (referrals) => referrals.id === jobId
//   //   );

//   //   console.log({ filteredReferralDetail });

//   return (
//     <View style={{ flexDirection: "column" }}>
//       <Text>
//         {chosenReferral && (
//           <View>
//             <Pressable>
//               <Text>{chosenReferral.candidateName}</Text>
//             </Pressable>

//             <Pressable>
//               <Text>{chosenReferral.status}</Text>
//             </Pressable>
//             <Text>{chosenReferral.employeeName}</Text>

//             <Text>{chosenReferral.candidateInterestedField}</Text>
//           </View>
//         )}
//       </Text>
//     </View>
//   );
// };

// export default index;

import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { mockEmployees, mockPostedJobs, mockReferrals } from "@/lib/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

const ReferralDetail = () => {
  const router = useRouter();
  const { referralId } = useLocalSearchParams<{ referralId: string }>();
  const scheme = useColorScheme();

  const referral = mockReferrals.find((ref) => ref._id === referralId);

  if (!referral) {
    return (
      <View>
        <Text>Referral not found</Text>
      </View>
    );
  }

  const employee = mockEmployees.find(
    (emp) => emp._id === referral.referringEmployeeId
  );

  const job = mockPostedJobs.find((job) => job._id === referral.postedJobId);

  const resumeUrl = referral.candidateResume;

  return (
    <View
      style={{
        padding: 28,

        backgroundColor: scheme === "dark" ? "#191a1bff" : "#ffffffff",
        height: "100%",
        gap: 20,
      }}
    >
      <View
        style={{
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
        }}
      >
        {/* Back */}
        {/* <Pressable onPress={() => router.back()}>
        <Text>{"< Back"}</Text>
      </Pressable> */}

        {/* Employee */}
        {employee && (
          <>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              Санал болгогч ажилтны мэдээлэл
            </Text>
            <Text>
              Нэр: {employee.employeeFirstName} {employee.employeeLastName}
            </Text>
            <Text>Утас: {employee.employeeTelNumber}</Text>
            <Text>И-мэйл: {employee.employeeEmail}</Text>
            <Text>Хэлтэс: {employee.employeeDepartment}</Text>
            <Text>Түвшин: {employee.employeeJobLevel}</Text>
            <Text>Ажлын төрөл: {employee.employeeJobType}</Text>
          </>
        )}
        <View
          style={{
            width: "100%",
            borderColor: "#e7e5e5ff",
            opacity: 5,
            borderWidth: 0.5,
          }}
        />

        {/* Referral */}
        {/* <Text style={{ fontWeight: "600", fontSize: 18 }}>Referral Info</Text> */}
        <Text>Нэр дэвшигчтэй харилцаа: {referral.relationWithCandidate}</Text>
        <Text>Санал болгох шалтгаан: {referral.referralReason}</Text>
        {/* <Text>Referral Status: {referral.referralStatus}</Text> */}
        <Text>
          Зөвшөөрөл авсан: {referral.hasCandidateConsent ? "Yes" : "No"}
        </Text>
      </View>
      <View
        style={{
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
        }}
      >
        {/* Candidate */}
        <Text style={{ fontWeight: "600", fontSize: 18 }}>
          Санал болгож буй хүний мэдээлэл
        </Text>
        <Text>
          Нэр: {referral.candidateFirstName} {referral.candidateLastName}
        </Text>
        <Text>Утас: {referral.candidateTelNumber}</Text>
        <Text>И-мэйл: {referral.candidateEmail}</Text>
        {referral.candidateLinkedinUrl && (
          <Text>LinkedIn: {referral.candidateLinkedinUrl}</Text>
        )}

        {referral.candidateFieldOfInterest && (
          <Text>Сонирхсон чиглэл: {referral.candidateFieldOfInterest}</Text>
        )}
        <Text>Одоо ажиллаж байгаа: {referral.candidateCurrentStatus}</Text>

        <View
          style={{
            width: "100%",
            borderColor: "#e7e5e5ff",
            opacity: 5,
            borderWidth: 0.5,
          }}
        />

        {/* {referral.candidateResume && (
          <View>
            <Pressable>
              <Link href={referral.candidateResume}>
              </Link>
            </Pressable>
          </View>
        )} */}

        {/* <div className="pt-2 border-t border-border">
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href={referrals.cvUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Анкет үзэх (PDF)
              </a>
            </Button>
          </div> */}

        {resumeUrl && (
          <Pressable
            onPress={() => Linking.openURL(resumeUrl)}
            style={styles.resumeButton}
          >
            <Text style={styles.resumeText}>Анкет үзэх (PDF)</Text>
          </Pressable>
        )}

        {/* Job */}
        {job && (
          <>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>Job</Text>
            <Text>Title: {job.jobTitle}</Text>
            <Text>Department: {job.jobDepartment}</Text>
            <Text>
              Salary: {job.salaryMin} – {job.salaryMax}
            </Text>
          </>
        )}

        {/* Bonus */}
        {referral.bonusAmount && (
          <>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>Bonus</Text>
            <Text>Amount: {referral.bonusAmount}</Text>
            <Text>Approved At: {referral.bonusApprovedAt}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default ReferralDetail;
const styles = StyleSheet.create({
  resumeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#73737333",
  },

  resumeText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
