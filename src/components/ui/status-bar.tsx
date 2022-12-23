import { Theme } from '@/style/theme'
import { useTheme } from '@shopify/restyle'
import { StatusBar as NStatusBar} from 'expo-status-bar'

const StatusBar:React.FC = () => {
	const theme = useTheme<Theme>();
	const color = theme.colors.$sidebarBackground || "white";

	return (
		<NStatusBar 
			backgroundColor={color}
			translucent
			style={theme.statusBar.barStyle}
			animated={true}/>
	)
}

export default StatusBar;