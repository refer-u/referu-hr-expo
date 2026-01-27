import { Redirect, Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuth } from "@clerk/clerk-expo";
import { User } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const { isLoaded, isSignedIn } = useAuth();
  // const { user } = useUser();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isLoaded && !user) {
  //     router.navigate("/(home)");
  //   }
  // }, [isLoaded, user]);

  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    // If not logged in, send them to sign-in
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Нүүр",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Нэмэх",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="plus.circle.fill" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          title: "Миний",
          tabBarIcon: ({ color }) => (
            <User color={color} />

            // <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
