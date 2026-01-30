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

// "use client";

// import { realtimeClient } from "@/lib/ably";
// import { ReferralType } from "@/lib/type";
// import { useAuth } from "@clerk/clerk-expo";
// import type * as Ably from "ably";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useAllReferrals = () => {
//   const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { getToken } = useAuth();

//   useEffect(() => {
//     realtimeClient.connection.on("connected", () => {
//       console.log("⚡ Ably connected!");
//     });
//     const channel = realtimeClient.channels.get("sessions");
//     const getReferrals = async (message: Ably.Message) => {
//       if (message.name !== "session-created") return;

//       try {
//         const token = await getToken();

//         setLoading(true);
//         const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setAllReferralsHR(res.data.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // getReferrals();
//     channel.subscribe("session-created", getReferrals);
//     return () => {
//       channel.unsubscribe("session-created", getReferrals);
//     };
//   }, []);

//   return {
//     allReferralsHR,
//     loading,
//   };
// };

// "use client";

// import { realtimeClient } from "@/lib/ably";
// import { ReferralType } from "@/lib/type";
// import { useAuth } from "@clerk/clerk-expo";
// import type * as Ably from "ably";
// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";

// export const useAllReferrals = () => {
//   const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { getToken } = useAuth();

//   // Memoize the fetcher so it can be used in the effect and the listener
//   const fetchReferrals = useCallback(async () => {
//     try {
//       setLoading(true);
//       const token = await getToken();
//       const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllReferralsHR(res.data.data);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [getToken]);

//   useEffect(() => {
//     // 1. Initial Load
//     fetchReferrals();

//     // 2. Setup Real-time Listener
//     const channel = realtimeClient.channels.get("sessions");

//     const handleMessage = (message: Ably.Message) => {
//       if (message.name === "session-created") {
//         fetchReferrals();
//       }
//     };

//     channel.subscribe("session-created", handleMessage);

//     return () => {
//       channel.unsubscribe("session-created", handleMessage);
//     };
//   }, [fetchReferrals]); // Effect runs once, or if fetchReferrals changes

//   return {
//     allReferralsHR,
//     loading,
//     refetch: fetchReferrals, // Useful for "Pull to Refresh"
//   };
// };

// export const useAllReferrals = () => {
//   const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { getToken } = useAuth();

//   const fetchReferrals = useCallback(async () => {
//     // Avoid running if already loading
//     setLoading(true);
//     try {
//       const token = await getToken();
//       if (!token) return; // Guard clause

//       const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllReferralsHR(res.data.data);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//     // Remove getToken from here to prevent the infinite refresh
//   }, []);

//   useEffect(() => {
//     fetchReferrals();

//     const channel = realtimeClient.channels.get("sessions");
//     const handleMessage = (message: Ably.Message) => {
//       if (message.name === "session-created") {
//         fetchReferrals();
//       }
//     };

//     channel.subscribe("session-created", handleMessage);
//     return () => {
//       channel.unsubscribe("session-created", handleMessage);
//     };
//   }, [fetchReferrals]);

//   return { allReferralsHR, loading, refetch: fetchReferrals };
// };

// export const useAllReferrals = () => {
//   const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { getToken } = useAuth();

//   const fetchReferrals = useCallback(async () => {
//     setLoading(true);
//     try {
//       const token = await getToken();
//       if (!token) return;

//       const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllReferralsHR(res.data.data);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []); // Stable: Empty deps mean this function reference never changes

//   useEffect(() => {
//     fetchReferrals(); // Initial load

//     const channel = realtimeClient.channels.get("sessions");
//     const handleMessage = (message: Ably.Message) => {
//       if (message.name === "session-created") {
//         fetchReferrals();
//       }
//     };

//     channel.subscribe("session-created", handleMessage);
//     return () => {
//       channel.unsubscribe("session-created", handleMessage);
//     };
//   }, [fetchReferrals]); // fetchReferrals is now stable

//   return { allReferralsHR, loading, refetch: fetchReferrals };
// };

"use client";

import { realtimeClient } from "@/lib/ably";
import { ReferralType } from "@/lib/type";
import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useAllReferrals = () => {
  const [allReferralsHR, setAllReferralsHR] = useState<ReferralType[]>([]);
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  const fetchReferrals = useCallback(async () => {
    setLoading(true);
    try {
      const token = await getToken();
      if (!token) return;
      const res = await axios.get("http://192.168.10.75:4000/hr/referral", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllReferralsHR(res.data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array to keep reference stable

  useEffect(() => {
    fetchReferrals();
    const channel = realtimeClient.channels.get("sessions");

    channel.subscribe("session-created", () => {
      console.log("🔔 Real-time update triggered");
      fetchReferrals();
    });

    return () => {
      channel.unsubscribe();
    };
  }, [fetchReferrals]);

  return { allReferralsHR, loading, refetch: fetchReferrals };
};
