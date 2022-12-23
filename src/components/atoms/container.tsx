import React from 'react';
import Box, { BoxProps } from './box';

type Props = BoxProps & { children: React.ReactNode };
const Container: React.FC<Props> = ({children, ...props}) => {

	return (
		<Box {...props} backgroundColor="$background" flex={1}>
			{children}
		</Box>
	);
}

export default Container;