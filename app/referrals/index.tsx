// import { mockJobs } from "@/lib/mockData";
// import { useRouter } from "expo-router";
// import React from "react";
// import { Pressable, Text, View } from "react-native";

// export default function Referrals() {
//   const router = useRouter();

//   const handleReferralsJob = (jobId: string) => {
//     router.push({ pathname: "/referrals/[jobId]", params: { jobId } });
//   };
//   return (
//     <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
//       <View>
//         {mockJobs.map((jobs) => (
//           <View>
//             <Pressable onPress={() => handleReferralsJob(jobs.id)}>
//               <Text>{jobs.title}</Text>
//             </Pressable>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }
