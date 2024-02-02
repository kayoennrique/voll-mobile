import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from "./Tabs";


const Tab = createNativeStackNavigator();

import Register from "./Register";
import Login from "./Login";

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login" component={Login} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Register" component={Register} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs" component={Tabs} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}