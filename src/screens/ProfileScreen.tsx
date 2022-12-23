import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, ScrollableView, Box, Button } from "@/components/atoms"
import React from "react"
import { handleWebPage } from "@/hooks"

const SectionBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    alignItems={"center"}
    justifyContent={"center"}
    marginHorizontal={"lg"}
    marginTop={"md"}
  >
    {children}
  </Box>
)
export default function ProfileScreen() {
  return (
    <ScrollableView>
      <Text variant={"title"}>Profile</Text>
      <SectionBox>
        <Text variant={"sectionTitle"}>Bio</Text>
        <Box marginBottom={"md"}>
          <Text textAlign={"justify"}>
            I am Abdel-manan Abdel-rahman, born and raised in Accra, Ghana.
            Attended High School at Mfantsipim School and currently pursuing my
            Bachelor degree in Electrical and Electronics Engineering at Marmara
            Üniversitesi. I am an Art, Photography and Engineering enthusiast.
          </Text>
        </Box>

        <Text variant={"sectionTitle"}>Portfolio</Text>
        <Box>
          <Text>
            I am Abdel-manan Abdel-rahman, born and raised in Accra, Ghana.
            Attended High School at Mfantsipim School and currently pursuing my
            Bachelor degree in Electrical and Electronics Engineering at Marmara
            Üniversitesi. I am an Art, Photography and Engineering enthusiast.
          </Text>
          <Button
            title={"Go to Portfolio"}
            marginVertical={"lg"}
            borderRadius={"lg"}
            onPress={() => handleWebPage("https://github.com/amar-jay")}
          />
        </Box>

        <Text variant={"sectionTitle"}>Work</Text>
        <Box>
          <Text>
            I am Abdel-manan Abdel-rahman, born and raised in Accra, Ghana.
            Attended High School at Mfantsipim School and currently pursuing my
            Bachelor degree in Electrical and Electronics Engineering at Marmara
            Üniversitesi. I am an Art, Photography and Engineering enthusiast.
          </Text>
        </Box>
      </SectionBox>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollableView>
  )
}
