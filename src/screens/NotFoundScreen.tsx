import { StyleSheet, TouchableOpacity } from "react-native"

import { Text, Box as View } from "@/components/atoms"
import { RootStackScreenProps } from "types"

export default function NotFoundScreen({
  navigation
}: RootStackScreenProps<"NotFound">) {
  return (
    <View>
      <Text variant={"title"} fontSize={30}>
        This screen doesn't exist.
      </Text>
      <TouchableOpacity onPress={() => navigation.replace("Root")}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  )
}
