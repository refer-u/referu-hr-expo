import { tokenCache } from "@clerk/clerk-expo/token-cache";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { ClerkProvider } from "@clerk/clerk-expo";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publishable key.");
}

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  // console.log("Clerk Key Loaded:", publishableKey?.startsWith("pk_")); env check
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
          {/* <ClerkLoaded> */}
          {/* <SignedIn> */}
          <Stack>
            {/* <Stack.Screen name="(home)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />

            <Stack.Screen
              name="job/[id]/index"
              options={{
                title: "Ажлын дэлгэрэнгүй",
                headerBackTitle: "Буцах",
              }}
            />

            <Stack.Screen
              name="job/[id]/edit"
              options={{
                title: "Зар засах",
                headerBackTitle: "Буцах",
              }}
            />

            <Stack.Screen
              name="referrals"
              options={{
                title: "Санал ирсэн хүмүүс",
                headerBackTitle: "Буцах",
                headerShadowVisible: false,
              }}
            />

            <Stack.Screen
              name="referralDetail"
              options={{
                title: "Саналын дэлгэрэнгүй",
                headerBackTitle: "Буцах",
                headerShadowVisible: false,
              }}
            />

            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          {/* </SignedIn> */}
          {/* </ClerkLoaded> */}
        </ClerkProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
