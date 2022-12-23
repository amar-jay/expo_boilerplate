import { useTheme, useResponsiveProp } from '@shopify/restyle'
import { Theme } from '@/style/theme';
import { Feather } from '@expo/vector-icons';
import { ColorProps } from '@shopify/restyle';

export type IconProps = React.ComponentProps<typeof Feather>

type Props = ColorProps<Theme> & Omit<IconProps, "color">;
const Icon: React.FC<Props> = ({color="$foreground", ...props}) => {
	const theme = useTheme();
	const colorProp = useResponsiveProp(color);
	const _color = theme.colors[colorProp || '$foreground']

	return <Feather {...props} color={_color} />

}

export default Icon;