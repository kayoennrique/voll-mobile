import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Main from "./Main";
import Queries from "./Queries";

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home" />
          )
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={Queries}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="calendar" />
          )
        }}
      />
    </Tab.Navigator>
  )
}
