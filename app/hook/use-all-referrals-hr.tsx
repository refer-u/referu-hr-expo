// import { ReferralType } from "@/lib/type";
// import { useAuth } from "@clerk/clerk-expo";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const API_URL = "http://192.168.10.210:4000";

// export const useAllReferrals = () => {
//   const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
//   const [loading, setLoading] = useState(false);

//   const { isLoaded, isSignedIn, getToken } = useAuth();
//   console.log({ allReferralsHR });

//   useEffect(() => {
//     const getReferrals = async () => {
//       if (!isLoaded || !isSignedIn) return;

//       try {
//         setLoading(true);
//         const token = await getToken();

//         const res = await axios.get(`${API_URL}/hr/referral`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.data?.data) {
//           setAllReferralsHR(res.data.data);
//         } else {
//           console.warn("Unexpected response from backend:", res.data);
//         }
//       } catch (error: unknown) {
//         if (axios.isAxiosError(error)) {
//           console.error("Fetch Error:", error.response?.data || error.message);
//         } else if (error instanceof Error) {
//           console.error("Unexpected Error:", error.message);
//         } else {
//           console.error("Unknown error:", error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     getReferrals();
//   }, [isLoaded, isSignedIn]);

//   return { allReferralsHR, loading };
// };

"use client";

import { ReferralType } from "@/lib/type";
import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAllReferrals = () => {
  const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    const getReferrals = async () => {
      try {
        const token = await getToken();

        setLoading(true);
        const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAllReferralsHR(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getReferrals();
  }, []);

  return {
    allReferralsHR,
    loading,
  };
};
