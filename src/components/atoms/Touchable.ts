import React from 'react';
import { Pressable, PressableProps } from 'react-native'
import { Theme } from '@/style/theme';
import { createBox } from '@shopify/restyle'

const Touchable = createBox<Theme, PressableProps>(Pressable);

export type TouchableProps = React.ComponentProps<typeof Touchable>;

export default Touchable;