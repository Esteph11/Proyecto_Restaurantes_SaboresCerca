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



/*import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Page/Home'
import AgregarTarea from '../Page/AgregarTarea'
import Buscador from '../Page/Buscador'

export default function Navegacion() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Restaurantes Sabores Cerca' component={Home}></Tab.Screen>
       </Tab.Navigator>
    </NavigationContainer>
  )
}

/*
      <Tab.Screen name='Administrador' component={Administrador}></Tab.Screen>
            <Tab.Screen name='Usuario' component={Usuario}></Tab.Screen>
       

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Login from '../Page/Login'
import Administrador from '../Page/Administrador'
import Usuario from '../Page/Usuario'

function HomeScreen() {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

type RootTabParamList = {
  Login: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*import { View, Text } from 'react-native'
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
*/
