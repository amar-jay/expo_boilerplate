import { createTheme } from "@shopify/restyle";
import light, { Theme } from './light';
import { StatusBarStyle } from 'expo-status-bar';

const colorPalette = {
	slate00: '#1b1c1d',
	slate10: '#202225',
	slate20: '#292c2f',
	slate30: '#2e3235',
	slate40: '#35393d',
	slate100: '#767577',
	slate900: '#dddddd',
	blue70: '#2185d0'
}

const theme = createTheme<Theme>({
	...light,
	  colors: {
    ...light.colors,
    $primary: colorPalette.blue70,
//    $secondary: colorPalette.slate00,
    $windowBackground: colorPalette.slate10,
    $background: colorPalette.slate10,
    $foreground: colorPalette.slate900,
//    $separator: colorPalette.slate100,
    $navbarBackground: colorPalette.slate20,
    $navbarBorderBottom: colorPalette.slate00,
    $headerBarBackground: colorPalette.slate40,
    $sidebarBackground: colorPalette.slate30,
    $sidebarForeground: colorPalette.slate900,
    $sidebarSeparator: colorPalette.slate900 + '20',
    $fieldInputBackground: colorPalette.slate00,
    $fieldInputPlaceholderTextColor: colorPalette.slate100
  },
  statusBar: {
    barStyle: 'light' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
 //     shadowColor: 'black',
 //     shadowOffset: { width: 0, height: 2 },
 //     shadowOpacity: 0.4,
 //     shadowRadius: 8
    }
  }
})

export default theme;