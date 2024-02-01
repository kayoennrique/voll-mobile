import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from "./Main";
import Queries from "./Queries";
import Explore from "./Explore";
import Profile from "./Profile";

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#002851"
        },
        tabBarActiveTintColor: "#339cff",
        tabBarInactiveTintColor: "#FFF"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Queries}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
