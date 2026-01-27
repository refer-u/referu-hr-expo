// import { useAuth } from "@clerk/clerk-expo";
// import { Redirect, Stack } from "expo-router";

import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

// export default function AuthRoutesLayout() {
//   const { isSignedIn } = useAuth();

//   if (isSignedIn) {
//     return <Redirect href={"/(tabs)"} />;
//   }

//   return <Stack />;
// }

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null; // Wait for Clerk

  if (isSignedIn) {
    // If user is already logged in, send them to the main tabs
    return <Redirect href="/(tabs)" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
