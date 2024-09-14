import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useTheme } from "@/theme";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Market from "../Market/Market";

const Drawer = createDrawerNavigator();

const RestaurantsDrawer = () => {
  // const dimensions = useWindowDimensions();

  // const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        drawerType: "front",
        drawerStyle: { width: "100%", backgroundColor: "rgba(255, 0, 0, 0.5)" },
        overlayColor: "transparent",
      }}
    >
      <Drawer.Screen name="Restaurants1" component={Restaurants} />
      <Drawer.Screen name="Market1" component={Market} />
    </Drawer.Navigator>
  );
};

const Restaurants = () => {
  const { variant, changeTheme } = useTheme();
  const onChangeTheme = () => {
    changeTheme(variant === "default" ? "dark" : "default");
  };

  return (
    <View>
      <TouchableOpacity onPress={onChangeTheme}>
        <Text>Change theme</Text>
      </TouchableOpacity>
      <Text>Restaurants</Text>
    </View>
  );
};

export default RestaurantsDrawer;
