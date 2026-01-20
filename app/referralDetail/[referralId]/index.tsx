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

import { mockEmployees, mockPostedJobs, mockReferrals } from "@/lib/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ReferralDetail = () => {
  const router = useRouter();
  const { referralId } = useLocalSearchParams<{ referralId: string }>();

  const referral = mockReferrals.find((ref) => ref._id === referralId);

  if (!referral) {
    return (
      <View>
        <Text>Referral not found</Text>
      </View>
    );
  }

  const employee = mockEmployees.find(
    (emp) => emp._id === referral.referringEmployeeId,
  );

  const job = mockPostedJobs.find((job) => job._id === referral.postedJobId);

  return (
    <View style={{ padding: 16, gap: 12 }}>
      {/* Back */}
      <Pressable onPress={() => router.back()}>
        <Text>{"< Back"}</Text>
      </Pressable>

      {/* Candidate */}
      <Text style={{ fontWeight: "600", fontSize: 18 }}>Candidate</Text>
      <Text>
        Name: {referral.candidateFirstName} {referral.candidateLastName}
      </Text>
      <Text>Phone: {referral.candidateTelNumber}</Text>
      <Text>Email: {referral.candidateEmail}</Text>
      {referral.candidateLinkedinUrl && (
        <Text>LinkedIn: {referral.candidateLinkedinUrl}</Text>
      )}
      {referral.candidateFieldOfInterest && (
        <Text>Interested Field: {referral.candidateFieldOfInterest}</Text>
      )}
      <Text>Status: {referral.candidateCurrentStatus}</Text>

      {/* Referral */}
      <Text style={{ fontWeight: "600", fontSize: 18 }}>Referral Info</Text>
      <Text>Relation: {referral.relationWithCandidate}</Text>
      <Text>Reason: {referral.referralReason}</Text>
      <Text>Referral Status: {referral.referralStatus}</Text>
      <Text>Consent Given: {referral.hasCandidateConsent ? "Yes" : "No"}</Text>

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

      {/* Employee */}
      {employee && (
        <>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>Referred By</Text>
          <Text>
            Name: {employee.employeeFirstName} {employee.employeeLastName}
          </Text>
          <Text>Department: {employee.employeeDepartment}</Text>
          <Text>Title: {employee.employeeJobTitle}</Text>
          <Text>Phone: {employee.employeeTelNumber}</Text>
          <Text>Email: {employee.employeeEmail}</Text>
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
  );
};

export default ReferralDetail;
