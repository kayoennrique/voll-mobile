import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from "./Tabs";
import Agendamento from "./Agendamento";

const Tab = createNativeStackNavigator();

import Register from "./Register";
import Login from "./Login";

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login" component={Login as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Register" component={Register as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs" component={Tabs as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Agendamento" component={Agendamento as React.FC} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}