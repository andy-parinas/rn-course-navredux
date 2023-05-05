import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton() {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    // backgroundColor: "#ccc",
    opacity: 0.5,
  },
  container: {
    marginRight: 5,
  },
});
