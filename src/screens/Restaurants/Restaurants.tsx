import { Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { BannerCarousel, Tags } from "@/components/template";
import { useTheme } from "@/theme";
import MARKET from "@mocks/api/market.json";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Market from "../Market/Market";

const bannerImage = require("../../mock/assets/Banner.png");
const banners = [
  bannerImage,
  bannerImage,
  bannerImage,
  bannerImage,
  bannerImage,
];

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
    <ScrollView>
      <BannerCarousel interval={1000} banners={banners} />
      <Tags tags={MARKET.tags} />
      <TouchableOpacity onPress={onChangeTheme}>
        <Text>Change theme</Text>
      </TouchableOpacity>
      <Text>Restaurants</Text>
    </ScrollView>
  );
};

export default RestaurantsDrawer;
