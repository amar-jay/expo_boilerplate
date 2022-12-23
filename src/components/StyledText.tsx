import { Text, TextProps } from "@/components/atoms"
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style]} />
}
