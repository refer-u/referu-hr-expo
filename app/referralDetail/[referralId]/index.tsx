import { mockReferralDetails } from "@/lib/mockData";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const index = () => {
  const { referralId } = useLocalSearchParams<{ referralId: string }>();

  //   const chosenReferral = mockReferralDetails.find(
  //     (referral) => referral.id === referralId
  //   );

  const chosenReferral = mockReferralDetails.find(
    (referral) => referral.id === referralId
  );

  console.log({ chosenReferral });

  //   const filteredReferralDetail = mockReferralDetails.filter(
  //     (referrals) => referrals.id === jobId
  //   );

  //   console.log({ filteredReferralDetail });

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>
        {chosenReferral && (
          <View>
            <Pressable>
              <Text>{chosenReferral.candidateName}</Text>
            </Pressable>

            <Pressable>
              <Text>{chosenReferral.status}</Text>
            </Pressable>
            <Text>{chosenReferral.employeeName}</Text>

            <Text>{chosenReferral.candidateInterestedField}</Text>
          </View>
        )}
      </Text>
    </View>
  );
};

export default index;
