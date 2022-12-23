import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, SafeAreaView } from "@/components/atoms"

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <Text variant={"title"}>Profile</Text>
      <Text style={{ fontWeight: "bold" }} textAlign="center">
        Name: John Doe
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  )
}
