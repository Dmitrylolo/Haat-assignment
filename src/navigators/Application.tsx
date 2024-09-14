import { SafeAreaProvider } from "react-native-safe-area-context";

import { SafeScreen } from "@/components/template";
import { Startup } from "@/screens";
import { useTheme } from "@/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabsNavigator from "./BottomTabs";

import type { RootStackParamList } from "@/types/navigation";
const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={Startup} />
            <Stack.Screen name="Example" component={BottomTabsNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeScreen>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
