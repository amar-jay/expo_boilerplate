import { Button as NButton } from "react-native"
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions
} from "@shopify/restyle"

import Touchable from "./touchable"
import type { Theme } from "@/style/theme"

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor
])

export type ButtonProps = RestyleProps & {
  onPress: () => void
  title: string
}

const Button = ({ onPress, title, ...rest }: ButtonProps) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <Touchable {...(props as any)} onPress={onPress}>
      <NButton {...props} title={title} />
    </Touchable>
  )
}

export default Button
