import { mockReferrals } from "@/lib/mockData";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const index = () => {
  const router = useRouter();

  const { jobId } = useLocalSearchParams<{ jobId: string }>();
  console.log({ jobId });

  const filteredReferrals = mockReferrals.filter(
    (referrals) => referrals.jobId.toString() === jobId
  );

  console.log({ filteredReferrals });

  const handleReferralDetail = (referralId: string) => {
    router.push({
      pathname: "/referralDetail/[referralId]",
      params: { referralId },
    });
    console.log({ referralId });
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>
        {filteredReferrals.map((referral) => (
          <View key={referral.id}>
            <Pressable onPress={() => handleReferralDetail(referral.id)}>
              <Text>{referral.candidateName}</Text>
            </Pressable>

            <Pressable>
              <Text>{referral.status}</Text>
            </Pressable>
          </View>
        ))}
      </Text>
    </View>
  );
};

export default index;
