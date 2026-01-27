import { useClerk, useUser } from "@clerk/clerk-expo";
import React, { useState } from "react";
import {
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function UserButton() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [menuVisible, setMenuVisible] = useState(false);

  if (!user) return null;

  return (
    <View>
      {/* user button */}
      <Pressable onPress={() => setMenuVisible(true)}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 36, height: 36, borderRadius: 18 }}
        />
      </Pressable>

      {/* dropdown menu */}
      <Modal
        transparent
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => {
                signOut();
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuItem}>Sign Out</Text>
              {/* <Text onPress={() => SignOutButton()}>Sign Out</Text> */}
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menu: {
    position: "absolute",
    top: 100,
    right: 4,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 10,
    shadowOpacity: 0.1,
  },
  menuItem: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    fontSize: 12,
    color: "red",
  },
});
