import { Box, Text } from "@/components/atoms"
import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"

export default function HomeScreen() {
  return (
    <Box style={styles.container}>
      <Text variant="title">Home</Text>
      <Box style={styles.separator} />
      <EditScreenInfo path="/screens/HomeScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
})
