import { atom } from "jotai"
import { Theme, ThemeNames, themes } from "@/style/theme"

// this stores current theme being used as string
export const activeThemeNameAtom = atom<ThemeNames>("dark")

// this stores current theme being used as value
export const activeThemeAtom = atom<Theme>(get => {
  const themeId = get(activeThemeNameAtom)
  const themeIdx = themes.findIndex(t => t.id === themeId)

  if (themeIdx >= 0) return themes[themeIdx].theme

  return themes[0].theme
})
