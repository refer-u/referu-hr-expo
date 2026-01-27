// import { useClerk } from "@clerk/clerk-expo";
// import { useRouter } from "expo-router";
// import { Text, TouchableOpacity } from "react-native";

// export const SignOutButton = () => {
//   // Use `useClerk()` to access the `signOut()` function
//   const { signOut } = useClerk();
//   const router = useRouter();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       // Redirect to your desired page
//       router.replace("/");
//     } catch (err) {
//       // See https://clerk.com/docs/guides/development/custom-flows/error-handling
//       // for more info on error handling
//       console.error(JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <TouchableOpacity onPress={handleSignOut}>
//       <Text>Sign out</Text>
//     </TouchableOpacity>
//   );
// };

import { useAuth } from "@clerk/clerk-expo";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

export const SignOutButton = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      // Just sign out. Your (tabs)/_layout.tsx will handle the redirect.
      await signOut();
    } catch (err) {
      Alert.alert("Алдаа", "Системээс гарахад алдаа гарлаа.");
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={styles.buttonText}>Гарах</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 12,
    backgroundColor: "#ef4444",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
