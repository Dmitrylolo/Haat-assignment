import Cart from "@/screens/Cart/Cart";
import Market from "@/screens/Market/Market";
import Orders from "@/screens/Orders/Orders";
import Profile from "@/screens/Profile/Profile";
import Restaurants from "@/screens/Restaurants/Restaurants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
