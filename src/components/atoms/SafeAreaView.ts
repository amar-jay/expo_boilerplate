import { Theme } from "@/style/theme";
import { SafeAreaView as SAV, ViewProps } from 'react-native';
import { createBox } from "@shopify/restyle";

const SafeAreaView = createBox<Theme, ViewProps>(SAV);

export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>;

export default SafeAreaView;