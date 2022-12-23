import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme
} from "@react-navigation/native"
import { useAtom } from "jotai"
import { ThemeProvider } from "@shopify/restyle"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import {
  ModalScreen,
  TabOneScreen,
  TabTwoScreen,
  NotFoundScreen,
  ProfileScreen
} from "@/screens"
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from "../../types"
import LinkingConfiguration from "./LinkingConfiguration"
import { activeThemeNameAtom, activeThemeAtom } from "@/states/theme"
import { Touchable } from "@/components/atoms"
import Icon from "@/components/atoms/icon"

export default function Navigation() {
  const [theme] = useAtom(activeThemeAtom)
  const [themeName] = useAtom(activeThemeNameAtom)
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={themeName === "dark" ? DarkTheme : DefaultTheme}
    >
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator = () => {
  const colorScheme = useTheme()

  return (
    <BottomTab.Navigator
      initialRouteName="One"
      screenOptions={{
        tabBarActiveTintColor: colorScheme.colors.primary
      }}
    >
      <BottomTab.Screen
        name="One"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"One">) => ({
          title: "One",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              size={24}
              color={!focused ? "white" : "$primary"}
            />
          ),
          headerRight: () => (
            <Touchable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <Icon
                name="activity"
                size={25}
                style={{ marginRight: 15 }}
                color="$primary"
              />
            </Touchable>
          )
        })}
      />
      <BottomTab.Screen
        name="Two"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={24}
              name="user"
              color={!focused ? "white" : "$primary"}
            />
          )
        }}
      />

      <BottomTab.Screen
        name="Three"
        component={TabTwoScreen}
        options={{
          title: "Todos",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={24}
              name="list"
              color={!focused ? "white" : "$primary"}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
