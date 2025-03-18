import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Page/Login'
import Administrador from '../Page/Administrador'
import Usuario from '../Page/Usuario'

export default function Navegacion() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login}></Tab.Screen>
            <Tab.Screen name='Administrador' component={Administrador}></Tab.Screen>
            <Tab.Screen name='Usuario' component={Usuario}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
