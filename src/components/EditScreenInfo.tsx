import * as WebBrowser from "expo-web-browser"
import { Button, StyleSheet, TouchableOpacity } from "react-native"

import Colors from "../constants/Colors"
import { MonoText } from "./StyledText"
import { Text, Box } from "@/components/atoms"

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Box>
      <Box marginHorizontal="lg">
        <Box style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>{path}</MonoText>
        </Box>

        <Text style={styles.getStartedText}>qweoiawjfj</Text>
      </Box>

      <Box style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Button title="Go To My site" />
        </TouchableOpacity>
      </Box>
    </Box>
  )
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync("https://themanan.me")
}

const styles = StyleSheet.create({
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center"
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: "center"
  }
})
