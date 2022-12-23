import { createTheme } from "@shopify/restyle";
import { StatusBarStyle } from "expo-status-bar";

const colorPalette = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper100: '#aeaeae',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185d0',
  navy20: '#171a21',
  navy900: '#b9babc'
}

const theme = createTheme({
	spacing: {
		'0': 0,
		xs: 4,
		sm: 8,
		md: 12,
		lg: 16,
		xl: 24,
		xxl: 48,
		hg: 128
	},
	breakpoints: {
		phone: 0,
		tablet: 768
	},
	colors: {
		white: colorPalette.white,
		black: colorPalette.black,
		red: colorPalette.red,
		blue: colorPalette.blue,
		yellow: colorPalette.yellow,

		$primary: colorPalette.blue70,
		$windowBackground: '#f0f0f0',
		$background: colorPalette.paper10,
		$foreground: colorPalette.paper900,
		$navbarBackground: colorPalette.paper10,
		$navbarBorderBottom: colorPalette.paper100,
		$sidebarBackground: colorPalette.navy20,
		$sidebarForeground: colorPalette.navy900,
		$sidebarSeparator: colorPalette.paper00 + '20',
		$headerBarBackground: colorPalette.paper20,
		$fieldInputBackground: colorPalette.paper00,
		$fieldInputPlaceholderTextColor: colorPalette.paper300
	},
	borderRadii: {
		xs: 4,
		sm: 16,
		md: 24,
		lg: 64,
		hg: 128
	},
	statusBar: {
		barStyle: 'dark' as StatusBarStyle
	},
	textVariants: {
		defaults: {
		color: '$foreground',
		fontSize: 16
		},
		sidebar: {
		color: '$sidebarForeground'
		},
		navbar: {
		fontSize: 20
		}
	},
	barVariants: {
		headerBar: {
		bg: '$headerBarBackground',
		borderRadius: 'hg'
		}
	}
})

export default theme;
export type Theme = typeof theme;