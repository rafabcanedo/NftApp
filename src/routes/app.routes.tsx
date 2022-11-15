import { Platform } from 'react-native';
import { useTheme } from "native-base";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { House, ShoppingCart, User } from 'phosphor-react-native';

import { Home } from "../screens/Home";
import { Cart } from "../screens/Cart";
import { Profile } from "../screens/Profile";
import { Details } from "../screens/Details";

type AppRoutes = {
 home: undefined;
 card: undefined;
 profile: undefined;
 details: undefined;
}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
 const { sizes, colors } = useTheme();
 return(
  <Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: colors.orange[500],
    tabBarInactiveTintColor: colors.gray[200],
    tabBarStyle: {
     backgroundColor: colors.gray[600],
     borderTopWidth: 0,
     height: Platform.OS === 'android' ? 'auto' : 96,
     paddingBottom: sizes[10],
     paddingTop: sizes[6]
    }
  }}>

   <Screen 
    name="home"
    component={Home}
    options={{
     tabBarIcon: ({ size, color }) => (
      <House size={size} color={color} />
     )
    }}
   />

   <Screen 
    name="card"
    component={Cart}
    options={{
      tabBarIcon: ({ size, color }) => (
       <ShoppingCart size={size} color={color} />
      )
     }}
   />
 
   <Screen 
    name="profile"
    component={Profile}
    options={{
      tabBarIcon: ({ size, color }) => (
       <User size={size} color={color} />
      )
     }}
   />

   <Screen 
    name="details"
    component={Details}
    options={{ tabBarButton: () => null }}
   />

  </Navigator>
 );
}