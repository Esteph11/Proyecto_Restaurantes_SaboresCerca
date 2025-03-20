import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../Page/Login';

export default function Navegacion() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Restaurantes Sabores Cerca" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

