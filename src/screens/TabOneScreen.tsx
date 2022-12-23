import { StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, Box as View } from "@/components/atoms"
import { RootTabScreenProps } from "types"

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"One">) {
  return (
    <View alignItems={"center"} justifyContent="center" flex={1}>
      <Text variant={"title"}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
})
