import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

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
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
