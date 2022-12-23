import { Theme } from "@/style/theme"
import { ViewProps, ScrollView as SAV } from "react-native"
import { createBox } from "@shopify/restyle"
import React from "react"

const ScrollableView = createBox<Theme, ViewProps>(SAV)

export type ScrollableViewProps = React.ComponentProps<typeof ScrollableView>

const ScrollView: React.FC<ScrollableViewProps> = ({ children, ...props }) => {
  return (
    <ScrollableView {...props} paddingVertical={"md"} minHeight={100} flex={1}>
      {children}
    </ScrollableView>
  )
}

export default ScrollView
